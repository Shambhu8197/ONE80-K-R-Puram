import { ArtistCard } from "@/components/cards/artist-card";
import { SectionHeading } from "@/components/ui/section-heading";
const artists = [
  {
    name: "Vishal",
    photo: "/Concert Images/Vishal.jpeg",
  },
  {
    name: "Akash",
    photo: "/Concert Images/Akash.jpeg",
  },
  {
    name: "Varsha",
    photo: "/Concert Images/Varsha.jpeg",
    photoPosition: "center 10%",
  },
  {
    name: "Augustin",
    photo: "/Concert Images/Augustin.jpeg",
  },
  {
    name: "Ramesh",
    photo: "/Concert Images/Ramesh.jpeg",
  },
  {
    name: "Varun",
    photo: "/Concert Images/Varun.jpeg",
  },
  {
    name: "Shambhu",
    photo: "/Concert Images/Shambhu.jpeg",
  },
  {
    name: "Vaishali & Sherly",
    photo: "/Concert Images/Vaishali and Sherly.jpeg",
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
              photoPosition={artist.photoPosition}
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
