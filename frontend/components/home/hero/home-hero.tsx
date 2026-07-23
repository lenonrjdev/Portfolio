import { HeroIdentity } from "./hero-identity";

export function HomeHero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen min-h-svh w-full overflow-hidden bg-transparent"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-2] bg-[radial-gradient(circle_at_50%_49%,rgba(28,28,33,0.16),transparent_48%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[24vh] bg-[linear-gradient(180deg,transparent_0%,rgba(8,8,10,0.48)_52%,#08080a_100%)]"
      />

      <HeroIdentity />
    </section>
  );
}
