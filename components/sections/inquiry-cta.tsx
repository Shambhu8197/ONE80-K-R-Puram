import { ButtonLink } from "@/components/ui/button-link";
import { ContactDetails } from "@/components/ui/contact-details";
export function InquiryCta() {
  return (
    <section id="inquiry" className="site-shell py-8 sm:py-12">
      <div className="overflow-hidden bg-gold px-6 py-12 text-black sm:px-10 sm:py-16 lg:flex lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em]">
            Come join the experience
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-.06em] sm:text-6xl">
            Make your night unforgettable.
          </h2>
          <ContactDetails className="mt-6 [&_a]:text-black [&_address]:text-black [&_span]:text-black" />
        </div>
        <ButtonLink
          href="mailto:hello@one80eventcenter.com"
          variant="secondary"
          className="mt-8 border-black text-black hover:border-black hover:text-black lg:mt-0"
        >
          Start an inquiry <span aria-hidden>↗</span>
        </ButtonLink>
      </div>
    </section>
  );
}
