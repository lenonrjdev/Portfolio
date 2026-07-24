import { AteliuxCaseSection } from "@/components/home/ateliux-case/ateliux-case-section";
import { DesignShowcaseSection } from "@/components/home/design/design-showcase-section";
import { HomeHero } from "@/components/home/hero/home-hero";
import { PortfolioSection } from "@/components/home/portfolio/portfolio-section";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteSocials } from "@/components/layout/site-socials";
import { NavigationShowcaseSection } from "@/components/home/navigation/navigation-showcase-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <SiteSocials />

      <main className="relative min-h-svh overflow-x-clip bg-[#08080a]">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(31,30,35,0.18),transparent_34%),radial-gradient(circle_at_68%_78%,rgba(31,24,26,0.11),transparent_31%),#08080a]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[repeating-radial-gradient(circle_at_0_0,transparent_0,rgba(255,255,255,0.28)_0.42px,transparent_0.72px,transparent_4px)] bg-[length:6px_6px] opacity-[0.012]"
        />

        <div className="relative z-10">
          <HomeHero />
          <PortfolioSection />
          <DesignShowcaseSection />
          <AteliuxCaseSection />
          <NavigationShowcaseSection />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
