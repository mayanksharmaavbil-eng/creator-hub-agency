import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-cyan text-brand-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              Northwave
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A creator-led marketing studio building cultural campaigns for ambitious modern brands.
            </p>
            <a
              href="mailto:hello@northwave.studio"
              className="mt-6 inline-block text-sm text-foreground underline-offset-4 hover:underline"
            >
              hello@northwave.studio
            </a>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Studio</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
              <li><Link to="/campaigns" className="hover:text-foreground text-muted-foreground">Campaigns</Link></li>
              <li><Link to="/creators" className="hover:text-foreground text-muted-foreground">Creators</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Follow</h4>
            <div className="mt-4 flex gap-2">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:text-foreground hover:bg-accent"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Northwave Studio. All rights reserved.</p>
          <p>Crafted for the creator economy.</p>
        </div>
      </div>
    </footer>
  );
}
