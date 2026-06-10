import fs from "node:fs";
import path from "node:path";

export type Client = { src: string; alt: string };

const RENDERABLE = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".svg",
  ".webp",
  ".avif",
  ".gif",
]);

const STOPWORDS = new Set(["de", "do", "da", "dos", "das", "e"]);

const NAME_OVERRIDES: Record<string, string> = {
  agritec: "Agropecuária Agritec",
  agrojardim: "AgroJardim",
  almeida: "Almeida Injeção Diesel",
  annakai: "Anna Brasil Uniformes",
  artmoveis: "Art Móveis",
  barros: "Barros Transportes",
  bemtevitintas: "Bem Te Vi Tintas",
  berna: "Berna - A Loja que é Moda",
  bonafe: "Bonafé Materiais de Construção",
  bortoluzzi: "Mercado Bortoluzzi",
  bressler: "Agropecuária Bressler",
  bresslercobrancas: "Bressler Assessoria em Cobranças",
  camargo: "Camargo Center - Importações e Distribuição de Presente Ltda",
  casanegocio: "Casa do Bom Negócio",
  catarinense: "Estofados Catarinense",
  codigov: "Código V",
  coletto: "Coletto Decorações",
  confianca: "Relojoaria Confiança",
  cooafi: "Cooperativa da Agricultura Familiar de Itapiranga - COOAFI",
  coopafa: "Cooperativa Mista da Agricultura Familiar de São João do Oeste",
  cooperdes: "Cooperativa dos Agricultores Familiares de Descanso - COOPERDES",
  dady: "Dadylandy - Papelaria e Livraria",
  dale: "Panificadora Dale",
  delavy: "Delavy Terraplanagens",
  dorigon: "Agrodorigon",
  farmavet: "Farmavet - Concultoria e Assessoria Veterinária",
  "feluma-materiais": "Feluma Materiais Elétricos",
  "feluma-solucoes": "Feluma Soluções em Energia",
  "feluma-solar": "Feluma Energia Solar e Engenharia",
  ficagna: "Ficagna Modas",
  francescon: "Comercial Francescon",
  glam: "GLAM Boutique",
  guisa: "Supermercado Guisa",
  "hammes-tintas": "Central Tintas",
  holler: "Holler Uniformes",
  ilson: "Moto Peças Ilson",
  inatec: "Inatec - Contabilidade e Consultoria",
  itaberaba: "Itaberaba Auto Peças",
  jafales: "Jafales - Atacado e Varejo",
  jm: "JM Lubrificantes",
  jung: "Padaria Jung",
  kallea: "Kallea - Amor em cada detalhe",
  kiba: "Kiba Elétrica e Ferragem",
  laboeste: "LabOeste - Análises Clínicas Veterinárias",
  lauro: "Oficina do Lauro",
  ld: "Auto Posto Boa Viagem",
  lori: "Confecções Cristo Rei",
  luana: "Luana Presentes",
  luar: "Mercado Luar - Comércio de Bebidas Parcianello",
  maldaner: "Agro Maldaner - Equipamentos para Suinocultura",
  mariele: "Mariele Móveis",
  mm: "MM Elétrica",
  piovezani: "Piovezani - Madeira e Materiais de Construção",
  point: "Arimar Center",
  ratinho: "Ratinho Mecânica Diesel",
  rato: "Rato Transportes",
  ribas: "Flávia Ribas",
  rorai: "Roraí - Amor para sua casa",
  royer: "Royer Encomendas",
  saoluiz: "Mecânica São Luiz",
  sare: "Sare Modas",
  sausen: "Rafael Lãs e Linhas",
  sc: "SC Comércio de Pneus LTDA",
  schoenberger: "Schoenberger Móveis e Eletro",
  sirimar: "Sirimar Centro Automotivo",
  sunshine: "Sunshine Presentes",
  stm: "STM Industrial",
  thome: "Madeireiras Thomé",
  tipo: "Tipo Calçados e Esportes",
  tripigs: "Tripigs",
  valar: "Valar Alimentos",
  viveiro: "Viveiro de Mudas São João",
};

function slugToName(slug: string): string {
  return slug
    .split(/[-_]/)
    .map((word, i) => {
      if (i > 0 && STOPWORDS.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function loadClients(): Client[] {
  const dir = path.join(process.cwd(), "public", "logotipos", "figma");
  const files = fs.readdirSync(dir);

  return files
    .filter((f) => RENDERABLE.has(path.extname(f).toLowerCase()))
    .map((f) => {
      const slug = path.basename(f, path.extname(f));
      const alt = NAME_OVERRIDES[slug] ?? slugToName(slug);
      return { src: `/logotipos/figma/${f}`, alt };
    })
    .sort((a, b) => a.alt.localeCompare(b.alt, "pt-BR"));
}

export const CLIENTS: Client[] = loadClients();
