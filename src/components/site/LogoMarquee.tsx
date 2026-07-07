const brands = [
  { src: "/assets/brands/backtrack-learning.webp", alt: "Backtrack Learning" },
  { src: "/assets/brands/nova-labs.webp", alt: "Nova Labs" },
  { src: "/assets/brands/peak-fitness.webp", alt: "PeakFit Fitness and Wellness" },
  { src: "/assets/brands/aura-beauty.webp", alt: "Aura Beauty" },
  { src: "/assets/brands/zentro-foods.webp", alt: "Zentro Foods" },
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border/60 bg-white py-8">
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Brands we've partnered with
      </p>
      <div className="relative overflow-hidden">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6">
          {brands.map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              width={260}
              height={70}
              loading="eager"
              decoding="async"
              className="h-9 w-auto select-none object-contain opacity-80 transition hover:opacity-100 md:h-11"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
