import { ArrowRight } from "lucide-react";
import { SiInstagram, SiYoutube, SiX, SiReddit } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

const heroMobile = "/assets/hero-creators-mobile.webp";
const heroDesktop = "/assets/hero-creators-desktop.webp";

const platforms = [
  { icon: SiInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: SiYoutube, label: "YouTube" },
  { icon: SiX, label: "X (Twitter)" },
  { icon: SiReddit, label: "Reddit" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-24 pb-12 md:pt-32 md:pb-20">
      {/* vibrant ambient bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-coral/20 blur-[120px]" />
        <div className="absolute left-0 top-56 h-[20rem] w-[20rem] rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-7xl">
            Creator-Led Campaigns
            <span className="block text-gradient-creative">
              That Get People Talking
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground md:mt-6 md:text-lg">
            From influencer collaborations to PR activations and meme campaigns, we help
            brands stay relevant, visible, and memorable.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral via-brand to-cyan px-6 py-3 text-sm font-medium text-brand-foreground shadow-lg transition hover:opacity-90"
            >
              Start your campaign
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Platforms we work across */}
          <div className="mt-10 border-t border-border/60 pt-6 md:mt-12 md:pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Platforms We Work Across
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {platforms.map((p) => (
                <div
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <p.icon className="h-4 w-4 text-brand" />
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] md:max-w-none">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-coral/30 via-brand/20 to-cyan/20 blur-2xl" />
          <picture className="block overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl">
            <source media="(min-width: 768px)" srcSet={heroDesktop} width={760} height={760} />
            <img
              src={heroMobile}
              alt="Oyank Creatives campaign types — influencer, PR, UGC, meme and partnership campaigns"
              width={420}
              height={420}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
