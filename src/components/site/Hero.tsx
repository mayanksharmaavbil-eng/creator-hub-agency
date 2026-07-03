import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiInstagram, SiYoutube, SiX, SiReddit } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-creators.webp";

const platforms = [
  { icon: SiInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: SiYoutube, label: "YouTube" },
  { icon: SiX, label: "X (Twitter)" },
  { icon: SiReddit, label: "Reddit" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 pb-20">
      {/* vibrant ambient bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-coral/20 blur-[120px]" />
        <div className="absolute left-0 top-56 h-[20rem] w-[20rem] rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl"
          >
            Creator-Led Campaigns
            <span className="block text-gradient-creative">
              That Get People Talking
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground"
          >
            From influencer collaborations to PR activations and meme campaigns, we help
            brands stay relevant, visible, and memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral via-brand to-cyan px-6 py-3 text-sm font-medium text-brand-foreground shadow-lg transition hover:opacity-90"
            >
              Start your campaign
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Platforms we work across */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 border-t border-border/60 pt-8"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-coral/30 via-brand/20 to-cyan/20 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl">
            <img
              src={heroImg}
              alt="Oyank Creatives campaign types — influencer, PR, UGC, meme and partnership campaigns"
              width={1000}
              height={1000}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
