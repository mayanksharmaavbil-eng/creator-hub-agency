import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border/60 bg-card p-12 shadow-sm md:p-20">
        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h3 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to launch a campaign that actually moves the room?
            </h3>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us about your brand. We'll come back with a creator roadmap inside 48 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-coral via-brand to-cyan px-6 py-4 text-sm font-medium text-brand-foreground shadow-lg transition hover:opacity-90"
          >
            Book a call
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
