import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  GraduationCap,
  Info,
} from "lucide-react";

const STEPS = [
  {
    title: "Primeiro acesso e troca de senha",
    body: "Faça login com o usuário admin entregue pela equipe de implantação. No primeiro acesso, o sistema vai exigir a troca da senha padrão. Use uma senha forte (mínimo 8 caracteres, mistura de letras, números e símbolos) e guarde em local seguro.",
  },
  {
    title: "Cadastre os dados da sua empresa",
    body: 'Vá em Configurações > Empresa. Preencha CNPJ, razão social, nome fantasia, endereço completo, regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) e inscrição estadual. Esses dados são usados em todas as emissões fiscais — confira duas vezes.',
  },
  {
    title: "Importe o certificado digital",
    body: "Em Configurações > Fiscal > Certificado, faça upload do arquivo .pfx do seu certificado A1 e informe a senha. Para certificado A3 (em token), instale o driver e selecione o certificado pela leitura. O sistema valida automaticamente a validade.",
  },
  {
    title: "Configure as séries fiscais",
    body: 'Em Fiscal > Séries, cadastre as séries de NF-e, NFC-e e NFS-e que sua empresa usa. Defina a numeração inicial — atenção: se você está migrando de outro sistema, comece pelo próximo número da sua sequência atual para não duplicar.',
  },
  {
    title: "Cadastre o plano de contas",
    body: "Em Financeiro > Plano de Contas, o Digiadm já vem com um plano padrão. Revise e ajuste de acordo com a estrutura contábil acordada com seu contador. Categorias bem definidas aqui economizam horas de trabalho no fechamento.",
  },
  {
    title: "Crie os perfis de acesso",
    body: 'Em Administração > Perfis, crie perfis por função (Caixa, Vendas, Fiscal, Financeiro, Gerente). Defina exatamente quais menus e operações cada perfil acessa. Só depois disso cadastre os funcionários e vincule-os aos perfis.',
  },
  {
    title: "Importe os cadastros iniciais",
    body: "Se você tem uma base de clientes, fornecedores ou produtos em planilha, use o módulo de Importação (Configurações > Importar Dados). O Digiadm aceita CSV e Excel — siga o modelo disponível para download em cada tela de importação.",
  },
  {
    title: "Faça um teste de emissão",
    body: 'Antes de operar para valer, emita uma NF-e de teste para validar a configuração fiscal. Use o ambiente de homologação (Configurações > Fiscal > Ambiente). Só mude para Produção quando a NF-e de teste for autorizada sem erros.',
  },
];

export default function ConfiguracaoInicial() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <Link
          href="/help/digiadm"
          className="hover:text-nedel-blue transition-colors"
        >
          Digiadm
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">Configuração inicial</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digiadm • Tutorial
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Configuração inicial
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          O que configurar nas primeiras horas após a implantação, antes de
          começar a operar.
        </p>
        <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            10 min de leitura
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap size={14} />
            Nível: básico
          </span>
        </div>
      </header>

      <div className="flex gap-3 p-4 rounded-xl bg-nedel-blue/5 border border-nedel-blue/20 mb-10">
        <Info className="size-5 text-nedel-blue shrink-0 mt-0.5" />
        <div className="text-sm text-foreground/80 leading-relaxed">
          <strong className="text-nedel-black-blue">Antes de começar:</strong>{" "}
          tenha em mãos o CNPJ da empresa, o certificado digital (A1 em arquivo
          .pfx ou A3 em token) e os dados de inscrição estadual e municipal.
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-6">
          Passo a passo
        </h2>
        <ol className="flex flex-col gap-6">
          {STEPS.map((step, i) => (
            <li key={i} className="flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full bg-nedel-blue/10 border border-nedel-blue/20 flex items-center justify-center text-nedel-blue font-semibold text-sm">
                {i + 1}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-nedel-black-blue text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
          Dicas
        </h2>
        <ul className="space-y-3 text-foreground/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Faça a configuração com o seu contador junto. Ele vai validar
              regime tributário, CFOPs padrão e o plano de contas.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Documente as decisões: anote por que escolheu cada regime,
              perfil ou série. Em 6 meses, você (ou outra pessoa) vai precisar
              dessa informação.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Antes de ativar a Produção fiscal, emita pelo menos 3 notas de
              teste em ambiente de homologação cobrindo cenários diferentes
              (CFOP de venda, devolução e remessa).
            </span>
          </li>
        </ul>
      </section>

      <section className="border-t border-nedel-highlight-gray/40 pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Veja também
        </h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/help/digiadm/emitir-nfe"
              className="group inline-flex items-center gap-2 text-nedel-black-blue hover:text-nedel-blue transition-colors"
            >
              Como emitir uma NF-e
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/help/digiadm/cadastrar-funcionarios"
              className="group inline-flex items-center gap-2 text-nedel-black-blue hover:text-nedel-blue transition-colors"
            >
              Cadastrando funcionários
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
