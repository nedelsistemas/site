import { NextResponse, type NextRequest } from "next/server";

const REALM = 'Basic realm="Área restrita - Nedel Sistemas"';
const FALLBACK_REDIRECT = "/downloads";

export function proxy(req: NextRequest) {
  const user = process.env.DOWNLOADS_USER;
  const pass = process.env.DOWNLOADS_PASS;
  if (!user || !pass) {
    return new NextResponse("Auth não configurada no servidor", { status: 500 });
  }

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized(req);

  let decoded: string;
  try {
    decoded = atob(auth.slice(6));
  } catch {
    return unauthorized(req);
  }

  const sep = decoded.indexOf(":");
  if (sep < 0) return unauthorized(req);
  const u = decoded.slice(0, sep);
  const p = decoded.slice(sep + 1);

  if (u !== user || p !== pass) return unauthorized(req);

  return NextResponse.next();
}

// Quando o usuário cancela o popup do Basic Auth, o browser renderiza este body.
// Pra navegação (HTML), retornamos um doc que redireciona pra /downloads — sem
// flash de página de erro. Pra API, mantém texto puro.
function unauthorized(req: NextRequest) {
  const isApi = req.nextUrl.pathname.startsWith("/api/");
  if (isApi) {
    return new NextResponse("Autenticação requerida", {
      status: 401,
      headers: { "WWW-Authenticate": REALM },
    });
  }
  const html = `<!doctype html><meta charset="utf-8"><title>Redirecionando…</title><meta http-equiv="refresh" content="0;url=${FALLBACK_REDIRECT}"><script>location.replace(${JSON.stringify(FALLBACK_REDIRECT)})</script>`;
  return new NextResponse(html, {
    status: 401,
    headers: {
      "WWW-Authenticate": REALM,
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

export const config = {
  matcher: ["/downloads/privado/:path*", "/api/downloads/privado/:path*"],
};
