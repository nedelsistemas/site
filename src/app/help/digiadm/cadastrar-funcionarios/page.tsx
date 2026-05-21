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
    title: "Acesse o cadastro de funcionários",
    body: "No menu principal, vá em Cadastros > Funcionários. A tela lista todos os funcionários ativos. Use o filtro de status para visualizar inativos ou afastados.",
  },
  {
    title: "Clique em Novo funcionário",
    body: 'O botão fica no canto superior direito. O formulário abre na aba Dados Pessoais — preencha os campos obrigatórios marcados com asterisco.',
  },
  {
    title: "Preencha os dados pessoais",
    body: "Nome completo, CPF, RG, data de nascimento, estado civil e endereço. O CPF é validado em tempo real — se já estiver cadastrado, o sistema avisa para evitar duplicidade. Anexe foto e cópia de documentos na aba Anexos.",
  },
  {
    title: "Informe os dados profissionais",
    body: "Na aba Profissional: cargo, departamento, data de admissão, tipo de contrato (CLT, PJ, estagiário), salário e jornada. Esses dados são usados pelo módulo de folha e pelos relatórios gerenciais.",
  },
  {
    title: "Defina o perfil de acesso ao sistema",
    body: 'Na aba Acesso ao Sistema, marque "Habilitar acesso", crie um nome de usuário e selecione o perfil (Caixa, Vendas, Fiscal, Financeiro etc.). O sistema gera uma senha temporária que o funcionário troca no primeiro login.',
  },
  {
    title: "Configure restrições adicionais (opcional)",
    body: "Você pode restringir o acesso por filial, por horário (ex: caixa só acessa entre 8h e 22h) e por dispositivo. Útil para funcionários de loja que não devem operar fora do horário comercial.",
  },
  {
    title: "Salve e envie as credenciais",
    body: 'Ao salvar, o sistema oferece enviar as credenciais por e-mail para o funcionário. Você também pode imprimir uma ficha com usuário, senha temporária e instruções de primeiro acesso.',
  },
];

export default function CadastrarFuncionarios() {
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
        <span className="text-nedel-black-blue">
          Cadastrando funcionários
        </span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Digiadm • Tutorial
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Cadastrando funcionários
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Como criar usuários, definir perfis e controlar o acesso ao sistema.
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
          tenha os perfis de acesso já criados (Administração &gt; Perfis). Se
          ainda não cadastrou, comece por lá — atribuir um perfil errado é
          mais difícil de corrigir depois.
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
          Boas práticas
        </h2>
        <ul className="space-y-3 text-foreground/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Nunca compartilhe logins.
              </strong>{" "}
              Cada funcionário deve ter o próprio usuário. Compartilhamento
              compromete a auditoria — você não consegue saber quem fez o quê.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Use o princípio do menor privilégio.
              </strong>{" "}
              Dê apenas as permissões que a função realmente exige. É sempre
              mais fácil adicionar acesso depois do que recolher um acesso
              indevido.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Inative ao invés de excluir.
              </strong>{" "}
              No desligamento, mude o status para Inativo. Excluir apaga o
              histórico de operações realizadas pelo funcionário — você precisa
              dele para auditoria.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-nedel-blue font-semibold shrink-0">•</span>
            <span>
              <strong className="text-nedel-black-blue">
                Revise os acessos trimestralmente.
              </strong>{" "}
              Funções mudam, projetos terminam. Reserve uma hora a cada três
              meses para revisar quem tem acesso a quê.
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
        </ul>
      </section>
    </article>
  );
}
