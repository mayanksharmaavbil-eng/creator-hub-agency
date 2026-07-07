import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oyank Creatives" },
      {
        name: "description",
        content:
          "Tell us about your brand. We'll come back with a creator roadmap inside 48 hours.",
      },
      { property: "og:title", content: "Contact — Oyank Creatives" },
      {
        property: "og:description",
        content: "Start a creator-led campaign with Oyank Creatives.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append(
      "access_key",
      "c6ec3c50-d25a-41e6-8a5a-ac8f93a15163"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.success) {
      setSent(true);
      e.currentTarget.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-white px-6 pt-40 pb-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr]">
        {/* Left Side */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Contact
          </p>

          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Let's build something worth watching.
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Share a few details about your brand and goals.
            We'll respond within 48 hours with a tailored roadmap.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" />
              mayank@oyankcreatives.com
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              India
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur"
        >
          <input
            type="hidden"
            name="subject"
            value="New Lead from Oyank Creatives Website"
          />

          <input
            type="hidden"
            name="from_name"
            value="Oyank Creatives Website"
          />

          {sent ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand to-cyan text-brand-foreground">
                ✓
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Thanks — we'll be in touch.
              </h3>

              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                A strategist will reach out within 48 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Name
                </label>

                <input
                  required
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Work Email
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>

              {/* Brand */}
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Brand
                </label>

                <input
                  required
                  type="text"
                  name="brand"
                  className="mt-2 w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>

              {/* Objective */}
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Campaign Objective
                </label>

                <select
                  required
                  name="objective"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                >
                  <option value="" disabled>
                    Select your objective
                  </option>
                  <option value="brand-awareness">
                    Brand Awareness
                  </option>
                  <option value="product-launch">
                    Product Launch
                  </option>
                  <option value="lead-gen">
                    Lead Generation
                  </option>
                  <option value="app-installs">
                    App Installs
                  </option>
                  <option value="sales">
                    Sales / Conversions
                  </option>
                  <option value="retention">
                    Retention / Re-engagement
                  </option>
                </select>
              </div>

              {/* Project */}
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Project
                </label>

                <textarea
                  required
                  rows={4}
                  name="project"
                  className="mt-2 w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Send Brief

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
