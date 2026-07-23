import { HomeHero } from "@/components/home/hero/home-hero";
import { PortfolioSection } from "@/components/home/portfolio/portfolio-section";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteSocials } from "@/components/layout/site-socials";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <SiteSocials />

      <main className="min-h-svh overflow-x-hidden">
        <HomeHero />
        <PortfolioSection />
      </main>
    </>
  );
}
