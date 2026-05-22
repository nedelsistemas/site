import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ClipboardList,
  WifiOff,
  RefreshCw,
  Users,
  Percent,
  Smartphone,
  MapPin,
  FileText,
} from "lucide-react";

const MODULES = [
  {
    icon: ClipboardList,
    title: "Lançamento de pedido",
    description:
      "Catálogo de produtos, tabelas de preço, descontos por cliente e condições de pagamento na palma da mão.",
  },
  {
    icon: WifiOff,
    title: "Modo offline",
    description:
      "Vendedor lança o pedido sem internet. Os dados sincronizam automaticamente quando o sinal voltar.",
  },
  {
    icon: RefreshCw,
    title: "Sincronização com o Digiadm",
    description:
      "Cadastro de cliente, estoque e tabela de preço chegam do ERP; pedidos sobem prontos pro faturamento.",
  },
  {
    icon: Users,
    title: "Gestão de carteira",
    description:
      "Cada vendedor vê só os clientes da sua zona/rota, com histórico de visita e pedidos anteriores.",
  },
  {
    icon: Percent,
    title: "Comissão e meta",
    description:
      "Acompanha pedido, comissão calculada e atingimento de meta sem planilha paralela.",
  },
  {
    icon: MapPin,
    title: "Roteirização da visita",
    description:
      "Organize a rota do dia por bairro, frequência ou prioridade — menos quilômetro rodado.",
  },
];

const QUICK_LINKS = [
  {
    title: "Como registrar um pedido no Digivendas",
    href: "/help/digivendas/registrar-pedido",
    description:
      "Do catálogo à finalização — incluindo modo offline e sincronização.",
    icon: FileText,
  },
];

export default function DigivendasOverview() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">Digivendas</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digivendas • Força de vendas
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Digivendas
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          O aplicativo de pedido em campo da Nedel. Roda no celular ou tablet
          do vendedor externo, com catálogo completo, modo offline e
          sincronização direta com o Digiadm.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Para quem é
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Empresas com vendedores externos, representantes comerciais ou
          equipes de pré-venda. Em vez de planilha no carro ou anotação em
          papel, o pedido sai pronto pro faturamento no mesmo dia.
        </p>
        <ul className="space-y-2">
          {[
            "Atacadistas e distribuidores com força de vendas em rua",
            "Indústrias com representantes em mais de um estado",
            "Negócios com pré-venda e roteirização semanal",
            "Equipes que precisam operar em zonas com sinal ruim",
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
          O que o Digivendas faz
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
                Sincronize todo dia.
              </strong>{" "}
              No início do expediente o vendedor baixa as atualizações do dia
              (preço, estoque, novos clientes). No fim, sobe os pedidos. Pular
              sincronização gera divergência de estoque e pedido com preço
              errado.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Defina limites de desconto.
              </strong>{" "}
              Cada perfil de vendedor tem um teto de desconto. Acima disso
              precisa de aprovação. Evita venda no prejuízo e padroniza a
              política comercial.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Trabalhe com tabelas por região.
              </strong>{" "}
              Cliente do interior, capital, e atacado podem ter tabelas
              diferentes. Configurar isso no cadastro evita ter que digitar
              preço manualmente em cada pedido.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Use a rota do dia.
              </strong>{" "}
              Organizar a lista de visita por bairro ou frequência reduz
              quilometragem e mostra ao vendedor onde tem cliente a recuperar.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Treine o modo offline.
              </strong>{" "}
              É melhor o vendedor já saber como continuar trabalhando sem
              sinal antes de precisar — sertão, subsolo, prédio, qualquer
              zona morta de operadora.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Como o Digivendas conversa com o Digiadm
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          Os dois sistemas trocam dados via sincronização. Cadastros de cliente,
          produto, tabela de preço e estoque saem do Digiadm e vão pro
          dispositivo do vendedor. Pedidos lançados no Digivendas voltam pro
          Digiadm como pedido de venda pronto pra faturar — sem digitação
          dupla, sem CSV no e-mail.
        </p>
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
          <li>
            <Link
              href="/help/digiadm"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-md transition-all"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-nedel-blue/10 shrink-0">
                <Smartphone className="size-5 text-nedel-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-nedel-black-blue group-hover:text-nedel-blue transition-colors">
                  Configuração do Digiadm
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  O Digivendas depende do Digiadm como fonte de cadastros e
                  faturamento.
                </p>
              </div>
              <ArrowRight className="shrink-0 size-5 text-muted-foreground group-hover:text-nedel-blue group-hover:translate-x-0.5 transition-all" />
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
