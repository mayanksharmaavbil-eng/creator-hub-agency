const brands = [
  "Lumen", "Northstar", "Aether", "Halcyon", "Vantage", "Parallax",
  "Monolith", "Kinfolk", "Orbital", "Cascade", "Foundry", "Meridian",
];

export function LogoMarquee() {
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-border/60 bg-background py-14">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by modern brands
      </p>
      <div className="marquee-pause group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-16 px-8">
          {row.map((b, i) => (
            <span
              key={i}
              className="select-none whitespace-nowrap font-serif text-2xl tracking-tight text-muted-foreground/70 grayscale transition hover:text-foreground hover:grayscale-0 md:text-3xl"
              style={{ fontFamily: "ui-serif, Georgia, serif" }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
