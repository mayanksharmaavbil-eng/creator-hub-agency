import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background to-background p-12 md:p-20">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
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
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:opacity-90"
          >
            Book a call
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
