"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { PortfolioCarousel } from "@/content/home/portfolio";

const AUTOPLAY_INTERVAL_MS = 1250;

const positionClasses = {
  left: "left-[16.57vw] top-[25.68vh] h-[37.33vh] w-[18.06vw] max-md:left-[5vw] max-md:top-[17vh] max-md:h-[31vh] max-md:w-[28vw]",
  center:
    "left-[38.73vw] top-[15.75vh] h-[47.95vh] w-[20.67vw] max-md:left-[35vw] max-md:top-[12vh] max-md:h-[39vh] max-md:w-[30vw]",
  right:
    "left-[63.31vw] top-[25.68vh] h-[37.33vh] w-[18.06vw] max-md:left-[67vw] max-md:top-[17vh] max-md:h-[31vh] max-md:w-[28vw]",
} as const;

type PortfolioCarouselCardProps = {
  carousel: PortfolioCarousel;
  priority?: boolean;
};

export function PortfolioCarouselCard({
  carousel,
  priority = false,
}: PortfolioCarouselCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        (currentIndex + 1) % carousel.images.length,
      );
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [carousel.images.length, isActive]);

  return (
    <figure
      tabIndex={0}
      aria-label={`${carousel.label}: carrossel com ${carousel.images.length} imagens`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      className={`group absolute z-10 m-0 overflow-hidden bg-[#111114] shadow-[0_16px_48px_rgba(0,0,0,0.28)] outline-none transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[clamp(8px,0.75vw,14px)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.42)] focus-visible:-translate-y-[clamp(8px,0.75vw,14px)] focus-visible:ring-1 focus-visible:ring-white/20 motion-reduce:transform-none motion-reduce:transition-none ${positionClasses[carousel.position]}`}
    >
      {carousel.images.map((image, imageIndex) => {
        const isVisible = imageIndex === activeIndex;

        return (
          <Image
            key={image.src}
            src={image.src}
            alt={isVisible ? image.alt : ""}
            aria-hidden={!isVisible}
            fill
            priority={priority && imageIndex === 0}
            sizes={
              carousel.position === "center"
                ? "(max-width: 768px) 30vw, 21vw"
                : "(max-width: 768px) 28vw, 19vw"
            }
            className={`absolute inset-0 object-cover grayscale contrast-[1.18] transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isVisible
                ? "scale-100 opacity-100 brightness-[0.76] group-hover:scale-[1.025] group-hover:brightness-[0.88] group-focus-visible:scale-[1.025] group-focus-visible:brightness-[0.88]"
                : "pointer-events-none scale-[1.035] opacity-0 brightness-[0.68]"
            }`}
          />
        );
      })}

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(8,8,10,0.015),rgba(8,8,10,0.2))] ring-1 ring-inset ring-white/[0.025]"
      />

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 z-20 h-px bg-white/45 transition-[width,opacity] duration-700 ease-linear motion-reduce:hidden ${
          isActive ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </figure>
  );
}
