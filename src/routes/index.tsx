import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Services } from "@/components/site/Services";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oyank Creatives — Creator-led marketing studio" },
      { name: "description", content: "Creator-led campaigns that get people talking. Influencer collaborations, PR activations, and meme campaigns that keep brands relevant." },
      { property: "og:title", content: "Oyank Creatives — Creator-led marketing studio" },
      { property: "og:description", content: "Creator-led campaigns that get people talking." },
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
