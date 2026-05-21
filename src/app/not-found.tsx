import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-20 md:py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
        Erro 404
      </p>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-nedel-black-blue mt-4">
        Página não encontrada
      </h1>
      <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-xl mx-auto">
        A página que você procura pode ter sido movida, renomeada ou não
        existir mais. Mas a gente ajuda você a voltar pro caminho.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-nedel-black-blue text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-black-blue/80 transition-colors"
        >
          <Home size={16} />
          Voltar para o início
        </Link>
        <Link
          href="/help"
          className="inline-flex items-center gap-2 border border-nedel-black-blue text-nedel-black-blue px-6 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-black-blue hover:text-white transition-colors"
        >
          <Search size={16} />
          Central de ajuda
        </Link>
      </div>

      <div className="mt-16 pt-10 border-t border-nedel-highlight-gray/40">
        <p className="text-sm text-muted-foreground mb-4">
          Procurando alguma coisa específica?
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-nedel-blue hover:underline"
          >
            <ArrowLeft size={14} />
            Produtos
          </Link>
          <Link
            href="/downloads"
            className="inline-flex items-center gap-1 text-nedel-blue hover:underline"
          >
            <ArrowLeft size={14} />
            Downloads
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-nedel-blue hover:underline"
          >
            <ArrowLeft size={14} />
            Sobre nós
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-nedel-blue hover:underline"
          >
            <ArrowLeft size={14} />
            Contato
          </Link>
        </div>
      </div>
    </div>
  );
}
