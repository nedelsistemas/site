import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import {
  listEntries,
  resolvePath,
  type Entry,
  type FolderEntry,
} from "@/lib/downloads";
import FileBrowser from "@/components/file-browser";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Instaladores, aplicativos Android e ferramentas auxiliares dos sistemas Nedel — Digiadm, Diginfc-e, Digivendas, Digientregas e mais.",
};

export const dynamic = "force-dynamic";

export default async function DownloadsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;

  let entries: Entry[];
  let currentFolder: FolderEntry | undefined;

  try {
    entries = await listEntries(slug);
    if (slug.length > 0) {
      const parentSlug = slug.slice(0, -1);
      const parentEntries = await listEntries(parentSlug);
      currentFolder = parentEntries.find(
        (e): e is FolderEntry =>
          e.type === "folder" && e.name === slug[slug.length - 1],
      );
    }
  } catch {
    notFound();
  }

  const path = await resolvePath(slug);
  const title =
    slug.length === 0
      ? "Central de downloads"
      : (currentFolder?.label ?? decodeURIComponent(slug[slug.length - 1]));
  const subtitle =
    slug.length === 0
      ? "Acesse instaladores, aplicativos móveis e ferramentas auxiliares dos sistemas Nedel."
      : (currentFolder?.description ?? "");

  const parentHref =
    slug.length === 0
      ? null
      : slug.length === 1
        ? "/downloads"
        : `/downloads/${slug.slice(0, -1).join("/")}`;
  const parentLabel =
    path.length > 1 ? path[path.length - 2].label : "Downloads";

  return (
    <div className="max-w-5xl mx-auto px-5 py-12 md:py-16">
      {parentHref && (
        <Link
          href={parentHref}
          aria-label={`Voltar para ${parentLabel}`}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-nedel-blue transition-colors mb-6"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Voltar para {parentLabel}
        </Link>
      )}
      <Reveal variant="fadeIn" duration={0.4} amount={0}>
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
            Downloads
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mt-3 max-w-2xl">{subtitle}</p>
          )}
        </header>
      </Reveal>

      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-8 flex-wrap">
        <Link
          href="/downloads"
          className={
            slug.length === 0
              ? "text-nedel-black-blue font-medium"
              : "hover:text-nedel-blue transition-colors font-medium"
          }
        >
          Downloads
        </Link>
        {path.map((segment, i) => {
          const href = `/downloads/${path
            .slice(0, i + 1)
            .map((s) => s.slug)
            .join("/")}`;
          const isLast = i === path.length - 1;
          return (
            <span key={segment.slug + i} className="flex items-center gap-1">
              <ChevronRight
                size={14}
                className="text-muted-foreground/50"
              />
              {isLast ? (
                <span className="text-nedel-black-blue font-medium">
                  {segment.label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-nedel-blue transition-colors"
                >
                  {segment.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>

      <Reveal variant="fadeUp" duration={0.5} delay={0.1} amount={0}>
        <FileBrowser entries={entries} slug={slug} />
      </Reveal>
    </div>
  );
}
