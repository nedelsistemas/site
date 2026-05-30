import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import type { NextRequest } from "next/server";

const ROOT = process.env.DOWNLOADS_ROOT ?? "\\\\10.1.1.1\\web";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const decoded = slug.map((s) => decodeURIComponent(s));
  const root = path.resolve(ROOT);
  const requested = path.resolve(ROOT, ...decoded);
  if (requested !== root && !requested.startsWith(root + path.sep)) {
    return new Response("Not found", { status: 404 });
  }

  const stat = await fs.promises.stat(requested).catch(() => null);
  if (!stat || !stat.isFile()) {
    return new Response("Not found", { status: 404 });
  }

  const nodeStream = fs.createReadStream(requested);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream;

  return new Response(webStream, {
    headers: {
      "Content-Length": String(stat.size),
      "Content-Disposition": `attachment; filename="${path.basename(requested)}"`,
      "Content-Type": "application/octet-stream",
    },
  });
}
