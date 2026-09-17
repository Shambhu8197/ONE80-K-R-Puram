import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RegistrationForm } from "@/components/events/registration-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { events } from "@/components/sections/upcoming-events-section";

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  return { title: event ? `Register | ${event.title}` : "Event registration" };
}

export default async function EventRegistrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) notFound();

  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-line bg-background pb-20 pt-44 sm:pb-28 sm:pt-52">
          <div className="hero-atmosphere absolute inset-0 -z-10" />
          <div className="site-shell">
            <p className="eyebrow">{event.category} · Registration</p>
            <h1 className="display-heading mt-6 max-w-5xl text-[clamp(3.5rem,10vw,8rem)] leading-[.85]">
              {event.title}
            </h1>
            <p className="copy mt-8 max-w-xl">
              Enter your details below to register your interest and receive
              updates about this event.
            </p>
          </div>
        </section>
        <section className="section-space site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">ONE80° EVENT CENTER</p>
            <h2 className="section-heading">Be there when it begins.</h2>
          </div>
          <RegistrationForm eventTitle={event.title} />
        </section>
        <div className="site-shell pb-20 sm:pb-28">
          <Link className="text-link text-xs" href="/events#events">
            ← Back to all events
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
