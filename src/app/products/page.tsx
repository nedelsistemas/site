import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça o ecossistema Nedel: Digiadm (ERP), Diginfc-e (PDV), Digivendas, Digientregas, Digiexpedição e Digiviveiros — todos conectados em tempo real.",
  openGraph: {
    title: "Produtos Nedel — Um ecossistema completo",
    description:
      "Seis sistemas integrados ao Digiadm para gerir do balcão ao depósito, sem retrabalho. Demonstração gratuita de 7 dias.",
  },
};
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  Package,
  PlayCircle,
  Receipt,
  Sparkles,
  Sprout,
  Truck,
  Wallet,
  Workflow,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { MockupFrame } from "@/components/ui/mockup-frame";
import DigiadmMock from "@/assets/mock/digiadm.png";
import DiginfceMock from "@/assets/mock/diginfce.png";
import DigientregasMock from "@/assets/mock/digientregas.png";

const PRODUCTS_OVERVIEW = [
  {
    name: "Digiadm",
    type: "ERP",
    icon: <LayoutDashboard className="size-4" />,
    primary: true,
  },
  { name: "Diginfc-e", type: "PDV", icon: <Receipt className="size-4" /> },
  {
    name: "Digivendas",
    type: "Vendas externas",
    icon: <Briefcase className="size-4" />,
  },
  {
    name: "Digientregas",
    type: "Logística",
    icon: <Truck className="size-4" />,
  },
  {
    name: "Digiexpedição",
    type: "Expedição",
    icon: <Package className="size-4" />,
    comingSoon: true,
  },
  {
    name: "Digiviveiros",
    type: "Viveiros",
    icon: <Sprout className="size-4" />,
    comingSoon: true,
  },
];

const DIGIADM_MODULE_GROUPS = [
  {
    Icon: Receipt,
    accent: "blue" as const,
    category: "Fiscal",
    items: [
      "NF-e (Nota Fiscal Eletrônica)",
      "NFC-e (Cupom Fiscal Eletrônico)",
      "NFS-e (Serviços)",
      "CT-e (Conhecimento de Transporte)",
      "MDF-e (Manifesto Eletrônico)",
      "NFCom (Comunicação)",
      "GNRE",
      "SPED Fiscal e Contribuições",
    ],
  },
  {
    Icon: Wallet,
    accent: "vivid" as const,
    category: "Financeiro e contábil",
    items: [
      "API de boleto bancário — Sicoob e Sicredi (Cresol em breve)",
      "Emissão de boletos com remessa bancária",
      "Controle financeiro completo",
      "Ativo imobilizado",
      "Contabilidade integrada",
    ],
  },
  {
    Icon: Briefcase,
    accent: "blue" as const,
    category: "Comercial e operacional",
    items: [
      "Módulo comercial",
      "Ordens de serviço",
      "Controle de grade de produtos",
      "Geração de produção",
      "Carregamentos",
      "Integração entre filiais",
    ],
  },
  {
    Icon: Sparkles,
    accent: "vivid" as const,
    category: "Segmentos especializados",
    items: [
      "Cooperativas",
      "Laticínios",
      "Revenda de veículos",
      "Controle de obras",
      "Envio de movimentação CIDASC",
    ],
  },
];

type Product = {
  slug: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  features: { text: string; soon?: boolean }[];
  image: StaticImageData | null;
  demoGif?: { src: string; width: number; height: number };
  platform: string;
  icon: React.ReactNode;
  show: boolean;
  comingSoon?: boolean;
};

