import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  Package,
  PlayCircle,
  Receipt,
  Sparkles,
  Truck,
  Wallet,
} from "lucide-react";
import DiginfceMock from "@/assets/mock/diginfce.png";
import DigientregasMock from "@/assets/mock/digientregas.png";

export type ProductOverview = {
  name: string;
  type: string;
  Icon: LucideIcon;
  imageSrc?: string;
  primary?: boolean;
  comingSoon?: boolean;
};

export type DigiadmModuleGroup = {
  Icon: LucideIcon;
  accent: "vivid" | "blue";
  category: string;
  items: string[];
};

export type Product = {
  slug: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  features: { text: string; soon?: boolean }[];
  image: StaticImageData | null;
  demoGif?: { src: string; width: number; height: number };
  platform: string;
  Icon: LucideIcon;
  show: boolean;
  comingSoon?: boolean;
};

export type PricingPillar = {
  Icon: LucideIcon;
  accent: "vivid" | "blue";
  title: string;
  body: string;
};

export const PRODUCTS_OVERVIEW: ProductOverview[] = [
  {
    name: "Digiadm",
    type: "ERP",
    Icon: LayoutDashboard,
    imageSrc: "/apps/mono/digiadm.png",
    primary: true,
  },
  {
    name: "Diginfc-e",
    type: "PDV",
    Icon: Receipt,
    imageSrc: "/apps/mono/diginfce.png",
  },
  {
    name: "Digivendas",
    type: "Vendas externas",
    Icon: Briefcase,
    imageSrc: "/apps/mono/digivendas.png",
  },
  {
    name: "Digientregas",
    type: "Logística",
    Icon: Truck,
    imageSrc: "/apps/mono/digientregas.png",
  },
  {
    name: "Digiexpedição",
    type: "Expedição",
    Icon: Package,
    imageSrc: "/apps/mono/digiexpedicao.png",
    comingSoon: true,
  },
];

export const DIGIADM_MODULE_GROUPS: DigiadmModuleGroup[] = [
  {
    Icon: Receipt,
    accent: "blue",
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
    accent: "vivid",
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
    accent: "blue",
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
    accent: "vivid",
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

export const SATELLITES: Product[] = [
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
    Icon: Receipt,
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
    Icon: Briefcase,
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
    Icon: Truck,
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
    Icon: Package,
    show: true,
    comingSoon: true,
  },
];

export const PRICING_PILLARS: PricingPillar[] = [
  {
    Icon: Wallet,
    accent: "blue",
    title: "Cobrança mensal",
    body: "Sem investimento inicial pesado. Você paga uma mensalidade alinhada ao porte da sua empresa e aos módulos contratados.",
  },
  {
    Icon: HelpCircle,
    accent: "vivid",
    title: "Proposta sob consulta",
    body: "O valor varia com o enquadramento da empresa e os módulos necessários. Conversamos antes pra fazer uma proposta justa.",
  },
  {
    Icon: PlayCircle,
    accent: "vivid",
    title: "Demonstração de 7 dias",
    body: "Você roda o sistema antes de decidir. Tempo suficiente pra sentir como é a operação no dia a dia.",
  },
  {
    Icon: Headphones,
    accent: "blue",
    title: "Implantação inclusa",
    body: "Implementação e treinamento remoto gratuitos. Nossa equipe acompanha você até a empresa estar 100% rodando no sistema.",
  },
];
