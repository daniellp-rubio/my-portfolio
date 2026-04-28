import { Translation } from "./types";
import { personal } from "../data";

export const en: Translation = {
  lang: "en",
  nav: {
    links: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
    },
    cta: {
      cv: "Download CV",
      contact: "Let's talk",
    },
  },
  hero: {
    availability: "Open to new opportunities",
    headline: {
      line1: "I build systems",
      line2: "that scale,",
      line3: "not just code",
      line4: "that works.",
    },
    subtext:
      "Full Stack Developer specialized in React, Next.js, and Node.js. 3 years building and stabilizing production platforms operating across Colombia, Mexico, and Brazil.",
    cta: {
      primary: "View my projects",
      secondary: "Let's talk",
      github: "GitHub",
    },
    stats: [
      { value: "3+", label: "years in production" },
      { value: "3", label: "countries of operation" },
      { value: "5+", label: "live systems" },
      { value: "100%", label: "remote" },
    ],
    scroll: "scroll",
  },
  about: {
    label: "About",
    headline: "I don't just write code. I understand the business.",
    paragraphs: [
      "Over the past 3 years I've worked directly on production systems operating in Colombia, Mexico, and Brazil. Not simulations or academic projects — critical financial modules, architectures stabilized under pressure, integrations with legal consequences on errors.",
      "I specialize in turning complex business problems into technical solutions that ship, not just that get designed. I understand the impact of every technical decision, work directly with stakeholders, and know when the perfect solution is worse than the one that arrives on time.",
      "I'm looking for a remote team where technical judgment carries real weight — where what I build goes to production and where getting it right from the start actually matters.",
    ],
    values: [
      {
        icon: "target",
        label: "Results-driven",
        desc: "Every line of code has a business purpose",
      },
      {
        icon: "zap",
        label: "Continuous delivery",
        desc: "Production systems, not eternal staging",
      },
      {
        icon: "users",
        label: "Real collaboration",
        desc: "Direct work with stakeholders and cross-functional teams",
      },
      {
        icon: "shield",
        label: "Maintainable code",
        desc: "Architectures the next developer can understand",
      },
    ],
    languages: {
      title: "Languages",
      spanish: { name: "Spanish", level: "Native" },
      english: { name: "English", level: "Intermediate B1 · Actively improving" },
    },
    education: {
      title: "Education",
      degree1: "Software Analysis and Development Technologist",
      degree2: "Software Development Technician",
      institution: "SENA",
      period1: "2023–2024 · Medellín, Colombia",
      period2: "2021–2022 · Medellín, Colombia",
    },
  },
  experience: {
    label: "Experience",
    headline: "3+ years building in production",
    subtext:
      "No simulations. Real systems with real users where mistakes have real consequences.",
    currentBadge: "Current",
  },
  experienceData: [
    {
      company: "Carryt",
      role: "Full Stack Developer",
      type: "Full-time · Remote",
      description:
        "Fullstack Developer on last-mile logistics platforms (DIKE, FieldVision, Treggo) running in production across Colombia, Mexico, and Brazil.",
      highlights: [
        "Proposed and led refactor of driver payment settlement module: +20% processing speed, weekly errors eliminated, active across 3 countries",
        "Owned RNDC module — mandatory Ministry of Transportation integration; fines up to 20 SMMLV for non-compliance",
        "Implemented production error monitoring with Sentry (frontend + backend) and Jest test coverage",
        "Adapted financial business logic for Colombia and Mexico with distinct calculation rules per market",
        "Administrative panel for Bogota Mobility Secretariat (in development)",
      ],
    },
    {
      company: "Disruptive Information Technologies",
      role: "Frontend Developer",
      type: "Full-time · Remote",
      description:
        "Led the frontend of the Mesadoko web application (gamified educational platform) from scratch to production, on Next.js 13 + TypeScript.",
      highlights: [
        "Led a full frontend rewrite (proposal, client approval, and execution) achieving +60% UX improvement and -40% load times versus the inherited version",
        "Delivered the platform within the estimated timeline, enabling the product's commercial launch on schedule",
        "Designed a reusable component architecture that allowed new modules to be added without refactoring",
        "Built a system connected to a mobile app with multiple functional modules from day one",
        "Delivered documented, maintainable code as an explicit handoff deliverable for the next team",
      ],
    },
    {
      company: "SENA",
      role: "Full Stack Developer",
      type: "Volunteer",
      description:
        "Led the fullstack development of SenaOnPrinting, a centralized management system for SENA's prepress workshop, replacing manual processes scattered across multiple unsynchronized Excel files.",
      highlights: [
        "Designed and built the backend architecture in .NET 6 with a layered structure, including inventory, sales, production, and purchasing modules.",
        "Built the frontend in React + Tailwind CSS with full CRUD, pagination, search, and reports.",
        "Contributed to the initial structure of the mobile app (navigation, layout, first screens).",
        "Coordinated with a non-technical client to turn ambiguous requirements into concrete solutions.",
        "Project delivered as volunteer work, leading coordination across 10 people",
      ],
    },
  ],
  projects: {
    label: "Projects",
    headline: "Work that drives impact",
    subtext:
      "Every project has a real problem, a concrete technical solution, and a measurable result. That's how I work.",
    othersLabel: "Other projects",
    githubCtaText:
      "These are the projects I can show publicly. My main work is private production systems — multi-country logistics, financial modules, government integrations.",
    githubCtaLink: "See my GitHub activity →",
    detailsOpen: "See details",
    detailsClose: "See less",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    codeLabel: "Code",
    liveLabel: "Live demo",
    privateLabel: "Private production system",
  },
  projectsData: [
    {
      id: "dyd-tech",
      title: "D&D Tech — Gadgets Ecommerce",
      shortDesc:
        "Personal venture: online gadget store with real payment processing",
      category: "Personal Venture",
      problem:
        "I needed to build my own ecommerce from scratch to sell tech gadgets (earphones, Apple chargers, speakers) with real payment integration, a complete admin panel, and no dependency on third-party platforms like Shopify.",
      solution:
        "Built the entire platform self-taught, without AI assistance: Next.js 15 + Prisma + PostgreSQL, NextAuth v5 with role-based access (admin/user), native Mercado Pago integration with payment confirmation webhooks, Cloudinary for product images, Zustand for cart state, and a full admin panel for products, orders, and users.",
      result:
        "Live in production on Vercel with real payments processed through Mercado Pago. 9 product categories, full checkout with address management, order history, and a functional admin dashboard.",
      metrics: [
        { value: "9", label: "product categories" },
        { value: "8", label: "Prisma models in production" },
        { value: "2", label: "roles (admin / user)" },
      ],
    },
    {
      id: "sana-on-printing",
      title: "SENA On Printing — Industrial Management System",
      shortDesc:
        "Web + mobile system that fully digitized the operation of a commercial printing workshop (offset, digital, and sublimation) in Medellín.",
      category: "Enterprise",
      problem:
        "The center operated entirely on paper and disconnected Excel sheets: no inventory traceability, unreliable quotes, and no stock verification before accepting production orders.",
      solution:
        "Led a team of 10 building fullstack across 3 repositories (backend, frontend, mobile): REST Web API in ASP.NET Core 6.0 with a layered architecture on SQL Server, React.js frontend, and a Flutter mobile app. Delivered modules for configuration, RBAC-based user management, purchasing (supplies, suppliers, lots, QR labels, safety data sheets), production, and sales.",
      result:
        "Live in production with 90+ REST endpoints deployed on Vercel. Fully replaced paper-based processes, achieving complete inventory traceability and real-time stock control.",
      metrics: [
        { value: "28", label: "SQL Server tables" },
        { value: "90+", label: "REST endpoints" },
        { value: "10", label: "people led" },
      ],
    },
    {
      id: "agent-hub",
      title: "AgentHub — AI Agents Platform",
      shortDesc:
        "Multi-tenant platform to deploy conversational AI agents that qualify leads and convert inquiries into clinic patients.",
      category: "AI / SaaS",
      problem:
        "Clinics were losing leads due to no 24/7 coverage: no automated patient qualification system and no way to capture real-time intent signals.",
      solution:
        "Multi-tenant platform with embeddable agents via a single script tag, streaming LLMs via OpenRouter, Supabase persistence (PostgreSQL + RLS), and an automated classification pipeline generating intent, sentiment, and objection analytics.",
      result:
        "Agents running 24/7 on clinic websites with a conversion dashboard, bottleneck detection, and AI-generated automatic prompt improvement.",
      metrics: [
        { value: "24/7", label: "automated coverage" },
        { value: "Multi-tenant", label: "multi-org architecture" },
        { value: "Streaming", label: "real-time LLM responses" },
      ],
    },
    {
      id: "franchise-api",
      title: "Franchise API — Reactive Franchise Management",
      shortDesc:
        "Cloud-ready reactive API for franchise, branch, and product management. Spring WebFlux + MongoDB + Terraform on AWS.",
      category: "API / Backend",
      problem:
        "Managing franchise operations under high concurrency required a non-blocking architecture — traditional Servlet-based systems degraded in latency under real load.",
      solution:
        "End-to-end reactive API with Spring WebFlux + MongoDB reactive driver (fully non-blocking I/O), containerized with Docker Compose, cloud-ready infrastructure deployed on AWS ECS Fargate via Terraform, and integrated with SpringDoc OpenAPI for automatic documentation.",
      result:
        "Production-ready system with a fully reactive architecture, reproducible infrastructure-as-code, and auto-generated interactive docs via Swagger UI.",
      metrics: [
        { value: "Reactive", label: "Spring WebFlux + MongoDB non-blocking" },
        { value: "IaC", label: "Terraform + AWS ECS Fargate" },
        { value: "OpenAPI", label: "auto-generated Swagger docs" },
      ],
    },
  ],
  stack: {
    label: "Tech Stack",
    headline: "Tools I use in production",
    subtext:
      "I don't just know them — I've used them in real systems with real users.",
    categories: [
      { key: "frontend", name: "Frontend" },
      { key: "backend", name: "Backend" },
      { key: "database", name: "Databases" },
      { key: "devops", name: "DevOps & Tools" },
    ],
    levels: {
      core: "Core",
      proficient: "Proficient",
      familiar: "Familiar",
    },
  },
  contact: {
    label: "Contact",
    headline: "Let's talk.",
    subtext:
      "Available for remote full-time positions and freelance projects. If you need a developer who understands the business behind the code — not just the syntax — I'm here.",
    primaryCta: "Send me an email",
    secondaryCta: "Download CV",
    clockNote: "Timezone: Colombia (UTC-5) · Flexible for US/EU teams",
    options: {
      email: {
        label: "Direct email",
        desc: "The fastest way to reach me. I respond within 24h.",
        action: `mailto:${personal.email}`,
      },
      linkedin: {
        label: "LinkedIn",
        desc: "For professional connections and job opportunities.",
        action: personal.linkedin,
      },
      github: {
        label: "GitHub",
        desc: "My technical activity, contributions, and public code.",
        action: personal.github,
      },
    },
    lookingFor: {
      title: "What I'm looking for",
      subtitle: "So we don't waste each other's time",
      items: [
        { label: "Work type", value: "Remote full-time or freelance" },
        { label: "Ideal stack", value: "React/Next.js + Node.js/TypeScript" },
        { label: "Availability", value: "Immediate" },
        { label: "Timezone", value: "UTC-5 · Flexible for US/EU/LATAM" },
      ],
    },
  },
  footer: {
    location: "Medellín, Colombia · Remote",
    backToTop: "Back to top",
    builtWith: "Full Stack Developer available for remote work · Built with Next.js, TypeScript, and Tailwind CSS",
  },
};
