"use client";

import { useEffect, useState } from "react";

const units = ["Days", "Hours", "Minutes", "Seconds"];
const eventDate = new Date("2026-09-19T19:00:00+05:30").getTime();

function getTimeRemaining() {
  const difference = Math.max(eventDate - Date.now(), 0);

  return {
    Days: Math.floor(difference / 86400000),
    Hours: Math.floor((difference / 3600000) % 24),
    Minutes: Math.floor((difference / 60000) % 60),
    Seconds: Math.floor((difference / 1000) % 60),
  };
}

export function CountdownPlaceholder() {
  const [timeRemaining, setTimeRemaining] = useState<ReturnType<
    typeof getTimeRemaining
  > | null>(null);

  useEffect(() => {
    const updateCountdown = () => setTimeRemaining(getTimeRemaining());
    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const eventStarted =
    timeRemaining !== null &&
    Object.values(timeRemaining).every((value) => value === 0);

  return (
    <section className="relative isolate overflow-hidden border-y border-line bg-background">
      <div className="hero-atmosphere absolute inset-0 -z-10 opacity-60" />
      <div className="absolute right-[-8rem] top-[-10rem] -z-10 h-80 w-80 rounded-full bg-gold/[0.08] blur-3xl" />
      <div className="site-shell py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">The first night</p>
              <span className="border border-gold/35 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[.16em] text-gold">
                19 Sep 2026 · 7:00 PM
              </span>
            </div>
            <h2 className="mt-5 text-4xl font-medium tracking-[-.06em] sm:text-5xl lg:text-6xl">
              {eventStarted ? "We’re live." : "The countdown is on."}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-muted lg:text-right">
            Join us at ONE80° EVENT CENTER for the first night of a new live
            music experience.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {units.map((unit) => (
            <div
              key={unit}
              className="group rounded-xl border border-line bg-surface-raised/80 px-4 py-5 shadow-[0_16px_38px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_20px_45px_rgba(216,174,104,0.1)] sm:px-6 sm:py-7"
            >
              <p className="font-mono text-4xl tracking-[-.06em] text-gold sm:text-6xl">
                {timeRemaining
                  ? String(
                      timeRemaining[unit as keyof typeof timeRemaining],
                    ).padStart(2, "0")
                  : "--"}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[.2em] text-muted">
                {unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
