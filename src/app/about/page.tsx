import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { CLIENTS } from "@/lib/clients";
import { TIMELINE, VALUES, NUMBERS, SEGMENTS } from "@/data/about";

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
import { Building2, MapPin, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CTALink } from "@/components/ui/cta-link";

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="my-0 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Sobre nós</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-nedel-black-blue mt-4 leading-[1.05]">
            O sistema da nossa cidade.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-xl">
            Desde 1994, ajudamos empresários da nossa região — e cada vez de
            mais lugares — a tocarem seus negócios com mais clareza, menos papel
            e a tranquilidade de saber quem atende do outro lado da linha.
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

        <div className="relative w-full aspect-[16/8] md:aspect-[20/12] rounded-3xl overflow-hidden mt-10 md:mt-14">
          <Image
            src="/fachada.png"
            alt="Fachada da sede da Nedel Sistemas em Itapiranga/SC"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-center"
            priority
          />
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
              abriu a porta da Nedel Informática em Itapiranga, no extremo oeste
              catarinense. Eram só duas pessoas. O capital era pouco, o mercado
              de informática ainda engatinhava no interior, e a única certeza
              era a vontade de fazer dar certo.
            </p>
            <p>
              Nos primeiros anos, a empresa atuou em várias frentes — revenda de
              equipamentos, suprimentos, assistência técnica e, desde sempre,{" "}
              <strong className="text-nedel-black-blue">
                sistemas de automação comercial
              </strong>
              . Foi esse último braço que, com o tempo, viraria o coração da
              operação.
            </p>
            <p>
              Em 2006, a Nedel se desdobrou: a parte de provedor de internet
              ganhou vida própria como Nedel Telecom. A Sistemas, livre pra se
              dedicar inteiramente ao que faz melhor, seguiu o caminho do
              software. O{" "}
              <strong className="text-nedel-black-blue">Digiadm</strong> se
              firmou como o produto principal, e em torno dele nasceram o
              Diginfc-e, o Digivendas e os demais aplicativos que vocês conhecem
              hoje.
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
              const isCurrent = item.year === "Hoje";

              // Placeholder pra foto histórica daquele ano
              // PLACEHOLDER: substituir pelo <Image /> da foto correspondente
              const photoPlaceholder = (
                <div className="relative aspect-[4/3] w-full rounded-2xl bg-nedel-highlight-gray overflow-hidden flex items-center justify-center">
                  <Image
                    src={`/sobre/${item.year}.jpg`}
                    sizes="(min-width: 1280px) 400px, 100vw"
                    alt={`Foto ilustrativa para o ano de ${item.year}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              );

              return (
                <RevealItem
                  key={item.year}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Dot */}
                  <div
                    aria-hidden
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 size-7 rounded-full ring-4 ring-background ${
                      isCurrent ? "bg-nedel-blue" : "bg-nedel-black-blue"
                    }`}
                  />

                  {/* Foto na coluna oposta — desktop only, item ímpar */}
                  {!isEven && (
                    <div className="hidden md:block md:pr-8">
                      {photoPlaceholder}
                    </div>
                  )}

                  <div
                    className={`pl-12 md:pl-0 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                  >
                    <span
                      className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${
                        isCurrent
                          ? "text-nedel-blue"
                          : "text-nedel-black-blue/60"
                      }`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-nedel-black-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.body}
                    </p>

                    {/* Foto inline — mobile only, abaixo do texto */}
                    <div className="md:hidden mt-5">{photoPlaceholder}</div>
                  </div>

                  {/* Foto na coluna oposta — desktop only, item par */}
                  {isEven && (
                    <div className="hidden md:block md:pl-8">
                      {photoPlaceholder}
                    </div>
                  )}
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
            Muita coisa mudou em 30 anos — a tecnologia, as leis, os clientes. O
            jeito de tratar quem confia na gente, não.
          </p>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-2 gap-5 w-full">
          {VALUES.map((value) => {
            const isVivid = value.accent === "vivid";
            return (
              <RevealItem
                key={value.title}
                className={`relative p-8 md:p-10 rounded-2xl overflow-hidden text-white ${
                  isVivid ? "bg-nedel-blue" : "bg-nedel-black-blue"
                }`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-6 ${
                    isVivid ? "bg-white/15" : "bg-nedel-blue/30"
                  }`}
                >
                  <value.Icon className="size-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {value.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    isVivid ? "text-white/85" : "text-white/75"
                  }`}
                >
                  {value.body}
                </p>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Section>

      {/* Fundador + Equipe */}
      <Section className="my-0 py-16 md:py-24 bg-secondary/40">
        <Reveal className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center w-full">
          {/* Placeholder foto do fundador */}
          <div className="relative aspect-square rounded-3xl bg-nedel-blue overflow-hidden flex items-center justify-center order-2 md:order-1">
            {/* Substituir pelo <Image /> do Henrique */}
            <Image
              src="/sobre/fundador.jpg"
              alt="Henrique Nedel, fundador da Nedel Sistemas"
              fill
              sizes="(min-width: 1280px) 400px, 100vw"
              className="object-cover object-left"
            />
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

        <Reveal delay={0.15} className="mt-12 w-full">
          <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden">
            <Image
              src="/equipe.jpeg"
              alt="Equipe da Nedel Sistemas"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </Section>

      {/* Segmentos atendidos + Clientes */}
      <Section id="clientes" className="my-0 py-16 md:py-24 scroll-mt-20">
        <Reveal className="text-center max-w-2xl mb-12">
          <Eyebrow>Quem atendemos</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
            Comércios que confiam na Nedel
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Mais de 100 empresas operam diariamente com nossos sistemas em Santa
            Catarina, Rio Grande do Sul e Paraná.
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

        <Reveal className="text-center mt-16 md:mt-20 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-nedel-black-blue">
            Algumas das empresas que estão com a gente
          </h3>
        </Reveal>

        <RevealStagger
          staggerDelay={0.03}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 w-full"
        >
          {CLIENTS.map((client) => (
            <RevealItem
              key={client.src}
              variant="scaleIn"
              className="group flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 ease-out"
            >
              <div className="flex items-center justify-center h-14 md:h-16 w-full mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] md:text-xs font-medium text-nedel-black-blue/70 text-center leading-tight">
                {client.alt}
              </p>
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
            className="absolute -top-20 -right-20 size-80 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 size-[28rem] rounded-full bg-nedel-blue/50 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Quer fazer parte dessa história?
            </h2>
            <p className="text-white/80 mt-4 max-w-xl mx-auto leading-relaxed">
              Conheça os sistemas que ajudam mais de 100 empresas a tocar o dia
              a dia com tranquilidade.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <CTALink
                href="/products"
                className="bg-white text-nedel-black-blue px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/90"
              >
                Conhecer os produtos
              </CTALink>
              <a
                href="https://wa.me/+554936787274"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors duration-300 ease-out"
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
