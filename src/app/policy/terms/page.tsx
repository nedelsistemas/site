import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    "Condições gerais para uso do site da Nedel Sistemas e dos materiais aqui disponibilizados.",
  robots: { index: true, follow: false },
};

export default function Terms() {
  return (
    <>
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-nedel-blue transition-colors mb-6"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-0.5 transition-transform"
        />
        Voltar para o início
      </Link>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nedel-blue">
          Políticas
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nedel-black-blue mt-3">
          Termos e Condições
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Condições gerais para uso do site da Nedel Sistemas e dos materiais
          aqui disponibilizados.
        </p>
        <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            Última atualização: 21 de maio de 2026
          </span>
        </div>
      </header>

      <div className="flex gap-3 p-4 rounded-xl bg-nedel-blue/5 border border-nedel-blue/20 mb-10">
        <FileText className="size-5 text-nedel-blue shrink-0 mt-0.5" />
        <div className="text-sm text-foreground/80 leading-relaxed">
          <strong className="text-nedel-black-blue">Importante:</strong> estes
          termos regem o uso do site institucional (
          <a
            href="https://sistemas.nedel.inf.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nedel-blue hover:underline"
          >
            sistemas.nedel.inf.br
          </a>
          ). O uso dos sistemas Digiadm, Diginfc-e, Digivendas e demais
          aplicações da Nedel é regido por contratos de licença próprios,
          firmados no momento da contratação.
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            1. Aceitação dos termos
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Ao acessar o site da Nedel Sistemas LTDA, você concorda em cumprir
            estes termos de uso, todas as leis e regulamentos aplicáveis, e
            assume a responsabilidade pelo cumprimento das leis locais
            aplicáveis ao seu acesso. Caso não concorde com algum destes termos,
            está proibido de usar ou acessar este site. Os materiais aqui
            contidos são protegidos pelas leis de direitos autorais e de marcas
            comerciais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            2. Uso de licença
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) disponíveis no site da Nedel
            Sistemas, apenas para visualização transitória, pessoal e não
            comercial. Trata-se de concessão de licença, não de transferência
            de titularidade. Sob esta licença, você não pode:
          </p>
          <ul className="space-y-3 text-foreground/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>modificar ou copiar os materiais;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                utilizar os materiais para qualquer finalidade comercial ou
                para exibição pública;
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                tentar descompilar ou fazer engenharia reversa de qualquer
                software disponibilizado;
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                remover quaisquer notações de direitos autorais ou de
                propriedade dos materiais;
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                transferir os materiais para terceiros ou espelhá-los em outro
                servidor.
              </span>
            </li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mt-4">
            Esta licença será automaticamente rescindida se você violar
            qualquer uma dessas restrições, e poderá ser rescindida pela Nedel
            Sistemas a qualquer momento. Ao encerrar a visualização ou após o
            término da licença, você deve apagar todos os materiais baixados
            em sua posse, seja em formato eletrônico ou impresso.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            3. Isenção de responsabilidade
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Os materiais no site da Nedel Sistemas são fornecidos &ldquo;como
            estão&rdquo;. A Nedel Sistemas não oferece garantias, expressas ou
            implícitas, e isenta-se de todas as demais garantias, incluindo,
            sem limitação, garantias implícitas ou condições de
            comercialização, adequação a uma finalidade específica, ou não
            violação de propriedade intelectual ou de outros direitos.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Além disso, a Nedel Sistemas não garante nem faz qualquer
            representação relativa à precisão, aos resultados prováveis ou à
            confiabilidade do uso dos materiais em seu site ou de outra forma
            relacionados a esses materiais ou a sites vinculados a este.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            4. Limitações
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Em nenhuma hipótese a Nedel Sistemas ou seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados, lucros cessantes ou decorrentes de interrupção
            dos negócios) que resultem do uso ou da incapacidade de usar os
            materiais do site, mesmo que a Nedel Sistemas ou um representante
            autorizado tenha sido notificado, oralmente ou por escrito, da
            possibilidade de tais danos. Como algumas jurisdições não permitem
            limitações em garantias implícitas ou em responsabilidade por
            danos consequentes ou incidentais, essas limitações podem não se
            aplicar a você.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            5. Precisão dos materiais
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Os materiais exibidos no site da Nedel Sistemas podem conter erros
            técnicos, tipográficos ou fotográficos. A Nedel Sistemas não
            garante que qualquer material seja preciso, completo ou atual, e
            pode fazer alterações nos materiais a qualquer momento, sem aviso
            prévio. Entretanto, a Nedel Sistemas não se compromete a atualizar
            os materiais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            6. Links externos
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            A Nedel Sistemas não revisou todos os sites vinculados ao seu
            domínio e não é responsável pelo conteúdo de nenhum site
            vinculado. A inclusão de qualquer link não implica endosso por
            parte da Nedel Sistemas. O uso de qualquer site vinculado é por
            conta e risco do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            7. Modificações
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            A Nedel Sistemas pode revisar estes termos a qualquer momento, sem
            aviso prévio. Ao continuar utilizando este site após eventuais
            alterações, você concorda em ficar vinculado à versão vigente
            destes termos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            8. Lei aplicável e foro
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Estes termos e condições são regidos e interpretados de acordo com
            as leis da República Federativa do Brasil. Fica eleito o foro da
            comarca de Itapiranga, estado de Santa Catarina, para dirimir
            quaisquer controvérsias decorrentes destes termos, com renúncia
            expressa a qualquer outro, por mais privilegiado que seja.
          </p>
        </section>
      </div>
    </>
  );
}
