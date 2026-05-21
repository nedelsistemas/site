"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  FileText,
  Package,
  Sprout,
  Truck,
  type LucideIcon,
} from "lucide-react";

type NavItem = { title: string; href: string };
type NavSection = {
  title: string;
  icon: LucideIcon;
  items: NavItem[];
  soon?: boolean;
};

const HELP_NAV: NavSection[] = [
  {
    title: "Digiadm",
    icon: BookOpen,
    items: [
      { title: "Visão geral", href: "/help/digiadm" },
      {
        title: "Configuração inicial",
        href: "/help/digiadm/configuracao-inicial",
      },
      { title: "Como emitir uma NF-e", href: "/help/digiadm/emitir-nfe" },
      {
        title: "Cadastrando funcionários",
        href: "/help/digiadm/cadastrar-funcionarios",
      },
    ],
  },
  { title: "Diginfc-e", icon: FileText, items: [], soon: true },
  { title: "Digivendas", icon: Briefcase, items: [], soon: true },
  { title: "Digientregas", icon: Truck, items: [], soon: true },
  { title: "Digiexpedição", icon: Package, items: [], soon: true },
  { title: "Digiviveiros", icon: Sprout, items: [], soon: true },
];

export default function HelpSidebar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Tópicos da ajuda" className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Central de Ajuda
        </p>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Guias e tutoriais para tirar o máximo dos nossos sistemas.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {HELP_NAV.map((section) => (
          <NavGroup
            key={section.title}
            section={section}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </nav>
  );
}

function NavGroup({
  section,
  pathname,
  onNavigate,
}: {
  section: NavSection;
  pathname: string;
  onNavigate?: () => void;
}) {
  const Icon = section.icon;
  const hasActive = section.items.some((i) => pathname === i.href);
  const [open, setOpen] = useState(hasActive || !section.soon);

  return (
    <div>
      <button
        type="button"
        onClick={() => !section.soon && setOpen((o) => !o)}
        disabled={section.soon}
        className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
          section.soon
            ? "text-muted-foreground cursor-not-allowed"
            : "text-nedel-black-blue hover:bg-secondary cursor-pointer"
        }`}
      >
        <Icon className="size-4 shrink-0" />
        <span className="flex-1 text-left">{section.title}</span>
        {section.soon ? (
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-nedel-highlight-gray/60 rounded-full px-2 py-0.5">
            Em breve
          </span>
        ) : (
          <ChevronRight
            className={`size-4 transition-transform ${open ? "rotate-90" : ""}`}
          />
        )}
      </button>

      {open && section.items.length > 0 && (
        <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-nedel-highlight-gray/40 pl-3">
          {section.items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                    active
                      ? "bg-nedel-blue/10 text-nedel-blue font-medium"
                      : "text-muted-foreground hover:text-nedel-black-blue hover:bg-secondary"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
