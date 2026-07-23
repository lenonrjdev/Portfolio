import { heroContent } from "@/content/home/hero";

type SocialName = (typeof heroContent.socials)[number]["name"];

type SocialIconProps = {
  name: SocialName;
};

function SocialIcon({ name }: SocialIconProps) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-7 w-7 fill-current">
        <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.02.29-1.72 1.76-1.72H17.1V2.4c-.32-.04-1.42-.14-2.7-.14-2.68 0-4.51 1.64-4.51 4.64v2.6H7v3.5h2.89v9h3.61Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="block h-7 w-7 fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="0.8" className="fill-current stroke-none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-7 w-7 fill-current">
      <path d="M21.4 6.1c-.7.3-1.45.5-2.24.6a3.92 3.92 0 0 0 1.72-2.16c-.76.45-1.6.78-2.5.96A3.89 3.89 0 0 0 11.65 8.16c0 .3.03.6.1.89a11.04 11.04 0 0 1-8.02-4.07 3.9 3.9 0 0 0 1.2 5.2 3.83 3.83 0 0 1-1.76-.49v.05a3.9 3.9 0 0 0 3.12 3.82 3.9 3.9 0 0 1-1.75.07 3.9 3.9 0 0 0 3.64 2.7A7.82 7.82 0 0 1 3.34 18c-.31 0-.63-.02-.94-.05a11.02 11.02 0 0 0 5.98 1.75c7.18 0 11.1-5.95 11.1-11.1v-.5a7.92 7.92 0 0 0 1.92-2Z" />
    </svg>
  );
}

export function SiteSocials() {
  return (
    <aside
      aria-label="Redes sociais"
      className="fixed bottom-[clamp(26px,4.5vh,48px)] left-[clamp(20px,3.35vw,64px)] z-50 flex flex-col items-center gap-3 max-md:hidden"
    >
      {heroContent.socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className="group grid h-9 w-9 place-items-center text-[#77777e] no-underline transition duration-300 ease-out hover:-translate-y-0.5 hover:text-[#ededee] focus-visible:-translate-y-0.5 focus-visible:text-[#ededee] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
        >
          <SocialIcon name={social.name} />
        </a>
      ))}
    </aside>
  );
}
