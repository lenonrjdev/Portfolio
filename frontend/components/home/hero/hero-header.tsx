import Image from "next/image";
import { heroContent } from "@/content/home/hero";

const navigationBaseClass = [
  "group pointer-events-auto absolute top-[7.19vh] inline-flex w-max items-center justify-center",
  "text-[#68686f] no-underline transition-colors duration-300",
  "before:absolute before:-inset-3 before:content-['']",
  "after:absolute after:bottom-[-0.5rem] after:left-0 after:h-px",
  "after:w-[calc(100%-0.32em)] after:origin-right after:scale-x-0 after:bg-current",
  "after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] after:content-['']",
  "hover:text-[#d5d5d8] hover:after:origin-left hover:after:scale-x-100",
  "focus-visible:text-[#d5d5d8] focus-visible:outline-none focus-visible:after:origin-left focus-visible:after:scale-x-100",
  "max-md:top-[1.65rem]",
].join(" ");

export function HeroHeader() {
  return (
    <header
      className="pointer-events-none absolute inset-0 z-20"
      aria-label="Navegação principal"
    >
      <a
        className="pointer-events-auto absolute left-[3.35vw] top-[4.11vh] block w-[clamp(72px,5.8vw,108px)] no-underline transition-opacity duration-200 before:absolute before:-inset-3 before:content-[''] hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 max-md:left-5 max-md:top-[1.35rem] max-md:w-[78px]"
        href="#top"
        aria-label="Voltar ao topo"
      >
        <Image
          src="/ateliux-logo-white.png"
          alt="Ateliux"
          width={814}
          height={331}
          priority
          className="block h-auto w-full object-contain"
        />
      </a>

      <nav
        className="pointer-events-none absolute inset-0"
        aria-label="Navegação do portfólio"
      >
        {heroContent.navigation.map((item, index) => (
          <a
            className={`${navigationBaseClass} ${
              index === 0
                ? "left-[80.4vw] max-md:left-auto max-md:right-[7.5rem]"
                : "left-[90.1vw] max-md:left-auto max-md:right-5"
            }`}
            key={item.label}
            href={item.href}
          >
            <span className="block whitespace-nowrap text-[clamp(10px,0.8vw,14px)] font-normal uppercase leading-none tracking-[0.32em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-px group-focus-visible:-translate-y-px">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}
