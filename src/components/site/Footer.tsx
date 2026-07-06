import { Link } from "@tanstack/react-router";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const oyankLogo = "/assets/oyank-logo-header.webp";

const socials = [
  { Icon: FaInstagram, href: "https://www.instagram.com/oyank_creatives/", label: "Instagram" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/oyank-creatives/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[#EAF2FF] mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center" aria-label="Oyank Creatives home">
              <img src={oyankLogo} alt="Oyank Creatives" className="h-12 w-auto" width={220} height={156} loading="lazy" decoding="async" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building brands through creators, culture, and community.
            </p>
            <a
              href="mailto:mayank@oyankcreatives.com"
              className="mt-6 inline-block text-sm text-foreground underline-offset-4 hover:underline"
            >
              mayank@oyankcreatives.com
            </a>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Studio</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Book a Call</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Follow</h4>
            <div className="mt-4 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:text-foreground hover:bg-accent"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Oyank Creatives. All rights reserved.</p>
          <p>Creator-led campaigns. Real conversations.</p>
        </div>
      </div>
    </footer>
  );
}
