import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  PlayCircle,
} from "lucide-react";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Nedel Sistemas — WhatsApp, telefone, endereço em Itapiranga/SC e horário de atendimento. Demonstração gratuita de 7 dias.",
};

const PRIMARY_CHANNELS = [
  {
    icon: <MessageCircle className="size-6 text-nedel-blue" />,
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
    icon: <PhoneCall className="size-6 text-nedel-blue" />,
    label: "Telefone fixo",
    value: "(49) 3678-7275",
    description:
      "Linha adicional pra atendimento por voz. Se a primeira estiver ocupada, ligue aqui.",
    cta: { text: "Ligar agora", href: "tel:+554936787275", external: false },
  },
];

const SECONDARY_INFO = [
  {
    icon: <MapPin className="size-5 text-nedel-blue" />,
    title: "Onde estamos",
    body: "Itapiranga, Santa Catarina — extremo oeste catarinense.",
  },
  {
    icon: <Clock className="size-5 text-nedel-blue" />,
    title: "Horário de atendimento",
    body: "Segunda a sexta: 7h30 às 18h\nSábados: 8h às 12h",
  },
  {
    icon: <Headphones className="size-5 text-nedel-blue" />,
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
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {PRIMARY_CHANNELS.map((ch) => (
            <div
              key={ch.label}
              className="flex flex-col p-8 rounded-2xl border border-nedel-highlight-gray/40 bg-white hover:border-nedel-blue/40 transition-colors"
            >
              <div className="inline-flex p-3 rounded-xl bg-nedel-blue/10 mb-4 w-fit">
                {ch.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {ch.label}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-nedel-black-blue mt-1">
                {ch.value}
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3 flex-1">
                {ch.description}
              </p>
              {ch.cta.external ? (
                <a
                  href={ch.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-nedel-black-blue text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-black-blue/80 transition-colors w-fit"
                >
                  {ch.cta.text}
                  <ArrowRight size={16} />
                </a>
              ) : (
                <a
                  href={ch.cta.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-nedel-black-blue text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-black-blue/80 transition-colors w-fit"
                >
                  {ch.cta.text}
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Info secundária */}
      <Section className="my-0 py-16 md:py-20 bg-secondary/40">
        <div className="text-center max-w-2xl mb-12">
          <Eyebrow>Outras informações</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
            Tudo o que você precisa saber
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 w-full">
          {SECONDARY_INFO.map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-8 rounded-2xl border border-nedel-highlight-gray/40 bg-white"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-nedel-blue/10 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-nedel-black-blue mb-2">
                {item.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm whitespace-pre-line">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Demonstração */}
      <Section className="my-0 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center w-full">
          <div>
            <Eyebrow>Demonstração gratuita</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nedel-black-blue mt-4">
              7 dias pra você sentir o sistema na sua operação
            </h2>
            <p className="text-foreground/80 leading-relaxed mt-5">
              Antes de você decidir qualquer coisa, a gente monta uma
              demonstração com os módulos que fazem sentido pro seu negócio.
              Você roda por uma semana, faz testes reais, e só então
              conversamos sobre proposta.
            </p>
            <ul className="space-y-3 mt-6 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-nedel-blue font-semibold shrink-0">•</span>
                <span>Sem cartão de crédito</span>
              </li>
              <li className="flex gap-3">
                <span className="text-nedel-blue font-semibold shrink-0">•</span>
                <span>Implantação e treinamento remoto inclusos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-nedel-blue font-semibold shrink-0">•</span>
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
          <div className="p-8 rounded-2xl bg-gradient-to-br from-nedel-blue/5 via-transparent to-nedel-blue/5 border border-nedel-highlight-gray/40">
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin className="size-5 text-nedel-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Endereço
                  </p>
                  <p className="text-nedel-black-blue mt-1">
                    Itapiranga — Santa Catarina, Brasil
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="size-5 text-nedel-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    E-mail
                  </p>
                  <a
                    href="mailto:contato@nedel.inf.br"
                    className="text-nedel-black-blue hover:text-nedel-blue transition-colors mt-1 inline-block"
                  >
                    contato@nedel.inf.br
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="size-5 text-nedel-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Atendimento
                  </p>
                  <p className="text-nedel-black-blue mt-1">
                    Seg a sex: 7h30 às 18h
                    <br />
                    Sáb: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
