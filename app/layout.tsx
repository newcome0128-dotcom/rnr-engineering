import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "RNR Engineering Services",
  description: "Civil, Mechanical, Electrical Works & General Supplies",
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "RNR Engineering Services",
    description: "Civil, Mechanical, Electrical Works & General Supplies",
    url: siteUrl,
    siteName: "RNR Engineering Services",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "RNR Engineering Services",
      },
    ],
    locale: "en_PH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RNR Engineering Services",
    description: "Civil, Mechanical, Electrical Works & General Supplies",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/backgrounds/site-bg.webp"
          type="image/webp"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
