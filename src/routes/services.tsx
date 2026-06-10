import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { Solutions } from "@/components/site/Solutions";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Oyank Creatives" },
      { name: "description", content: "Influencer marketing, PR activations, meme campaigns, and UGC built around creators." },
      { property: "og:title", content: "Services — Oyank Creatives" },
      { property: "og:description", content: "Creator-led campaigns built for attention." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Services</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Campaigns built for attention.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Oyank Creatives blends influencer marketing, PR activations, and UGC so creator campaigns ship faster and stay memorable.
          </p>
        </div>
      </section>
      <Services />
      <Solutions />
      <CTA />
    </>
  );
}
