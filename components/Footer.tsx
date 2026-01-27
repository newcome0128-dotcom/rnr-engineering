"use client";
import { FacebookIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          © {2024} <strong>RNR Engineering Services</strong>.  
          All rights reserved.
        </div>

        <div className="footer-social">
          <span>Follow us on</span>
<a className="footer-fb" href="https://www.facebook.com/profile.php?id=61565551777683" target="_blank" rel="noreferrer">
          <span className="icon-inline" aria-hidden="true"><FacebookIcon size={18} /></span>
          RNR Engineering Services (Facebook)</a>
        </div>
      </div>
    </footer>
  );
}


