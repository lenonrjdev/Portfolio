import { footerContent } from "@/content/home/footer";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="
        relative
        -mt-px
        bg-[#08080a]
        px-[clamp(14px,1.6vw,24px)]
        pb-[clamp(14px,1.4vw,20px)]
        pt-[clamp(10px,1vw,16px)]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1800px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-black
          shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* Área principal */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-[clamp(40px,6vw,110px)]
            gap-y-[clamp(36px,4vw,60px)]
            px-[clamp(26px,5vw,72px)]
            pb-[clamp(40px,5vw,70px)]
            pt-[clamp(30px,4vw,54px)]
            max-[980px]:grid-cols-1
          "
        >
          {/* Coluna esquerda */}
          <div className="flex flex-col">
            <div className="max-w-[400px]">
              <p
                className="
                  text-[clamp(22px,2vw,34px)]
                  font-medium
                  leading-[1.12]
                  tracking-[-0.045em]
                  text-white
                "
              >
                {footerContent.testimonial.text}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    text-[11px]
                    font-semibold
                    uppercase
                    text-white/80
                  "
                >
                  GS
                </div>

                <div>
                  <p className="text-[11px] font-medium leading-none text-white/90">
                    {footerContent.testimonial.author}
                  </p>
                  <p className="mt-1 text-[10px] leading-none text-white/40">
                    {footerContent.testimonial.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[clamp(72px,9vw,140px)] text-white/35">+</div>

            <div className="mt-[clamp(34px,4vw,56px)]">
              <p className="text-[12px] font-medium text-white/65">
                {footerContent.testimonial.phone}
              </p>

              <a
                href={`mailto:${footerContent.testimonial.email}`}
                className="
                  mt-3
                  inline-flex
                  items-center
                  gap-2
                  text-[clamp(22px,1.9vw,32px)]
                  font-medium
                  leading-none
                  tracking-[-0.03em]
                  text-white
                  underline
                  underline-offset-[6px]
                  decoration-white/45
                  transition-colors
                  duration-300
                  hover:text-white/75
                "
              >
                <span className="text-[13px] text-white/65">●</span>
                {footerContent.testimonial.email}
              </a>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="flex flex-col">
            <div className="max-w-[470px]">
              <h3
                className="
                  text-[clamp(28px,2.1vw,38px)]
                  font-semibold
                  leading-none
                  tracking-[-0.04em]
                  text-white
                "
              >
                {footerContent.newsletter.title}
              </h3>

              <form className="mt-8">
                <div className="space-y-6">
                  <label className="block">
                    <span className="mb-3 block text-[11px] text-white/35">
                      {footerContent.newsletter.fields.name}
                    </span>

                    <input
                      type="text"
                      className="
                        w-full
                        border-0
                        border-b
                        border-white/16
                        bg-transparent
                        px-0
                        pb-3
                        pt-0
                        text-[14px]
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-white/45
                      "
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-[11px] text-white/35">
                      {footerContent.newsletter.fields.email}
                    </span>

                    <input
                      type="email"
                      className="
                        w-full
                        border-0
                        border-b
                        border-white/16
                        bg-transparent
                        px-0
                        pb-3
                        pt-0
                        text-[14px]
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-white/45
                      "
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white
                    px-4
                    py-2
                    text-[10px]
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-white/90
                  "
                >
                  {footerContent.newsletter.button}
                </button>
              </form>

              <p
                className="
                  mt-6
                  max-w-[260px]
                  text-[11px]
                  leading-[1.45]
                  text-white/42
                "
              >
                {footerContent.newsletter.description}
              </p>
            </div>

            <div className="mt-[clamp(62px,8vw,118px)] grid grid-cols-3 gap-8 max-[640px]:grid-cols-1">
              <div className="text-white/35">+</div>

              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.08em] text-white/30">
                  Navigation
                </p>

                <ul className="space-y-2.5">
                  {footerContent.navigation.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="
                          text-[20px]
                          leading-none
                          tracking-[-0.03em]
                          text-white
                          transition-colors
                          duration-300
                          hover:text-white/70
                        "
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.08em] text-white/30">
                  Social
                </p>

                <ul className="space-y-2.5">
                  {footerContent.socials.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          text-[20px]
                          leading-none
                          tracking-[-0.03em]
                          text-white
                          transition-colors
                          duration-300
                          hover:text-white/70
                        "
                      >
                        {item.label}
                        <span className="text-[12px] text-white/35">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-[clamp(52px,6vw,90px)]">
              <div className="leading-none">
                <div
                  className="
                    text-[clamp(70px,8.2vw,150px)]
                    font-semibold
                    tracking-[-0.08em]
                    text-white
                  "
                >
                  {footerContent.brand.name}
                </div>

                <div
                  className="
                    mt-2
                    pl-1
                    text-[clamp(24px,2vw,38px)]
                    font-medium
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {footerContent.brand.subname}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div
          className="
            border-t
            border-white/8
            px-[clamp(26px,5vw,72px)]
            py-[clamp(14px,1.5vw,20px)]
          "
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] text-white/35">
              {footerContent.legal.copyright}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              {footerContent.legal.links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    text-[10px]
                    text-white/42
                    transition-colors
                    duration-300
                    hover:text-white/72
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}