import Link from "next/link";

const links = [
  ["01", "Understand the work", "About Aware Minds", "#about-aware-minds"],
  ["02", "Mission & vision", "What guides the work", "#mission-vision"],
  [
    "03",
    "Why it matters",
    "The conversation behind the work",
    "#why-it-matters",
  ],
  ["04", "Invite the programme", "Bring it to your campus", "#invite"],
  ["05", "Topics we cover", "Explore session themes", "#topics"],
  ["06", "The evidence", "Numbers behind the conversation", "#statistics"],
  [
    "07",
    "Recent events",
    "Turning conversations into action",
    "#recent-events",
  ],
  ["08", "Photo gallery", "Moments from our events", "#gallery"],
  ["09", "Our presentations", "Understandable and practical", "#presentations"],
  ["10", "Who we serve", "Students, educators, institutions", "#who-we-serve"],
  ["11", "Register your interest", "Invite us to your community", "#contact"],
] as const;

export function MentalHealthExplorer() {
  return (
    <section
      className="border-y border-line bg-surface-raised py-10 sm:py-14"
      aria-label="Explore Aware Minds"
    >
      <div className="site-shell">
        <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Quick navigation</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-.04em] text-foreground sm:text-4xl">
              Explore every part of Aware Minds.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted sm:text-right">
            Discover the work, explore the sessions, and register your interest
            in a few clicks.
          </p>
        </div>
        <nav
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          aria-label="Mental health page sections"
        >
          {links.map(([number, title, copy, href]) => (
            <Link
              key={href}
              href={`/mental-health${href}`}
              className="group flex min-h-16 items-center justify-between gap-3 rounded-xl border border-line bg-background px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-surface hover:shadow-[0_12px_26px_rgba(216,174,104,0.1)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4"
            >
              <span className="font-mono text-xs text-gold">{number}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-foreground sm:text-sm">
                  {title}
                </span>
                <span className="mt-0.5 hidden truncate text-[11px] text-muted sm:block">
                  {copy}
                </span>
              </span>
              <span
                className="text-lg text-gold transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
