"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Archive,
  ChevronRight,
  Download,
  File,
  FileImage,
  FileText,
  Folder,
  Search,
  Settings,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import type { Entry } from "@/lib/downloads";

function getFileIcon(name: string): LucideIcon {
  const ext = name.split(".").pop()?.toLowerCase();
  if (!ext) return File;
  if (["exe", "msi"].includes(ext)) return Settings;
  if (ext === "apk") return Smartphone;
  if (ext === "pdf") return FileText;
  if (["zip", "rar", "7z", "tar", "gz"].includes(ext)) return Archive;
  if (["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext))
    return FileImage;
  return File;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

const dateFmt = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function FileBrowser({
  entries,
  slug,
}: {
  entries: Entry[];
  slug: string[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) => {
      const label = e.type === "folder" ? (e.label ?? e.name) : e.name;
      return (
        label.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q)
      );
    });
  }, [entries, query]);

  const totalFiles = entries.filter((e) => e.type === "file").length;
  const totalFolders = entries.filter((e) => e.type === "folder").length;
  const totalSize = entries.reduce(
    (sum, e) => (e.type === "file" ? sum + e.size : sum),
    0,
  );

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-nedel-highlight-gray/40 p-10 text-center">
        <div className="inline-flex p-3 rounded-xl bg-secondary mb-4">
          <Folder className="size-6 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">Esta pasta está vazia.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <Input
          type="search"
          placeholder="Buscar nesta pasta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 max-w-md"
        />
      </div>

      <div className="rounded-2xl border border-nedel-highlight-gray/40 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent bg-secondary/40">
              <TableHead className="w-full">Nome</TableHead>
              <TableHead className="hidden sm:table-cell text-right whitespace-nowrap">
                Tamanho
              </TableHead>
              <TableHead className="hidden md:table-cell text-right whitespace-nowrap">
                Modificado
              </TableHead>
              <TableHead className="text-right">Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-muted-foreground py-12"
                >
                  Nenhum item corresponde a &ldquo;{query}&rdquo;.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((entry) => {
                if (entry.type === "folder") {
                  const href = `/downloads/${[...slug, entry.name].join("/")}`;
                  const label = entry.label ?? entry.name;
                  return (
                    <TableRow key={entry.name} className="group">
                      <TableCell className="py-3">
                        <Link
                          href={href}
                          className="flex items-center gap-3 min-w-0"
                        >
                          <div className="shrink-0 p-2 rounded-lg bg-nedel-blue/10 group-hover:bg-nedel-blue/15 transition-colors">
                            <Folder
                              size={18}
                              className="text-nedel-blue"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-nedel-black-blue group-hover:text-nedel-blue transition-colors truncate">
                              {label}
                            </p>
                            {entry.description && (
                              <p className="text-xs text-muted-foreground truncate">
                                {entry.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-right text-sm text-muted-foreground whitespace-nowrap">
                        {entry.itemCount}{" "}
                        {entry.itemCount === 1 ? "item" : "itens"}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-right text-sm text-muted-foreground whitespace-nowrap">
                        {entry.modified ? dateFmt.format(entry.modified) : "—"}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link
                          href={href}
                          className="inline-flex items-center gap-1 text-sm font-medium text-nedel-blue hover:underline whitespace-nowrap"
                        >
                          Abrir
                          <ChevronRight size={14} />
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                }

                const FileIcon = getFileIcon(entry.name);
                return (
                  <TableRow key={entry.name} className="group">
                    <TableCell className="py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="shrink-0 p-2 rounded-lg bg-secondary">
                          <FileIcon
                            size={18}
                            className="text-muted-foreground"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-nedel-black-blue truncate">
                            {entry.name}
                          </p>
                          {entry.description && (
                            <p className="text-xs text-muted-foreground truncate">
                              {entry.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-right text-sm text-muted-foreground whitespace-nowrap">
                      {formatBytes(entry.size)}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-right text-sm text-muted-foreground whitespace-nowrap">
                      {dateFmt.format(entry.modified)}
                    </TableCell>
                    <TableCell className="text-right">
                      <a
                        href={entry.url}
                        download={entry.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-nedel-blue/10 text-nedel-blue text-sm font-medium hover:bg-nedel-blue hover:text-white transition-colors whitespace-nowrap"
                      >
                        <Download size={14} />
                        <span className="hidden sm:inline">Baixar</span>
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mt-4 text-xs text-muted-foreground">
        {totalFolders > 0 && (
          <span>
            {totalFolders} {totalFolders === 1 ? "pasta" : "pastas"}
          </span>
        )}
        {totalFolders > 0 && totalFiles > 0 && <span>·</span>}
        {totalFiles > 0 && (
          <span>
            {totalFiles} {totalFiles === 1 ? "arquivo" : "arquivos"}
          </span>
        )}
        {totalSize > 0 && (
          <>
            <span>·</span>
            <span>Total: {formatBytes(totalSize)}</span>
          </>
        )}
      </div>
    </div>
  );
}
