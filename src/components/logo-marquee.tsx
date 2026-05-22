const PLACEHOLDER_LOGOS = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `https://placehold.co/200x80/e5e7eb/9ca3af?text=Cliente+${n}`,
    alt: `Logotipo Cliente ${n}`,
  };
});

export function LogoMarquee() {
  const loop = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section className="w-full py-20 mt-20 md:mt-28 md:py-28 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-5 text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue">
          Quem confia na gente
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-nedel-black-blue mt-2">
          Mais de 200 empresas operam com a Nedel todos os dias
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
              className="shrink-0 mx-6 md:mx-10 flex items-center"
              aria-hidden={i >= PLACEHOLDER_LOGOS.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={i < PLACEHOLDER_LOGOS.length ? logo.alt : ""}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
