import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, LayoutGrid, Layers, LifeBuoy } from "lucide-react";
import { CTA } from "@/components/site/CTA";

const stats = [
  { icon: Users, v: "50,000+", l: "Creator Network", grad: "from-[#4F8CFF] to-[#22D3EE]" },
  { icon: LayoutGrid, v: "10+", l: "Categories", grad: "from-[#22D3EE] to-[#4F8CFF]" },
  { icon: Layers, v: "Multi-Platform", l: "Coverage", grad: "from-[#6366F1] to-[#4F8CFF]" },
  { icon: LifeBuoy, v: "End-to-End", l: "Campaign Support", grad: "from-[#4F8CFF] to-[#8B5CF6]" },
];

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "Creator Network — Oyank Creatives" },
      { name: "description", content: "Access to 50,000+ creators across every major platform — from nano creators to large-scale influencers." },
      { property: "og:title", content: "Creator Network — Oyank Creatives" },
      { property: "og:description", content: "The right voices to drive awareness, engagement, and meaningful conversations." },
    ],
  }),
  component: CreatorsPage,
});

function CreatorsPage() {
  return (
    <>
      <section className="bg-[#F5F9FF] px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Creator Network</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Access to 50,000+ creators across every major platform.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From nano creators to large-scale influencers, we help brands find the right voices
            to drive awareness, engagement, and meaningful conversations.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F9FF] px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[#D9E5F5] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:border-brand/40 hover:shadow-2xl"
            >
              <span className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.grad} text-brand-foreground shadow-lg transition group-hover:scale-110`}>
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-6 text-3xl font-semibold tracking-tight">{s.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
