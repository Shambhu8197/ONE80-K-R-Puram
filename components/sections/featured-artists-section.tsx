import { ArtistCard } from "@/components/cards/artist-card";
import { SectionHeading } from "@/components/ui/section-heading";
const artists = [
  {
    name: "Vishal",
    photo:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Akash",
    photo:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Varsha",
    photo:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Augustin",
    photo:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Varun",
    photo:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Shambhu",
    photo:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
  },
];
const songLanguages = ["English", "Hindi", "Kannada", "Tamil", "Telugu"];
const shambhuLanguages = ["English", "Hindi", "Kannada"];
export function FeaturedArtistsSection() {
  return (
    <section
      id="artists"
      className="section-space border-y border-line bg-surface"
    >
      <div className="site-shell">
        <SectionHeading
          eyebrow="In the spotlight"
          title="Featured artists"
          copy="Meet the artists bringing English, Hindi, Kannada, Tamil, and Telugu songs to the stage."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, index) => (
            <ArtistCard
              key={artist.name}
              number={`${index + 1}`.padStart(2, "0")}
              title={artist.name}
              photo={artist.photo}
              languages={
                artist.name === "Shambhu" ? shambhuLanguages : songLanguages
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
