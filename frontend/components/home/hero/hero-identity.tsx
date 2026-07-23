import { heroContent } from "@/content/home/hero";
import { FittedText } from "./fitted-text";

export function HeroIdentity() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <p
        className="absolute left-[33.15vw] top-[36.2vh] m-0 whitespace-nowrap text-[clamp(10px,0.68vw,13px)] font-medium uppercase leading-none tracking-[0.24em] text-white/45 max-md:left-[19%] max-md:top-[38%] max-md:text-[10px] max-md:tracking-[0.2em]"
      >
        {heroContent.eyebrow}
      </p>

      <h1
        id="hero-title"
        className="pointer-events-auto absolute left-[25.51vw] top-[42.47vh] m-0 block h-[13.7vh] w-[45.62vw] text-[#f7f7f8] max-md:left-[5%] max-md:top-[43.5%] max-md:h-[12.8%] max-md:w-[90%]"
      >
        <FittedText
          text={heroContent.name}
          viewBoxWidth={245}
          viewBoxHeight={40}
          fontSize={52}
          baseline={39}
        />
        <span className="sr-only">{heroContent.name}</span>
      </h1>

      <p
        className="absolute left-[55.12vw] top-[59.25vh] m-0 whitespace-nowrap text-[clamp(12px,0.84vw,16px)] font-normal uppercase leading-none tracking-[0.14em] text-white/55 max-md:left-auto max-md:right-[8%] max-md:top-[58.5%] max-md:text-[11px] max-md:tracking-[0.12em]"
      >
        {heroContent.role}
      </p>
    </div>
  );
}
