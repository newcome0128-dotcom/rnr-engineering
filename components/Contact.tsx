"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setStatus(data?.error || "Failed to send. Please try again.");
      return;
    }

    setStatus("Message sent. We will contact you shortly.");
    form.reset();
  }

  return (
    <section id="contact" className="contact-section scroll-reveal">
      <h2>Let’s Build Together</h2>
      <p>Contact RNR Engineering Services today.</p>

      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required />
        <button type="submit">Send Message</button>
        <p role="status">{status}</p>
      </form>
    </section>
  );
}
