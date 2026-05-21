import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Users,
  Settings2,
  Wallet,
  Package,
  ReceiptText,
  Layers,
  CheckCircle2,
} from "lucide-react";

const MODULES = [
  {
    icon: Wallet,
    title: "Financeiro",
    description:
      "Contas a pagar e receber, fluxo de caixa, conciliação bancária e DRE em tempo real.",
  },
  {
    icon: ReceiptText,
    title: "Fiscal",
    description:
      "Emissão de NFe, NFCe, NFSe, CTe, MDFe e NFCom com regras tributárias por estado.",
  },
  {
    icon: Package,
    title: "Estoque",
    description:
      "Múltiplos depósitos, controle por lote/série, inventário e curva ABC.",
  },
  {
    icon: Users,
    title: "Cadastros",
    description:
      "Clientes, fornecedores, funcionários e produtos com histórico completo.",
  },
  {
    icon: Layers,
    title: "Compras e vendas",
    description:
      "Pedidos, orçamentos, ordens de compra e integração com o PDV.",
  },
  {
    icon: Settings2,
    title: "Administração",
    description:
      "Perfis de acesso, auditoria, parametrizações e relatórios customizáveis.",
  },
];

const QUICK_LINKS = [
  {
    title: "Configuração inicial",
    href: "/help/digiadm/configuracao-inicial",
    description: "O que configurar nas primeiras horas após a implantação.",
    icon: Settings2,
  },
  {
    title: "Como emitir uma NF-e",
    href: "/help/digiadm/emitir-nfe",
    description: "Passo a passo completo para emitir uma Nota Fiscal de produto.",
    icon: FileText,
  },
  {
    title: "Cadastrando funcionários",
    href: "/help/digiadm/cadastrar-funcionarios",
    description: "Crie usuários, defina perfis e controle de acessos.",
    icon: Users,
  },
];

export default function DigiadmOverview() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">Digiadm</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digiadm • ERP
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Digiadm
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          O ERP que integra todos os departamentos da sua empresa em uma única
          fonte de verdade. Do cadastro do primeiro cliente à emissão fiscal e
          ao DRE, tudo no mesmo sistema.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Para quem é
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Empresas que precisam profissionalizar a gestão e centralizar dados
          financeiros, fiscais e operacionais. O Digiadm atende desde pequenos
          comércios até indústrias de médio porte com múltiplas filiais.
        </p>
        <ul className="space-y-2">
          {[
            "Comércios e varejistas",
            "Indústrias e atacadistas",
            "Prestadores de serviço com necessidade de emissão fiscal",
            "Empresas em expansão que precisam consolidar processos",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-foreground/80"
            >
              <CheckCircle2 className="size-5 text-nedel-blue shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-5">
          Módulos principais
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {MODULES.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="p-5 rounded-2xl border border-nedel-highlight-gray/40"
              >
                <div className="inline-flex p-2 rounded-lg bg-nedel-blue/10 mb-3">
                  <Icon className="size-4 text-nedel-blue" />
                </div>
                <h3 className="font-semibold text-nedel-black-blue">
                  {m.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Boas práticas de uso
        </h2>
        <ul className="space-y-3 text-foreground/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Mantenha os cadastros limpos.
              </strong>{" "}
              Padronize razões sociais, evite clientes duplicados e use os
              campos de classificação (categoria, grupo, ramo de atividade) —
              eles alimentam relatórios.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Concilie o financeiro semanalmente.
              </strong>{" "}
              Faça a conciliação bancária pelo menos uma vez por semana para
              detectar lançamentos esquecidos antes do fechamento.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Use perfis de acesso.
              </strong>{" "}
              Nunca compartilhe login de administrador. Crie perfis por função
              (caixa, vendas, fiscal, financeiro) e revogue acessos no
              desligamento.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Aproveite os relatórios prontos.
              </strong>{" "}
              Antes de exportar para Excel, verifique os relatórios nativos —
              90% das análises já estão disponíveis no menu Relatórios.
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-5">
          Comece por aqui
        </h2>
        <ul className="flex flex-col gap-3">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-md transition-all"
                >
                  <div className="inline-flex p-2.5 rounded-lg bg-nedel-blue/10 shrink-0">
                    <Icon className="size-5 text-nedel-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-nedel-black-blue group-hover:text-nedel-blue transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="shrink-0 size-5 text-muted-foreground group-hover:text-nedel-blue group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
