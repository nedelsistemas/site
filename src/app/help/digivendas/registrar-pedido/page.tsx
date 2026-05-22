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
    title: "Faça a sincronização de início de dia",
    body: "Antes da primeira visita, abra o Digivendas com sinal de internet e toque em Sincronizar. O app baixa novos cadastros de cliente, atualizações de preço, estoque do dia e roteiro de visita. Sem isso, você pode lançar pedido com preço defasado.",
  },
  {
    title: "Escolha o cliente da visita",
    body: "Na tela principal, busque o cliente pela rota do dia, pelo nome ou pelo CNPJ. Os dados (limite de crédito, condição de pagamento padrão, última compra) aparecem na ficha. Se for cliente novo, toque em + Novo cliente e preencha — o cadastro sobe junto com o pedido na próxima sincronização.",
  },
  {
    title: "Confira limite de crédito e pendências",
    body: "Na ficha do cliente, veja se há títulos vencidos ou se o limite de crédito está estourado. Lançar pedido pra cliente com financeiro pendente pode bloquear o faturamento no Digiadm — verifique antes de perder a visita.",
  },
  {
    title: "Inicie um novo pedido",
    body: "Toque em Novo Pedido. Selecione a tabela de preço aplicável (a padrão do cliente já vem marcada) e a condição de pagamento. Se for venda à vista com desconto especial, defina aqui — o desconto fica registrado pra apuração de comissão.",
  },
  {
    title: "Adicione os produtos",
    body: "Use a busca por nome, código ou EAN. Pra cada item informe quantidade. O catálogo mostra estoque disponível no Digiadm — se faltar, o item aparece em vermelho. Atenção: o estoque é uma fotografia da última sincronização, então pedidos grandes em produto crítico podem precisar de confirmação no escritório.",
  },
  {
    title: "Revise e finalize o pedido",
    body: "Na revisão, confirme produtos, preço, desconto, condição de pagamento e prazo de entrega. Se algum desconto estiver acima do limite do seu perfil, o pedido entra no Digiadm com status 'aguardando aprovação' e o gerente comercial libera ou rejeita.",
  },
  {
    title: "Salve e sincronize",
    body: "Salvar grava o pedido localmente. A sincronização (manual ou automática quando há sinal) envia o pedido pro Digiadm. Recomendamos sincronizar várias vezes ao dia — não acumule a carteira da semana num único upload.",
  },
];

export default function RegistrarPedido() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <Link
          href="/help/digivendas"
          className="hover:text-nedel-blue transition-colors"
        >
          Digivendas
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">Como registrar um pedido</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digivendas • Tutorial
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Como registrar um pedido
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          O fluxo do pedido em campo — sincronização, escolha do cliente,
          catálogo, finalização e envio pro Digiadm. Funciona inclusive sem
          internet.
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
          confirme que o vendedor está cadastrado no Digiadm com a zona
          correta, que existem tabelas de preço configuradas e que o catálogo
          de produtos foi marcado como disponível pra força de vendas.
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
          Trabalhando sem internet (modo offline)
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-3">
          O Digivendas continua funcionando 100% sem conexão. O que muda:
        </p>
        <ul className="space-y-3 text-foreground/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Preço e estoque mostrados são da{" "}
              <strong className="text-nedel-black-blue">
                última sincronização
              </strong>{" "}
              — se faz dois dias que você não sincroniza, os dados estão
              velhos.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Pedidos ficam armazenados no aparelho e sobem na próxima
              sincronização. Não tem limite prático de quantos pedidos podem
              ficar pendentes, mas é boa prática enviar ainda no dia da
              visita.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Cadastro de cliente novo funciona offline. Ele sobe quando o
              sinal voltar e fica disponível pro restante da equipe na próxima
              sincronização deles.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Conferência de limite de crédito e pendência financeira
              <strong className="text-nedel-black-blue">
                {" "}
                não atualiza{" "}
              </strong>
              no offline. Vendas grandes pra cliente já em atraso podem
              voltar bloqueadas — confirme com o financeiro se houver dúvida.
            </span>
          </li>
        </ul>
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
                Preço diferente do que o cliente esperava:
              </strong>{" "}
              quase sempre é tabela errada ou sincronização atrasada. Verifique
              a tabela vinculada ao cliente e force uma sincronização antes de
              refazer o pedido.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Pedido bloqueado por crédito no Digiadm:
              </strong>{" "}
              cliente excedeu o limite ou tem título vencido. Encaminhe ao
              financeiro pra liberar — não tente "burlar" abrindo pedido em
              nome de terceiro.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Produto sumiu do catálogo:
              </strong>{" "}
              o item foi inativado, retirado da força de vendas ou está fora
                  da curva permitida pra você. Confirme com o supervisor.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Sincronização travada:
              </strong>{" "}
              feche e abra o app, confirme que está com sinal e tente
              novamente. Se persistir, ligue pro suporte — pode ser problema
              de licença ou versão.
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
              Sincronize ao começar e ao terminar o dia, no mínimo. Em zonas
              de sinal ruim, ative a sincronização automática em segundo plano
              — quando passar por zona coberta, o app sobe sozinho.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Use a função "copiar último pedido" pra clientes recorrentes.
              Acelera a visita e mantém histórico de mix.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Mantenha a bateria do tablet/celular controlada. Carregador
              veicular evita perda de visita em dia cheio.
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
              href="/help/digivendas"
              className="group inline-flex items-center gap-2 text-nedel-black-blue hover:text-nedel-blue transition-colors"
            >
              Visão geral do Digivendas
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
              Cadastrando vendedores e perfis (Digiadm)
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
