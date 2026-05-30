import "server-only";
import fs from "node:fs/promises";
import path from "node:path";

export type FolderEntry = {
  type: "folder";
  name: string;
  label?: string;
  description?: string;
  itemCount: number;
  modified?: Date;
};

export type FileEntry = {
  type: "file";
  name: string;
  description?: string;
  size: number;
  modified: Date;
  url: string;
};

export type Entry = FolderEntry | FileEntry;

const ROOT = process.env.DOWNLOADS_ROOT ?? "\\\\10.1.1.1\\web";

// Allowlist da raiz: só esses nomes aparecem em /downloads.
// Subpastas (apk/, publico/, privado/) são listadas abertas via fs.readdir.
const ROOT_ALLOWED: Record<string, { label: string; description?: string }> = {
  apk: {
    label: "Aplicações Android",
    description: "APKs dos aplicativos móveis Digivendas, Digientregas e Digiexpedição",
  },
  publico: {
    label: "Conteúdo Público",
    description: "Manuais, catálogos e materiais de divulgação",
  },
  privado: {
    label: "Conteúdo Privado",
    description: "Acesso restrito — colaboradores autenticados",
  },
  "Radmin.exe": {
    label: "Radmin VPN",
    description: "Rede privada virtual para acesso externo",
  },
  "vnc.exe": {
    label: "VNC Viewer",
    description: "Cliente de acesso remoto para suporte técnico",
  },
};

function safeResolve(slug: string[]): string {
  const decoded = slug.map((s) => decodeURIComponent(s));
  const root = path.resolve(ROOT);
  const requested = path.resolve(ROOT, ...decoded);
  if (requested !== root && !requested.startsWith(root + path.sep)) {
    throw new Error("INVALID_PATH");
  }
  return requested;
}

async function statEntry(
  full: string,
  name: string,
  slug: string[],
  meta?: { label?: string; description?: string },
): Promise<Entry | null> {
  const stat = await fs.stat(full).catch(() => null);
  if (!stat) return null;
  if (stat.isDirectory()) {
    const inner = await fs.readdir(full).catch(() => []);
    return {
      type: "folder",
      name,
      label: meta?.label,
      description: meta?.description,
      itemCount: inner.filter((n) => !n.startsWith(".")).length,
      modified: stat.mtime,
    };
  }
  return {
    type: "file",
    name,
    description: meta?.description,
    size: stat.size,
    modified: stat.mtime,
    url: `/api/downloads/${[...slug, name].map(encodeURIComponent).join("/")}`,
  };
}

export async function listEntries(slug: string[] = []): Promise<Entry[]> {
  const dir = safeResolve(slug);

  // Na raiz, aplica allowlist. Entradas configuradas que não existem no share são ignoradas.
  if (slug.length === 0) {
    const results = await Promise.all(
      Object.entries(ROOT_ALLOWED).map(([name, meta]) =>
        statEntry(path.join(dir, name), name, [], meta),
      ),
    );
    return results.filter((e): e is Entry => e !== null);
  }

  // Subpastas: leitura aberta.
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const visible = dirents.filter((d) => !d.name.startsWith("."));
  const results = await Promise.all(
    visible.map((d) => statEntry(path.join(dir, d.name), d.name, slug)),
  );
  return results.filter((e): e is Entry => e !== null);
}

export async function resolvePath(
  slug: string[],
): Promise<{ slug: string; label: string }[]> {
  const result: { slug: string; label: string }[] = [];
  for (let i = 0; i < slug.length; i++) {
    const parentSlug = slug.slice(0, i);
    const currentSlug = slug[i];
    try {
      const entries = await listEntries(parentSlug);
      const entry = entries.find(
        (e) => e.type === "folder" && e.name === currentSlug,
      );
      result.push({
        slug: currentSlug,
        label:
          entry && entry.type === "folder"
            ? (entry.label ?? entry.name)
            : decodeURIComponent(currentSlug),
      });
    } catch {
      result.push({
        slug: currentSlug,
        label: decodeURIComponent(currentSlug),
      });
    }
  }
  return result;
}
