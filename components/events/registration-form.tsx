"use client";

import { FormEvent, useState } from "react";

type RegistrationFormProps = {
  eventTitle: string;
};

export function RegistrationForm({ eventTitle }: RegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Event registration: ${eventTitle}`;
    const body = [
      `Event: ${eventTitle}`,
      `Full name: ${form.get("name") || ""}`,
      `Email address: ${form.get("email") || ""}`,
      `Phone number: ${form.get("phone") || ""}`,
    ].join("\n");

    window.location.href = `mailto:thedoorkrpuram@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="panel p-8 sm:p-12" role="status">
        <p className="eyebrow">Registration confirmed</p>
        <h2 className="section-heading mt-4">
          Congratulations, you’re registered.
        </h2>
        <p className="copy mt-6 max-w-xl">
          Your registration details have been prepared for the ONE80° EVENT
          CENTER team. Keep an eye on your inbox for event updates.
        </p>
      </div>
    );
  }

  return (
    <form className="panel grid gap-6 p-6 sm:p-10" onSubmit={handleSubmit}>
      <div>
        <p className="eyebrow">Your details</p>
        <h2 className="section-heading mt-4">Save your place.</h2>
      </div>
      <label className="grid gap-2 text-sm text-muted">
        Full name
        <input
          className="registration-input"
          name="name"
          required
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Email address
        <input
          className="registration-input"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Phone number
        <input
          className="registration-input"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </label>
      <button className="registration-submit" type="submit">
        Complete registration <span aria-hidden>↗</span>
      </button>
    </form>
  );
}
