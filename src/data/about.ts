import type { LucideIcon } from "lucide-react";
import { Award, Compass, Handshake, HeartHandshake } from "lucide-react";

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export type Value = {
  Icon: LucideIcon;
  accent: "vivid" | "blue";
  title: string;
  body: string;
};

export type Number = {
  count: string;
  label: string;
};

export const TIMELINE: TimelineEntry[] = [
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
    body: "147+ empresas — mercados, padarias, varejos e distribuidoras — operam diariamente com os sistemas Digiadm, Diginfc-e e Digivendas em todo o Brasil.",
  },
];

export const VALUES: Value[] = [
  {
    Icon: Handshake,
    accent: "vivid",
    title: "Atendimento humano",
    body: "Nada de robô. Quem atende você conhece o seu sistema, a sua rotina e, muitas vezes, o seu nome.",
  },
  {
    Icon: HeartHandshake,
    accent: "vivid",
    title: "Proximidade que se sente",
    body: "Somos do interior e atendemos com respeito, paciência e o tempo que cada cliente precisa.",
  },
  {
    Icon: Compass,
    accent: "blue",
    title: "Evolução constante",
    body: "O Digiadm já está na versão 3.1.22. Atualizamos o sistema todo mês — sem custo extra, sem você precisar pedir.",
  },
  {
    Icon: Award,
    accent: "blue",
    title: "Solidez de três décadas",
    body: "Em 30+ anos, atravessamos a chegada da internet, do PIX e da emissão eletrônica. Continuamos aqui — e continuamos aprendendo.",
  },
];

export const NUMBERS: Number[] = [
  { count: "30+", label: "Anos de história" },
  { count: "147+", label: "Clientes ativos" },
  { count: "100%", label: "Implantação remota" },
  { count: "1994", label: "Fundação em Itapiranga" },
];

export const SEGMENTS: string[] = [
  "Agropecuárias e cooperativas",
  "Auto peças, oficinas e postos",
  "Confecções e uniformes",
  "Lojas de moda e calçados",
  "Materiais de construção",
  "Mercados e padarias",
  "Móveis, decoração e eletro",
  "Papelarias e presentes",
  "Prestadores de serviço",
  "Transporte e logística",
  "Veterinárias e laboratórios",
];
