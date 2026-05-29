import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Headphones,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export type PrimaryChannel = {
  Icon: LucideIcon;
  accent: "green" | "vivid";
  label: string;
  value: string;
  description: string;
  cta: {
    text: string;
    href: string;
    external: boolean;
  };
};

export type SecondaryInfo = {
  Icon: LucideIcon;
  accent: "vivid" | "blue";
  title: string;
  body: string;
};

export const PRIMARY_CHANNELS: PrimaryChannel[] = [
  {
    Icon: MessageCircle,
    accent: "green",
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
    accent: "vivid",
    label: "Telefone fixo",
    value: "(49) 3678-7275",
    description:
      "Linha adicional pra atendimento por voz. Se a primeira estiver ocupada, ligue aqui.",
    cta: { text: "Ligar agora", href: "tel:+554936787275", external: false },
  },
];

export const SECONDARY_INFO: SecondaryInfo[] = [
  {
    Icon: MapPin,
    accent: "blue",
    title: "Onde estamos",
    body: "Av. Beira Rio, 349 - Centro, Itapiranga/SC - extremo oeste catarinense.",
  },
  {
    Icon: Clock,
    accent: "blue",
    title: "Horário de atendimento",
    body: "Segunda a sexta: 8h às 18h\nSábados: 8h às 12h",
  },
  {
    Icon: Headphones,
    accent: "vivid",
    title: "Suporte técnico",
    body: "Clientes ativos têm atendimento direto pela mesma linha. Suporte humano, sem chatbot, sem fila.",
  },
];
