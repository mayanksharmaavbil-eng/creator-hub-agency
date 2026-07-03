import backtrack from "@/assets/brands/backtrack-learning.webp";
import novaLabs from "@/assets/brands/nova-labs.webp";
import peakFitness from "@/assets/brands/peak-fitness.webp";
import auraBeauty from "@/assets/brands/aura-beauty.webp";
import zentroFoods from "@/assets/brands/zentro-foods.webp";

const brands = [
  { src: backtrack, alt: "Backtrack Learning" },
  { src: novaLabs, alt: "Nova Labs" },
  { src: peakFitness, alt: "PeakFit Fitness and Wellness" },
  { src: auraBeauty, alt: "Aura Beauty" },
  { src: zentroFoods, alt: "Zentro Foods" },
];

export function LogoMarquee() {
  const row = [...brands, ...brands, ...brands];
  return (
    <section className="border-y border-border/60 bg-white py-8">
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Brands we've partnered with
      </p>
      <div className="marquee-pause group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-20 px-10">
          {row.map((b, i) => (
            <img
              key={i}
              src={b.src}
              alt={b.alt}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto select-none object-contain opacity-80 transition hover:opacity-100 md:h-11"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
