"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Book a Campus Event",
  "Mental Health Awareness Session",
  "Student Workshop",
  "Educator Session",
  "Community Program",
  "Other",
];

export function InviteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Campus event booking request from ${form.get("name") || "website visitor"}`;
    const body = [
      `Name: ${form.get("name") || ""}`,
      `Organization / Institution: ${form.get("organization") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Phone: ${form.get("phone") || ""}`,
      `Interested in: ${form.get("interest") || ""}`,
      "",
      `Requirement: ${form.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:hello@one80eventcenter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          Name
          <input
            className="min-h-12 border border-line bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted focus:border-gold"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Organization / Institution
          <input
            className="min-h-12 border border-line bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted focus:border-gold"
            name="organization"
            placeholder="School, college, organization, etc."
            required
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          Email Address
          <input
            className="min-h-12 border border-line bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted focus:border-gold"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Phone Number
          <input
            className="min-h-12 border border-line bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted focus:border-gold"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-muted">
        I am interested in
        <select
          className="min-h-12 border border-line bg-background px-4 text-foreground outline-none transition-colors focus:border-gold"
          name="interest"
          defaultValue={interests[0]}
        >
          {interests.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Tell us about your requirement
        <textarea
          className="min-h-32 resize-y border border-line bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-gold"
          name="message"
          placeholder="Write your message..."
          required
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-gold px-5 text-xs font-semibold uppercase tracking-[.16em] text-black transition-all hover:-translate-y-0.5 hover:bg-foreground hover:shadow-[0_10px_24px_rgba(216,174,104,0.18)]"
          type="submit"
        >
          Send Booking Request{" "}
          <span className="ml-2" aria-hidden>
            ↗
          </span>
        </button>
        <p className="text-xs text-muted">
          {sent
            ? "Your email app should open with the booking request ready."
            : "We will get back to you with the next steps."}
        </p>
      </div>
    </form>
  );
}
