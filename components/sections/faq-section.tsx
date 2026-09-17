import { SectionHeading } from "@/components/ui/section-heading";
const faqs = [
  [
    "Where is ONE80° EVENT CENTER located?",
    "We are located at Devasandra Main Rd, Kuvempu Layout, 1st Block. Landmark: HP Gas Agency, 3, Devasandra Main Rd, Hale Devasandra, Krishnarajapuram, Bengaluru, Karnataka 560036.",
  ],
  [
    "When will events be announced?",
    "Our first announcements are on the way. Join our mailing list for priority updates.",
  ],
  [
    "Can I invite my friends?",
    "Yes. Bring your friends along and share the experience together.",
  ],
  ["Is it free?", "Yes. Registration for this event is free."],
];
export function FaqSection() {
  return (
    <section className="section-space border-t border-line bg-surface">
      <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading eyebrow="Need to know" title="Frequently asked" />
        <div className="border-t border-line">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {question}
                <span
                  className="text-gold transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="copy max-w-2xl pt-4 text-base">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
