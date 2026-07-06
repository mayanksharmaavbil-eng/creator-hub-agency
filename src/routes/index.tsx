import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Services } from "@/components/site/Services";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oyank Creatives | Influencer Marketing Agency" },
      { name: "description", content: "Creator-led campaigns that get people talking. Influencer collaborations, PR activations, and meme campaigns that keep brands relevant." },
      { property: "og:title", content: "Oyank Creatives | Influencer Marketing Agency" },
      { property: "og:description", content: "Creator-led campaigns that get people talking." },
    ],
    links: [
      { rel: "preload", as: "image", href: "/assets/oyank-logo-header.webp", fetchPriority: "high" },
      { rel: "preload", as: "image", href: "/assets/hero-creators-mobile.webp", fetchPriority: "high", media: "(max-width: 767px)" },
      { rel: "preload", as: "image", href: "/assets/hero-creators-desktop.webp", fetchPriority: "high", media: "(min-width: 768px)" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Solutions />
      <Services />
      <CTA />
    </>
  );
}
