import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-nedel-white shadow-2xl border-2 border-nedel-highlight-gray/20 rounded-t-3xl p-5 md:pt-20 pb-10 overflow-clip">
      <div className="relative max-w-6xl mx-auto">
        <div className=" bg-nedel-white shadow-xl border-2 border-nedel-highlight-gray/20 text-black rounded-4xl p-5 md:p-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-10 items-start">
              <div>
                <Image
                  src="/brand/n.svg"
                  alt="Nedel Sistemas"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <p className="text-sm pt-5 text-muted-foreground">
                  Software de gestão que evolui todo mês, com suporte humano e
                  sem fila. Mais de 100 empresas já operam com a gente todos os
                  dias.
                </p>
                <div className="flex gap-4 mt-6">
                  <Link
                    href="https://www.instagram.com/nedelsistemas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/social/ig.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href="https://github.com/nedelsistemas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/social/github.svg"
                      alt="GitHub"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-2 md:justify-items-center">
                <ul>
                  <li className="font-bold mb-3">Produtos</li>
                  <li className="pb-2">
                    <Link
                      href="/products"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Digiadm
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/products"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Diginfc-e
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/products"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Digivendas
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/products"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Digientregas
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/products"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Digiexpedição
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="font-bold mb-3">Recursos</li>
                  <li className="pb-2">
                    <Link
                      href="/help"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Tutoriais
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/downloads"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Downloads
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/contact"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Suporte
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/about"
                      className="text-muted-foreground text-sm hover:text-nedel-blue transition-colors"
                    >
                      Sobre nós
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="font-bold mb-3">Fale conosco</li>
                  <li className="text-muted-foreground text-sm pb-2">
                    Fone e WhatsApp: <br />
                    <a
                      href="https://wa.me/+554936787274"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-nedel-blue transition-colors"
                    >
                      (49) 3678-7274
                    </a>
                  </li>
                  <li className="text-muted-foreground text-sm pb-2">
                    <a
                      href="tel:+554936787275"
                      className="hover:text-nedel-blue transition-colors"
                    >
                      Fone: (49) 3678-7275
                    </a>
                  </li>
                  <li className="text-muted-foreground text-sm pb-2">
                    Itapiranga — SC
                  </li>
                </ul>
                <ul>
                  <li className="font-bold mb-3">Horários</li>
                  <li className="text-muted-foreground text-sm pb-2">
                    Segunda a Sexta: 7h30 às 18h
                  </li>
                  <li className="text-muted-foreground text-sm pb-2">
                    Sábado: 8h às 12h
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-2 md:justify-between md:items-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} · Nedel Sistemas · Todos os
                direitos reservados.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link
                  href="/policy/privacy"
                  className="text-sm text-muted-foreground underline hover:text-nedel-blue transition-colors"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="/policy/terms"
                  className="text-sm text-muted-foreground underline hover:text-nedel-blue transition-colors"
                >
                  Termos e Condições
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/brand/nedel-footer.svg"
          alt=""
          aria-hidden
          width={1400}
          height={900}
          loading="lazy"
          className="mt-6 md:mt-10 w-full max-h-32 md:max-h-none object-cover object-top opacity-60"
        />
      </div>
    </footer>
  );
}
