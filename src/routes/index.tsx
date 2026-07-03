import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Services } from "@/components/site/Services";
import { CTA } from "@/components/site/CTA";
import heroImg from "@/assets/hero-creators.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oyank Creatives | Influencer Marketing Agency" },
      { name: "description", content: "Creator-led campaigns that get people talking. Influencer collaborations, PR activations, and meme campaigns that keep brands relevant." },
      { property: "og:title", content: "Oyank Creatives | Influencer Marketing Agency" },
      { property: "og:description", content: "Creator-led campaigns that get people talking." },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" },
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
