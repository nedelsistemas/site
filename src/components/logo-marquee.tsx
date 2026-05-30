import { CTALink } from "@/components/ui/cta-link";
import { CLIENTS } from "@/lib/clients";

export function LogoMarquee() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="w-full py-20 mt-20 md:mt-28 md:py-28 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-5 text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
          Quem confia na gente
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-nedel-black-blue mt-2">
          147+ empresas operam com a Nedel todos os dias
        </h2>
      </div>

      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 mx-6 md:mx-10 w-32 md:w-40 h-10 md:h-20 flex items-center justify-center"
              aria-hidden={i >= CLIENTS.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={i < CLIENTS.length ? logo.alt : ""}
                className="max-h-full max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 text-center mt-10">
        <CTALink
          href="/about#clientes"
          className="gap-1.5 text-sm font-semibold text-nedel-blue hover:text-nedel-black-blue"
        >
          Ver todos os clientes
        </CTALink>
      </div>
    </section>
  );
}
