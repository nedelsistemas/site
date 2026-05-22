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
    title: "Crie a ordem de entrega",
    body: "Em Entregas > Nova Ordem, informe o pedido de origem (se vier do Digiadm, basta digitar o número da NF-e que tudo é preenchido) ou cadastre manualmente: remetente, destinatário, volume, peso e valor da mercadoria.",
  },
  {
    title: "Confirme o endereço de entrega",
    body: "Endereço completo, com CEP e ponto de referência quando útil. Se o destinatário tem janela de recebimento (horário comercial restrito), informe — o sistema usa essa informação na roteirização.",
  },
  {
    title: "Atribua à rota e ao motorista",
    body: "Defina a rota (Sul, Norte, Centro etc.), o veículo e o motorista responsável. Se a roteirização automática estiver ativa, o sistema sugere o agrupamento por proximidade — você pode aceitar ou ajustar manualmente.",
  },
  {
    title: "Emita o manifesto eletrônico (MDF-e)",
    body: "Antes do despacho, gere o MDF-e que vincula todas as NF-e da rota a um único transporte. O MDF-e é exigido pela SEFAZ pra transporte interestadual e dentro do mesmo estado em vários casos. Sem ele, a fiscalização pode reter a carga.",
  },
  {
    title: "Despache a carga",
    body: "Com o MDF-e autorizado, libere o despacho. O motorista recebe a lista de entregas no app/dispositivo (ou impressa, se for o caso). O status da rota muda pra 'Em rota'.",
  },
  {
    title: "Acompanhe a execução",
    body: "Na tela de Tracking, veja em tempo real qual entrega foi feita, qual está em andamento e quais ficaram pendentes. Pra cada entrega concluída, o motorista anexa foto e assinatura — o comprovante fica disponível pra consulta a qualquer momento.",
  },
  {
    title: "Feche a rota",
    body: "Ao fim do turno, o motorista marca o retorno. Confira: entregues, devolvidas, pendentes. Devoluções entram automaticamente no fluxo de retorno ao estoque, com motivo registrado. A rota só fecha 100% quando todas as ocorrências foram tratadas.",
  },
];

export default function CriarEntrega() {
  return (
    <article className="max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
        <Link href="/help" className="hover:text-nedel-blue transition-colors">
          Ajuda
        </Link>
        <ChevronRight size={14} />
        <Link
          href="/help/digientregas"
          className="hover:text-nedel-blue transition-colors"
        >
          Digientregas
        </Link>
        <ChevronRight size={14} />
        <span className="text-nedel-black-blue">
          Criar e despachar entrega
        </span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digientregas • Tutorial
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Como criar e despachar uma entrega
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Da abertura da ordem ao fechamento da rota — o fluxo operacional
          diário de uma entrega no Digientregas.
        </p>
        <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            6 min de leitura
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
          confirme que o certificado digital está válido (necessário pra MDF-e),
          que os motoristas estão cadastrados com CPF/CNH, e que as rotas e
          veículos da operação já foram criados em Configurações.
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
          Registrando ocorrências
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-3">
          Nem toda entrega sai sem percalço. Quando algo dá errado, registre na
          hora — não confie em "depois eu lanço":
        </p>
        <ul className="space-y-3 text-foreground/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">Ausente:</strong>{" "}
              destinatário não estava no local. Anote o horário, tente reentrega
              em janela diferente.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">Recusa:</strong>{" "}
              cliente recebeu mas não aceitou. Motivo (produto errado, valor
              divergente, mudou de ideia) deve ser registrado — sai como
              devolução no fechamento.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Endereço incorreto:
              </strong>{" "}
              CEP errado ou rua inexistente. Confirme com o comercial e
              atualize o cadastro antes de tentar a próxima vez.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">Avaria:</strong> volume
              danificado no transporte. Foto obrigatória, descrição do dano,
              decisão do destinatário (aceita parcial / recusa total).
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
                MDF-e rejeitado:
              </strong>{" "}
              quase sempre é divergência entre as NF-e vinculadas (peso, valor,
              CNPJ destino) e os dados do manifesto. Confira os totais antes
              de retransmitir.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Motorista não recebe a rota no dispositivo:
              </strong>{" "}
              app desatualizado ou usuário não vinculado à rota. Sincronize o
              app e confirme o vínculo em Configurações &gt; Motoristas.
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Comprovante sem foto/assinatura:
              </strong>{" "}
              o motorista marcou entrega sem coletar comprovante. Configure a
              obrigatoriedade no perfil dele — sem foto, o status não muda pra
              "Concluído".
            </p>
            <p>
              <strong className="text-nedel-black-blue">
                Devolução sem motivo:
              </strong>{" "}
              o sistema bloqueia o fechamento da rota até cada devolução ter
              um código padronizado. Isso é proposital — devolução sem motivo
              vira problema de auditoria depois.
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
              Agrupe entregas urbanas e interurbanas em rotas separadas. O
              perfil de viagem é muito diferente — junto, vira ineficiência.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Use o relatório de "ocorrências por destinatário" pra identificar
              clientes problemáticos. Três tentativas falhas é sinal de
              endereço/janela errado no cadastro, não azar.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              Cancele o MDF-e em até 24h se a rota não saiu — fora desse prazo
              é só por encerramento manual e fica registro fiscal "preso".
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
              href="/help/digientregas"
              className="group inline-flex items-center gap-2 text-nedel-black-blue hover:text-nedel-blue transition-colors"
            >
              Visão geral do Digientregas
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
