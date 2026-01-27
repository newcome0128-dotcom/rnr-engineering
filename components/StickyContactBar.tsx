"use client";

export default function StickyContactBar() {
  const VIBER_NUMBER = "639383636340";
  const FB_URL = "https://www.facebook.com/profile.php?id=61565551777683";
  const viberLink = `viber://chat?number=${VIBER_NUMBER}`;

  return (
    <div className="sticky-cta" role="navigation" aria-label="Quick contact actions">
      <a className="sticky-btn primary" href={viberLink}>
        Chat on Viber
      </a>

      <a className="sticky-btn" href={`tel:+${VIBER_NUMBER}`}>
        Call
      </a>

      <a className="sticky-btn" href={FB_URL} target="_blank" rel="noreferrer">
        Facebook
      </a>
    </div>
  );
}
