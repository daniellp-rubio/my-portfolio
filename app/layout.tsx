import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daniellopez.dev"),
  title: {
    default: "Daniel Lopez — Full Stack Developer",
    template: "%s | Daniel Lopez",
  },
  description:
    "Full Stack Developer especializado en React, Next.js y Node.js. Construyo sistemas en producción que escalan. Disponible para trabajo remoto global.",
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
  ],
  authors: [{ name: "Daniel Felipe Lopez Rubio" }],
  creator: "Daniel Felipe Lopez Rubio",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://daniellopez.dev",
    title: "Daniel Lopez — Full Stack Developer",
    description:
      "Full Stack Developer especializado en React, Next.js y Node.js. Sistemas en producción. Disponible para trabajo remoto.",
    siteName: "Daniel Lopez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Lopez — Full Stack Developer",
    description:
      "Full Stack Developer especializado en React, Next.js y Node.js.",
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
      <body className="bg-background text-text-primary antialiased">{children}</body>
    </html>
  );
}