const SATELLITES: Product[] = [
  {
    slug: "diginfce",
    name: "Diginfc-e",
    type: "PDV",
    tagline: "Agilidade no ponto de venda",
    description:
      "Frente de caixa rápida e estável, pensada pra não deixar seu cliente esperando nos horários de pico.",
    features: [
      { text: "Compatível com diversas impressoras não fiscais" },
      { text: "Integração SiTef pra TEF (crédito, débito, voucher)" },
      { text: "Sangria, suprimento e fechamento controlados" },
      { text: "Funciona offline e sincroniza automaticamente" },
      { text: "Homologado em todos os estados" },
    ],
    image: DiginfceMock,
    platform: "Windows Desktop",
    icon: <Receipt className="size-5 text-nedel-blue" />,
    show: true,
  },
  {
    slug: "digivendas",
    name: "Digivendas",
    type: "Vendas externas",
    tagline: "Pra quem vende na rua",
    description:
      "Aplicativo pro representante que visita o cliente, anota o pedido e fecha a venda — sem depender de internet.",
    features: [
      { text: "Pedidos com tabela de preços e regras comerciais" },
      { text: "Funciona offline durante toda a rota" },
      { text: "Sincronização automática com o Digiadm" },
      { text: "Módulo de visitas", soon: true },
    ],
    image: null,
    platform: "Android",
    icon: <Briefcase className="size-5 text-nedel-blue" />,
    show: true,
  },
  {
    slug: "digientregas",
    name: "Digientregas",
    type: "Logística",
    tagline: "Coleta e entrega no controle",
    description:
      "Pra transportadoras e equipes de entrega gerenciarem coletas, rotas e comprovações sem planilha.",
    features: [
      { text: "Coleta e entrega pra transportadoras" },
      { text: "App pro motorista/entregador" },
      { text: "Acompanhamento das ocorrências em tempo real" },
      { text: "Comprovação digital de entrega" },
    ],
    image: DigientregasMock,
    platform: "Android",
    icon: <Truck className="size-5 text-nedel-blue" />,
    show: true,
  },
  {
    slug: "digiexpedicao",
    name: "Digiexpedição",
    type: "Expedição",
    tagline: "Carregamento conferido, embarque sem erro",
    description:
      "Organize a saída de mercadorias no caminhão antes das rotas, com bipagem e conferência de pallets.",
    features: [
      { text: "Carregamento por rota de entrega" },
      { text: "Bipagem de produtos com leitor" },
      { text: "Carregamento de pallets" },
      { text: "Conferência reduz erros de embarque" },
    ],
    image: null,
    demoGif: { src: "/demos/digexpedicao-demo.gif", width: 1400, height: 900 },
    platform: "Aplicativo móvel",
    icon: <Package className="size-5 text-nedel-blue" />,
    show: true,
    comingSoon: true,
  },
  {
    slug: "digiviveiros",
    name: "Digiviveiros",
    type: "Viveiros",
    tagline: "Do plantio ao pedido",
    description:
      "Pra produtores de mudas — controle de viveiros, visualização do estoque e acompanhamento da produção.",
    features: [
      { text: "Controle completo de viveiros" },
      { text: "Visualização do estoque de mudas" },
      { text: "Acompanhamento por lote e estágio" },
      { text: "Pedidos integrados", soon: true },
    ],
    image: null,
    platform: "Aplicativo móvel",
    icon: <Sprout className="size-5 text-nedel-blue" />,
    show: true,
    comingSoon: true,
  },
];

const PRICING_PILLARS = [
  {
    Icon: Wallet,
    accent: "blue" as const,
    title: "Cobrança mensal",
    body: "Sem investimento inicial pesado. Você paga uma mensalidade alinhada ao porte da sua empresa e aos módulos contratados.",
  },
  {
    Icon: HelpCircle,
    accent: "vivid" as const,
    title: "Proposta sob consulta",
    body: "O valor varia com o enquadramento da empresa e os módulos necessários. Conversamos antes pra fazer uma proposta justa.",
  },
  {
    Icon: PlayCircle,
    accent: "vivid" as const,
    title: "Demonstração de 7 dias",
    body: "Você roda o sistema antes de decidir. Tempo suficiente pra sentir como é a operação no dia a dia.",
  },
  {
    Icon: Headphones,
    accent: "blue" as const,
    title: "Implantação inclusa",
    body: "Implementação e treinamento remoto gratuitos. Nossa equipe acompanha você até a empresa estar 100% rodando no sistema.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
      {children}
    </p>
  );
}

