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
      "Full Stack Developer specialized in React, Next.js, and Node.js. Two years building and stabilizing production platforms operating across Colombia, Mexico, and Brazil.",
    cta: {
      primary: "View my projects",
      secondary: "Let's talk",
      github: "GitHub",
    },
    stats: [
      { value: "2+", label: "years in production" },
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
      "Over the past 2 years I've worked directly on production systems operating in Colombia, Mexico, and Brazil. Not simulations or academic projects — critical financial modules, architectures that needed stabilizing, real incidents resolved under pressure.",
      "I specialize in taking complex business problems and turning them into technical solutions that actually work. I collaborate well with stakeholders, understand the impact of every technical decision, and know when the perfect solution is worse than the one that ships.",
      "I'm looking for remote teams where technical judgment matters, where the code you write goes to production, and where building it right from the start makes a real difference.",
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
      english: { name: "English", level: "Intermediate · B1 (Constant improvement)" },
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
    headline: "2+ years building in production",
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
        "Last-mile logistics platforms (DIKE, Fieldvision, Treggo) operating in Colombia, Mexico, and Brazil.",
      highlights: [
        "Direct ownership of critical financial modules in production",
        "Refactored unstable legacy architecture on live systems with real users",
        "Built a fullstack automated logging system for real-time error detection",
        "Resolved urgent production incidents directly on live systems",
        "Worked directly with business stakeholders to translate requirements into scalable technical solutions",
      ],
    },
    {
      company: "D&D",
      role: "Full Stack Developer",
      type: "Freelance",
      description:
        "Development and maintenance of an e-commerce platform with an admin dashboard.",
      highlights: [
        "End-to-end full stack architecture from zero to production",
        "Implemented customer-facing features and full admin panel functionality",
        "Autonomous project management with direct client communication",
      ],
    },
    {
      company: "Disruptive Information Technologies",
      role: "Frontend Developer",
      type: "Full-time · Remote",
      description:
        "Led the frontend development of Mesadoko, a SaaS platform, from scratch to production.",
      highlights: [
        "Architected the frontend system with Next.js and TypeScript",
        "Delivered multiple modules to production",
        "Collaborated directly with the product team to improve UX and system flow",
      ],
    },
    {
      company: "SENA",
      role: "Full Stack Developer",
      type: "Internship",
      description:
        "Developed an admin panel and REST API for a public institution.",
      highlights: [
        "Admin panel with React and Tailwind CSS",
        "REST API in .NET 6 with layered architecture",
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
      "These are the projects I can show publicly. My daily work includes private production systems.",
    githubCtaLink: "See my GitHub activity →",
    detailsOpen: "See details",
    detailsClose: "See less",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    codeLabel: "Code",
    liveLabel: "Live demo",
  },
  projectsData: [
    {
      id: "logistics-platform",
      title: "Multi-country Logistics Platform",
      shortDesc:
        "Operational management system for last-mile delivery companies in LATAM",
      category: "Enterprise",
      problem:
        "Unstable legacy architecture failing under real load. Financial settlement modules had silent bugs causing incorrect driver payment calculations.",
      solution:
        "Full refactor of critical modules, implementation of a fullstack automated logging system for real-time error detection, and complete redesign of the period-based settlement calculation logic.",
      result:
        "Silent bugs in financial calculations eliminated. System stabilized and running in production across Colombia, Mexico, and Brazil without interruptions.",
      metrics: [
        { value: "3", label: "countries" },
        { value: "0", label: "settlement errors post-fix" },
        { value: "100%", label: "production uptime" },
      ],
    },
    {
      id: "ecommerce-platform",
      title: "Full Stack E-commerce Platform",
      shortDesc:
        "E-commerce platform with complete admin dashboard",
      category: "E-commerce",
      problem:
        "A business needed to digitize its sales operation with inventory management, order tracking, and user administration in a single integrated platform.",
      solution:
        "Full stack architecture with Next.js for the customer-facing frontend, React + TypeScript admin dashboard, and a Node.js REST API with role-based authentication and full catalog management.",
      result:
        "Platform currently live in production. Reduced order management time from hours to minutes and enabled online sales to scale.",
      metrics: [
        { value: "—", label: "management time" },
        { value: "2", label: "user types" },
        { value: "100%", label: "live in production" },
      ],
    },
    {
      id: "admin-dashboard",
      title: "Web Administration System",
      shortDesc:
        "Scalable admin panel with independent module architecture",
      category: "Dashboard",
      problem:
        "A public organization needed to digitize manual management processes with multiple user roles, real-time reporting, and a robust API for integration with other systems.",
      solution:
        "Admin panel built with React + Tailwind CSS with granular role management, and a .NET 6 REST API structured in layers (controllers, services, repositories) backed by PostgreSQL.",
      result:
        "System deployed to production replacing paper-based processes. Layered architecture enabled external system integration without touching the core.",
      metrics: [
        { value: "0", label: "paper in the process" },
        { value: "N", label: "configurable roles" },
        { value: "REST", label: "integrable API" },
      ],
    },
    {
      id: "mesadoko",
      title: "Mesadoko Web Application",
      shortDesc:
        "Complete frontend from scratch to production for a SaaS platform",
      category: "SaaS",
      problem:
        "A startup needed to build their entire platform UI from zero, with multiple modules and a scalable architecture from day one.",
      solution:
        "Led the full frontend development: architected the system with Next.js and TypeScript, built a reusable component library, delivered multiple modules, and collaborated closely with the UX team.",
      result:
        "Platform launched to production on time. Scalable architecture that allowed new modules to be added without refactoring.",
      metrics: [
        { value: "0→1", label: "zero to production" },
        { value: "Multi", label: "modules delivered" },
        { value: "Lead", label: "frontend tech lead" },
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
    headline: "Have a project or opportunity?",
    subtext:
      "I'm available for remote full-time positions and freelance projects. If you need a developer who understands both the code and the business, let's talk.",
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
    builtWith: "Built with Next.js, TypeScript, and Tailwind CSS",
  },
};
