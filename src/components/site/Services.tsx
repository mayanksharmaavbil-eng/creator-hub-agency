import { motion } from "framer-motion";
import { Users, Flame, TrendingUp, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: Users,
    eyebrow: "01 — Influence",
    title: "Influencer Marketing",
    body: "We connect brands with the right creators across social platforms to drive awareness, trust, and audience engagement.",
    note: "Creator partnerships across multiple platforms",
  },
  {
    icon: Flame,
    eyebrow: "02 — Culture",
    title: "PR & Meme Campaigns",
    body: "We create campaigns that tap into trends, conversations, and internet culture to keep brands relevant and visible.",
    note: "Built for attention and shareability",
  },
  {
    icon: TrendingUp,
    eyebrow: "03 — Growth",
    title: "UGC & Partnership Ads",
    body: "We turn creator content into scalable campaigns through authentic UGC and strategic paid partnerships.",
    note: "Content designed to amplify reach",
  },
];

export function Services() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Capabilities</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              From Strategy to Impact.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-muted-foreground">
            We help brands build awareness, spark conversations, and drive engagement through
            creator-led campaigns, cultural relevance, and strategic execution.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition hover:border-brand/40 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-coral/0 via-transparent to-cyan/0 opacity-0 transition-opacity duration-500 group-hover:from-coral/10 group-hover:to-cyan/10 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-coral via-brand to-cyan text-brand-foreground shadow-lg">
                  <c.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {c.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>

              <div className="mt-8 flex items-center gap-2 border-t border-border/60 pt-5 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span className="font-medium">{c.note}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
