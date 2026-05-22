import Image from "next/image";
import Link from "next/link";
import * as Lucide from "lucide-react";
import Digiadm from "@/assets/mock/digiadm.png";
import Diginfce from "@/assets/mock/diginfce.png";
import Digientregas from "@/assets/mock/digientregas.png";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { LogoMarquee } from "@/components/logo-marquee";
import { MockupFrame } from "@/components/ui/mockup-frame";

const STATS = [
  {
    count: "30+",
    title: "Anos de mercado",
    description:
      "Mais de três décadas entregando estabilidade e evolução tecnológica contínua para o mercado brasileiro.",
  },
  {
    count: "200+",
    title: "Clientes ativos",
    description:
      "Empresas de diversos setores que confiam seu crescimento e gestão diária às nossas ferramentas.",
  },
  {
    count: "100%",
    title: "Suporte humanizado",
    description:
      "Atendimento real por especialistas que entendem as particularidades da sua operação.",
  },
];

const SOLUTIONS = [
  {
    Icon: Lucide.ShoppingBag,
    title: "Comércios & Varejo",
    description:
      "Gestão de estoque, frente de caixa ágil e integração com múltiplos canais de venda.",
  },
  {
    Icon: Lucide.Factory,
    title: "Indústrias",
    description:
      "Controle de produção (PCP), ordens de serviço e gestão de matérias-primas.",
  },
  {
    Icon: Lucide.Briefcase,
    title: "Prestadores de serviço",
    description:
      "Emissão de NFS-e, gestão de contratos e acompanhamento de rentabilidade por projeto.",
  },
  {
    Icon: Lucide.TrendingUp,
    title: "Empresas em crescimento",
    description:
      "Profissionalize processos, centralize dados e ganhe visibilidade para escalar com segurança.",
  },
];

const APPS = [
  {
    type: "ERP",
    name: "Digiadm",
    description:
      "O coração da sua gestão. Um ERP completo que integra todos os departamentos em uma única fonte de verdade, eliminando retrabalho e erros manuais.",
    features: [
      "Gestão financeira com fluxo de caixa real",
      "Emissão fiscal (NFe, NFCe, NFSe, CTe, MDFe, NFCom)",
      "Controle de estoque inteligente",
    ],
    pathImage: Digiadm,
  },
  {
    type: "PDV",
    name: "Diginfce",
    description:
      "Agilidade no ponto de venda. Nosso sistema de frente de caixa foi desenhado para não deixar seu cliente esperando, mesmo nos horários de pico.",
    features: [
      "Funcionamento offline",
      "Integração TEF e PIX",
      "Homologado em todos os estados",
    ],
    pathImage: Diginfce,
  },
  {
    type: "Logística",
    name: "Digientregas",
    description:
      "Otimize sua logística de última milha. Gerencie rotas, entregadores e status em tempo real para oferecer a melhor experiência ao seu cliente.",
    features: [
      "Roteirização inteligente de pedidos",
      "App para entregadores (Android)",
      "Comprovante de entrega digital",
    ],
    pathImage: Digientregas,
  },
];

