import Link from "next/link";

type EventCardProps = {
  number: string;
  category: string;
  title: string;
  slug: string;
};

export function EventCard({ number, category, title, slug }: EventCardProps) {
  return (
    <article className="group relative overflow-hidden border-b border-line bg-transparent px-3 py-7 transition-all duration-300 hover:border-gold/40 hover:bg-white/[.02] sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative grid gap-5 sm:grid-cols-[72px_1fr_auto] sm:items-center">
        <span className="font-mono text-sm text-gold">{number}</span>
        <div>
          <p className="eyebrow text-[10px] text-gold/90">{category}</p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-foreground sm:text-2xl">
            {title}
          </h3>
        </div>
        <Link
          className="inline-flex items-center gap-2 text-link text-[10px] text-foreground/90 transition-colors duration-300 hover:text-gold"
          href={`/events/${slug}`}
          aria-label={`Book your seat for ${title}`}
        >
          Book your seat <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}
