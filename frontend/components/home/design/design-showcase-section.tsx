import Image from "next/image";
import { designShowcaseContent } from "@/content/home/design";

export function DesignShowcaseSection() {
  return (
    <section
      id="design"
      aria-labelledby="design-showcase-title"
      className="relative isolate min-h-screen min-h-svh w-full overflow-hidden bg-[#08080a]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-4] bg-[radial-gradient(circle_at_69%_46%,rgba(255,255,255,0.035),transparent_34%),linear-gradient(180deg,#09090b_0%,#070709_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-3] bg-[repeating-radial-gradient(circle_at_0_0,transparent_0,rgba(255,255,255,0.26)_0.42px,transparent_0.72px,transparent_4px)] bg-[length:6px_6px] opacity-[0.012]"
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
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#08080a_0%,rgba(8,8,10,0.86)_10%,rgba(8,8,10,0.26)_36%,rgba(8,8,10,0.08)_68%,rgba(8,8,10,0.42)_100%),linear-gradient(180deg,rgba(0,0,0,0.18)_0%,transparent_35%,rgba(0,0,0,0.38)_100%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,rgba(255,255,255,0.7)_0.55px,transparent_0.7px)] [background-size:5px_5px]"
        />
      </div>

      <div className="relative z-10 flex min-h-screen min-h-svh items-center pl-[10.8vw] pr-[5vw] max-lg:pl-[9vw] max-md:items-end max-md:px-6 max-md:pb-[15vh]">
        <div className="relative w-[45vw] max-w-[820px] -translate-y-[1.6vh] max-lg:w-[50vw] max-md:w-full max-md:translate-y-0">
          <div
            aria-hidden="true"
            className="mb-[6.1vh] h-px w-[3.8vw] min-w-10 bg-[#ba4e2f]/75 max-md:mb-8"
          />

          <p className="m-0 text-[clamp(11px,0.78vw,15px)] font-normal leading-none tracking-[-0.01em] text-white/66">
            {designShowcaseContent.eyebrow}
          </p>

          <h2
            id="design-showcase-title"
            className="mt-[1.15vh] mb-0 text-[clamp(29px,2.35vw,49px)] font-normal leading-[1.08] tracking-[-0.045em] text-[#f0f0f2]"
          >
            {designShowcaseContent.heading}
          </h2>

          <div className="relative mt-[2.5vh] flex items-center max-md:mt-4">
            <p
              aria-hidden="true"
              className="m-0 whitespace-nowrap text-[clamp(64px,7.55vw,145px)] font-light uppercase leading-[0.82] tracking-[-0.055em] text-transparent [-webkit-text-stroke:1px_rgba(219,219,222,0.34)] [text-shadow:0_0_36px_rgba(255,255,255,0.018)] max-md:text-[clamp(58px,18vw,92px)]"
            >
              {designShowcaseContent.displayWord}
            </p>

            <span
              aria-hidden="true"
              className="ml-[2.4vw] mt-[1.4vh] block h-px w-[3.2vw] min-w-9 bg-[#ad472d]/75 max-md:hidden"
            />
          </div>

          <a
            href={designShowcaseContent.action.href}
            className="group mt-[6.7vh] inline-flex items-center gap-[1.2vw] text-[clamp(10px,0.66vw,13px)] font-normal tracking-[-0.01em] text-white/72 no-underline transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/45 max-md:mt-9 max-md:gap-4"
          >
            <span>{designShowcaseContent.action.label}</span>

            <span
              aria-hidden="true"
              className="flex items-center gap-[0.3vw] max-md:gap-1"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={index}
                  className="block h-[2px] w-[2px] rounded-full bg-[#ba4e2f]/55 transition-all duration-300 group-hover:bg-[#d75f39]"
                />
              ))}
            </span>

            <span
              aria-hidden="true"
              className="relative grid h-[18px] w-[18px] place-items-center rounded-full border border-[#b74a2d]/80 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90"
            >
              <span className="block h-[5px] w-[5px] rounded-full bg-[#c75331]" />
            </span>
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50.4%] top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center max-lg:left-[52%] max-md:left-auto max-md:right-[3vw] max-md:top-[46%] max-md:translate-x-0"
      >
        <div className="relative -rotate-90 whitespace-nowrap text-[clamp(54px,6.25vw,120px)] font-semibold leading-none tracking-[-0.06em] text-[#f4f4f5] [text-shadow:0_8px_26px_rgba(0,0,0,0.42)] max-md:text-[clamp(45px,14vw,78px)]">
          <span>{designShowcaseContent.verticalWord}</span>
          <span className="ml-[0.07em] text-[#f05b2a]">.</span>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="absolute bottom-[8.6vh] left-[46.95%] z-20 m-0 -rotate-90 whitespace-nowrap text-[clamp(7px,0.46vw,9px)] font-normal tracking-[0.08em] text-white/33 max-lg:left-[48.5%] max-md:hidden"
      >
        {designShowcaseContent.date}
      </p>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 border border-white/[0.012] shadow-[inset_0_1px_rgba(255,255,255,0.012),inset_0_0_9rem_rgba(0,0,0,0.2)]"
      />
    </section>
  );
}
