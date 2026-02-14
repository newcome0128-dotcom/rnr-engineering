"use client";

import { useState } from "react";
import { MailIcon, PhoneIcon } from "@/components/icons";

type Props = {
  email: string;
  phone: string;
};

async function copyText(text: string) {
  // Try modern clipboard API
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers / non-secure context
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function ContactQuick({ email, phone }: Props) {
  const [copied, setCopied] = useState<"email" | "phone" | "">("");

  async function handleCopy(kind: "email" | "phone") {
    const text = kind === "email" ? email : phone;
    const ok = await copyText(text);

    if (ok) {
      setCopied(kind);
      window.setTimeout(() => setCopied(""), 1200);
    }
  }

  return (
    <div className="contact-quick" aria-label="Quick contact links">
      {/* Phone */}
      <a className="quick-link" href={`tel:${phone}`} aria-label="Call">
        <span className="icon-inline" aria-hidden="true">
          <PhoneIcon size={18} />
        </span>
        {phone}
      </a>
      <button
        type="button"
        className="copy-btn"
        onClick={() => handleCopy("phone")}
        aria-label="Copy phone number"
      >
        {copied === "phone" ? "Copied" : "Copy"}
      </button>

      {/* Email */}
      <a className="quick-link" href={`mailto:${email}`} aria-label="Email">
        <span className="icon-inline" aria-hidden="true">
          <MailIcon size={18} />
        </span>
        {email}
      </a>
      <button
        type="button"
        className="copy-btn"
        onClick={() => handleCopy("email")}
        aria-label="Copy email"
      >
        {copied === "email" ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
