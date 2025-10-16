"use client";

import { useState } from "react";

export default function BookingPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thank you. We'll be in touch within 24 hours.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="container py-16 md:py-24 max-w-3xl">
      <h1 className="heading-serif text-4xl mb-4">Book a Private Consult</h1>
      <p className="text-black/70 mb-8">
        Share a few details. Consults are discreet and complimentary for soft open.
      </p>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium">Full name</label>
          <input id="name" name="name" required className="rounded-xl border border-black/10 bg-white px-4 py-3" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" type="email" name="email" required className="rounded-xl border border-black/10 bg-white px-4 py-3" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
          <input id="phone" name="phone" className="rounded-xl border border-black/10 bg-white px-4 py-3" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="interest" className="text-sm font-medium">Primary interest</label>
          <select id="interest" name="interest" className="rounded-xl border border-black/10 bg-white px-4 py-3">
            <option>Small-group coaching</option>
            <option>Large classes</option>
            <option>Private training</option>
          </select>
        </div>
        <div className="grid gap-1">
          <label htmlFor="notes" className="text-sm font-medium">Notes</label>
          <textarea id="notes" name="notes" rows={5} placeholder="Goals, schedule, anything we should know" className="rounded-xl border border-black/10 bg-white px-4 py-3" />
        </div>
        <button disabled={status === "submitting"} className="btn btn-primary">
          {status === "submitting" ? "Sending…" : "Request consult"}
        </button>
        {message && (
          <p className={status === "success" ? "text-[--brand-sage]" : "text-red-600"}>{message}</p>
        )}
      </form>
      <div className="mt-10 text-sm text-black/60">
        Or email us directly: <a className="underline" href="mailto:hello@ketchwellness.com">hello@ketchwellness.com</a>
      </div>
    </div>
  );
}
