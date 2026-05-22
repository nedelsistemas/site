import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  PhoneCall,
  PhoneOutgoing,
  PlayCircle,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Nedel Sistemas — WhatsApp, telefone, endereço em Itapiranga/SC e horário de atendimento. Demonstração gratuita de 7 dias.",
};

const PRIMARY_CHANNELS = [
  {
    Icon: MessageCircle,
    accent: "green" as const,
    label: "WhatsApp e telefone",
    value: "(49) 3678-7274",
    description:
      "Resposta rápida no horário comercial. Use o WhatsApp pra demonstrações, dúvidas comerciais e suporte ao cliente.",
    cta: {
      text: "Abrir no WhatsApp",
      href: "https://wa.me/+554936787274",
      external: true,
    },
  },
  {
    Icon: PhoneCall,
    accent: "vivid" as const,
    label: "Telefone fixo",
    value: "(49) 3678-7275",
    description:
      "Linha adicional pra atendimento por voz. Se a primeira estiver ocupada, ligue aqui.",
    cta: { text: "Ligar agora", href: "tel:+554936787275", external: false },
  },
];

const SECONDARY_INFO = [
  {
    Icon: MapPin,
    accent: "blue" as const,
    title: "Onde estamos",
    body: "Av. Beira Rio, 349 - Centro, Itapiranga/SC - extremo oeste catarinense.",
  },
  {
    Icon: Clock,
    accent: "blue" as const,
    title: "Horário de atendimento",
    body: "Segunda a sexta: 8h às 18h\nSábados: 8h às 12h",
  },
  {
    Icon: Headphones,
    accent: "vivid" as const,
    title: "Suporte técnico",
    body: "Clientes ativos têm atendimento direto pela mesma linha. Suporte humano, sem chatbot, sem fila.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
      {children}
    </p>
  );
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Section className="my-0 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="text-center max-w-2xl">
          <Eyebrow>Contato</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-nedel-black-blue mt-4 leading-[1.05]">
            Vamos conversar.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Seja pra agendar uma demonstração, pedir orçamento ou tirar uma
            dúvida — a gente atende rápido e por gente de verdade.
          </p>
        </div>
      </Section>

      {/* Canais principais */}
      <Section className="my-0 pb-12 md:pb-20">
        <RevealStagger className="grid md:grid-cols-2 gap-5 w-full">
          {PRIMARY_CHANNELS.map((ch) => {
            const cardBg =
              ch.accent === "green" ? "bg-nedel-green" : "bg-nedel-blue";
            return (
              <RevealItem
                key={ch.label}
                className={`flex flex-col p-8 rounded-2xl overflow-hidden text-white ${cardBg}`}
              >
                <div className="inline-flex p-3 rounded-xl mb-4 w-fit bg-white/15">
                  <ch.Icon className="size-6 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
                  {ch.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold mt-1">
                  {ch.value}
                </p>
                <p className="leading-relaxed mt-3 flex-1 text-white/90">
                  {ch.description}
                </p>
                {ch.cta.external ? (
                  <a
                    href={ch.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-nedel-black-blue px-5 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors w-fit"
                  >
                    {ch.cta.text}
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <a
                    href={ch.cta.href}
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-nedel-black-blue px-5 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors w-fit"
                  >
                    {ch.cta.text}
                    <ArrowRight size={16} />
                  </a>
                )}
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Section>

      {/* Plantão fora do horário */}
      <Section className="my-0 pb-12 md:pb-20">
        <Reveal className="w-full">
          <div className="relative overflow-hidden rounded-2xl bg-nedel-black-blue border border-nedel-blue/25 p-7 md:p-10">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 size-72 rounded-full bg-nedel-blue/25 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-20 size-72 rounded-full bg-nedel-blue/15 blur-3xl"
            />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-start gap-5">
                <div className="shrink-0 inline-flex p-3.5 rounded-2xl bg-nedel-blue/20 border border-nedel-blue/40">
                  <Moon className="size-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
                    Plantão · fora do horário comercial
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 leading-tight">
                    Sistema parado de madrugada
                    <br className="hidden md:block" /> ou no fim de semana?
                  </h2>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mt-3 max-w-xl">
                    Pra emergências que não podem esperar o próximo dia útil. Atendimento exclusivo pra clientes ativos — somente ligações, não atende mensagens.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3 md:shrink-0 md:pl-6 md:border-l md:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
                  Telefone do plantão
                </p>
                <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  (49) 99101-3275
                </p>
                <a
                  href="tel:+5549991013275"
                  className="inline-flex items-center gap-2 bg-nedel-blue text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-blue/85 transition-colors"
                >
                  <PhoneOutgoing size={16} />
                  Ligar agora
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Info secundária */}
      <Section className="my-0 py-16 md:py-20 relative overflow-hidden">
        {/* Gradiente de base (sempre visível, garante o tom da seção mesmo sem foto) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-nedel-black-blue to-nedel-medium-blue"
        />
        {/* PLACEHOLDER: substituir /itapiranga.jpg por foto real da cidade quando disponível */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/itapiranga.jpg')] bg-cover bg-center opacity-100"
        />
        {/* Sobreposição preta pra não ficar gritante */}
        <div aria-hidden className="absolute inset-0 bg-black/50" />

        <Reveal className="relative text-center max-w-2xl mb-12">
          <Eyebrow>Outras informações</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4">
            Tudo o que você precisa saber
          </h2>
        </Reveal>

        <RevealStagger className="relative grid md:grid-cols-3 gap-5 w-full">
          {SECONDARY_INFO.map((item) => {
            const isVivid = item.accent === "vivid";
            return (
              <RevealItem
                key={item.title}
                className={`p-7 md:p-8 rounded-2xl overflow-hidden text-white ${
                  isVivid ? "bg-nedel-blue" : "bg-nedel-black-blue"
                }`}
              >
                <div
                  className={`inline-flex p-2.5 rounded-xl mb-4 ${
                    isVivid ? "bg-white/15" : "bg-nedel-blue/30"
                  }`}
                >
                  <item.Icon className="size-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p
                  className={`leading-relaxed text-sm whitespace-pre-line ${
                    isVivid ? "text-white/90" : "text-white/80"
                  }`}
                >
                  {item.body}
                </p>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Section>

      {/* Demonstração */}
      <Section className="my-0 py-16 md:py-24">
        <Reveal className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center w-full">
          <div>
            <Eyebrow>Demonstração gratuita</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
              7 dias pra você sentir o sistema na sua operação
            </h2>
            <p className="text-foreground/80 leading-relaxed mt-5">
              Antes de você decidir qualquer coisa, a gente monta uma
              demonstração com os módulos que fazem sentido pro seu negócio.
              Você roda por uma semana, faz testes reais, e só então conversamos
              sobre proposta.
            </p>
            <ul className="space-y-3 mt-6 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-nedel-blue font-semibold shrink-0">
                  •
                </span>
                <span>Sem cartão de crédito</span>
              </li>
              <li className="flex gap-3">
                <span className="text-nedel-blue font-semibold shrink-0">
                  •
                </span>
                <span>Implantação e treinamento remoto inclusos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-nedel-blue font-semibold shrink-0">
                  •
                </span>
                <span>Proposta sob medida pro porte da sua empresa</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://wa.me/+554936787274?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20dos%20sistemas%20Nedel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-nedel-blue text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-blue/85 transition-colors"
              >
                <PlayCircle size={16} />
                Agendar demonstração
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-nedel-black-blue text-nedel-black-blue px-6 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-black-blue hover:text-white transition-colors"
              >
                Ver produtos
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card endereço/email */}
          <div className="p-8 rounded-2xl bg-nedel-blue text-white overflow-hidden">
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin className="size-5 text-white shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
                    Endereço
                  </p>
                  <p className="mt-1">
                    Av. Beira Rio, 349 - Centro, Itapiranga/SC - extremo oeste
                    catarinense.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="size-5 text-white shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
                    E-mail
                  </p>
                  <a
                    href="mailto:sistemas@nedel.inf.br"
                    className="hover:text-white/80 transition-colors mt-1 inline-block"
                  >
                    sistemas@nedel.inf.br
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="size-5 text-white shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
                    Atendimento
                  </p>
                  <p className="mt-1">
                    Seg a sex: 7h30 às 18h
                    <br />
                    Sáb: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
