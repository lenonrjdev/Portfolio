import Image from "next/image";
import { designShowcaseContent } from "@/content/home/design";

export function DesignShowcaseSection() {
  return (
    <section
      id="design"
      aria-labelledby="design-showcase-title"
      className="relative isolate -mt-px min-h-screen min-h-svh w-full overflow-hidden bg-transparent"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-4] bg-[radial-gradient(circle_at_69%_46%,rgba(255,255,255,0.035),transparent_34%)]"
      />


      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[41.5%] top-[9.5%] z-[-1] h-[43%] w-[24%] opacity-[0.13] [background-image:radial-gradient(circle,rgba(255,255,255,0.24)_0.7px,transparent_0.8px)] [background-size:7px_7px] max-md:left-auto max-md:right-0 max-md:top-[8%] max-md:w-[52%]"
      />

      <div className="absolute inset-y-0 right-0 z-0 w-[44.1%] overflow-hidden max-lg:w-[47%] max-md:w-[61%]">
        <Image
          src={designShowcaseContent.image.src}
          alt={designShowcaseContent.image.alt}
          fill
          sizes="(max-width: 768px) 61vw, 44vw"
          className="object-cover object-[47%_38%] grayscale brightness-[0.47] contrast-[1.18] saturate-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.018]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#08080a_0%,rgba(8,8,10,0.88)_10%,rgba(8,8,10,0.28)_36%,rgba(8,8,10,0.08)_68%,rgba(8,8,10,0.46)_100%),linear-gradient(180deg,#08080a_0%,rgba(8,8,10,0.62)_7%,transparent_20%,transparent_80%,rgba(8,8,10,0.64)_93%,#08080a_100%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,rgba(255,255,255,0.7)_0.55px,transparent_0.7px)] [background-size:5px_5px]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[17vh] bg-[linear-gradient(180deg,#08080a_0%,rgba(8,8,10,0.76)_38%,transparent_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[18vh] bg-[linear-gradient(180deg,transparent_0%,rgba(8,8,10,0.55)_58%,#08080a_100%)]"
      />

      <div className="relative z-10 flex min-h-screen min-h-svh items-center pl-[11.4vw] pr-[5vw] max-lg:pl-[9.5vw] max-md:items-end max-md:px-6 max-md:pb-[15vh]">
        <div className="relative w-[39vw] max-w-[680px] -translate-y-[1vh] max-lg:w-[46vw] max-md:w-full max-md:translate-y-0">
          <div
            aria-hidden="true"
            className="mb-[4.8vh] h-px w-[2.8vw] min-w-8 bg-[#ba4e2f]/75 max-md:mb-8"
          />

          <p className="m-0 text-[clamp(9px,0.62vw,12px)] font-normal uppercase leading-none tracking-[0.08em] text-white/52">
            {designShowcaseContent.eyebrow}
          </p>

          <h2
            id="design-showcase-title"
            className="mt-[1.35vh] mb-0 text-[clamp(24px,1.9vw,38px)] font-normal leading-[1.12] tracking-[-0.03em] text-white/90"
          >
            {designShowcaseContent.heading}
          </h2>

          <div className="relative mt-[2.8vh] flex items-center max-md:mt-5">
            <p
              aria-hidden="true"
              className="m-0 whitespace-nowrap text-[clamp(50px,5.8vw,112px)] font-light uppercase leading-[0.88] tracking-[-0.045em] text-transparent [-webkit-text-stroke:0.8px_rgba(219,219,222,0.28)] [text-shadow:0_0_28px_rgba(255,255,255,0.012)] max-md:text-[clamp(46px,14vw,76px)]"
            >
              {designShowcaseContent.displayWord}
            </p>

            <span
              aria-hidden="true"
              className="ml-[1.8vw] mt-[1vh] block h-px w-[2.5vw] min-w-7 bg-[#ad472d]/75 max-md:hidden"
            />
          </div>

          <a
            href={designShowcaseContent.action.href}
            className="group mt-[5.2vh] inline-flex items-center gap-[0.9vw] text-[clamp(9px,0.56vw,11px)] font-normal uppercase tracking-[0.08em] text-white/58 no-underline transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/45 max-md:mt-9 max-md:gap-4"
          >
            <span>{designShowcaseContent.action.label}</span>

            <span
              aria-hidden="true"
              className="flex items-center gap-[0.3vw] max-md:gap-1"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={index}
                  className="block h-[1.5px] w-[1.5px] rounded-full bg-[#ba4e2f]/45 transition-all duration-300 group-hover:bg-[#d75f39]"
                />
              ))}
            </span>

            <span
              aria-hidden="true"
              className="relative grid h-[16px] w-[16px] place-items-center rounded-full border border-[#b74a2d]/80 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90"
            >
              <span className="block h-[4px] w-[4px] rounded-full bg-[#c75331]" />
            </span>
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50.8%] top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center max-lg:left-[52%] max-md:left-auto max-md:right-[3vw] max-md:top-[46%] max-md:translate-x-0"
      >
        <div className="relative -rotate-90 whitespace-nowrap text-[clamp(44px,5vw,96px)] font-medium leading-none tracking-[-0.045em] text-white/92 [text-shadow:0_8px_26px_rgba(0,0,0,0.42)] max-md:text-[clamp(38px,11vw,66px)]">
          <span>{designShowcaseContent.verticalWord}</span>
          <span className="ml-[0.07em] text-[#f05b2a]">.</span>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="absolute bottom-[9.4vh] left-[47.4%] z-20 m-0 -rotate-90 whitespace-nowrap text-[clamp(6px,0.38vw,8px)] font-normal tracking-[0.12em] text-white/24 max-lg:left-[48.5%] max-md:hidden"
      >
        {designShowcaseContent.date}
      </p>

    </section>
  );
}
