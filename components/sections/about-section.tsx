import { ButtonLink } from "@/components/ui/button-link";
export function AboutSection() {
  return (
    <section
      id="about"
      className="section-space site-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"
    >
      <div>
        <p className="eyebrow">The venue</p>
        <h2 className="section-heading">A new angle on live.</h2>
      </div>
      <div className="max-w-2xl">
        <p className="text-2xl leading-tight text-foreground sm:text-3xl">
          ONE80° EVENT CENTER brings together sharp production, generous
          hospitality, and a crowd that comes ready to feel every moment.
        </p>
        <p className="copy mt-7">
          Located on Devasandra Main Road in Kuvempu Layout, 1st Block,
          Krishnarajapuram, the venue is designed to shift with the energy of
          every show—from intimate performances to full-scale nights.
        </p>
        <ButtonLink href="#inquiry" variant="secondary" className="mt-9">
          Discover the venue <span aria-hidden>↗</span>
        </ButtonLink>
      </div>
    </section>
  );
}
