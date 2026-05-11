import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";

const work = [
  { brand: "Halcyon", category: "Beauty · TikTok", metric: "12.4M views", grad: "from-brand to-cyan" },
  { brand: "Vantage", category: "Fitness · IG Reels", metric: "+38% CTR", grad: "from-cyan to-brand" },
  { brand: "Orbital", category: "Fintech · YouTube", metric: "3.3× ROAS", grad: "from-brand/80 to-foreground/40" },
  { brand: "Cascade", category: "Skincare · UGC", metric: "1.8M UGC views", grad: "from-cyan/80 to-brand/80" },
  { brand: "Foundry", category: "DTC · Affiliate", metric: "$2.1M GMV", grad: "from-brand to-cyan/70" },
  { brand: "Meridian", category: "Travel · Reels", metric: "9.6M reach", grad: "from-cyan to-brand/80" },
];

export const Route = createFileRoute("/campaigns")({
  head: () => ({
    meta: [
      { title: "Campaigns — Northwave" },
      { name: "description", content: "Selected creator campaigns we've shipped for ambitious modern brands." },
      { property: "og:title", content: "Campaigns — Northwave" },
      { property: "og:description", content: "A look at the creator-led work that moved the room." },
    ],
  }),
  component: CampaignsPage,
});

function CampaignsPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Selected work</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Campaigns that moved the room.
          </h1>
        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <motion.article
              key={w.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card/60"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${w.grad}`}>
                <div className="absolute inset-0 grain opacity-30" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-2xl font-semibold text-background drop-shadow">{w.brand}</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-6">
                <p className="text-sm text-muted-foreground">{w.category}</p>
                <p className="text-sm font-medium">{w.metric}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
