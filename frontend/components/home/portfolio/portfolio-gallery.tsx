import { portfolioContent } from "@/content/home/portfolio";
import { PortfolioCarouselCard } from "./portfolio-carousel-card";

export function PortfolioGallery() {
  return (
    <div
      id="portfolio-grid"
      className="absolute inset-0 z-10"
      aria-label="Seleção visual de projetos"
    >
      {portfolioContent.carousels.map((carousel, index) => (
        <PortfolioCarouselCard
          key={carousel.id}
          carousel={carousel}
          priority={index === 1}
        />
      ))}
    </div>
  );
}
