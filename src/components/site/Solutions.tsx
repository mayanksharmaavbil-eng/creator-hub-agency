import {
  Users, Megaphone, Laugh, Video, Handshake,
  Sparkles, Gift, Target,
} from "lucide-react";

const items = [
  { icon: Users, label: "Influencer Marketing" },
  { icon: Megaphone, label: "PR Activations" },
  { icon: Laugh, label: "Meme Marketing" },
  { icon: Video, label: "UGC Campaigns" },
  { icon: Handshake, label: "Partnership Ads" },
  { icon: Sparkles, label: "Brand Collaborations" },
  { icon: Gift, label: "Product Seeding" },
  { icon: Target, label: "Campaign Strategy" },
];

function Pill({ icon: Icon, label, i }: { icon: typeof Users; label: string; i: number }) {
  return (
    <div
      className="group flex shrink-0 items-center gap-3 rounded-full border border-border/60 bg-card px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-coral/20 via-brand/20 to-cyan/20 text-brand transition group-hover:from-coral group-hover:via-brand group-hover:to-cyan group-hover:text-brand-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="whitespace-nowrap text-sm font-medium">{label}</span>
    </div>
  );
}

export function Solutions() {
  return (
    <section className="relative bg-[#F5F9FF] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Solutions</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Campaigns Built For Attention
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            We help brands build awareness, engagement, and credibility through influencer
            marketing, PR activations, meme campaigns, UGC content, and strategic partnerships.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          <div className="flex flex-wrap justify-center gap-3">
            {items.slice(0, 4).map((it, i) => <Pill key={it.label} {...it} i={i} />)}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {items.slice(4).map((it, i) => <Pill key={it.label} {...it} i={i + 4} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
