import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  AboutSection,
  CountdownPlaceholder,
  FaqSection,
  FeaturedArtistsSection,
  GallerySection,
  HeroSection,
  InquiryCta,
  UpcomingEventsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <UpcomingEventsSection />
        <FeaturedArtistsSection />
        <AboutSection />
        <CountdownPlaceholder />
        <GallerySection />
        <FaqSection />
        <InquiryCta />
      </main>
      <SiteFooter />
    </>
  );
}
