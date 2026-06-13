import backtrack from "@/assets/brands/backtrack-learning.png.asset.json";
import novaLabs from "@/assets/brands/nova-labs.jpg.asset.json";
import peakFitness from "@/assets/brands/peak-fitness.jpg.asset.json";
import auraBeauty from "@/assets/brands/aura-beauty-new.png.asset.json";
import zentroFoods from "@/assets/brands/zentro-foods.png.asset.json";

const brands = [
  { src: backtrack.url, alt: "Backtrack Learning" },
  { src: novaLabs.url, alt: "Nova Labs" },
  { src: peakFitness.url, alt: "PeakFit Fitness and Wellness" },
  { src: auraBeauty.url, alt: "Aura Beauty" },
  { src: zentroFoods.url, alt: "Zentro Foods" },
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
              className="h-9 w-auto select-none object-contain opacity-80 transition hover:opacity-100 md:h-11"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
