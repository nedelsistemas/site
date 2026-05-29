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
    body: "Mais de 100 empresas — postos de combustível, mercados, padarias, varejos e distribuidoras — operam diariamente com os sistemas Digiadm, Diginfc-e e Digivendas em Santa Catarina, Rio Grande do Sul e Paraná.",
  },
];

export const VALUES: Value[] = [
  {
    Icon: Handshake,
    accent: "vivid",
    title: "Atendimento humano",
    body: "Nada de robô ou ticket sem retorno. Quem atende você conhece o seu sistema, a sua rotina e, muitas vezes, o seu nome.",
  },
  {
    Icon: HeartHandshake,
    accent: "vivid",
    title: "Proximidade que se sente",
    body: "Somos do interior e atendemos como gente do interior atende — com respeito, paciência e o tempo que cada cliente precisa.",
  },
  {
    Icon: Compass,
    accent: "blue",
    title: "Evolução constante",
    body: "O Digiadm está na versão 3.1.22 porque acreditamos que software bom é software que melhora todo mês. Sem você precisar pedir.",
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
  { count: "100+", label: "Clientes ativos" },
  { count: "3", label: "Estados atendidos" },
  { count: "1994", label: "Fundação em Itapiranga" },
];

export const SEGMENTS: string[] = [
  "Postos de combustível",
  "Mercados e mercearias",
  "Padarias e confeitarias",
  "Lojas de varejo",
  "Distribuidoras",
  "Prestadores de serviço",
];
