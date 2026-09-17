"use client";

import { useEffect, useRef, useState } from "react";

type StatisticCardProps = {
  number: string;
  title: string;
  description: string;
  source: string;
  iconLabel: string;
  index: number;
};

export function StatisticCard({
  number,
  title,
  description,
  source,
  iconLabel,
  index,
}: StatisticCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group flex min-h-80 flex-col rounded-[1.25rem] border border-[#d8c99f] bg-[#fffdf7] p-6 text-[#173d2b] shadow-[0_12px_30px_rgba(25,61,43,0.08)] transition-all duration-700 hover:-translate-y-1 hover:border-[#b18746] hover:shadow-[0_20px_38px_rgba(25,61,43,0.15)] sm:p-7 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex size-10 items-center justify-center rounded-full border border-[#b8c9b2] text-[#286345] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
          aria-label={iconLabel}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5"
          >
            <path d="M12 20V9" />
            <path d="M12 13c-3.5 0-6-2.2-6-5.5C9.5 7.5 12 9.5 12 13Z" />
            <path d="M12 16c3.5 0 6-2.2 6-5.5C14.5 10.5 12 12.5 12 16Z" />
            <path d="M8 20h8" />
          </svg>
        </span>
        <span className="font-mono text-xs tracking-[.14em] text-[#a27635]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-8 text-5xl font-medium tracking-[-.06em] text-[#a27635] sm:text-6xl">
        {number}
      </p>
      <h3 className="mt-5 text-xl font-medium leading-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#526857]">{description}</p>
      <p className="mt-auto border-t border-[#e1d9c4] pt-5 text-[11px] leading-5 text-[#6d866b]">
        Source: {source}
      </p>
    </article>
  );
}
