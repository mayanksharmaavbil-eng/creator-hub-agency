import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-creators.jpg";

const stats = [
  { v: "420M+", l: "Creator reach" },
  { v: "3.3×", l: "ROI vs. paid ads" },
  { v: "180+", l: "Brands shipped" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* ambient bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px] dark:bg-brand/30" />
        <div className="absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            New — Waves OS for creator campaigns
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            Scaling brands through
            <span className="block bg-gradient-to-r from-foreground via-brand to-cyan bg-clip-text text-transparent">
              creator-led marketing.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground"
          >
            We help brands grow through high-performing influencer campaigns, UGC content,
            creator partnerships, and performance-driven storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              Start your campaign
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/campaigns"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-accent"
            >
              <Play className="h-4 w-4" />
              View work
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8"
          >
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-semibold tracking-tight md:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-cyan/20 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl">
            <img
              src={heroImg}
              alt="Creator collaboration content cards floating in a premium 3D scene"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/60 bg-card/90 p-4 shadow-xl backdrop-blur md:block"
          >
            <p className="text-xs text-muted-foreground">Live campaign</p>
            <p className="mt-1 text-sm font-medium">+38% engagement · 7d</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
