import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Nedel Sistemas coleta, utiliza e protege seus dados pessoais, em conformidade com a LGPD.",
  robots: { index: true, follow: false },
};

export default function Privacy() {
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
          Política de Privacidade
        </h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Como a Nedel Sistemas coleta, utiliza e protege os seus dados
          pessoais.
        </p>
        <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            Última atualização: 21 de maio de 2026
          </span>
        </div>
      </header>

      <div className="flex gap-3 p-4 rounded-xl bg-nedel-blue/5 border border-nedel-blue/20 mb-10">
        <ShieldCheck className="size-5 text-nedel-blue shrink-0 mt-0.5" />
        <div className="text-sm text-foreground/80 leading-relaxed">
          <strong className="text-nedel-black-blue">
            Conformidade com a LGPD:
          </strong>{" "}
          esta política está alinhada à Lei Geral de Proteção de Dados Pessoais
          (Lei nº 13.709/2018). Tratamos as suas informações com transparência,
          finalidade específica e responsabilidade.
        </div>
      </div>

      <div className="prose-policy space-y-10">
        <section>
          <p className="text-foreground/80 leading-relaxed">
            A sua privacidade é importante para nós. É política da Nedel
            Sistemas LTDA respeitar a sua privacidade em relação a qualquer
            informação sua que possamos coletar no site{" "}
            <a
              href="https://sistemas.nedel.inf.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nedel-blue hover:underline"
            >
              sistemas.nedel.inf.br
            </a>{" "}
            e em outros serviços que operamos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            1. Coleta de informações
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço — como cadastro de clientes,
            emissão de licenças, atendimento de suporte ou comunicação
            comercial. A coleta é feita por meios justos e legais, sempre com o
            seu conhecimento e consentimento. Você é livre para recusar a nossa
            solicitação de informações pessoais, entendendo que talvez não
            possamos fornecer alguns dos serviços desejados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            2. Uso das informações
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Utilizamos os dados coletados exclusivamente para as finalidades
            informadas no momento da coleta: prestação dos serviços contratados,
            cumprimento de obrigações fiscais, suporte técnico e comunicação
            sobre atualizações dos sistemas. Não utilizamos seus dados para
            decisões automatizadas que afetem direitos ou interesses do titular.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            3. Compartilhamento de dados
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Não compartilhamos informações de identificação pessoal
            publicamente ou com terceiros, exceto quando exigido por lei,
            quando necessário para o cumprimento de obrigações regulatórias
            (como o envio de documentos fiscais à SEFAZ) ou quando você
            autorizar expressamente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            4. Armazenamento e segurança
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Retemos as informações coletadas apenas pelo tempo necessário para
            fornecer o serviço solicitado ou cumprir obrigações legais. Quando
            armazenamos dados, protegemos com meios comercialmente aceitáveis
            para evitar perdas, roubos e acessos, divulgações, cópias, usos ou
            modificações não autorizados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            5. Seus direitos como titular
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Em conformidade com a LGPD, você tem direito a:
          </p>
          <ul className="space-y-3 text-foreground/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                <strong className="text-nedel-black-blue">
                  Confirmação e acesso:
                </strong>{" "}
                saber se tratamos seus dados e obter cópia deles.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                <strong className="text-nedel-black-blue">
                  Correção:
                </strong>{" "}
                solicitar a atualização de dados incompletos, inexatos ou
                desatualizados.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                <strong className="text-nedel-black-blue">
                  Eliminação:
                </strong>{" "}
                solicitar a exclusão de dados tratados com base no
                consentimento, ressalvadas as hipóteses de guarda obrigatória.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                <strong className="text-nedel-black-blue">
                  Portabilidade:
                </strong>{" "}
                receber seus dados em formato estruturado, quando aplicável.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                <strong className="text-nedel-black-blue">
                  Revogação do consentimento:
                </strong>{" "}
                retirar o consentimento a qualquer momento, sem prejuízo de
                tratamentos já realizados.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            6. Cookies
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Utilizamos apenas cookies essenciais ao funcionamento do site (como
            preferências de sessão). Não veiculamos publicidade comportamental
            nem utilizamos cookies de afiliados ou rastreamento de terceiros
            para fins publicitários neste site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            7. Links externos
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            O nosso site pode conter links para sites externos que não são
            operados por nós. Não temos controle sobre o conteúdo e as práticas
            desses sites e não nos responsabilizamos pelas respectivas
            políticas de privacidade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            8. Compromisso do usuário
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Ao utilizar o site, o usuário se compromete a fazer uso adequado
            dos conteúdos e da informação que a Nedel Sistemas LTDA oferece,
            comprometendo-se a:
          </p>
          <ul className="space-y-3 text-foreground/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                Não se envolver em atividades ilegais ou contrárias à boa-fé e
                à ordem pública;
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                Não difundir propaganda ou conteúdo de natureza racista,
                xenofóbica, ligados a jogos de azar, pornografia ilegal,
                apologia ao terrorismo ou que atentem contra os direitos
                humanos;
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-nedel-blue font-semibold shrink-0">•</span>
              <span>
                Não causar danos aos sistemas físicos (hardware) e lógicos
                (software) da Nedel Sistemas LTDA, de seus fornecedores ou de
                terceiros — incluindo a introdução ou disseminação de vírus ou
                quaisquer outros softwares maliciosos.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            9. Alterações nesta política
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Podemos atualizar esta Política de Privacidade periodicamente para
            refletir mudanças em nossos serviços ou na legislação aplicável. A
            data da última atualização está indicada no topo desta página. O
            uso continuado do site após qualquer alteração será considerado
            aceitação da política revisada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-nedel-black-blue mb-4">
            10. Contato
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Se você tiver dúvidas sobre como tratamos seus dados pessoais ou
            quiser exercer qualquer um dos direitos previstos na LGPD, entre em
            contato conosco pelo telefone{" "}
            <a
              href="tel:+554936787274"
              className="text-nedel-blue hover:underline"
            >
              (49) 3678-7274
            </a>{" "}
            ou pelos demais canais de atendimento disponíveis no rodapé do
            site.
          </p>
        </section>
      </div>
    </>
  );
}
