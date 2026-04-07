import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://daniellopez.dev"),
  title: {
    default: "Daniel Lopez — Full Stack Developer",
    template: "%s | Daniel Lopez",
  },
  description:
    "Full Stack Developer specialized in React, Next.js, and Node.js. 2+ years building production systems. Available for remote work globally.",
  keywords: [
    "full stack developer",
    "react developer",
    "nextjs developer",
    "typescript",
    "node.js",
    "remote developer",
    "latam developer",
    "frontend developer",
    "backend developer",
    "software engineer",
    "desarrollador full stack",
    "desarrollador react",
  ],
  authors: [{ name: "Daniel Felipe Lopez Rubio" }],
  creator: "Daniel Felipe Lopez Rubio",
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    url: "https://daniellopez.dev",
    title: "Daniel Lopez — Full Stack Developer",
    description:
      "Full Stack Developer specialized in React, Next.js, and Node.js. Production systems. Available for remote work.",
    siteName: "Daniel Lopez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Lopez — Full Stack Developer",
    description:
      "Full Stack Developer specialized in React, Next.js, and Node.js.",
    creator: "@daniellopezdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
