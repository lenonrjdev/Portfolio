import { navigationShowcaseContent } from "@/content/home/navigation-showcase";

export function NavigationShowcaseSection() {
  return (
    <section
      id="navigation"
      aria-label="Navegação final"
      className="
        relative
        -mt-px
        flex
        min-h-svh
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-transparent
        text-white
      "
    >
      {/* Fundo contínuo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#08080a]
        "
      />

      {/* Iluminação central */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.045),transparent_44%)]
        "
      />

      {/* Textura discreta */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
          bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_3px)]
        "
      />

      {/* Vinheta */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),transparent_22%,transparent_78%,rgba(0,0,0,0.25))]
        "
      />

      <nav
        aria-label="Seções do portfólio"
        className="
          relative
          z-10
          flex
          w-full
          max-w-[1100px]
          flex-col
          items-center
          justify-center
          px-6
          py-[clamp(80px,12vh,150px)]
          text-center
        "
      >
        {navigationShowcaseContent.navigation.map((item, index) => {
          const isWork = item.label === "WORK";
          const isAbout = item.label === "ABOUT";

          return (
            <a
              key={item.label}
              href={item.href}
              className={`
                group
                relative
                block
                uppercase
                text-white
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-0.5
                focus-visible:-translate-y-0.5
                focus-visible:outline-none

                ${
                  isWork
                    ? "mb-[clamp(26px,4vh,46px)] text-[clamp(42px,4.2vw,78px)]"
                    : ""
                }

                ${
                  isAbout
                    ? "mb-[clamp(28px,4.5vh,54px)] text-[clamp(22px,2.1vw,38px)]"
                    : ""
                }

                ${
                  !isWork && !isAbout
                    ? "text-[clamp(50px,5.2vw,92px)]"
                    : ""
                }
              `}
            >
              <span
                className={`
                  relative
                  block
                  font-semibold
                  tracking-[-0.06em]
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.018]
                  group-focus-visible:scale-[1.018]

                  ${
                    isWork
                      ? "leading-[0.9] [text-shadow:0_6px_18px_rgba(255,255,255,0.14)]"
                      : ""
                  }

                  ${
                    isAbout
                      ? "leading-none tracking-[-0.035em] text-white/55 [text-shadow:0_4px_14px_rgba(255,255,255,0.08)] group-hover:text-white/90"
                      : ""
                  }

                  ${
                    !isWork && !isAbout
                      ? "leading-[0.83] [text-shadow:0_6px_18px_rgba(255,255,255,0.12)] group-hover:[text-shadow:0_10px_28px_rgba(255,255,255,0.2)]"
                      : ""
                  }
                `}
              >
                {item.label}
              </span>

              {/* Linha discreta somente no ABOUT */}
              {isAbout && (
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-3
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-white/45
                    transition-[width]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-[70%]
                    group-focus-visible:w-[70%]
                  "
                />
              )}
            </a>
          );
        })}
      </nav>
    </section>
  );
}