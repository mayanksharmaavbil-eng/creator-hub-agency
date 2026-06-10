import backtrack from "@/assets/brands/backtrack.png";
import novaLabs from "@/assets/brands/nova-labs.png";
import peakFitness from "@/assets/brands/peak-fitness.png";
import auraBeauty from "@/assets/brands/aura-beauty.png";
import foodChain from "@/assets/brands/food-chain.png";

const brands = [
  { src: backtrack, alt: "Backtrack Learning" },
  { src: novaLabs, alt: "Nova Labs" },
  { src: peakFitness, alt: "Peak Fitness" },
  { src: auraBeauty, alt: "Aura Beauty" },
  { src: foodChain, alt: "Food Chain" },
];

export function LogoMarquee() {
  const row = [...brands, ...brands, ...brands];
  return (
    <section className="border-y border-border/60 bg-background py-14">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
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
              width={1024}
              height={512}
              className="h-10 w-auto select-none object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
