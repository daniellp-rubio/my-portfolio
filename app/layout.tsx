import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";

const BASE_URL = "https://daniellopez.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Daniel Lopez — Full Stack Developer | React, Next.js, Node.js",
    template: "%s | Daniel Lopez",
  },
  description:
    "Full Stack Developer | React, Next.js, TypeScript, Node.js. 3+ años construyendo sistemas en producción en Colombia, México y Brasil. Especializado en plataformas escalables, módulos financieros y arquitecturas críticas. Disponible para trabajo remoto.",
  keywords: [
    "full stack developer",
    "full-stack engineer",
    "software engineer",
    "react developer",
    "nextjs developer",
    "next.js developer",
    "typescript developer",
    "javascript developer",
    "node.js developer",
    "nodejs developer",
    "frontend developer",
    "backend developer",
    "remote developer",
    "remote software engineer",
    "latam developer",
    "desarrollador full stack",
    "desarrollador react",
    "desarrollador colombia",
    "medellín developer",
    "colombia developer",
    "postgresql developer",
    "docker",
    "production systems",
    "logistics software",
    "ecommerce developer",
    "api developer",
    "rest api",
    "prisma orm",
    "tailwind css",
  ],
  authors: [{ name: "Daniel Felipe Lopez Rubio", url: BASE_URL }],
  creator: "Daniel Felipe Lopez Rubio",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    url: BASE_URL,
    title: "Daniel Lopez — Full Stack Developer | React, Next.js, Node.js",
    description:
      "Full Stack Developer con 3+ años en producción. Sistemas reales en Colombia, México y Brasil. Disponible para trabajo remoto.",
    siteName: "Daniel Lopez",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Daniel Lopez — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Lopez — Full Stack Developer",
    description:
      "Full Stack Developer con 3+ años en producción. React, Next.js, Node.js. Disponible para trabajo remoto.",
    creator: "@daniellopezdev",
    images: ["/og"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Daniel Felipe Lopez Rubio",
      alternateName: "Daniel Lopez",
      url: BASE_URL,
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer con 3+ años construyendo sistemas en producción. Especializado en React, Next.js y Node.js.",
      email: "dafeloru@gmail.com",
      sameAs: [
        "https://github.com/daniellp-rubio",
        "https://linkedin.com/in/daniel-lopez-rubio",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medellín",
        addressCountry: "CO",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "REST API",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "Tailwind CSS",
        "Prisma ORM",
        "NextAuth",
        "Software Engineering",
        "Production Systems",
        "Agile Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Daniel Lopez — Full Stack Developer",
      description: "Portfolio profesional de Daniel Felipe Lopez Rubio",
      author: { "@id": `${BASE_URL}/#person` },
      inLanguage: ["es", "en"],
    },
  ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
