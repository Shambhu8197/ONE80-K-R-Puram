"use client";

import { FormEvent, useState } from "react";

type RegistrationFormProps = {
  eventTitle: string;
};

const registrationRecipient = "thedoorkrpuram@gmail.com";

export function RegistrationForm({ eventTitle }: RegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${registrationRecipient}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _subject: `Event registration: ${eventTitle}`,
            Event: eventTitle,
            "Full name": form.get("name") || "",
            "Email address": form.get("email") || "",
            "Phone number": form.get("phone") || "",
            "Number of people": form.get("people") || "",
          }),
        },
      );

      if (!response.ok) throw new Error("Registration submission failed");
      setSubmitted(true);
    } catch {
      setError(
        "We could not send your registration right now. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="panel p-8 sm:p-12" role="status">
        <p className="eyebrow">Registration received</p>
        <h2 className="section-heading mt-4">You’re registered.</h2>
        <p className="copy mt-6 max-w-xl">
          Your details have been sent to the ONE80° EVENT CENTER team.
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
      <label className="grid gap-2 text-sm text-muted">
        Number of people
        <select
          className="registration-input"
          name="people"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select number of people
          </option>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? "person" : "people"}
            </option>
          ))}
          <option value="10+">More than 10 people</option>
        </select>
      </label>
      {error && (
        <p className="text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
      <button
        className="registration-submit"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Sending registration..." : "Complete registration"}{" "}
        {!submitting && <span aria-hidden>↗</span>}
      </button>
    </form>
  );
}
