import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";

const frames = [
  {
    caption: "A glimpse of the ONE80° atmosphere",
    src: "/Concert Images/WhatsApp Image 2026-09-14 at 8.37.09 PM.jpeg",
  },
  {
    caption: "The room before the night begins",
    src: "/Concert Images/WhatsApp Image 2026-09-14 at 9.24.38 PM.jpeg",
  },
  {
    caption: "Light, sound, and shared energy",
    src: "/Concert Images/WhatsApp Image 2026-09-17 at 8.14.16 PM.jpeg",
  },
  {
    caption: "Made for memorable moments",
    src: "/Concert Images/WhatsApp Image 2026-09-17 at 8.14.17 PM (1).jpeg",
  },
  {
    caption: "Your next night starts here",
    src: "/Concert Images/WhatsApp Image 2026-09-17 at 8.14.17 PM (2).jpeg",
  },
  {
    caption: "An evening built for unforgettable nights",
    src: "/Concert Images/WhatsApp Image 2026-09-17 at 8.14.17 PM.jpeg",
  },
  {
    caption: "Music, movement, and connection",
    src: "/Concert Images/WhatsApp Image 2026-09-17 at 8.20.22 PM.jpeg",
  },
  {
    caption: "A room made for shared moments",
    src: "/Concert Images/WhatsApp Image 2026-09-17 at 8.20.40 PM.jpeg",
  },
  {
    caption: "The energy continues after sunset",
    src: "/Concert Images/WhatsApp Image 2026-09-17 at 8.21.03 PM.jpeg",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-space site-shell">
      <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="The atmosphere" title="A glimpse inside" />
        <p className="max-w-xs text-sm leading-6 text-muted">
          Event photos will appear here as the space comes to life.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {frames.map((frame, index) => (
          <PhotoFrame
            key={frame.caption}
            caption={frame.caption}
            index={index + 1}
            src={frame.src}
            featured={index === 0 || index === 3 || index === 6}
          />
        ))}
      </div>
    </section>
  );
}
