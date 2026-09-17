import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  CountdownPlaceholder,
  FeaturedArtistsSection,
  GallerySection,
  InquiryCta,
  UpcomingEventsSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Events | ONE80° K R Puram",
  description:
    "Discover upcoming live music, culture, artists, and events at ONE80° EVENT CENTER.",
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-line bg-background pb-20 pt-44 sm:pb-28 sm:pt-52">
          <div className="hero-atmosphere absolute inset-0 -z-10" />
          <div className="site-shell">
            <div className="events-logo-stage" aria-label="ONE80° EVENT CENTER">
              <Image
                src="/logo/one80-logo.png.avif"
                alt="ONE80° EVENT CENTER"
                width={420}
                height={112}
                priority
                className="events-hero-logo object-contain object-left"
                style={{ width: "min(72vw, 420px)", height: "auto" }}
              />
            </div>
            <p className="eyebrow">ONE80° programme</p>
            <h1 className="display-heading mt-6 max-w-5xl text-[clamp(3.5rem,10vw,8rem)] leading-[.85]">
              Events that stay with you.
            </h1>
            <p className="copy mt-10 max-w-xl">
              Explore live music, culture, artists, and the next nights taking
              shape at ONE80° EVENT CENTER.
            </p>
          </div>
        </section>
        <UpcomingEventsSection />
        <FeaturedArtistsSection />
        <CountdownPlaceholder />
        <GallerySection />
        <InquiryCta />
      </main>
      <SiteFooter />
    </>
  );
}
