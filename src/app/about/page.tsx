import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Fundada em 1994 em Itapiranga/SC por Henrique Nedel. Conheça a história da Nedel Sistemas — o sistema da nossa cidade.",
  openGraph: {
    title: "Sobre a Nedel Sistemas",
    description:
      "Há mais de 30 anos atendendo empresários do Sul do Brasil com proximidade, atendimento humano e sistemas que evoluem todo mês.",
  },
};
import {
  ArrowRight,
  Award,
  Building2,
  Compass,
  Handshake,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { Section } from "@/components/ui/section";

const TIMELINE = [
  {
    year: "1994",
    title: "O começo, em Itapiranga",
    body: "Aos 20 anos, Henrique Nedel funda a Nedel Informática com mais uma pessoa. Desde o primeiro dia, sistemas de automação comercial fazem parte da operação — ao lado de revenda de equipamentos e assistência técnica.",
  },
  {
    year: "1999",
    title: "Ano de virada",
    body: "Com o acesso a linhas de crédito especiais, a empresa consegue investir em tecnologia de ponta e ampliar o atendimento. O foco em software de gestão começa a ganhar tração entre o comércio da região.",
  },
  {
    year: "2006",
    title: "Nasce a Nedel Telecom",
    body: "O braço de provedor de internet vira uma empresa independente — a Nedel Telecom. A Sistemas segue seu caminho, dedicada exclusivamente ao desenvolvimento dos sistemas de gestão para o varejo da região.",
  },
  {
    year: "Hoje",
    title: "O sistema da nossa cidade",
    body: "Mais de 200 empresas — postos de combustível, mercados, padarias, varejos e distribuidoras — operam diariamente com os sistemas Digiadm, Diginfc-e e Digivendas em Santa Catarina, Rio Grande do Sul e Paraná.",
  },
];

const VALUES = [
  {
    icon: <Handshake className="size-5 text-nedel-blue" />,
    title: "Atendimento humano",
    body: "Nada de robô ou ticket sem retorno. Quem atende você conhece o seu sistema, a sua rotina e, muitas vezes, o seu nome.",
  },
  {
    icon: <HeartHandshake className="size-5 text-nedel-blue" />,
    title: "Proximidade que se sente",
    body: "Somos do interior e atendemos como gente do interior atende — com respeito, paciência e o tempo que cada cliente precisa.",
  },
  {
    icon: <Compass className="size-5 text-nedel-blue" />,
    title: "Evolução constante",
    body: "O Digiadm está na versão 3.1.22 porque acreditamos que software bom é software que melhora todo mês. Sem você precisar pedir.",
  },
  {
    icon: <Award className="size-5 text-nedel-blue" />,
    title: "Solidez de três décadas",
    body: "Em 30+ anos, atravessamos a chegada da internet, do PIX e da emissão eletrônica. Continuamos aqui — e continuamos aprendendo.",
  },
];

const NUMBERS = [
  { count: "30+", label: "Anos de história" },
  { count: "200+", label: "Clientes ativos" },
  { count: "3", label: "Estados atendidos" },
  { count: "1994", label: "Fundação em Itapiranga" },
];

const SEGMENTS = [
  "Postos de combustível",
  "Mercados e mercearias",
  "Padarias e confeitarias",
  "Lojas de varejo",
  "Distribuidoras",
  "Prestadores de serviço",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
      {children}
    </p>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="my-0 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center w-full">
          <div>
            <Eyebrow>Sobre nós</Eyebrow>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-nedel-black-blue mt-4 leading-[1.05]">
              O sistema
              <br />
              da nossa cidade.
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-xl">
              Desde 1994, ajudamos empresários da nossa região — e cada vez de
              mais lugares — a tocarem seus negócios com mais clareza, menos
              papel e a tranquilidade de saber quem atende do outro lado da
              linha.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-nedel-blue" />
                Itapiranga, Santa Catarina
              </span>
              <span className="text-nedel-highlight-gray">•</span>
              <span className="inline-flex items-center gap-2">
                <Building2 size={16} className="text-nedel-blue" />
                Fundada em 01/11/1994
              </span>
            </div>
          </div>

          {/* Placeholder pra foto da fachada/escritório */}
          <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-nedel-blue/10 via-nedel-blue/5 to-transparent border border-nedel-highlight-gray/40 overflow-hidden flex items-center justify-center">
            {/* Substituir pelo <Image /> da fachada/escritório */}
            <div className="text-center px-6">
              <div className="inline-flex p-4 rounded-2xl bg-nedel-blue/10 mb-3">
                <Image
                  src="/n.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="opacity-60"
                />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Foto da empresa
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* História narrativa */}
      <Section className="my-0 py-16 md:py-24 bg-secondary/40">
        <Reveal className="max-w-3xl w-full text-center">
          <Eyebrow>Nossa história</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
            Uma empresa que cresceu com a cidade
          </h2>
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-left md:text-center">
            <p>
              Em 1º de novembro de 1994, Henrique Nedel — então com 20 anos —
              abriu a porta da Nedel Informática em Itapiranga, no extremo
              oeste catarinense. Eram só duas pessoas. O capital era pouco, o
              mercado de informática ainda engatinhava no interior, e a única
              certeza era a vontade de fazer dar certo.
            </p>
            <p>
              Nos primeiros anos, a empresa atuou em várias frentes — revenda
              de equipamentos, suprimentos, assistência técnica e, desde
              sempre, <strong className="text-nedel-black-blue">sistemas
              de automação comercial</strong>. Foi esse último braço que, com
              o tempo, viraria o coração da operação.
            </p>
            <p>
              Em 2006, a Nedel se desdobrou: a parte de provedor de internet
              ganhou vida própria como Nedel Telecom. A Sistemas, livre pra se
              dedicar inteiramente ao que faz melhor, seguiu o caminho do
              software. O <strong className="text-nedel-black-blue">Digiadm
              </strong> se firmou como o produto principal, e em torno dele
              nasceram o Diginfc-e, o Digivendas e os demais aplicativos que
              vocês conhecem hoje.
            </p>
            <p>
              Trinta anos depois, continuamos em Itapiranga. Continuamos
              atendendo pelo nome. E continuamos acreditando que o melhor
              sistema é aquele em que, quando algo dá errado às 22h de uma
              sexta, tem alguém de verdade do outro lado pra resolver.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Timeline */}
      <Section className="my-0 py-16 md:py-24">
        <Reveal className="text-center max-w-2xl mb-12 md:mb-16">
          <Eyebrow>Linha do tempo</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
            Marcos da nossa caminhada
          </h2>
        </Reveal>

        <div className="w-full max-w-3xl relative">
          {/* Linha conectora */}
          <div
            aria-hidden
            className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-nedel-highlight-gray/60"
          />

          <RevealStagger
            staggerDelay={0.15}
            amount={0.1}
            className="flex flex-col gap-12"
          >
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <RevealItem
                  key={item.year}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-start"
                >
                  {/* Dot */}
                  <div
                    aria-hidden
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 size-8 rounded-full bg-white border-2 border-nedel-blue flex items-center justify-center"
                  >
                    <div className="size-2.5 rounded-full bg-nedel-blue" />
                  </div>

                  {/* Spacer pra alternar lados no desktop */}
                  {!isEven && <div className="hidden md:block" />}

                  <div className={`pl-12 md:pl-0 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-nedel-black-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.body}
                    </p>
                  </div>

                  {/* Spacer pra alternar lados no desktop */}
                  {isEven && <div className="hidden md:block" />}
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </Section>

      {/* Números */}
      <Section className="my-0 py-16 md:py-20 bg-nedel-black-blue text-white">
        <Reveal className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
            Em números
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Três décadas, muita gente atendida
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full">
          {NUMBERS.map((item) => (
            <RevealItem
              key={item.label}
              variant="scaleIn"
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-nedel-blue bg-clip-text text-transparent">
                {item.count}
              </p>
              <p className="text-sm text-white/70 mt-2">{item.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.3}>
          <p className="text-sm text-white/60 mt-12 text-center max-w-xl">
            Hoje somos uma equipe pequena de quatro pessoas — pequena de
            propósito. Cada cliente é atendido por alguém que conhece o sistema
            de ponta a ponta.
          </p>
        </Reveal>
      </Section>

      {/* Valores / Cultura */}
      <Section className="my-0 py-16 md:py-24">
        <Reveal className="text-center max-w-2xl mb-12 md:mb-16">
          <Eyebrow>O que nos move</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
            Nossa cultura, de 1994 pra cá
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Muita coisa mudou em 30 anos — a tecnologia, as leis, os clientes.
            O jeito de tratar quem confia na gente, não.
          </p>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-2 gap-5 w-full">
          {VALUES.map((value) => (
            <RevealItem
              key={value.title}
              className="p-6 md:p-8 rounded-2xl border border-nedel-highlight-gray/40 bg-white hover:border-nedel-blue/40 transition-colors"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-nedel-blue/10 mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-nedel-black-blue mb-2">
                {value.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm">
                {value.body}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Fundador + Equipe */}
      <Section className="my-0 py-16 md:py-24 bg-secondary/40">
        <Reveal className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center w-full">
          {/* Placeholder foto do fundador */}
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-nedel-blue/10 via-nedel-blue/5 to-transparent border border-nedel-highlight-gray/40 overflow-hidden flex items-center justify-center order-2 md:order-1">
            {/* Substituir pelo <Image /> do Henrique */}
            <div className="text-center px-6">
              <div className="inline-flex p-4 rounded-2xl bg-nedel-blue/10 mb-3">
                <Users size={36} className="text-nedel-blue/60" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Foto do fundador
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Eyebrow>Quem está por trás</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
              Henrique Nedel e uma equipe que conhece você pelo nome
            </h2>
            <p className="text-foreground/80 leading-relaxed mt-6">
              A Nedel Sistemas é fruto da visão de um interiorano de 20 anos
              que, em 1994, apostou que software ia ser importante pro
              comerciante da região — antes mesmo da internet popularizar.
              Trinta anos depois, Henrique segue à frente do negócio, com a
              mesma cautela e atenção aos detalhes de sempre.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Ao lado dele, uma equipe enxuta — quatro pessoas — que cuida do
              desenvolvimento, do suporte e do relacionamento com cada cliente
              ativo. É pouca gente de propósito: queremos que quem atende você
              saiba exatamente o que está acontecendo na sua empresa.
            </p>
          </div>
        </Reveal>

        {/* Placeholder foto da equipe */}
        <Reveal delay={0.15} className="mt-12 w-full">
          <div className="relative aspect-[16/7] rounded-3xl bg-gradient-to-br from-nedel-blue/10 via-nedel-blue/5 to-transparent border border-nedel-highlight-gray/40 overflow-hidden flex items-center justify-center">
            <div className="text-center px-6">
              <div className="inline-flex p-4 rounded-2xl bg-nedel-blue/10 mb-3">
                <Users size={36} className="text-nedel-blue/60" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Foto da equipe
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Segmentos atendidos */}
      <Section className="my-0 py-16 md:py-24">
        <Reveal className="text-center max-w-2xl mb-12">
          <Eyebrow>Quem atendemos</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
            Comércios que confiam na Nedel
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Mais de 200 empresas operam diariamente com nossos sistemas em
            Santa Catarina, Rio Grande do Sul e Paraná.
          </p>
        </Reveal>

        <RevealStagger
          staggerDelay={0.05}
          className="flex flex-wrap justify-center gap-3 max-w-3xl"
        >
          {SEGMENTS.map((segment) => (
            <RevealItem key={segment} variant="scaleIn">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nedel-highlight-gray/60 bg-white text-sm font-medium text-nedel-black-blue">
                <Sparkles size={14} className="text-nedel-blue" />
                {segment}
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* CTA final */}
      <Section className="my-0 py-16 md:py-24">
        <Reveal
          variant="scaleIn"
          duration={0.7}
          className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-nedel-blue to-nedel-black-blue p-10 md:p-16 text-center"
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 size-80 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 size-80 rounded-full bg-nedel-blue/30 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Quer fazer parte dessa história?
            </h2>
            <p className="text-white/80 mt-4 max-w-xl mx-auto leading-relaxed">
              Conheça os sistemas que ajudam mais de 200 empresas a tocar o
              dia a dia com tranquilidade.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-nedel-black-blue px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Conhecer os produtos
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/+554936787274"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Falar com a gente
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
