"use client";

export default function ContactStrip() {
  const VIBER_NUMBER = "639383636340";
  const viberLink = `viber://chat?number=${VIBER_NUMBER}`;

  return (
    <div className="contact-strip" aria-label="Quick contact strip">
      <div className="contact-strip-inner">
        <div>
          <div className="contact-strip-title">Need a quote today?</div>
          <div className="contact-strip-sub">
            Message us on Viber for faster response — or go to the contact form.
          </div>
        </div>

        <div className="contact-strip-actions">
          <a className="btn-primary" href={viberLink}>
            Chat on Viber
          </a>
          <a className="btn-secondary" href="#contact">
            Contact Form
          </a>
        </div>
      </div>
    </div>
  );
}
