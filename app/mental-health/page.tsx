import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InviteForm } from "@/components/mental-health/invite-form";
import { StatisticCard } from "@/components/mental-health/statistic-card";
import { MentalHealthExplorer } from "@/components/navigation/mental-health-explorer";
import { ButtonLink } from "@/components/ui/button-link";
import { ContactDetails } from "@/components/ui/contact-details";
import { PhotoFrame } from "@/components/ui/photo-frame";

export const metadata: Metadata = {
  title: "Aware Minds | ONE80° K R Puram",
  description:
    "Aware Minds mental health awareness and well-being initiative for students, educators, institutions, and communities.",
};

const pillars = [
  [
    "Raise Awareness",
    "We help people understand mental health, recognize common challenges, and replace misunderstanding with awareness.",
  ],
  [
    "Build Support Systems",
    "We encourage safe and supportive environments where people can listen, connect, and guide one another toward appropriate help.",
  ],
  [
    "Encourage Conversations",
    "Sometimes a simple conversation can be the beginning of getting support. We encourage open, respectful, and judgment-free conversations.",
  ],
] as const;

const reasons = [
  [
    "Awareness",
    "Understanding mental health helps us recognize challenges instead of ignoring them.",
  ],
  [
    "Connection",
    "Supportive relationships and meaningful conversations can help people feel heard and understood.",
  ],
  [
    "Early Support",
    "Knowing when and where to seek appropriate support can make it easier to take the next positive step.",
  ],
] as const;

const campusBenefits = [
  [
    "Builds Awareness",
    "Help students understand mental health and recognize that emotional well-being deserves attention and care.",
  ],
  [
    "Promotes Well-Being",
    "Introduce practical, age-appropriate approaches to handling everyday challenges and building healthier habits.",
  ],
  [
    "Encourages Open Conversations",
    "Create opportunities for students, educators, and staff to talk about mental health in a respectful and supportive environment.",
  ],
  [
    "Supports Student Success",
    "A supportive environment can contribute to better focus, relationships, engagement, and overall student well-being.",
  ],
] as const;

const topics = [
  [
    "Understanding Mental Health",
    "What mental health means and why it matters in everyday life.",
  ],
  [
    "Managing Stress",
    "Understanding everyday stress and learning healthy ways to respond to challenges.",
  ],
  [
    "Emotional Well-Being",
    "Recognizing emotions and developing healthier ways to communicate and respond to them.",
  ],
  [
    "Building Resilience",
    "Learning how to adapt, recover, and move forward when facing difficulties.",
  ],
  [
    "Self-Esteem & Self-Understanding",
    "Developing a healthier understanding of ourselves, our strengths, and our challenges.",
  ],
  [
    "Healthy Relationships & Communication",
    "Understanding boundaries, empathy, listening, respect, and healthy communication.",
  ],
  [
    "Pressure & Expectations",
    "Exploring academic, social, family, and career-related expectations.",
  ],
  [
    "When & Where to Seek Help",
    "Understanding when additional support may be helpful and how to approach a trusted adult, counselor, mental-health professional, or appropriate support service.",
  ],
] as const;

const presentations = [
  [
    "Age-Appropriate & Engaging",
    "Our sessions are adapted to the age group and environment so participants can connect with the conversation.",
  ],
  [
    "Evidence-Informed & Relatable",
    "We turn important mental-health concepts into simple, understandable discussions connected to everyday experiences.",
  ],
  [
    "Interactive & Meaningful",
    "Rather than simply presenting information, we encourage participants to think, discuss, reflect, and engage.",
  ],
  [
    "Supportive & Resourceful",
    "Participants are introduced to healthy support-seeking approaches and appropriate resources when additional help may be needed.",
  ],
] as const;

