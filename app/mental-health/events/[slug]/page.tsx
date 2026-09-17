import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { PhotoFrame } from "@/components/ui/photo-frame";

export const metadata: Metadata = {
  title: "Mental Health Awareness Workshop | Aware Minds",
  description:
    "Details from the Aware Minds Mental Health Awareness Workshop in Bengaluru.",
};

export default async function MentalHealthEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;

  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-line bg-background pb-20 pt-44 sm:pb-28 sm:pt-52">
          <div className="hero-atmosphere absolute inset-0 -z-10" />
          <div className="site-shell">
            <p className="eyebrow">Aware Minds · Recent Event</p>
            <h1 className="display-heading mt-6 max-w-5xl text-[clamp(3.5rem,10vw,8rem)] leading-[.85]">
              Mental Health Awareness Workshop
            </h1>
            <p className="mt-8 text-lg text-gold">
              12 September 2026 · Bengaluru, Karnataka
            </p>
          </div>
        </section>

        <section className="section-space site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">About the Session</p>
            <h2 className="section-heading">
              Turning conversation into connection.
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="copy">
              The session brought students and participants together for an open
              conversation around mental health and emotional well-being.
            </p>
            <p className="copy mt-6">
              Through discussion and interactive activities, participants were
              encouraged to think about how they respond to pressure, how they
              support others, and why creating safe spaces for conversation
              matters.
            </p>
          </div>
        </section>

        <section className="section-space border-y border-line bg-surface">
          <div className="site-shell">
            <p className="eyebrow">Key Takeaways</p>
            <h2 className="section-heading">What we carried forward.</h2>
            <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
              {[
                "Mental health is an important part of overall well-being.",
                "Talking about challenges can reduce isolation and misunderstanding.",
                "Listening without judgment matters.",
                "Asking for appropriate support is a positive step.",
                "Communities can play an important role in creating supportive environments.",
              ].map((item, index) => (
                <li key={item} className="bg-surface-raised p-6 sm:p-8">
                  <span className="font-mono text-sm text-gold">
                    0{index + 1}
                  </span>
                  <p className="mt-8 text-xl leading-tight">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-space site-shell" id="event-gallery">
          <p className="eyebrow">Event Gallery</p>
          <h2 className="section-heading">Moments from the workshop.</h2>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              "A moment from our awareness session",
              "Students participating in an interactive activity",
              "Creating space for meaningful conversations",
              "Learning. Listening. Connecting.",
              "Together, building a culture of care.",
            ].map((caption, index) => (
              <PhotoFrame
                key={caption}
                caption={caption}
                index={index + 1}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="site-shell pb-20 sm:pb-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              className="text-link text-xs"
              href="/mental-health#recent-events"
            >
              ← Back to Recent Events
            </Link>
            <ButtonLink href="#invite">
              Invite Us to Your Campus <span aria-hidden>↗</span>
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
