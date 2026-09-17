import type { SVGProps } from "react";

function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 10.2c0 5.2-8 11.3-8 11.3S4 15.4 4 10.2a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M7.2 3.5 5 4.7c-.8.4-1.2 1.3-1 2.2 1.4 6.8 6.3 11.7 13.1 13.1.9.2 1.8-.2 2.2-1l1.2-2.2-4.1-2.4-1.6 1.6c-2.9-1.3-5.2-3.6-6.5-6.5l1.6-1.6-2.7-4.4Z" />
    </svg>
  );
}

export function ContactDetails({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-5 ${className}`}>
      <div className="flex items-start gap-3">
        <LocationIcon className="mt-1 h-5 w-5 shrink-0 text-gold" />
        <address className="text-sm not-italic leading-6 text-muted">
          <span className="mb-1 block text-xs font-medium uppercase tracking-[.16em] text-foreground">
            Location
          </span>
          Devasandra Main Rd, Kuvempu Layout, 1st Block
          <br />
          Landmark: HP Gas Agency, 3, Devasandra Main Rd
          <br />
          Hale Devasandra, Krishnarajapuram
          <br />
          Bengaluru, Karnataka 560036
        </address>
      </div>
      <a
        className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold"
        href="tel:+918123267366"
      >
        <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
        <span>
          <span className="mr-2 text-xs font-medium uppercase tracking-[.16em] text-foreground">
            Call
          </span>
          08123267366
        </span>
      </a>
    </div>
  );
}
