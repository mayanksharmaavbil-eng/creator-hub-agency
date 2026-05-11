import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, TrendingUp, Globe, Sparkles } from "lucide-react";
import { CTA } from "@/components/site/CTA";

const stats = [
  { icon: Users, v: "12,000+", l: "Vetted creators" },
  { icon: Globe, v: "42", l: "Markets" },
  { icon: TrendingUp, v: "420M+", l: "Combined reach" },
  { icon: Sparkles, v: "98%", l: "Brand match rate" },
];

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "Creators — Northwave" },
      { name: "description", content: "A global network of vetted creators — matched to your brand by data and craft." },
      { property: "og:title", content: "Creators — Northwave" },
      { property: "og:description", content: "Global, vetted, brand-safe creators across every category." },
    ],
  }),
  component: CreatorsPage,
});

function CreatorsPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Network</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            A global network of culture-shaping creators.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We work with creators who tell the truth about your brand — and have the audience that listens.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border/60 bg-card/60 p-6"
            >
              <s.icon className="h-5 w-5 text-brand" />
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
