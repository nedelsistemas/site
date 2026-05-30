import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Factory,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import Digiadm from "@/assets/mock/digiadm.png";
import Diginfce from "@/assets/mock/diginfce.png";
import Digientregas from "@/assets/mock/digientregas.png";

export type Stat = {
  count: string;
  title: string;
  description: string;
};

export type Solution = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export type App = {
  type: string;
  name: string;
  description: string;
  features: string[];
  pathImage: StaticImageData;
};

export type Step = {
  title: string;
  description: string;
};

export const STATS: Stat[] = [
  {
    count: "30+",
    title: "Anos de mercado",
    description:
      "Mais de três décadas entregando estabilidade e evolução tecnológica contínua para o mercado brasileiro.",
  },
  {
    count: "147+",
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

export const SOLUTIONS: Solution[] = [
  {
    Icon: ShoppingBag,
    title: "Comércios & Varejo",
    description:
      "Gestão de estoque, frente de caixa ágil e integração com múltiplos canais de venda.",
  },
  {
    Icon: Factory,
    title: "Indústrias",
    description:
      "Controle de produção (PCP), ordens de serviço e gestão de matérias-primas.",
  },
  {
    Icon: Briefcase,
    title: "Prestadores de serviço",
    description:
      "Emissão de NFS-e, gestão de contratos e acompanhamento de rentabilidade por projeto.",
  },
  {
    Icon: TrendingUp,
    title: "Empresas em crescimento",
    description:
      "Profissionalize processos, centralize dados e ganhe visibilidade para escalar com segurança.",
  },
];

export const APPS: App[] = [
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

export const STEPS: Step[] = [
  {
    title: "Necessidades",
    description:
      "Você nos conta o que a operação precisa: módulos, integrações e particularidades do seu segmento.",
  },
  {
    title: "Enquadramento",
    description:
      "Pedimos o CNPJ pra consultar o regime tributário e validar o que se aplica à sua empresa.",
  },
  {
    title: "Orçamento",
    description:
      "Com base nas necessidades e nos módulos contratados, montamos uma proposta sob medida.",
  },
  {
    title: "Implantação remota",
    description:
      "Configuração, migração e treinamento da equipe — tudo feito remotamente, sem parar a operação.",
  },
];