const STEPS = [
  {
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio e identificamos os gargalos da gestão.",
  },
  {
    title: "Proposta",
    description:
      "Apresentamos a configuração ideal dos nossos sistemas para você.",
  },
  {
    title: "Implantação",
    description:
      "Configuração técnica e treinamento da sua equipe por especialistas.",
  },
  {
    title: "Sucesso",
    description:
      "Sua empresa rodando com eficiência, dados reais e suporte técnico.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start ">
        {/* <Video /> */}
        <header className="w-full">
          <div className="grid md:grid-cols-[3fr_2fr] gap-4 p-2 w-full md:h-[calc(100vh-4rem)] md:max-w-6xl mx-auto">
            <div className="bg-[#f5f5f5] rounded-2xl h-full px-8 md:px-24 py-10">
              <div className="h-full flex flex-col justify-center items-center">
                <div className="">
                  <button className="flex items-center p-2 bg-nedel-blue/20 rounded-2xl text-nedel-blue text-sm mb-4 ">
                    <div className="bg-nedel-blue w-fit h-fit p-1 rounded-full inline-flex items-center justify-center mr-2">
                      <Lucide.MapPin size={16} color="white" />
                    </div>
                    Itapiranga - SC
                  </button>
                  <div>
                    <h1 className="w-fit">
                      <span className="block">O SISTEMA</span>
                      <span className="block align-text-top text-3xl md:text-4xl font-bold">
                        DA{" "}
                        <span className="text-7xl md:text-8xl font-bold text-nedel-blue">
                          NOSSA
                        </span>
                      </span>
                      <span className="block text-right">CIDADE</span>
                    </h1>
                    <p className="text-muted-foreground mt-4">
                      Há mais de 30 anos desenvolvendo soluções confiáveis que
                      ajudam empresas a organizar processos, reduzir erros e
                      crescer com segurança.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 pt-12">
                    <h3 className="flex flex-wrap items-center gap-x-1 uppercase text-nedel-blue font-semibold text-sm md:text-base">
                      <span className="flex items-center">
                        VELO
                        <Lucide.Zap
                          fill="#0066ff"
                          className="rotate-12 size-7 md:size-10"
                        />
                      </span>
                      , CONFIÁVEL, COMPLETO.
                    </h3>
                    <div className="flex gap-4">
                      <Link
                        href="/products"
                        className="py-3 px-6 bg-nedel-black-blue text-white rounded-xl font-semibold text-sm hover:bg-nedel-black-blue/80 transition-colors"
                      >
                        Comece já
                      </Link>
                      <Link
                        href="/contact"
                        className="py-3.5 px-5 text-nedel-black-blue rounded-xl font-semibold text-sm border border-transparent hover:border hover:border-nedel-black-blue transition-colors"
                      >
                        Contate-nos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-[2fr_1fr] gap-4">
              <div className="bg-nedel-blue rounded-2xl p-8 overflow-clip bg-[url('/graphics/tracado/azul-medio.png')] bg-no-repeat bg-cover bg-blend-color shadow-2xl">
                <h3 className="text-white ">
                  Mais de 200 clientes confiam no nosso trabalho
                </h3>
                <div className="bg-[url('/graphic.png')] bg-no-repeat bg-contain w-full h-full"></div>
              </div>
              <div className="flex flex-col justify-between bg-nedel-black-blue rounded-2xl p-8 bg-[url('/graphics/pattern-n/azul-medio.png')] bg-no-repeat bg-cover bg-blend-color bg-center shadow-2xl">
                <h3 className="text-white ">
                  Ecossistema completo para sua empresa
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-14 h-14 bg-white p-2 rounded-full flex items-center justify-center">
                    <Image
                      src="/digiadm.png"
                      alt="Ícone do Digiadm"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="w-14 h-14 bg-white p-2 rounded-full flex items-center justify-center">
                    <Image
                      src="/diginfce.png"
                      alt="Ícone do Diginfc-e"
                      width={40}
                      height={40}
                    />
                  </div>
                  <Link
                    href="/products"
                    className="border border-nedel-highlight-gray rounded-full text-white text-sm px-4 py-2 backdrop-blur-lg hover:bg-white/10 transition-colors"
                  >
                    +4 aplicações
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* LOGOS DE CLIENTES */}
        <LogoMarquee />

        {/* STATS */}
        <section className="w-full py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <Reveal className="text-center mb-12 md:mb-16">
              <Eyebrow>Por que confiar na Nedel</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
                Tradição, confiança e tecnologia
              </h2>
            </Reveal>
            <RevealStagger className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-nedel-highlight-gray/60 bg-secondary/30 rounded-3xl border border-nedel-highlight-gray/40 overflow-hidden">
              {STATS.map((stat, i) => (
                <RevealItem key={i} className="px-8 py-12 text-center">
                  <p
                    className={`text-5xl md:text-6xl font-bold bg-clip-text text-transparent ${
                      i === 1
                        ? "bg-gradient-to-br from-nedel-blue to-nedel-black-blue"
                        : "bg-gradient-to-br from-nedel-blue to-nedel-medium-blue"
                    }`}
                  >
                    {stat.count}
                  </p>
                  <p className="uppercase font-semibold tracking-wider text-sm text-nedel-black-blue mt-4">
                    {stat.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                    {stat.description}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="w-full py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <Reveal className="text-center mb-12 md:mb-16">
              <Eyebrow>Setores atendidos</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
                Soluções para cada setor
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Desenvolvido sob medida para a complexidade do seu negócio.
              </p>
            </Reveal>
            <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SOLUTIONS.map((solution, i) => {
                const isVivid = i % 2 === 1;
                return (
                  <RevealItem
                    key={i}
                    className={`group relative rounded-2xl p-7 overflow-hidden text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isVivid ? "bg-nedel-blue" : "bg-nedel-black-blue"
                    }`}
                  >
                    <div
                      className={`inline-flex p-3 rounded-xl mb-5 ${
                        isVivid ? "bg-white/15" : "bg-nedel-blue/30"
                      }`}
                    >
                      <solution.Icon className="size-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{solution.title}</h3>
                    <p
                      className={`text-sm mt-2 leading-relaxed ${
                        isVivid ? "text-white/85" : "text-white/75"
                      }`}
                    >
                      {solution.description}
                    </p>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* ECOSYSTEM / APPS */}
        <section className="w-full bg-nedel-black-blue py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/graphics/pattern-n/azul-medio.png')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-nedel-black-blue via-nedel-black-blue/90 to-nedel-black-blue"></div>

          <div className="relative max-w-6xl mx-auto px-5">
            <Reveal className="text-center mb-20 md:mb-28">
              <Eyebrow>Nossos produtos</Eyebrow>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-3">
                O Ecossistema
              </h2>
              <p className="text-white/60 text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Seis aplicações integradas que cobrem do balcão à rota de
                entrega. Conheça as principais abaixo — ou veja o ecossistema
                completo em{" "}
                <Link href="/products" className="underline hover:text-white">
                  Produtos
                </Link>
                .
              </p>
            </Reveal>

            <div className="flex flex-col gap-16 md:gap-36">
              {APPS.map((app, i) => {
                const reversed = i % 2 === 1;
                return (
                  <Reveal
                    key={i}
                    variant={reversed ? "slideLeft" : "slideRight"}
                    amount={0.25}
                    className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
                  >
                    <div
                      className={`space-y-5 ${reversed ? "md:order-2" : ""}`}
                    >
                      <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-nedel-blue/15 text-nedel-blue border border-nedel-blue/30">
                        {app.type}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {app.name}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {app.description}
                      </p>
                      <ul className="space-y-3 pt-2">
                        {app.features.map((feature, fi) => (
                          <li
                            key={fi}
                            className="flex items-start gap-3 text-white/85"
                          >
                            <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-nedel-blue/20 flex items-center justify-center">
                              <Lucide.Check className="size-3 text-nedel-blue" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Link
                          href="/products"
                          className="inline-flex items-center gap-2 py-3 px-6 bg-nedel-blue text-white rounded-xl font-semibold text-sm hover:bg-nedel-blue/80 transition-colors"
                        >
                          Ver detalhes
                          <Lucide.ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    <MockupFrame glow="blue" glowIntensity="strong">
                      <Image
                        src={app.pathImage}
                        alt={app.name}
                        width={1400}
                        height={900}
                        loading="lazy"
                        className="w-full h-auto"
                      />
                    </MockupFrame>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US — BENTO */}
        <section className="w-full py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <Reveal className="text-center mb-12 md:mb-16">
              <Eyebrow>Diferenciais</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
                Por que escolher a Nedel?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Mais do que software: uma parceria de longo prazo para o
                crescimento da sua empresa.
              </p>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {/* Featured card */}
              <RevealItem className="md:col-span-2 relative bg-gradient-to-br from-nedel-black-blue to-nedel-medium-blue rounded-3xl p-8 md:p-10 overflow-hidden text-white md:min-h-[280px]">
                <div className="absolute top-0 right-0 w-72 h-72 bg-nedel-blue/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute inset-0 bg-[url('/graphics/pattern-n/azul-medio.png')] bg-cover bg-center opacity-10"></div>
                <div className="relative flex flex-col h-full justify-between">
                  <Lucide.GraduationCap className="size-10 text-nedel-blue" />
                  <div className="mt-8">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Implantação e treinamento dedicados
                    </h3>
                    <p className="text-white/70 mt-3 max-w-md">
                      Não te deixamos sozinho. Acompanhamos cada passo da
                      configuração e treinamos sua equipe para garantir uso
                      pleno desde o primeiro dia.
                    </p>
                  </div>
                </div>
              </RevealItem>

              {/* Side card */}
              <RevealItem className="relative bg-nedel-blue rounded-3xl p-6 md:p-8 overflow-hidden md:min-h-[280px] flex flex-col text-white">
                <div className="inline-flex p-3 rounded-xl bg-white/15 w-fit">
                  <Lucide.Headphones className="size-6 text-white" />
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="text-xl font-bold">Suporte humanizado</h3>
                  <p className="text-sm text-white/85 mt-2">
                    Atendimento real por especialistas — sem chatbots, sem filas
                    intermináveis.
                  </p>
                </div>
              </RevealItem>

              {/* Row 2: 3 small cards */}
              <RevealItem className="group bg-background rounded-3xl p-6 md:p-8 border border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-lg transition-all">
                <div className="inline-flex p-3 rounded-xl bg-nedel-blue/10 group-hover:bg-nedel-blue/15 transition-colors">
                  <Lucide.ShieldCheck className="size-6 text-nedel-blue" />
                </div>
                <h3 className="text-lg font-semibold text-nedel-black-blue mt-5">
                  Atualizações fiscais
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Sistema sempre em dia com Receita Federal e órgãos estaduais,
                  sem você precisar acompanhar.
                </p>
              </RevealItem>

              <RevealItem className="group bg-background rounded-3xl p-6 md:p-8 border border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-lg transition-all">
                <div className="inline-flex p-3 rounded-xl bg-nedel-blue/10 group-hover:bg-nedel-blue/15 transition-colors">
                  <Lucide.Lock className="size-6 text-nedel-blue" />
                </div>
                <h3 className="text-lg font-semibold text-nedel-black-blue mt-5">
                  Segurança de dados
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Backup automático, criptografia e infraestrutura redundante.
                  Seus dados protegidos 24/7.
                </p>
              </RevealItem>

              <RevealItem className="group bg-background rounded-3xl p-6 md:p-8 border border-nedel-highlight-gray/40 hover:border-nedel-blue/40 hover:shadow-lg transition-all">
                <div className="inline-flex p-3 rounded-xl bg-nedel-blue/10 group-hover:bg-nedel-blue/15 transition-colors">
                  <Lucide.Puzzle className="size-6 text-nedel-blue" />
                </div>
                <h3 className="text-lg font-semibold text-nedel-black-blue mt-5">
                  Fácil integração
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Conecte com bancos, marketplaces e gateways via APIs abertas e
                  documentadas.
                </p>
              </RevealItem>

              {/* Bottom wide card */}
              <RevealItem className="md:col-span-3 relative bg-secondary/30 rounded-3xl p-8 md:p-10 border border-nedel-highlight-gray/40 overflow-hidden">
                <div className="md:flex md:items-center md:justify-between gap-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 p-4 rounded-2xl bg-nedel-blue/10">
                      <Lucide.ChartLine className="size-7 text-nedel-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-nedel-black-blue">
                        Escalabilidade real
                      </h3>
                      <p className="text-muted-foreground mt-2 max-w-2xl">
                        Cresce com a sua empresa — de uma filial a centenas, sem
                        precisar trocar de sistema. Arquitetura preparada para
                        alto volume.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            </RevealStagger>
          </div>
        </section>

        {/* STEPS */}
        <section className="w-full bg-secondary/30 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <Reveal className="text-center mb-16 md:mb-20">
              <Eyebrow>Próximos passos</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
                Começar é simples
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Um processo estruturado para levar você da desordem ao controle
                total.
              </p>
            </Reveal>

            <RevealStagger
              staggerDelay={0.12}
              className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6"
            >
              <div
                aria-hidden
                className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-nedel-blue/40 to-transparent"
              ></div>

              {STEPS.map((step, i) => {
                const isFinal = i === STEPS.length - 1;
                return (
                  <RevealItem key={i} className="relative text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`relative w-20 h-20 rounded-full ring-4 ring-background flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-all hover:scale-110 cursor-default ${
                          isFinal ? "bg-nedel-blue" : "bg-nedel-black-blue"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-nedel-black-blue">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full p-5 pb-10">
          <Reveal
            variant="scaleIn"
            duration={0.7}
            className="relative max-w-6xl mx-auto bg-gradient-to-br from-nedel-blue to-nedel-medium-blue rounded-3xl md:rounded-4xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/graphics/pattern-n/azul-medio.png')] bg-cover bg-center opacity-15"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-nedel-blue/45 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="relative max-w-3xl mx-auto flex flex-col items-center justify-center py-24 md:py-32 px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Pronto para levar mais controle para a sua empresa?
              </h2>
              <p className="text-white/80 mt-5 text-base md:text-lg max-w-2xl">
                Junte-se a mais de 200 empresas que transformaram sua gestão com
                a Nedel Sistemas. Peça uma demonstração sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-nedel-blue rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
                >
                  Agendar demonstração
                  <Lucide.ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/+554936787274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 text-white rounded-xl font-semibold text-sm border border-white/30 hover:border-white hover:bg-white/10 transition-colors"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
