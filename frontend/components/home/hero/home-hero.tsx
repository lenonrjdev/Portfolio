import { HeroHeader } from "./hero-header";
import { HeroIdentity } from "./hero-identity";
import { HeroSocials } from "./hero-socials";

export function HomeHero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen min-h-svh w-full overflow-hidden bg-[radial-gradient(circle_at_50%_49%,rgba(24,24,28,0.12),transparent_47%),linear-gradient(180deg,#0c0c0e_0%,#0a0a0c_100%)] before:pointer-events-none before:absolute before:inset-0 before:z-[-2] before:border before:border-white/[0.012] before:shadow-[inset_0_-1px_rgba(255,255,255,0.018),inset_0_0_7rem_rgba(0,0,0,0.16)] before:content-['']"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[-1] bg-[repeating-radial-gradient(circle_at_0_0,transparent_0,rgba(255,255,255,0.34)_0.42px,transparent_0.72px,transparent_3px)] bg-[length:5px_5px] opacity-[0.018]"
        aria-hidden="true"
      />

      <HeroHeader />
      <HeroIdentity />
      <HeroSocials />
    </section>
  );
}
