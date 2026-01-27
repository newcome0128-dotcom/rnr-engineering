"use client";

import { useMemo, useState } from "react";

type Status = { type: "idle" | "sending" | "success" | "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const isSending = status.type === "sending";

  const statusClass = useMemo(() => {
    if (status.type === "success") return "contact-status success";
    if (status.type === "error") return "contact-status error";
    return "contact-status";
  }, [status.type]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!email || !message) {
      setStatus({ type: "error", message: "Please fill out Email and Message." });
      return;
    }
    if (message.length < 10) {
      setStatus({ type: "error", message: "Please add a bit more detail (at least 10 characters)." });
      return;
    }

    setStatus({ type: "sending", message: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus({ type: "error", message: data?.error || "Failed to send. Please try again." });
        return;
      }

      setStatus({ type: "success", message: "Message sent. We will contact you shortly." });
      form.reset();
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <section id="contact" className="contact-section scroll-reveal">
      <div className="contact-wrap">
        <header className="contact-header">
          <h2>Let’s Build Together</h2>
          <p>Contact RNR Engineering Services today.</p>
        </header>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label className="label" htmlFor="contactEmail">
              Email
            </label>
            <input
              id="contactEmail"
              type="email"
              name="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="contactMessage">
              Message
            </label>
            <textarea
              id="contactMessage"
              name="message"
              placeholder="Tell us about your project..."
              required
            />
            <p className="hint">Include location, scope, and target schedule if available.</p>
          </div>

          <div className="contact-actions">
            <button className="contact-btn" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>

            <p className={statusClass} role="status" aria-live="polite">
              {status.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
