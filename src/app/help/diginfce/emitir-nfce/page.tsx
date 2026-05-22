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
    title: "Abra o caixa",
    body: "Antes da primeira venda do dia, abra o caixa em PDV > Abertura. Informe o fundo de troco (dinheiro físico já presente na gaveta). Sem abertura, o sistema não libera vendas — é o que vincula cada cupom emitido a um operador e a um turno.",
  },
  {
    title: "Inicie uma nova venda",
    body: "Na tela principal, clique em Nova Venda ou pressione F2. Se o cliente fornecer CPF/CNPJ, informe no campo de identificação. Para vendas sem identificação fiscal, basta deixar em branco — o cupom sai com 'Consumidor não identificado'.",
  },
  {
    title: "Adicione os itens",
    body: "Bipe o código de barras com leitor ou digite o código/EAN do produto. Pra produtos sem barras (pesáveis), busque pelo nome com F3. A quantidade pode ser ajustada com a tecla * antes do código (ex: 3*1234 vende 3 unidades do item 1234).",
  },
  {
    title: "Aplique descontos, se houver",
    body: "Desconto em valor (R$) ou percentual (%) pode ser dado por item ou no total da venda. Se o operador não tem permissão, o sistema pede senha de supervisor. Descontos acima do limite configurado são bloqueados — evita ajustes indevidos no caixa.",
  },
  {
    title: "Finalize o pagamento",
    body: "Pressione F10 ou clique em Finalizar. Escolha a forma de pagamento (Dinheiro, Débito, Crédito, PIX, Vale). Você pode combinar várias — ex: parte em dinheiro, parte em cartão. Para débito/crédito com TEF, o sistema dispara automaticamente o PinPad.",
  },
  {
    title: "Transmita a NFC-e",
    body: "Com o pagamento confirmado, o Diginfc-e assina o XML e envia pra SEFAZ. Em condições normais a autorização sai em 2-4 segundos. Se a SEFAZ rejeitar, o sistema mostra o código de retorno (ex: 539, 778) e bloqueia o cupom até você corrigir.",
  },
  {
    title: "Imprima o DANFE ou compartilhe",
    body: "Com a autorização, o cupom é impresso automaticamente. Você também pode enviar por e-mail/WhatsApp informando o contato do cliente. O QR Code no cupom permite que o consumidor consulte a nota no site da SEFAZ sem precisar guardar o papel.",
  },
];

export default function EmitirNFCe() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <Link
          href="/help/diginfce"
          className="hover:text-nedel-blue transition-colors"
        >
          Diginfc-e
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">Como emitir uma NFC-e</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Diginfc-e • Tutorial
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Como emitir uma NFC-e
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Da abertura do caixa à finalização do cupom fiscal eletrônico — o
          fluxo completo de uma venda no Diginfc-e.
        </p>
        <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            4 min de leitura
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
          certifique-se de que o certificado digital está válido, a impressora
          térmica está conectada, o ambiente fiscal está em Produção e o caixa
          foi aberto com fundo de troco.
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
                Rejeição 539 (Duplicidade):
              </strong>{" "}
              a SEFAZ já tem um cupom com o mesmo número/série. Geralmente
              ocorre quando o caixa retransmite em modo offline — basta
              cancelar a tentativa e prosseguir, a sequência avança sozinha.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Rejeição 778 (NCM inexistente):
              </strong>{" "}
              o NCM cadastrado no produto não existe na TIPI vigente. Atualize o
              NCM no Digiadm pelo cadastro do produto e tente novamente.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Rejeição 215 (Valor total inválido):
              </strong>{" "}
              soma dos itens não bate com o total da nota — quase sempre é
              arredondamento de desconto. Recalcule a venda e retransmita.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Tempo de espera esgotado:
              </strong>{" "}
              SEFAZ instável ou sem retorno. O Diginfc-e oferece entrar em
              contingência offline — confirme e siga vendendo; as notas serão
              transmitidas quando a SEFAZ voltar (limite de 24h).
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
              Use{" "}
              <kbd className="px-2 py-0.5 text-xs font-mono bg-secondary border border-nedel-highlight-gray/40 rounded">
                F2
              </kbd>{" "}
              para iniciar uma venda nova,{" "}
              <kbd className="px-2 py-0.5 text-xs font-mono bg-secondary border border-nedel-highlight-gray/40 rounded">
                F3
              </kbd>{" "}
              pra buscar produto,{" "}
              <kbd className="px-2 py-0.5 text-xs font-mono bg-secondary border border-nedel-highlight-gray/40 rounded">
                F10
              </kbd>{" "}
              pra finalizar.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Para cancelar uma NFC-e autorizada, você tem até 30 minutos após
              a autorização (limite legal). Após esse prazo, o cancelamento só
              é possível por inutilização ou nota de devolução.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Sangria deve ser feita sempre que o caixa acumular dinheiro além
              do limite definido — não espere o final do dia. Reduz risco e
              facilita o fechamento.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Se o cliente quiser CPF na nota depois de finalizada, o ideal é
              cancelar (se ainda estiver na janela de 30min) e refazer. Pós-30
              min, oriente a guardar o cupom original.
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
              href="/help/diginfce"
              className="group inline-flex items-center gap-2 text-nedel-black-blue hover:text-nedel-blue transition-colors"
            >
              Visão geral do Diginfc-e
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/help/digiadm/emitir-nfe"
              className="group inline-flex items-center gap-2 text-nedel-black-blue hover:text-nedel-blue transition-colors"
            >
              Como emitir uma NF-e (Digiadm)
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
