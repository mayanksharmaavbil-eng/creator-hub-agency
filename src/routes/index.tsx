import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Services } from "@/components/site/Services";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northwave — Creator-led marketing studio" },
      { name: "description", content: "Scaling brands through creator-led marketing. High-performing campaigns, UGC, and creator partnerships." },
      { property: "og:title", content: "Northwave — Creator-led marketing studio" },
      { property: "og:description", content: "Scaling brands through creator-led marketing." },
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