const audiences = [
  [
    "For Students",
    "Better awareness. Stronger support. Brighter futures.",
    "We create engaging opportunities for students to learn about mental health, emotional well-being, relationships, pressure, and support.",
  ],
  [
    "For Educators",
    "Stronger connections. More supportive classrooms.",
    "We help educators understand the importance of creating environments where students feel respected, heard, and supported.",
  ],
  [
    "For Institutions",
    "A culture of care. A meaningful investment in well-being.",
    "Schools and colleges can play an important role in building communities where mental health is understood and conversations are encouraged.",
  ],
] as const;

const statistics = [
  {
    number: "81%",
    title: "Students reported study-related anxiety",
    description:
      "Studies, exams and results were reported as sources of anxiety.",
    source: "Government of India — National Survey, 2022",
    iconLabel: "Growing awareness",
  },
  {
    number: "43%",
    title: "Students reported mood swings",
    description: "School students reported experiencing mood swings.",
    source: "Government of India — National Survey, 2022",
    iconLabel: "Emotional well-being",
  },
  {
    number: "29%",
    title: "Students reported difficulty concentrating",
    description: "Nearly 3 in 10 students reported low concentration.",
    source: "Government of India — National Survey, 2022",
    iconLabel: "Focus and attention",
  },
  {
    number: "28.4%",
    title: "Students hesitated to ask questions",
    description: "Many hesitated to ask questions or express difficulties.",
    source: "Government of India — National Survey, 2022",
    iconLabel: "Open conversation",
  },
  {
    number: "33.6%",
    title: "College students reported depressive symptoms",
    description: "Moderate-to-severe symptoms were reported in the survey.",
    source: "Multi-state study of 8,542 college students",
    iconLabel: "College student well-being",
  },
  {
    number: "23.2%",
    title: "College students reported anxiety symptoms",
    description: "Moderate-to-severe symptoms were reported in the survey.",
    source: "Multi-state study of 8,542 college students",
    iconLabel: "Student support",
  },
  {
    number: "50%",
    title: "Depression among medical students",
    description:
      "A pooled estimate among undergraduate medical students in India.",
    source: "Systematic review and meta-analysis",
    iconLabel: "Medical student support",
  },
  {
    number: "14.1%",
    title: "Anxiety disorders in India",
    description:
      "A pooled estimate for India during 2011–2021, not student-only.",
    source: "Systematic review — India",
    iconLabel: "India-wide well-being",
  },
  {
    number: "13,044",
    title: "Student deaths by suicide recorded in 2022",
    description: "Recorded student deaths by suicide in India during 2022.",
    source: "National Crime Records Bureau / Government of India",
    iconLabel: "Remembering students",
  },
  {
    number: "12.88 lakh+",
    title: "Students reached through national surveys",
    description: "Students reached through nationwide well-being surveys.",
    source: "Government of India, 2025",
    iconLabel: "Students reached",
  },
] as const;

const recentEvents = [
  {
    slug: "mental-health-awareness-workshop",
    title: "Mental Health Awareness Workshop",
    date: "12 September 2026",
    location: "Bengaluru, Karnataka",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.32 PM.jpeg",
    description:
      "An interactive awareness session designed to help participants understand mental health, recognize everyday challenges, encourage supportive conversations, and learn about appropriate sources of help.",
  },
] as const;

const galleryPhotos = [
  {
    caption: "A moment from our awareness session",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.32 PM.jpeg",
  },
  {
    caption: "Students participating in an interactive activity",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.32 PM (1).jpeg",
  },
  {
    caption: "Creating space for meaningful conversations",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.32 PM (2).jpeg",
  },
  {
    caption: "Learning. Listening. Connecting.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.33 PM.jpeg",
  },
  {
    caption: "Together, building a culture of care.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.33 PM (1).jpeg",
  },
  {
    caption: "Listening with openness and care.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.34 PM.jpeg",
  },
  {
    caption: "Shared learning in community.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.34 PM (1).jpeg",
  },
  {
    caption: "Making room for every voice.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.34 PM (2).jpeg",
  },
  {
    caption: "A campus culture of support.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.35 PM.jpeg",
  },
  {
    caption: "Small moments of connection.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.35 PM (1).jpeg",
  },
  {
    caption: "Together, learning to support one another.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.35 PM (2).jpeg",
  },
  {
    caption: "Continuing the conversation.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 8.06.35 PM (3).jpeg",
  },
  {
    caption: "A fresh perspective on well-being.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 10.01.55 PM.jpeg",
  },
  {
    caption: "Building a more caring community.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 10.01.55 PM (1).jpeg",
  },
  {
    caption: "Every conversation makes a difference.",
    src: "/workshop images/WhatsApp Image 2026-09-14 at 10.01.56 PM.jpeg",
  },
] as const;

