import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { Solutions } from "@/components/site/Solutions";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Northwave" },
      { name: "description", content: "Creative strategy, media distribution, and commerce performance for modern brands." },
      { property: "og:title", content: "Services — Northwave" },
      { property: "og:description", content: "Creative, media, and commerce — built around creators." },
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
            Three practices. One operating system.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Northwave blends strategy, media, and commerce so creator campaigns ship faster and perform harder.
          </p>
        </div>
      </section>
      <Services />
      <Solutions />
      <CTA />
    </>
  );
}
