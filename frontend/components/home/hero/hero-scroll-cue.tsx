export function HeroScrollCue() {
  return (
    <a
      className="absolute left-[96.65vw] top-[79.11vh] z-20 block h-[13.7vh] w-[0.93vw] text-[#55555b] no-underline before:absolute before:-inset-3 before:content-[''] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 max-md:bottom-[1.45rem] max-md:left-auto max-md:right-[1.05rem] max-md:top-auto max-md:h-[5.5rem] max-md:w-[0.6rem]"
      href="#projects"
      aria-label="Scroll to projects"
    >
      <span className="absolute left-0 top-0 block w-full text-center text-[clamp(0.38rem,0.72vh,0.52rem)] font-normal leading-none tracking-[0.22em] [writing-mode:vertical-rl]">
        SCROLL
      </span>
      <i
        className="absolute left-1/2 top-[9.25vh] h-[4.45vh] w-px origin-top -translate-x-1/2 animate-pulse bg-[#707077] opacity-70 motion-reduce:animate-none max-md:top-[3.7rem] max-md:h-[1.8rem]"
        aria-hidden="true"
      />
    </a>
  );
}
