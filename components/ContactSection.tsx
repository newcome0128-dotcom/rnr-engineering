"use client";
import { ViberIcon } from "@/components/icons";
import { useMemo, useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; msg: string }>({
    type: "idle",
    msg: "",
  });

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Please enter a valid email.";
    if (form.phone.trim().length < 7) e.phone = "Please enter a valid phone number.";
    if (form.message.trim().length < 10) e.message = "Please add more details (at least 10 characters).";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  // ✅ Put your real number here (PH format)
const VIBER_NUMBER = "639383636340"; 
const viberLink = `viber://chat?number=${VIBER_NUMBER}`;



  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent(
      `Hi RNR Engineering Services, I'd like to request a quote.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nDetails: ${form.message}`
    );
    const viberLink = `viber://chat?number=${639383636340}`;
  }, [form, VIBER_NUMBER]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "idle", msg: "" });

    if (!isValid) {
      setStatus({ type: "error", msg: "Please fix the highlighted fields and try again." });
      return;
    }

    // ✅ Lightweight: client-side “success” for now.
    // If you later want a real email sender, we can add a /api/contact route.
    setStatus({ type: "success", msg: "Message ready. Choose Email or Viber to send." });
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrap">
        <div className="contact-header">
          <span className="kicker">Get in touch</span>
          <h2>Request a Quote</h2>
          <p>Chat with us directly on Viber or send us a message.</p>
        </div>

        <div className="contact-cta-row">
<a className="cta-btn cta-primary" href={viberLink}>
  <span className="icon-inline" aria-hidden="true">
    <ViberIcon size={18} />
  </span>
  Chat on Viber
</a>
                    <a className="cta-btn cta-ghost" href={`mailto:your@email.com?subject=Quote Request - RNR Engineering Services`}>
            Email Us
          </a>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label className="label" htmlFor="name">Full Name</label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className={errors.name ? "input-error" : ""}
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </div>

          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className={errors.email ? "input-error" : ""}
              placeholder="you@email.com"
              autoComplete="email"
            />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>

          <div className="field">
            <label className="label" htmlFor="phone">Phone</label>
            <input
              id="phone"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className={errors.phone ? "input-error" : ""}
              placeholder="+63..."
              autoComplete="tel"
            />
            {errors.phone && <div className="field-error">{errors.phone}</div>}
          </div>

          <div className="field">
            <label className="label" htmlFor="message">Project Details</label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className={errors.message ? "input-error" : ""}
              placeholder="Brief scope, location, target date, materials needed..."
            />
            {errors.message && <div className="field-error">{errors.message}</div>}
          </div>

          <div className="contact-actions">
            <button className="contact-btn" type="submit">
              Validate Details
            </button>
<p style={{ fontSize: 13, opacity: 0.75, marginTop: 6 }}>
  Opens Viber app if installed.
</p>
            <div
              className={`contact-status ${
                status.type === "success" ? "success" : status.type === "error" ? "error" : ""
              }`}
            >
              {status.msg}
            </div>
          </div>

          {/* CTA after validation */}
          <div className="contact-submit-row">
            <a
  className={`btn-primary ${isValid ? "" : "disabled"}`}
  href={isValid ? viberLink : "#"}
  onClick={(e) => !isValid && e.preventDefault()}
>
  Send via Viber
</a>
            <a
              className={`btn-secondary ${isValid ? "" : "disabled"}`}
              href={
                isValid
                  ? `mailto:your@email.com?subject=${encodeURIComponent("Quote Request - RNR Engineering Services")}&body=${encodeURIComponent(
                      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nDetails:\n${form.message}\n`
                    )}`
                  : "#"
              }
              onClick={(e) => !isValid && e.preventDefault()}
            >
              Send via Email
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
