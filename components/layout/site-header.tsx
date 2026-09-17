import Link from "next/link";
import { MainNavigation } from "@/components/navigation/main-navigation";
import { Logo } from "@/components/ui/logo";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/95 px-4 backdrop-blur-xl sm:px-6">
      <div className="site-shell grid h-16 grid-cols-[1fr_auto] items-center px-0 md:h-20 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="ONE80° K R Puram home"
          className="justify-self-start rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Logo />
        </Link>
        <MainNavigation />
        <Link
          href="/events/the-next-chapter"
          className="hidden min-h-11 items-center justify-self-end gap-3 bg-gold px-4 text-link text-[0.65rem] text-black transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:inline-flex lg:px-5"
        >
          <span>Register now</span>
          <span aria-hidden className="text-base leading-none">
            ↗
          </span>
        </Link>
      </div>
    </header>
  );
}
