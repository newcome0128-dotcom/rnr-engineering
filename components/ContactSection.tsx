"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  details: string;
};

const VIBER_NUMBER = "639383636340";
const EMAIL_TO = "alvin.3dcc@gmail.com";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    details: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!/^\+?\d[\d\s-]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (form.details.trim().length < 10) {
      nextErrors.details = "Please add more details (at least 10 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildMessage = () => {
    return [
      "Hello RNR Engineering Services,",
      "",
      "I would like to request a quote.",
      "",
      `Full Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      "Project Details:",
      form.details,
    ].join("\n");
  };

  const handleViberChat = () => {
    const url = `viber://chat?number=%2B${VIBER_NUMBER}`;
    window.location.href = url;
  };

  const handleSendViber = () => {
    if (!validate()) return;

    const message = encodeURIComponent(buildMessage());

    // Viber deep link with message
    const url = `viber://forward?text=${message}`;
    window.location.href = url;
  };

  const handleSendEmail = () => {
    if (!validate()) return;

    const subject = encodeURIComponent(
      `Quote Request from ${form.fullName}`
    );
    const body = encodeURIComponent(buildMessage());

    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Get in touch</span>
          <h2>Request a Quote</h2>
          <p>Send your project details and we’ll respond as soon as possible.</p>
        </div>

        <div className="contact-wrap">
          <div className="contact-quick">
            <button
              type="button"
              className="quick-link"
              onClick={handleViberChat}
            >
              Chat on Viber
            </button>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label className="label" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your name"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
              />
              {errors.fullName && <p className="error-text">{errors.fullName}</p>}
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="field">
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+63..."
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>

            <div className="field">
              <label className="label" htmlFor="details">
                Project Details
              </label>
              <textarea
                id="details"
                placeholder="Brief scope, location, target date, materials needed..."
                value={form.details}
                onChange={(e) => updateField("details", e.target.value)}
              />
              {errors.details && <p className="error-text">{errors.details}</p>}
            </div>

            <div className="contact-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleSendViber}
              >
                Send via Viber
              </button>

              <button
                type="button"
                className="btn-primary"
                onClick={handleSendEmail}
              >
                Send via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}