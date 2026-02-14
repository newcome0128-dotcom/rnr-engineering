import ContactQuick from "@/components/ContactQuick";
import { FacebookIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61565551777683";
  const GMAIL_ADDRESS = "alvin.3dcc@gmail.com";
  const PHONE = "+639383636340";

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} <strong>RNR Engineering Services</strong>. All rights reserved.
        </p>

        {/* ✅ copy-to-clipboard + icons */}
        <ContactQuick email={GMAIL_ADDRESS} phone={PHONE} />

        <div className="footer-links">
          <a
            className="footer-link"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="RNR Engineering Services Facebook page"
          >
            <span className="icon-inline" aria-hidden="true">
              <FacebookIcon size={18} />
            </span>
            RNR Engineering Services
          </a>
        </div>
      </div>
    </footer>
  );
}
