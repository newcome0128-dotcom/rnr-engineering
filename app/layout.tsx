import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RNR Engineering Services | General Contractor & Supplies",
  description:
    "RNR Engineering Services provides professional construction, engineering, and general supply solutions.",
  icons: {
    icon: [{ url: "/images/LOGO.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Font Awesome (kept from CodePen) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
