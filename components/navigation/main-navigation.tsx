"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const venueLinks = [
  ["Home", "/"],
  ["Events", "/events"],
  ["Artists", "/#artists"],
  ["The venue", "/#about"],
  ["Gallery", "/#gallery"],
] as const;

const mentalHealthLinks = [
  ["About Aware Minds", "/mental-health#about-aware-minds"],
  ["Mission & vision", "/mental-health#mission-vision"],
  ["Why it matters", "/mental-health#why-it-matters"],
  ["Invite the programme", "/mental-health#invite"],
  ["Topics we cover", "/mental-health#topics"],
  ["The evidence", "/mental-health#statistics"],
  ["Recent events", "/mental-health#recent-events"],
  ["Register your interest", "/mental-health#contact"],
] as const;

function closeNavigationMenus() {
  document
    .querySelectorAll("header details[open]")
    .forEach((menu) => menu.removeAttribute("open"));
}

function SectionDropdown({
  label,
  links,
  navigationLabel,
  active = false,
  mobile = false,
}: {
  label: string;
  links: readonly (readonly [string, string])[];
  navigationLabel: string;
  active?: boolean;
  mobile?: boolean;
}) {
  return (
    <details className="group/dropdown relative">
      <summary
        className={
          mobile
            ? "flex min-h-12 cursor-pointer list-none items-center justify-between border-b border-white/10 px-3 py-3 text-link text-xs hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
            : `flex min-h-11 cursor-pointer list-none items-center gap-2 px-3 py-3 text-link text-[0.68rem] transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${active ? "text-foreground" : "text-muted"}`
        }
      >
        <span>{label}</span>
        <span
          aria-hidden
          className="text-sm text-accent transition-transform group-open/dropdown:rotate-180"
        >
          ↓
        </span>
      </summary>
      <nav
        className={
          mobile
            ? "max-h-[min(70vh,32rem)] overflow-y-auto border-b border-white/10 bg-black/15 py-1 pl-3"
            : "absolute left-0 top-full z-30 min-w-52 border border-line bg-surface/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl"
        }
        aria-label={navigationLabel}
      >
        {links.map(([linkLabel, href]) => (
          <Link
            key={href}
            href={href}
            onClick={closeNavigationMenus}
            className="flex min-h-10 items-center px-3 py-2 text-link text-[0.62rem] text-muted transition-colors hover:bg-white/5 hover:text-foreground focus-visible:bg-white/5 focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
          >
            {linkLabel}
          </Link>
        ))}
      </nav>
    </details>
  );
}

export function MainNavigation() {
  const pathname = usePathname();
  const isMentalHealthPage = pathname.startsWith("/mental-health");

  return (
    <>
      <nav
        className="hidden items-center gap-2 md:flex"
        aria-label="Main navigation"
      >
        <SectionDropdown
          label="ONE80 K R Puram"
          links={venueLinks}
          navigationLabel="ONE80 K R Puram navigation"
          active={!isMentalHealthPage}
        />
        <SectionDropdown
          label="Mental Health Workshop"
          links={mentalHealthLinks}
          navigationLabel="Mental Health Workshop navigation"
          active={isMentalHealthPage}
        />
      </nav>
      <details className="group relative justify-self-end md:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 border border-white/15 bg-black/20 px-4 text-link text-[0.65rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          <span>Menu</span>
          <span
            aria-hidden
            className="text-accent transition-transform group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <nav
          className="absolute right-0 top-14 z-30 min-w-72 border border-line bg-surface/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl"
          aria-label="Mobile navigation"
        >
          <p className="px-3 pb-2 pt-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted">
            Navigate ONE80° K R Puram
          </p>
          <Link
            href="/events/the-next-chapter"
            onClick={closeNavigationMenus}
            className="mb-1 flex min-h-12 items-center justify-between border-b border-gold/40 bg-gold px-3 py-3 text-link text-xs text-black hover:bg-foreground focus-visible:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
          >
            Register now <span aria-hidden>↗</span>
          </Link>
          <SectionDropdown
            label="ONE80 K R Puram"
            links={venueLinks}
            navigationLabel="ONE80 K R Puram navigation"
            mobile
          />
          <SectionDropdown
            label="Mental Health Workshop"
            links={mentalHealthLinks}
            navigationLabel="Mental Health Workshop navigation"
            mobile
          />
        </nav>
      </details>
    </>
  );
}
