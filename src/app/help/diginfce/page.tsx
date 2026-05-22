import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Receipt,
  Banknote,
  Smartphone,
  ShieldCheck,
  RotateCcw,
  Layers,
  FileText,
  Settings2,
} from "lucide-react";

const MODULES = [
  {
    icon: Receipt,
    title: "Emissão de NFC-e",
    description:
      "Cupom fiscal eletrônico homologado em todos os estados, com impressão da via do consumidor e envio por QR Code.",
  },
  {
    icon: Banknote,
    title: "Múltiplas formas de pagamento",
    description:
      "Dinheiro, débito, crédito (com parcelamento), PIX, vale-refeição e troca dentro do mesmo cupom.",
  },
  {
    icon: Smartphone,
    title: "Integração com TEF e PIX",
    description:
      "Conecta com PinPad, terminais de captura e QR Code dinâmico do PIX direto pelo caixa.",
  },
  {
    icon: ShieldCheck,
    title: "Contingência offline",
    description:
      "Se a SEFAZ cair, o caixa continua vendendo em modo offline e transmite as notas quando voltar a conexão.",
  },
  {
    icon: RotateCcw,
    title: "Sangria e suprimento",
    description:
      "Controle de movimentação de caixa com histórico por operador e fechamento conferido.",
  },
  {
    icon: Layers,
    title: "Integração com o Digiadm",
    description:
      "Estoque, financeiro e fiscal sincronizam com o ERP em tempo real — sem importação manual.",
  },
];

const QUICK_LINKS = [
  {
    title: "Como emitir uma NFC-e",
    href: "/help/diginfce/emitir-nfce",
    description: "Da abertura do cupom à finalização do pagamento.",
    icon: FileText,
  },
];

export default function DiginfceOverview() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">Diginfc-e</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Diginfc-e • Frente de caixa
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Diginfc-e
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          O ponto de venda eletrônico da Nedel. Frente de caixa rápida, com
          NFC-e homologada, integração TEF, PIX e contingência offline pra
          quando a SEFAZ resolve dar trabalho.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Para quem é
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Lojas de varejo que precisam de um caixa ágil, com emissão fiscal
          homologada e operação contínua mesmo quando a internet ou a SEFAZ
          falha. O Diginfc-e funciona como caixa standalone ou integrado ao
          Digiadm.
        </p>
        <ul className="space-y-2">
          {[
            "Comércios e lojas físicas com fluxo de cupom alto",
            "Mercearias, padarias, açougues e atacarejos",
            "Lojas de conveniência e franquias com vários PDVs",
            "Operações em estados com obrigatoriedade de NFC-e",
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
          O que o Diginfc-e faz
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
                Abra e feche o caixa todo dia.
              </strong>{" "}
              A abertura registra o fundo de troco; o fechamento concilia o
              dinheiro físico com o que o sistema mostra. Pular o fechamento
              quebra o histórico contábil.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Use um operador por caixa.
              </strong>{" "}
              Cada caixa deve ter um usuário identificado. Compartilhar login
              elimina rastreabilidade de quebra ou sangria irregular.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Configure a impressora antes de operar.
              </strong>{" "}
              Modelo de impressora não-fiscal, papel térmico 80mm e largura de
              colunas correta — testar uma vez evita cupons cortados ou ilegíveis
              durante o expediente.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Treine sangria e suprimento.
              </strong>{" "}
              Toda retirada de dinheiro tem que entrar como sangria;
              reabastecimento de troco como suprimento. Isso mantém o saldo do
              caixa coerente com o caixa físico.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Tenha um plano pra contingência.
              </strong>{" "}
              Saiba como ativar o modo offline antes da emergência acontecer —
              o caixa continua vendendo, mas as notas precisam ser transmitidas
              em até 24h depois.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Diferenças entre NFC-e e cupom fiscal
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          A NFC-e (Nota Fiscal de Consumidor Eletrônica) substituiu o antigo
          cupom fiscal de ECF em quase todos os estados. Ela é 100% digital,
          autorizada pela SEFAZ em tempo real e enviada ao consumidor por
          impressão simplificada (DANFE NFC-e) ou QR Code. Diferente do ECF,
          não exige equipamento fiscal homologado — qualquer impressora não
          fiscal serve.
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
              href="/help/digiadm/configuracao-inicial"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-md transition-all"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-nedel-blue/10 shrink-0">
                <Settings2 className="size-5 text-nedel-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-nedel-black-blue group-hover:text-nedel-blue transition-colors">
                  Configuração fiscal e certificado
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  O Diginfc-e usa o mesmo certificado digital do Digiadm — veja
                  o setup inicial.
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
