import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oyank Creatives" },
      { name: "description", content: "Tell us about your brand. We'll come back with a creator roadmap inside 48 hours." },
      { property: "og:title", content: "Contact — Oyank Creatives" },
      { property: "og:description", content: "Start a creator-led campaign with Oyank Creatives." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="px-6 pt-40 pb-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Contact</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Let's build something worth watching.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Share a few details about your brand and goals. We'll respond within 48 hours with a tailored roadmap.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" /> mayank@oyankcreatives.com
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> New York · London · Singapore
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur"
        >
          {sent ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand to-cyan text-brand-foreground">✓</div>
              <h3 className="mt-4 text-xl font-semibold">Thanks — we'll be in touch.</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">A strategist will reach out within 48 hours.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Work email", name: "email", type: "email" },
                { label: "Brand", name: "brand", type: "text" },
                { label: "Budget", name: "budget", type: "text" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{f.label}</label>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Project</label>
                <textarea
                  required
                  rows={4}
                  name="project"
                  className="mt-2 w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <button className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
                Send brief <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
