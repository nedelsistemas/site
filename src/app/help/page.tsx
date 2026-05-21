import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const POPULAR = [
  {
    title: "Como emitir uma NF-e no Digiadm",
    href: "/help/digiadm/emitir-nfe",
    description:
      "Passo a passo completo para emitir Nota Fiscal Eletrônica de produto.",
  },
  {
    title: "Configuração inicial do Digiadm",
    href: "/help/digiadm/configuracao-inicial",
    description: "O que configurar nas primeiras horas após a implantação.",
  },
  {
    title: "Cadastrando funcionários no Digiadm",
    href: "/help/digiadm/cadastrar-funcionarios",
    description: "Crie usuários, defina perfis e controle acessos.",
  },
];

const SYSTEMS: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  soon?: boolean;
}[] = [
  {
    title: "Digiadm",
    description: "ERP completo: financeiro, fiscal, estoque, vendas e compras.",
    href: "/help/digiadm",
    icon: BookOpen,
  },
  {
    title: "Diginfc-e",
    description: "Frente de caixa rápida com NFC-e homologada.",
    href: "#",
    icon: FileText,
    soon: true,
  },
  {
    title: "Digivendas",
    description: "Força de vendas e pedidos em campo.",
    href: "#",
    icon: ShoppingCart,
    soon: true,
  },
];

export default function HelpIndex() {
  return (
    <div className="max-w-3xl">
      <header className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Central de Ajuda
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Como podemos ajudar?
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Guias, tutoriais e respostas rápidas para você e sua equipe tirarem o
          máximo dos sistemas Nedel.
        </p>
      </header>

      <section className="mb-14">
        <h2 className="text-xl font-semibold text-nedel-black-blue mb-5">
          Tutoriais populares
        </h2>
        <ul className="flex flex-col gap-3">
          {POPULAR.map((article) => (
            <li key={article.href}>
              <Link
                href={article.href}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-nedel-black-blue group-hover:text-nedel-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {article.description}
                  </p>
                </div>
                <ArrowRight className="shrink-0 size-5 text-muted-foreground group-hover:text-nedel-blue group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-nedel-black-blue mb-5">
          Explore por sistema
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SYSTEMS.map((system) => {
            const Icon = system.icon;
            const card = (
              <div
                className={`h-full p-5 rounded-2xl border transition-all ${
                  system.soon
                    ? "border-nedel-highlight-gray/40 opacity-60 cursor-not-allowed"
                    : "border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-md"
                }`}
              >
                <div className="inline-flex p-2.5 rounded-lg bg-nedel-blue/10 mb-4">
                  <Icon className="size-5 text-nedel-blue" />
                </div>
                <h3 className="font-semibold text-nedel-black-blue">
                  {system.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {system.description}
                </p>
                {system.soon && (
                  <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-muted-foreground border border-nedel-highlight-gray/60 rounded-full px-2 py-0.5">
                    Em breve
                  </span>
                )}
              </div>
            );
            return system.soon ? (
              <div key={system.title}>{card}</div>
            ) : (
              <Link key={system.title} href={system.href} className="group">
                {card}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
