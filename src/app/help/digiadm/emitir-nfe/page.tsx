import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  GraduationCap,
  Info,
  TriangleAlert,
} from "lucide-react";

const STEPS = [
  {
    title: "Acesse o módulo Fiscal",
    body: "No menu principal, vá em Fiscal > NF-e > Emissão. A tela inicial mostra a fila de notas emitidas hoje. Clique em Nova NF-e para iniciar uma emissão.",
  },
  {
    title: "Selecione a natureza da operação",
    body: 'Escolha o tipo de operação (Venda, Devolução, Remessa, Bonificação etc.). A natureza determina o CFOP padrão e a tributação aplicada — escolher errado aqui é o erro fiscal mais comum em emissão de NF-e.',
  },
  {
    title: "Informe o destinatário",
    body: "Digite o CNPJ ou CPF do destinatário. Se ele já estiver cadastrado, os dados são preenchidos automaticamente. Caso contrário, clique em + Novo destinatário e preencha endereço, IE e regime tributário. O Digiadm consulta a SEFAZ para validar a situação cadastral.",
  },
  {
    title: "Adicione os produtos",
    body: "Use o campo de busca para localizar produtos por código, descrição ou EAN. Ao adicionar, informe quantidade e, se necessário, ajuste preço unitário e desconto. Verifique se cada produto tem NCM, CFOP e CSOSN/CST corretos — eles vêm do cadastro mas podem ser sobrepostos manualmente.",
  },
  {
    title: "Configure transporte e pagamento",
    body: 'Na aba Transporte, informe a modalidade do frete (CIF, FOB, contratação por terceiros) e os dados da transportadora se aplicável. Em Pagamento, indique a forma (dinheiro, cartão, boleto, PIX) e o valor. O total da nota deve bater com a soma dos pagamentos.',
  },
  {
    title: "Confira os impostos",
    body: "A aba Totais mostra o cálculo de ICMS, IPI, PIS e COFINS por item e o total da nota. Confira se os valores fazem sentido — uma diferença grande costuma indicar erro de CFOP ou de cadastro do produto.",
  },
  {
    title: "Transmita para a SEFAZ",
    body: 'Clique em Transmitir. O Digiadm assina digitalmente, envia para a SEFAZ e aguarda o retorno. Em condições normais, a autorização sai em até 5 segundos. Se a SEFAZ rejeitar, o sistema mostra o código e a descrição do erro para você corrigir.',
  },
  {
    title: "Imprima ou envie o DANFE",
    body: 'Com a nota autorizada, clique em DANFE para imprimir ou enviar o PDF por e-mail ao cliente. O XML autorizado fica armazenado automaticamente — você pode reenviar a qualquer momento pelo histórico (Fiscal > NF-e > Consultar).',
  },
];

export default function EmitirNFe() {
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
        <span className="text-nedel-black-blue">Como emitir uma NF-e</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digiadm • Tutorial
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Como emitir uma NF-e
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Passo a passo para emitir uma Nota Fiscal Eletrônica de produto
          diretamente do Digiadm.
        </p>
        <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            5 min de leitura
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
          confirme que o certificado digital está instalado e válido, que a
          empresa está em ambiente de Produção e que o produto a ser
          comercializado tem NCM, CFOP padrão e situação tributária
          cadastrados.
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
          Erros comuns
        </h2>
        <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
          <TriangleAlert className="size-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm text-foreground/80 leading-relaxed space-y-2">
            <p>
              <strong className="text-nedel-black-blue">
                Rejeição 539 (Duplicidade de NF-e):
              </strong>{" "}
              já existe uma nota autorizada com o mesmo número. Verifique a
              numeração da série em Configurações Fiscais.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Rejeição 233 (IE do destinatário inválida):
              </strong>{" "}
              a inscrição estadual informada está inválida ou inativa. Marque o
              destinatário como Isento ou peça a IE atualizada.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Rejeição 778 (NCM inexistente):
              </strong>{" "}
              o NCM cadastrado no produto não consta da TIPI vigente. Atualize
              o cadastro do produto.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
          Dicas
        </h2>
        <ul className="space-y-3 text-foreground/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Use a tecla <kbd className="px-2 py-0.5 text-xs font-mono bg-secondary border border-nedel-highlight-gray/40 rounded">F2</kbd>{" "}
              para abrir uma nova NF-e a partir de qualquer tela.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Em caso de rejeição, corrija o erro e clique em Retransmitir — a
              nota mantém o mesmo número e não consome a sequência.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Para cancelar uma NF-e autorizada, você tem até 24 horas após a
              autorização. Acesse Fiscal &gt; NF-e &gt; Consultar e clique em
              Cancelar.
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
              href="/help/digiadm/configuracao-inicial"
              className="group inline-flex items-center gap-2 text-nedel-black-blue hover:text-nedel-blue transition-colors"
            >
              Configuração inicial do Digiadm
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