function MockPlaceholder({
  label,
  aspect = "aspect-video",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full rounded-2xl bg-nedel-blue overflow-hidden flex items-center justify-center`}
    >
      <div className="text-center px-6">
        <div className="inline-flex p-3 rounded-xl bg-white/15 mb-3">
          <PlayCircle className="size-6 text-white" />
        </div>
        <p className="text-xs text-white/80 uppercase tracking-[0.18em] font-semibold">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <>
      {/* Hero */}
      <Section className="my-0 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="text-center max-w-3xl">
          <Eyebrow>Produtos</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-nedel-black-blue mt-4 leading-[1.05]">
            Um ecossistema completo,
            <br />
            conectado ao Digiadm.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Seis sistemas que conversam entre si em tempo real. Um único dado
            cadastrado uma vez, refletido em toda a operação — do balcão à rota
            de entrega, do viveiro ao SPED.
          </p>
        </div>

        {/* Mini grid dos 6 produtos */}
        <div className="mt-12 md:mt-16 w-full">
          <RevealStagger
            staggerDelay={0.06}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
          >
            {PRODUCTS_OVERVIEW.map((p) => (
              <RevealItem
                key={p.name}
                variant="scaleIn"
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-colors ${
                  p.primary
                    ? "bg-nedel-blue text-white"
                    : "border border-nedel-highlight-gray/40 bg-white hover:border-nedel-blue/40"
                } ${p.comingSoon ? "opacity-60 saturate-50" : ""}`}
              >
                <div
                  className={`p-2 rounded-lg mb-2 ${
                    p.primary
                      ? "bg-white/15 text-white"
                      : "bg-nedel-blue/10 text-nedel-blue"
                  }`}
                >
                  {p.icon}
                </div>
                <p
                  className={`font-semibold text-sm ${
                    p.primary ? "text-white" : "text-nedel-black-blue"
                  }`}
                >
                  {p.name}
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    p.primary ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {p.type}
                </p>
                {p.comingSoon && (
                  <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-nedel-blue text-white">
                    Em breve
                  </span>
                )}
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Section>

      {/* Como tudo se conecta */}
      <Section className="my-0 py-16 md:py-20 bg-secondary/40">
        <Reveal className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center w-full max-w-4xl">
          <div className="text-center md:text-right">
            <Eyebrow>Como tudo se conecta</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-nedel-black-blue mt-3">
              Um único dado, toda a empresa atualizada
            </h2>
          </div>
          <div className="hidden md:flex p-4 rounded-2xl bg-nedel-blue text-white shrink-0">
            <Workflow className="size-8" />
          </div>
          <p className="text-foreground/80 leading-relaxed text-center md:text-left">
            O Digiadm é o centro do ecossistema. Cada um dos outros aplicativos
            — Diginfc-e, Digivendas, Digientregas, Digiexpedição e Digiviveiros
            — se conecta diretamente a ele, em tempo real. Cadastrar um produto
            uma única vez, e ele aparece no PDV, no app do vendedor externo, no
            controle de expedição. Sem importação, sem planilha, sem retrabalho.
          </p>
        </Reveal>
      </Section>

      {/* Digiadm — produto principal */}
      <Section className="my-0 py-16 md:py-24">
        <div className="w-full">
          <Reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nedel-blue text-white text-xs font-semibold uppercase tracking-wider">
                <LayoutDashboard className="size-3.5" />
                Produto principal
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-4 leading-tight">
                Digiadm — o ERP que faz tudo conversar.
              </h2>
              <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
                O coração da gestão da sua empresa. Um ERP completo que integra
                financeiro, fiscal, comercial e operacional numa única base —
                eliminando retrabalho e mantendo todo mundo olhando pra mesma
                informação.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-nedel-black-blue">
                  Windows Desktop
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-nedel-black-blue">
                  Servidor local
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-nedel-blue/10 text-xs font-medium text-nedel-blue">
                  Versão atual: 3.1.22
                </span>
              </div>
            </div>
            <MockupFrame glow="blue" glowIntensity="strong">
              <Image
                src={DigiadmMock}
                alt="Tela do Digiadm"
                className="w-full h-auto"
                placeholder="blur"
              />
            </MockupFrame>
          </Reveal>

          {/* Módulos categorizados */}
          <div>
            <Reveal>
              <h3 className="text-xl md:text-2xl font-semibold text-nedel-black-blue mb-6 text-center">
                O que está dentro do Digiadm
              </h3>
            </Reveal>
            <RevealStagger className="grid md:grid-cols-2 gap-5">
              {DIGIADM_MODULE_GROUPS.map((group) => {
                const isVivid = group.accent === "vivid";
                return (
                  <RevealItem
                    key={group.category}
                    className={`p-7 md:p-8 rounded-2xl overflow-hidden text-white ${
                      isVivid ? "bg-nedel-blue" : "bg-nedel-black-blue"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`p-2.5 rounded-lg ${
                          isVivid ? "bg-white/15" : "bg-nedel-blue/30"
                        }`}
                      >
                        <group.Icon className="size-5 text-white" />
                      </div>
                      <h4 className="font-bold text-lg">{group.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={`flex gap-2.5 text-sm leading-relaxed ${
                            isVivid ? "text-white/90" : "text-white/85"
                          }`}
                        >
                          <CheckCircle2
                            className={`size-4 shrink-0 mt-0.5 ${
                              isVivid ? "text-white" : "text-nedel-blue"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </div>
      </Section>

      {/* Demais produtos */}
      <Section className="my-0 py-16 md:py-24 bg-nedel-black-blue text-white">
        <Reveal className="text-center max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
            Os 5 satélites
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
            Cinco aplicações, todas integradas
          </h2>
          <p className="text-white/70 mt-4 leading-relaxed">
            Cada um resolve uma parte específica da operação. Conectam direto ao
            Digiadm e são contratados separadamente, conforme a operação da sua
            empresa pedir.
          </p>
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {SATELLITES.map((product, i) => {
            const isEven = i % 2 === 0;
            if (product.show === false) return null;
            return (
              <Reveal
                key={product.slug}
                variant={isEven ? "slideRight" : "slideLeft"}
                amount={0.2}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full"
              >
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/10">
                      {product.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-nedel-blue">
                      {product.type}
                    </span>
                    {product.comingSoon && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white border border-white/20">
                        Em breve
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-5">
                    {product.tagline}. {product.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {product.features.map((f) => (
                      <li
                        key={f.text}
                        className="flex gap-2.5 text-sm text-white/80 leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 text-nedel-blue shrink-0 mt-0.5" />
                        <span className="flex-1">
                          {f.text}
                          {f.soon && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-nedel-blue text-white">
                              em breve
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-white/90">
                    {product.platform}
                  </span>
                </div>
                <div
                  className={`${isEven ? "md:order-2" : "md:order-1"} ${
                    product.comingSoon && !product.demoGif
                      ? "opacity-60 saturate-50"
                      : ""
                  }`}
                >
                  {product.image ? (
                    <MockupFrame glow="blue" glowIntensity="strong">
                      <Image
                        src={product.image}
                        alt={`Tela do ${product.name}`}
                        className="w-full h-auto"
                        placeholder="blur"
                      />
                    </MockupFrame>
                  ) : product.demoGif ? (
                    <MockupFrame glow="blue" glowIntensity="strong">
                      <Image
                        src={product.demoGif.src}
                        alt={`Demonstração do ${product.name}`}
                        width={product.demoGif.width}
                        height={product.demoGif.height}
                        unoptimized
                        className="w-full h-auto"
                      />
                    </MockupFrame>
                  ) : (
                    <MockPlaceholder
                      label={
                        product.comingSoon
                          ? `${product.name} · Em breve`
                          : `Imagem do ${product.name}`
                      }
                      aspect="aspect-[4/3]"
                    />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Modelo comercial */}
      <Section className="my-0 py-16 md:py-24">
        <Reveal className="text-center max-w-2xl mb-12 md:mb-16">
          <Eyebrow>Como funciona a contratação</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
            Sem pegadinha, sem investimento inicial pesado
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Conversamos, montamos uma proposta sob medida e você experimenta
            antes de decidir.
          </p>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-2 gap-5 w-full">
          {PRICING_PILLARS.map((pillar) => {
            const isVivid = pillar.accent === "vivid";
            return (
              <RevealItem
                key={pillar.title}
                className={`p-8 md:p-10 rounded-2xl overflow-hidden text-white ${
                  isVivid ? "bg-nedel-blue" : "bg-nedel-black-blue"
                }`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-5 ${
                    isVivid ? "bg-white/15" : "bg-nedel-blue/30"
                  }`}
                >
                  <pillar.Icon className="size-5 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p
                  className={`leading-relaxed ${
                    isVivid ? "text-white/85" : "text-white/75"
                  }`}
                >
                  {pillar.body}
                </p>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Section>

      {/* CTA */}
      <Section className="my-0 py-16 md:py-24">
        <Reveal
          variant="scaleIn"
          duration={0.7}
          className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-nedel-blue to-nedel-black-blue p-10 md:p-16 text-center"
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 size-80 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 size-[28rem] rounded-full bg-nedel-blue/50 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Quer ver funcionando?
            </h2>
            <p className="text-white/80 mt-4 max-w-xl mx-auto leading-relaxed">
              Agende uma demonstração e rode o Digiadm com seus próprios dados
              por 7 dias, sem compromisso.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href="https://wa.me/+554936787274"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-nedel-black-blue px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors duration-300 ease-out"
              >
                Solicitar demonstração
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </a>
              <Link
                href="/help"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors duration-300 ease-out"
              >
                Conhecer a documentação
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
