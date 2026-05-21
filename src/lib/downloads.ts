import "server-only";

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

const MOCK_TREE: Record<string, Entry[]> = {
  "": [
    {
      type: "folder",
      name: "conteudo-publico",
      label: "Conteúdo Público",
      description: "Manuais, catálogos e materiais de divulgação",
      itemCount: 3,
      modified: new Date("2026-05-15"),
    },
    {
      type: "folder",
      name: "conteudo-privado",
      label: "Conteúdo Privado",
      description: "Acesso restrito a colaboradores autenticados",
      itemCount: 0,
      modified: new Date("2026-04-20"),
    },
    {
      type: "folder",
      name: "android",
      label: "Aplicações Android",
      description: "APKs dos aplicativos móveis",
      itemCount: 3,
      modified: new Date("2026-05-15"),
    },
    {
      type: "folder",
      name: "instaladores",
      label: "Instaladores do Sistema",
      description: "Executáveis para Windows",
      itemCount: 3,
      modified: new Date("2026-05-08"),
    },
    {
      type: "folder",
      name: "versoes-digiadm",
      label: "Versões do Digiadm",
      description: "Histórico de versões para atualização manual",
      itemCount: 7,
      modified: new Date("2026-05-08"),
    },
    {
      type: "file",
      name: "Acesso-Remoto.exe",
      description: "Cliente de acesso remoto para suporte técnico",
      size: 3_400_000,
      modified: new Date("2026-04-12"),
      url: "#",
    },
    {
      type: "file",
      name: "Radmin-VPN.exe",
      description: "Rede privada virtual para acesso externo",
      size: 8_900_000,
      modified: new Date("2026-02-22"),
      url: "#",
    },
  ],
  "conteudo-publico": [
    {
      type: "folder",
      name: "manuais",
      label: "Manuais",
      itemCount: 3,
      modified: new Date("2026-05-10"),
    },
    {
      type: "folder",
      name: "catalogos",
      label: "Catálogos",
      itemCount: 1,
      modified: new Date("2026-03-01"),
    },
    {
      type: "file",
      name: "Logos-Nedel-2026.zip",
      description: "Pacote oficial de logotipos da marca",
      size: 4_200_000,
      modified: new Date("2026-01-15"),
      url: "#",
    },
  ],
  "conteudo-publico/manuais": [
    {
      type: "file",
      name: "Manual-Digiadm-v3.pdf",
      size: 12_400_000,
      modified: new Date("2026-05-10"),
      url: "#",
    },
    {
      type: "file",
      name: "Manual-Diginfce-v2.pdf",
      size: 8_700_000,
      modified: new Date("2026-04-12"),
      url: "#",
    },
    {
      type: "file",
      name: "Guia-Rapido-NFe.pdf",
      size: 2_300_000,
      modified: new Date("2026-03-22"),
      url: "#",
    },
  ],
  "conteudo-publico/catalogos": [
    {
      type: "file",
      name: "Catalogo-Produtos-2026.pdf",
      size: 18_600_000,
      modified: new Date("2026-03-01"),
      url: "#",
    },
  ],
  "conteudo-privado": [],
  android: [
    {
      type: "file",
      name: "Digiadm-Mobile-v3.2.0.apk",
      size: 28_400_000,
      modified: new Date("2026-05-15"),
      url: "#",
    },
    {
      type: "file",
      name: "Digivendas-v2.1.0.apk",
      size: 18_700_000,
      modified: new Date("2026-04-29"),
      url: "#",
    },
    {
      type: "file",
      name: "Digientregas-v1.4.2.apk",
      size: 22_100_000,
      modified: new Date("2026-05-08"),
      url: "#",
    },
  ],
  instaladores: [
    {
      type: "file",
      name: "Digiadm-Setup-v3.2.0.exe",
      size: 142_000_000,
      modified: new Date("2026-05-08"),
      url: "#",
    },
    {
      type: "file",
      name: "Diginfce-Setup-v2.5.1.exe",
      size: 86_400_000,
      modified: new Date("2026-04-22"),
      url: "#",
    },
    {
      type: "file",
      name: "Digientregas-Setup-v1.4.2.exe",
      size: 64_200_000,
      modified: new Date("2026-05-08"),
      url: "#",
    },
  ],
  "versoes-digiadm": [
    {
      type: "file",
      name: "Digiadm-v3.2.0.zip",
      size: 142_000_000,
      modified: new Date("2026-05-08"),
      url: "#",
    },
    {
      type: "file",
      name: "Digiadm-v3.1.5.zip",
      size: 138_700_000,
      modified: new Date("2026-04-12"),
      url: "#",
    },
    {
      type: "file",
      name: "Digiadm-v3.1.4.zip",
      size: 137_900_000,
      modified: new Date("2026-03-30"),
      url: "#",
    },
    {
      type: "file",
      name: "Digiadm-v3.1.3.zip",
      size: 136_500_000,
      modified: new Date("2026-03-15"),
      url: "#",
    },
    {
      type: "file",
      name: "Digiadm-v3.1.2.zip",
      size: 135_800_000,
      modified: new Date("2026-02-28"),
      url: "#",
    },
    {
      type: "file",
      name: "Digiadm-v3.1.1.zip",
      size: 134_200_000,
      modified: new Date("2026-02-10"),
      url: "#",
    },
    {
      type: "file",
      name: "Digiadm-v3.1.0.zip",
      size: 132_500_000,
      modified: new Date("2026-01-22"),
      url: "#",
    },
  ],
};

