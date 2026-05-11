import { motion } from "framer-motion";
import {
  Search, Video, Megaphone, Users, BarChart3, Handshake,
  Zap, Link as LinkIcon, ShoppingBag, MessageSquare,
} from "lucide-react";

const items = [
  { icon: Search, label: "Influencer Discovery" },
  { icon: Video, label: "UGC Production" },
  { icon: Megaphone, label: "Campaign Management" },
  { icon: Users, label: "Creator Shortlisting" },
  { icon: BarChart3, label: "Reporting & Analytics" },
  { icon: Handshake, label: "Brand Collaborations" },
  { icon: Zap, label: "Paid Amplification" },
  { icon: LinkIcon, label: "Affiliate Campaigns" },
  { icon: ShoppingBag, label: "Social Commerce" },
  { icon: MessageSquare, label: "Content Feedback" },
];

function Pill({ icon: Icon, label, i }: { icon: typeof Search; label: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
      whileHover={{ y: -3 }}
      className="group flex shrink-0 items-center gap-3 rounded-full border border-border/60 bg-card/60 px-5 py-3 backdrop-blur transition hover:border-brand/50 hover:shadow-lg"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand/20 to-cyan/20 text-brand transition group-hover:from-brand group-hover:to-cyan group-hover:text-brand-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="whitespace-nowrap text-sm font-medium">{label}</span>
    </motion.div>
  );
}

export function Solutions() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Solutions</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Creator-first growth solutions
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            From campaign strategy to creator partnerships, we streamline every stage of
            influencer marketing with data, creativity, and execution.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          <div className="flex flex-wrap justify-center gap-3">
            {items.slice(0, 5).map((it, i) => <Pill key={it.label} {...it} i={i} />)}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {items.slice(5).map((it, i) => <Pill key={it.label} {...it} i={i + 5} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
