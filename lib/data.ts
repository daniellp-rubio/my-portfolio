// =============================================================
// PORTFOLIO DATA — Daniel Felipe Lopez Rubio
// All copy is conversion-optimized and results-focused
// =============================================================

export const personal = {
  name: "Daniel Lopez",
  fullName: "Daniel Felipe Lopez Rubio",
  title: "Full Stack Developer",
  tagline: "Construyo sistemas que escalan, no solo código que funciona.",
  subTagline:
    "Especializado en React, Next.js y Node.js · 2.5+ años en producción · Equipos remotos en LATAM",
  email: "dafeloru@gmail.com",
  github: "https://github.com/daniellp-rubio",
  linkedin: "https://linkedin.com/in/daniel-lopez-rubio",
  location: "Medellín, Colombia · Remoto",
  availability: "Disponible para nuevas oportunidades",
  availabilityColor: "green" as const,
  cvUrl: "/cv-daniel-lopez.pdf",    // CV en español → coloca el archivo en /public/
  cvUrlEn: "/cv-daniel-lopez-en.pdf", // CV en inglés  → coloca el archivo en /public/
  get contactUrl() {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.email)}`;
  },
};

export const stats = [
  { value: "2.5+", label: "años en producción" },
  { value: "3", label: "países de operación" },
  { value: "5+", label: "sistemas activos" },
  { value: "100%", label: "remoto" },
];

export const about = {
  headline: "No solo escribo código. Entiendo el negocio.",
  paragraphs: [
    "En los últimos 2 años he trabajado directamente sobre sistemas en producción que operan en Colombia, México y Brasil. No simulacros ni proyectos académicos — módulos financieros críticos, arquitecturas que necesitaban ser estabilizadas, incidentes reales resueltos bajo presión.",
    "Me especializo en tomar problemas complejos de negocio y convertirlos en soluciones técnicas que funcionan. Trabajo bien con stakeholders, entiendo el impacto de cada decisión técnica, y sé cuándo la solución perfecta es peor que la solución que se entrega.",
    "Busco equipos remotos donde el criterio técnico importa, donde el código que se escribe va a producción, y donde construir bien desde el inicio marca la diferencia.",
  ],
  values: [
    { icon: "target", label: "Orientado a resultados", desc: "Cada línea de código tiene un propósito de negocio" },
    { icon: "zap", label: "Entrega continua", desc: "Sistemas en producción, no en staging eterno" },
    { icon: "users", label: "Colaboración real", desc: "Trabajo directo con stakeholders y equipos multidisciplinarios" },
    { icon: "shield", label: "Código mantenible", desc: "Architecturas que el siguiente dev puede entender" },
  ],
};


export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  type: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Carryt",
    role: "Desarrollador Full Stack",
    period: "Mayo 2024 — Presente",
    current: true,
    type: "Full-time · Remoto",
    description:
      "Plataformas de logística de última milla (DIKE, Fieldvision, Treggo) que operan en Colombia, México y Brasil.",
    highlights: [
      "Responsabilidad directa sobre módulos financieros críticos en producción",
      "Refactorización de arquitectura inestable heredada en sistemas con usuarios reales",
      "Implementación de sistema de logging fullstack para detección de errores en tiempo real",
      "Resolución de incidentes urgentes directamente en producción",
      "Colaboración directa con stakeholders de negocio para transformar requerimientos en soluciones técnicas",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    company: "D&D",
    role: "Desarrollador Full Stack",
    period: "Junio 2024 — Presente",
    current: true,
    type: "Freelance",
    description:
      "Desarrollo y mantenimiento de plataforma de comercio electrónico con panel administrativo.",
    highlights: [
      "Arquitectura full stack independiente de inicio a producción",
      "Implementación de funcionalidades para usuario final y panel administrativo",
      "Gestión autónoma del proyecto y comunicación directa con el cliente",
    ],
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    company: "Disruptive Information Technologies",
    role: "Desarrollador Frontend",
    period: "Octubre 2023 — Abril 2024",
    current: false,
    type: "Full-time · Remoto",
    description:
      "Lideré el desarrollo del frontend de Mesadoko, plataforma SaaS, desde cero hasta producción.",
    highlights: [
      "Lideré la arquitectura frontend con Next.js y TypeScript",
      "Entrega de múltiples módulos hasta producción",
      "Colaboración directa con equipo de producto para mejorar UX",
    ],
    tags: ["Next.js", "TypeScript", "React"],
  },
  {
    company: "SENA",
    role: "Desarrollador Full Stack",
    period: "Abril 2023 — Octubre 2023",
    current: false,
    type: "Práctica",
    description:
      "Desarrollo de panel administrativo y API REST para institución pública.",
    highlights: [
      "Panel administrativo con React y Tailwind CSS",
      "API REST en .NET 6 con arquitectura en capas",
    ],
    tags: ["React", "Tailwind CSS", ".NET 6", "PostgreSQL"],
  },
];

export type Project = {
  id: string;
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  category: string;
  featured: boolean;
  github?: string;
  live?: string;
  image?: string;
  metrics: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    id: "logistics-platform",
    title: "Plataforma de Logística Multi-país",
    shortDesc:
      "Sistema de gestión operativa para empresas de última milla en LATAM",
    problem:
      "Arquitectura inestable heredada que fallaba bajo carga real. Los módulos financieros de liquidación tenían bugs silenciosos que generaban errores en los pagos a conductores.",
    solution:
      "Refactorización completa de los módulos críticos, implementación de un sistema de logging automatizado fullstack para detección de errores en tiempo real, y rediseño de la lógica de cálculo de liquidaciones por período.",
    result:
      "Eliminación de errores silenciosos en cálculos financieros. Sistema estabilizado operando en producción para Colombia, México y Brasil sin interrupciones.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    category: "Enterprise",
    featured: true,
    metrics: [
      { value: "3", label: "países" },
      { value: "0", label: "errores de liquidación post-fix" },
      { value: "100%", label: "uptime en producción" },
    ],
  },
  {
    id: "ecommerce-platform",
    title: "Plataforma E-commerce Full Stack",
    shortDesc:
      "Plataforma de comercio electrónico con panel administrativo completo",
    problem:
      "Empresa necesitaba digitalizar su operación de ventas con gestión de inventario, pedidos y administración de usuarios en una sola plataforma integrada.",
    solution:
      "Arquitectura full stack con Next.js para el frontend del cliente, panel administrativo con React + TypeScript, y API REST en Node.js con autenticación por roles y gestión completa de catálogo.",
    result:
      "Plataforma actualmente en operación. Redujo el tiempo de gestión de pedidos de horas a minutos y permitió escalar las ventas online.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
    category: "E-commerce",
    featured: true,
    metrics: [
      { value: "—", label: "tiempo de gestión" },
      { value: "2", label: "tipos de usuario (admin/cliente)" },
      { value: "100%", label: "en producción" },
    ],
    github: "https://github.com/daniellp-rubio/DyD",  // si es público
    live: "https://gadgetsdyd-daintzs-projects.vercel.app/",
  },
  {
    id: "admin-dashboard",
    title: "Sistema Administrativo Web",
    shortDesc:
      "Panel de administración escalable con arquitectura de módulos independientes",
    problem:
      "Organización pública necesitaba digitalizar procesos manuales de gestión con múltiples roles de usuario, reportes en tiempo real y una API robusta para integrarse con otros sistemas.",
    solution:
      "Panel administrativo construido con React + Tailwind CSS con sistema de roles granular, y una API REST en .NET 6 estructurada en capas (controladores, servicios, repositorios) con PostgreSQL.",
    result:
      "Sistema desplegado en producción que reemplazó procesos en papel. Arquitectura en capas que permitió integración con sistemas externos sin modificar el core.",
    tags: ["React", "Tailwind CSS", ".NET 6", "PostgreSQL", "REST API"],
    category: "Dashboard",
    featured: false,
    metrics: [
      { value: "0", label: "papel en el proceso" },
      { value: "N", label: "roles configurables" },
      { value: "REST", label: "API integrable" },
    ],
  },
  {
    id: "mesadoko",
    title: "Aplicación Web Mesadoko",
    shortDesc:
      "Frontend completo desde cero hasta producción para plataforma SaaS",
    problem:
      "Startup necesitaba construir toda la interfaz de usuario de su plataforma desde cero, con múltiples módulos, sin deuda técnica desde el inicio y con arquitectura que soportara crecimiento.",
    solution:
      "Lideré el desarrollo completo del frontend: definición de arquitectura con Next.js y TypeScript, sistema de componentes reutilizables, implementación de múltiples módulos y colaboración directa con el equipo de UX.",
    result:
      "Plataforma lanzada a producción en plazo. Arquitectura escalable que permitió incorporar nuevos módulos sin refactorización.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    category: "SaaS",
    featured: false,
    metrics: [
      { value: "0→1", label: "desde cero a producción" },
      { value: "Multi", label: "módulos entregados" },
      { value: "Lead", label: "rol técnico frontend" },
    ],
  },
];

export type SkillCategory = {
  name: string;
  icon: string;
  skills: { name: string; level: "core" | "proficient" | "familiar" }[];
};

export const stack: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "JavaScript", level: "core" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Framer Motion", level: "proficient" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: "core" },
      { name: "Express", level: "core" },
      { name: ".NET / C#", level: "proficient" },
      { name: "REST APIs", level: "core" },
    ],
  },
  {
    name: "Bases de datos",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "tool",
    skills: [
      { name: "Git / GitHub", level: "core" },
      { name: "Docker", level: "proficient" },
      { name: "AWS (básico)", level: "familiar" },
      { name: "Vercel", level: "proficient" },
    ],
  },
];
