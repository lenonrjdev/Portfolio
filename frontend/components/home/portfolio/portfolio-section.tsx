import { portfolioContent } from "@/content/home/portfolio";
import { PortfolioGallery } from "./portfolio-gallery";

export function PortfolioSection() {
  return (
    <section
      id="projects"
      className="relative isolate -mt-px min-h-screen min-h-svh w-full overflow-hidden bg-transparent"
      aria-labelledby="portfolio-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-2] bg-[radial-gradient(circle_at_50%_43%,rgba(30,27,34,0.2),transparent_48%)]"
      />

      <PortfolioGallery />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[18vh] bg-[linear-gradient(180deg,#08080a_0%,rgba(8,8,10,0.8)_36%,transparent_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[22vh] bg-[linear-gradient(180deg,transparent_0%,rgba(8,8,10,0.56)_48%,#08080a_100%)]"
      />

      <div className="pointer-events-none absolute inset-0 z-40 text-center">
        <h2
          id="portfolio-title"
          className="absolute left-1/2 top-[62.15vh] m-0 -translate-x-1/2 whitespace-nowrap text-[clamp(42px,4.7vw,92px)] font-medium uppercase leading-[0.92] tracking-[-0.045em] text-[#f4f4f5] [text-shadow:0_3px_20px_rgba(0,0,0,0.42)] max-md:top-[49vh] max-md:text-[clamp(34px,8.8vw,62px)]"
        >
          {portfolioContent.title}
        </h2>

        <p className="absolute left-1/2 top-[72.95vh] m-0 -translate-x-1/2 whitespace-nowrap text-[clamp(8px,0.55vw,11px)] font-normal uppercase leading-none tracking-[0.075em] text-white/35 max-md:top-[59vh] max-md:text-[8px] max-md:tracking-[0.06em]">
          {portfolioContent.description}
        </p>

        <a
          href={portfolioContent.callToAction.href}
          className="pointer-events-auto absolute left-1/2 top-[81.85vh] flex h-[5.15vh] min-h-10 w-[21.23vw] min-w-[260px] -translate-x-1/2 items-center justify-center overflow-hidden bg-white/[0.018] text-[clamp(8px,0.54vw,11px)] font-normal uppercase tracking-[0.26em] text-white/38 no-underline ring-1 ring-inset ring-white/[0.018] transition-[background-color,color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:inset-y-0 before:left-0 before:w-full before:-translate-x-full before:bg-white/[0.055] before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.22,1,0.36,1)] before:content-[''] hover:-translate-x-1/2 hover:-translate-y-0.5 hover:bg-white/[0.028] hover:text-white/75 hover:before:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/35 max-md:top-[67vh] max-md:h-12 max-md:w-[58vw] max-md:min-w-0"
        >
          <span className="relative z-10">{portfolioContent.callToAction.label}</span>
        </a>
      </div>
    </section>
  );
}
