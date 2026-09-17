import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[780px] items-end overflow-hidden border-b border-line bg-background pb-12 pt-32 sm:min-h-[820px] sm:pb-16"
    >
      <div className="hero-atmosphere absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(216,174,104,0.12),transparent_35%),linear-gradient(90deg,rgba(8,11,16,0.15),rgba(8,11,16,0.7))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="home-logo-3d" aria-hidden="true">
        <Image
          src="/logo/one80-logo.png.avif"
          alt=""
          width={680}
          height={180}
          priority
          className="home-logo-3d-image"
          style={{ width: "min(82vw, 680px)", height: "auto" }}
        />
      </div>
      <div className="site-shell relative z-10">
        <p className="eyebrow">Krishnarajapuram · Bengaluru</p>
        <h1 className="display-heading mt-6 max-w-5xl text-[clamp(3.6rem,10vw,9rem)] leading-[.82]">
          Where the night turns.
        </h1>
        <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em] text-muted">
          <span className="premium-tag">Live music</span>
          <span className="premium-tag">Concerts</span>
          <span className="premium-tag">Live Event</span>
        </div>
        <div className="mt-10 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="copy max-w-sm text-base leading-7 text-foreground/80 sm:text-lg">
            A new home for high-voltage live music, Concerts, and Live Events
            experiences.
          </p>
          <ButtonLink href="/events">
            Explore events <span aria-hidden>↗</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