export default function MentalHealthPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mental-health-page">
        <section className="mental-health-hero relative isolate overflow-hidden border-b border-[#71906d] bg-[#173d2b] pb-20 pt-44 sm:pb-28 sm:pt-52">
          <div className="hero-atmosphere absolute inset-0 -z-10" />
          <div className="site-shell">
            <p className="mental-health-eyebrow eyebrow">
              Aware Minds • ONE80° Community Partner
            </p>
            <h1 className="display-heading mt-6 max-w-5xl text-[clamp(3.5rem,10vw,8rem)] leading-[.85] text-[#f8f5eb]">
              Aware Minds. Stronger Lives.
            </h1>
            <p className="copy mt-10 max-w-2xl text-[#dce8d5]">
              Creating a culture where mental health conversations are normal,
              support is accessible, and every person feels seen, heard, and
              valued.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="#contact"
                className="mental-health-primary-button"
              >
                Book a Campus Event <span aria-hidden>↗</span>
              </ButtonLink>
              <ButtonLink
                href="#recent-events"
                variant="secondary"
                className="mental-health-secondary-button"
              >
                Explore Our Events <span aria-hidden>↘</span>
              </ButtonLink>
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[.2em] text-[#dce8d5]">
              Awareness. Understanding. Support. Together.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#c6d8be]">
              Aware Minds is the NGO community partner supporting ONE80° EVENT
              CENTER through mental-health awareness and well-being programmes.
            </p>
          </div>
        </section>

        <MentalHealthExplorer />

        <section
          className="priority-section section-space site-shell"
          id="about-aware-minds"
        >
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
            <div className="relative">
              <div className="absolute -left-5 top-0 h-28 w-px bg-gradient-to-b from-gold to-transparent" />
              <p className="eyebrow">About Aware Minds</p>
              <h2 className="section-heading max-w-md">Every mind matters.</h2>
              <p className="mt-8 max-w-xs text-sm leading-6 text-muted">
                Awareness is the first step toward understanding, connection,
                and meaningful support.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-[linear-gradient(145deg,rgba(23,32,43,0.72),rgba(14,20,28,0.3))] p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/[0.08] blur-3xl" />
              <div className="relative">
                <p className="max-w-3xl text-2xl leading-tight text-foreground sm:text-3xl">
                  Mental health is not something we should only talk about when
                  there is a crisis.
                </p>
                <p className="copy mt-6">
                  It is part of our everyday lives—our thoughts, emotions,
                  relationships, studies, work, and decisions.
                </p>
                <p className="copy mt-6">
                  Aware Minds • Stronger Lives is an initiative focused on
                  creating awareness, encouraging healthy conversations,
                  reducing stigma, and connecting people with appropriate
                  support.
                </p>
                <p className="copy mt-6">
                  As ONE80° EVENT CENTER&apos;s NGO community partner, we bring
                  these conversations to students, educators, and communities.
                </p>
                <p className="mt-8 border-l-2 border-gold pl-5 text-xl leading-tight text-foreground">
                  Help people understand mental health, talk about it without
                  fear, and know that asking for support is a sign of strength.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {pillars.map(([title, copy], index) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-surface-raised/90 sm:p-8"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent" />
                <p className="font-mono text-sm text-gold">
                  <span className="mr-2 text-muted/60">/</span>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-14 text-2xl font-medium">{title}</h3>
                <p className="copy mt-4 text-base">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-space border-y border-line bg-surface"
          id="mission-vision"
        >
          <div className="site-shell grid gap-5 lg:grid-cols-2">
            <article className="mental-card">
              <p className="eyebrow">Our Mission</p>
              <h2 className="section-heading">Promote well-being.</h2>
              <p className="copy mt-7 max-w-xl">
                To promote mental well-being, increase awareness, encourage
                early conversations about mental health, and help build
                compassionate communities where every person matters.
              </p>
            </article>
            <article className="mental-card">
              <p className="eyebrow">Our Vision</p>
              <h2 className="section-heading">No one feels alone.</h2>
              <p className="copy mt-7 max-w-xl">
                A world where talking about mental health is normal, seeking
                appropriate help is encouraged, and people feel supported rather
                than alone in their struggles.
              </p>
            </article>
          </div>
          <p className="site-shell mt-16 text-center text-2xl italic text-gold sm:text-3xl">
            “A conversation can be a beginning.”
          </p>
        </section>

        <section className="section-space site-shell" id="why-it-matters">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why It Matters</p>
              <h2 className="section-heading">
                Awareness can change the conversation.
              </h2>
            </div>
            <div>
              <p className="copy max-w-2xl">
                Mental health influences how we think, feel, learn, work,
                communicate, and respond to challenges.
              </p>
              <p className="copy mt-6 max-w-2xl">
                Yet many people hesitate to talk about what they are
                experiencing because of fear, misunderstanding, embarrassment,
                or stigma.
              </p>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {reasons.map(([title, copy], index) => (
                  <article key={title} className="mental-card">
                    <p className="font-mono text-sm text-gold">
                      <span className="mr-2 text-muted/60">/</span>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-12 text-xl font-medium">{title}</h3>
                    <p className="copy mt-4 text-base">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-14 border-y border-line py-8 text-xl leading-tight text-foreground sm:text-2xl">
            We don&apos;t have to have all the answers. Sometimes, listening and
            helping someone connect with the right support is an important first
            step.
          </p>
        </section>

        <section
          className="priority-section section-space relative overflow-hidden border-y border-line bg-surface"
          id="invite"
        >
          <div className="pointer-events-none absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-gold/[0.06] blur-3xl" />
          <div className="site-shell">
            <div className="max-w-4xl">
              <p className="eyebrow">School / College Invitation</p>
              <h2 className="section-heading">
                Healthy minds. Stronger futures.
              </h2>
              <p className="copy mt-7">
                Students are navigating academics, relationships, expectations,
                career decisions, social pressure, and many other changes.
                Creating a space where students can openly learn about mental
                health can help build a healthier and more supportive campus
                culture.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {campusBenefits.map(([title, copy], index) => (
                <article
                  key={title}
                  className="group relative min-h-64 overflow-hidden rounded-2xl border border-line bg-[linear-gradient(145deg,rgba(23,32,43,0.94),rgba(14,20,28,0.98))] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_55px_rgba(216,174,104,0.09)] sm:p-7"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent transition-all duration-300 group-hover:via-gold/80" />
                  <p className="relative font-mono text-sm text-gold">
                    <span className="mr-2 text-muted/60">/</span>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="relative mt-10 text-xl font-medium leading-tight">
                    {title}
                  </h3>
                  <p className="copy relative mt-4 text-base">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-muted">
                Bring an age-appropriate, practical conversation about mental
                health to your students and educators.
              </p>
              <ButtonLink href="#contact" className="shrink-0">
                Book an Event <span aria-hidden>↗</span>
              </ButtonLink>
            </div>
          </div>
        </section>

        <section
          className="priority-section section-space site-shell"
          id="topics"
        >
          <p className="eyebrow">Topics We Cover</p>
          <h2 className="section-heading">
            Sessions shaped for your community.
          </h2>
          <p className="copy mt-7 max-w-3xl">
            Our sessions can be customized according to the age group, audience,
            and needs of your institution.
          </p>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map(([title, copy], index) => (
              <article
                key={title}
                className="group relative min-h-64 overflow-hidden rounded-2xl border border-line bg-[linear-gradient(145deg,rgba(23,32,43,0.92),rgba(14,20,28,0.98))] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_55px_rgba(216,174,104,0.09)] sm:p-7"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent transition-all duration-300 group-hover:via-gold/80" />
                <p className="relative font-mono text-sm text-gold">
                  <span className="mr-2 text-muted/60">/</span>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="relative mt-10 max-w-[13rem] text-xl font-medium leading-tight">
                  {title}
                </h3>
                <p className="copy relative mt-4 text-base">{copy}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="#invite" variant="secondary" className="mt-10">
            Request a session <span aria-hidden>↗</span>
          </ButtonLink>
        </section>

        <section
          className="relative overflow-hidden border-y border-[#d5bd82] bg-[#f1eee5] py-20 sm:py-28 lg:py-36"
          id="statistics"
          aria-labelledby="statistics-title"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-1 w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b18746] to-transparent" />
          <div className="site-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a27635]">
                The evidence we carry forward
              </p>
              <h2
                id="statistics-title"
                className="mt-4 text-4xl font-medium leading-[.96] tracking-[-.06em] text-[#173d2b] sm:text-5xl lg:text-6xl"
              >
                THE NUMBERS BEHIND THE CONVERSATION
              </h2>
              <p className="mt-6 text-lg leading-7 text-[#526857] sm:text-xl">
                Every number represents a student, a story, and a life that
                matters.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {statistics.map((statistic, index) => (
                <StatisticCard
                  key={statistic.title}
                  {...statistic}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-14 rounded-[1.5rem] border border-[#b18746]/40 bg-[#173d2b] px-6 py-12 text-center text-[#f8f5eb] shadow-[0_18px_40px_rgba(25,61,43,0.15)] sm:px-10 sm:py-16">
              <p className="mx-auto max-w-4xl text-3xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">
                Behind every statistic is a student who deserves to be heard.
              </p>
              <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-[#dce8d5] sm:text-2xl">
                Talk. Listen. Support.
                <br />
                You never know whose life you may change.
              </p>
              <p className="mx-auto mt-10 max-w-2xl border-t border-[#71906d] pt-6 text-sm leading-6 text-[#c6d8be]">
                Statistics help us understand the scale of the challenge. Every
                person&apos;s experience is unique, and asking for help is a
                sign of strength.
              </p>
              <ButtonLink
                href="#contact"
                className="!mt-8 !bg-[#f8f5eb] !text-[#173d2b] hover:!bg-[#dce8d5]"
              >
                Register your interest <span aria-hidden>↗</span>
              </ButtonLink>
            </div>
          </div>
        </section>

        <section
          className="priority-section section-space border-y border-line bg-surface"
          id="recent-events"
        >
          <div className="site-shell">
            <p className="eyebrow">Recent Events</p>
            <h2 className="section-heading">
              Turning conversations into action.
            </h2>
            <p className="copy mt-7 max-w-3xl">
              From awareness workshops to interactive campus sessions, we are
              creating opportunities for people to learn, listen, connect, and
              talk about mental health.
            </p>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {recentEvents.map((event, index) => (
                <article key={event.slug} className="mental-card p-0 sm:p-0">
                  <PhotoFrame
                    caption={`${event.title} photo`}
                    index={index + 1}
                    src={event.src}
                    featured
                  />
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-sm text-gold">
                        <span className="mr-2 text-muted/60">/</span>
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <span className="border border-gold/25 bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                        Featured session
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-medium leading-tight sm:text-3xl">
                      {event.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted">
                      <span>{event.date}</span>
                      <span className="text-gold/70">{event.location}</span>
                    </div>
                    <p className="copy mt-5 text-base">{event.description}</p>
                    <ButtonLink
                      href={`/mental-health/events/${event.slug}`}
                      variant="secondary"
                      className="mt-7"
                    >
                      View event <span aria-hidden>↗</span>
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="priority-section section-space site-shell"
          id="gallery"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Event Photo Gallery</p>
              <h2 className="section-heading">Moments from our events.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted sm:text-right">
              Five moments. One shared space for learning, listening, and
              connection.
            </p>
          </div>
          <p className="copy mt-7 max-w-3xl">
            Every event creates a chance to learn something, start a
            conversation, and connect with others.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryPhotos.map(({ caption, src }, index) => (
              <PhotoFrame
                key={caption}
                caption={caption}
                index={index + 1}
                src={src}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        <section
          className="section-space border-y border-line bg-surface"
          id="presentations"
        >
          <div className="site-shell">
            <p className="eyebrow">Our Presentations</p>
            <h2 className="section-heading">
              Understandable. Engaging. Practical.
            </h2>
            <p className="copy mt-7 max-w-3xl">
              We believe mental-health awareness sessions should be
              understandable, engaging, practical, and relevant to the audience.
            </p>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {presentations.map(([title, copy], index) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-gold/25 bg-[linear-gradient(135deg,rgba(23,32,43,0.96),rgba(9,12,18,0.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_26px_70px_rgba(216,174,104,0.08)] sm:p-8"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,174,104,0.18),transparent_38%)] opacity-100" />
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
                  <div className="relative z-10">
                    <p className="font-mono text-sm text-gold">0{index + 1}</p>
                    <h3 className="mt-12 text-xl font-medium">{title}</h3>
                    <p className="copy mt-4 text-base">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space site-shell" id="who-we-serve">
          <p className="eyebrow">Who We Serve</p>
          <h2 className="section-heading">
            Building healthier communities together.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map(([title, lead, copy]) => (
              <article key={title} className="mental-card">
                <h3 className="text-2xl font-medium">{title}</h3>
                <p className="mt-5 text-lg leading-tight text-gold">{lead}</p>
                <p className="copy mt-5 text-base">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="priority-section section-space relative overflow-hidden border-y border-line bg-surface"
          id="contact"
        >
          <div className="pointer-events-none absolute right-[-6rem] top-[-8rem] h-72 w-72 rounded-full bg-gold/[0.06] blur-3xl" />
          <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Registration / Invite Us</p>
              <h2 className="section-heading">Register your interest.</h2>
              <p className="copy mt-7 max-w-xl">
                Would you like to organize a mental-health awareness session at
                your school, college, workplace, or community? We would love to
                hear from you.
              </p>
              <ContactDetails className="mt-10" />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-gold/35 bg-[linear-gradient(145deg,rgba(23,32,43,0.96),rgba(9,12,18,0.98))] p-6 shadow-[0_24px_70px_rgba(216,174,104,0.08)] sm:p-10">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent sm:inset-x-10" />
              <div className="relative mb-8 flex items-center justify-between gap-4 border-b border-line pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-gold">
                    Registration request
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Tell us how we can support your campus.
                  </p>
                </div>
                <span className="font-mono text-sm text-gold/70">/01</span>
              </div>
              <InviteForm />
              <p className="mt-8 border-t border-line pt-5 text-xs leading-5 text-muted">
                Aware Minds provides educational awareness sessions and is not
                an emergency or clinical support service. For urgent personal
                support, contact local emergency services or a qualified
                mental-health professional.
              </p>
            </div>
          </div>
        </section>

        <section className="site-shell py-20 sm:py-28" id="final-cta">
          <div className="bg-gold px-6 py-12 text-black sm:px-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[.2em]">
              Our purpose
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-.06em] sm:text-6xl">
              Your students. Their future. Our purpose.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-7">
              Mental health awareness begins with a conversation. Let&apos;s
              build a healthier community, together.
            </p>
            <a
              className="mt-8 inline-flex min-h-12 items-center justify-center border border-black px-5 text-xs font-semibold uppercase tracking-[.16em] transition-colors hover:bg-black hover:text-white"
              href="#invite"
            >
              Invite Us{" "}
              <span className="ml-2" aria-hidden>
                ↗
              </span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
