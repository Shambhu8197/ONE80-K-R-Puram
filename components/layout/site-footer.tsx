import Link from "next/link";
import { ContactDetails } from "@/components/ui/contact-details";
import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="site-shell grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo />
          <ContactDetails className="mt-5" />
        </div>
        <nav
          className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
          aria-label="Footer navigation"
        >
          <Link className="transition-colors hover:text-gold" href="/">
            ONE80 K R Puram
          </Link>
          <Link className="transition-colors hover:text-gold" href="/events">
            Events
          </Link>
          <Link
            className="transition-colors hover:text-gold"
            href="/mental-health#top"
          >
            Mental Health
          </Link>
          <Link className="transition-colors hover:text-gold" href="/#about">
            The venue
          </Link>
          <Link className="transition-colors hover:text-gold" href="/#inquiry">
            Inquiries
          </Link>
        </nav>
        <p className="text-sm text-muted lg:text-right">
          © {new Date().getFullYear()} ONE80° K R Puram
        </p>
      </div>
    </footer>
  );
}