export async function listEntries(slug: string[] = []): Promise<Entry[]> {
  const key = slug.join("/");
  const entries = MOCK_TREE[key];
  if (entries === undefined) {
    throw new Error("NOT_FOUND");
  }
  return entries;
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

/*
==============================================================================
PRODUÇÃO — substituir o mock acima por leitura do filesystem.

1) No servidor Linux, montar o share Samba via CIFS no /etc/fstab:

   //servidor-arquivos/downloads  /mnt/nedel-downloads  cifs
     credentials=/etc/samba/credentials,uid=www-data,gid=www-data,
     iocharset=utf8,ro  0  0

   Permissão "ro" (read-only) garante que o Next.js nunca escreva no share.

2) Definir DOWNLOADS_ROOT no .env do Next.js apontando pra esse path.

3) Substituir as duas funções acima pelas abaixo:

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.env.DOWNLOADS_ROOT ?? "/mnt/nedel-downloads";

export async function listEntries(slug: string[] = []): Promise<Entry[]> {
  const safe = slug.map((s) => decodeURIComponent(s));
  const requested = path.resolve(ROOT, ...safe);
  // Bloqueia path traversal (../).
  if (!requested.startsWith(path.resolve(ROOT))) {
    throw new Error("Invalid path");
  }
  const dirents = await fs.readdir(requested, { withFileTypes: true });
  const visible = dirents.filter((d) => !d.name.startsWith("."));
  return Promise.all(
    visible.map(async (d) => {
      const full = path.join(requested, d.name);
      const stat = await fs.stat(full);
      if (d.isDirectory()) {
        const inner = await fs.readdir(full);
        return {
          type: "folder",
          name: d.name,
          itemCount: inner.filter((n) => !n.startsWith(".")).length,
          modified: stat.mtime,
        };
      }
      return {
        type: "file",
        name: d.name,
        size: stat.size,
        modified: stat.mtime,
        url: `/api/downloads/${[...slug, encodeURIComponent(d.name)].join("/")}`,
      };
    }),
  );
}

4) Criar uma route handler que faz stream do arquivo:

   src/app/api/downloads/[...slug]/route.ts

   import fs from "node:fs";
   import path from "node:path";
   import { NextRequest } from "next/server";

   const ROOT = process.env.DOWNLOADS_ROOT ?? "/mnt/nedel-downloads";

   export async function GET(_: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
     const { slug } = await params;
     const requested = path.resolve(ROOT, ...slug.map(decodeURIComponent));
     if (!requested.startsWith(path.resolve(ROOT))) return new Response("Not found", { status: 404 });
     const stat = await fs.promises.stat(requested);
     if (!stat.isFile()) return new Response("Not found", { status: 404 });
     return new Response(fs.createReadStream(requested) as unknown as ReadableStream, {
       headers: {
         "Content-Length": String(stat.size),
         "Content-Disposition": `attachment; filename="${path.basename(requested)}"`,
       },
     });
   }
==============================================================================
*/
