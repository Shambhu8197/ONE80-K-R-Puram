import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";

const frames = [
  {
    caption: "A glimpse of the ONE80° atmosphere",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "The room before the night begins",
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "Light, sound, and shared energy",
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "Made for memorable moments",
    src: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "Your next night starts here",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "An evening built for unforgettable nights",
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
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
            featured={index === 0 || index === 3}
          />
        ))}
      </div>
    </section>
  );
}
