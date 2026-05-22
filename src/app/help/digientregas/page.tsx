import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Truck,
  Route,
  ClipboardCheck,
  RotateCcw,
  PackageX,
  FileSignature,
  MapPin,
  FileText,
  Layers,
} from "lucide-react";

const MODULES = [
  {
    icon: Truck,
    title: "Coleta e despacho",
    description:
      "Registro de coleta no remetente, separação por rota e despacho com manifesto eletrônico (MDF-e).",
  },
  {
    icon: Route,
    title: "Roteirização inteligente",
    description:
      "Agrupa entregas por região, define ordem de visita e calcula distância — menos quilômetro rodado, mais entregas por turno.",
  },
  {
    icon: MapPin,
    title: "Tracking em tempo real",
    description:
      "Status atualizado a cada etapa: saiu pra entrega, em trânsito, chegou no destino, finalizada.",
  },
  {
    icon: FileSignature,
    title: "Comprovante de entrega",
    description:
      "Assinatura digital, foto da entrega e identificação de quem recebeu — sem papelada perdida no caminho.",
  },
  {
    icon: RotateCcw,
    title: "Reentrega e devolução",
    description:
      "Quando o destinatário não está, registra a tentativa e reagenda. Devoluções voltam pro estoque com motivo.",
  },
  {
    icon: PackageX,
    title: "Ocorrências e avarias",
    description:
      "Registro de avarias, falta de produto, recusa ou endereço incorreto — com fotos e justificativa.",
  },
];

const QUICK_LINKS = [
  {
    title: "Como criar e despachar uma entrega",
    href: "/help/digientregas/criar-entrega",
    description:
      "Do cadastro da coleta à finalização com comprovante.",
    icon: FileText,
  },
];

export default function DigientregasOverview() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">Digientregas</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digientregas • Logística
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Digientregas
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          O sistema de coleta e entrega da Nedel. Roteirização, tracking,
          comprovante digital e ocorrências — pensado pra transportadoras e
          operações com frota própria.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Para quem é
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Empresas que movimentam mercadoria do ponto A ao B — com frota
          própria, terceirizada ou mista. Substitui planilhas de motorista,
          canhotos rabiscados e a pergunta "onde está o pedido X?" no WhatsApp.
        </p>
        <ul className="space-y-2">
          {[
            "Transportadoras de carga fracionada e dedicada",
            "Distribuidores e atacadistas com entrega própria",
            "Operações de last mile urbano",
            "Indústrias com expedição direto ao cliente",
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
          O que o Digientregas faz
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
                Agrupe entregas por região.
              </strong>{" "}
              Mesmo que seu sistema não roteirize por padrão, separe manualmente
              por bairro/CEP antes do despacho. Reduz quilometragem e melhora
              prazo médio.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Padronize as ocorrências.
              </strong>{" "}
              Use sempre os mesmos códigos (recusa, endereço errado, ausente,
              avariado). Relatório de motivos só funciona se a entrada estiver
              padronizada.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Exija comprovante digital.
              </strong>{" "}
              Foto da fachada + assinatura. Em discussão de "não recebi", só
              vale o que ficou registrado — sem foto, vira palavra contra
              palavra.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Configure janelas de entrega.
              </strong>{" "}
              Para clientes corporativos (recebimento 8h–11h, por exemplo),
              configure a janela no cadastro. Evita motorista chegar fora do
              horário e voltar com a carga.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Feche o dia com conferência de carga.
              </strong>{" "}
              Saiu X, voltou Y, devoluções Z. Se a conta não bater, é hora de
              olhar — extravio detectado no dia é recuperável; uma semana
              depois, raramente.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-3">
          Como o Digientregas se encaixa
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          O Digientregas pode operar standalone ou conectado ao Digiadm. Quando
          integrado, pedidos faturados no ERP geram automaticamente uma ordem
          de entrega — sem digitar destinatário, valor ou volume. O status da
          entrega volta pro Digiadm e atualiza o histórico do cliente em tempo
          real. Em operações com Digiexpedição, o Digientregas recebe a carga
          já conferida e pronta pra rota.
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
                <Layers className="size-5 text-nedel-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-nedel-black-blue group-hover:text-nedel-blue transition-colors">
                  Visão geral do Digiadm
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  O Digientregas conecta com o ERP pra puxar pedidos faturados
                  automaticamente.
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
