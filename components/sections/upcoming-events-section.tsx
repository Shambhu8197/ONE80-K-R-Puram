import { EventCard } from "@/components/cards/event-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const events = [
  {
    number: "01",
    category: "Live music",
    title: "Book your seat for the upcoming concert",
    slug: "the-next-chapter",
  },
  {
    number: "02",
    category: "Culture",
    title: "A room built for discovery",
    slug: "room-for-discovery",
  },
  {
    number: "03",
    category: "Late night",
    title: "One stage. Full spectrum.",
    slug: "one-stage-full-spectrum",
  },
];

export function UpcomingEventsSection() {
  return (
    <section id="events" className="section-space site-shell">
      <SectionHeading
        eyebrow="On the horizon"
        title="Upcoming events"
        copy="Our inaugural programme is taking shape. Join the list for first access to line-ups and ticket releases."
      />
      <div className="mt-14 border-t border-line">
        {events.map((event) => (
          <EventCard key={event.number} {...event} />
        ))}
      </div>
    </section>
  );
}
