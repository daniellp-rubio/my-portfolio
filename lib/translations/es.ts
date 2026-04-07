import { Translation } from "./types";
import { personal } from "../data";

export const es: Translation = {
  lang: "es",
  nav: {
    links: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      stack: "Stack",
      contact: "Contacto",
    },
    cta: {
      cv: "Descargar CV",
      contact: "Hablemos",
    },
  },
  hero: {
    availability: "Disponible para nuevas oportunidades",
    headline: {
      line1: "Construyo sistemas",
      line2: "que escalan,",
      line3: "no solo código",
      line4: "que funciona.",
    },
    subtext:
      "Full Stack Developer especializado en React, Next.js y Node.js. Dos años construyendo y estabilizando plataformas en producción que operan en Colombia, México y Brasil.",
    cta: {
      primary: "Ver mis proyectos",
      secondary: "Hablemos",
      github: "GitHub",
    },
    stats: [
      { value: "2+", label: "años en producción" },
      { value: "3", label: "países de operación" },
      { value: "5+", label: "sistemas activos" },
      { value: "100%", label: "remoto" },
    ],
    scroll: "scroll",
  },
  about: {
    label: "Sobre mí",
    headline: "No solo escribo código. Entiendo el negocio.",
    paragraphs: [
      "En los últimos 2 años he trabajado directamente sobre sistemas en producción que operan en Colombia, México y Brasil. No simulacros ni proyectos académicos — módulos financieros críticos, arquitecturas que necesitaban ser estabilizadas, incidentes reales resueltos bajo presión.",
      "Me especializo en tomar problemas complejos de negocio y convertirlos en soluciones técnicas que funcionan. Trabajo bien con stakeholders, entiendo el impacto de cada decisión técnica, y sé cuándo la solución perfecta es peor que la solución que se entrega.",
      "Busco equipos remotos donde el criterio técnico importa, donde el código que se escribe va a producción, y donde construir bien desde el inicio marca la diferencia.",
    ],
    values: [
      {
        icon: "target",
        label: "Orientado a resultados",
        desc: "Cada línea de código tiene un propósito de negocio",
      },
      {
        icon: "zap",
        label: "Entrega continua",
        desc: "Sistemas en producción, no en staging eterno",
      },
      {
        icon: "users",
        label: "Colaboración real",
        desc: "Trabajo directo con stakeholders y equipos multidisciplinarios",
      },
      {
        icon: "shield",
        label: "Código mantenible",
        desc: "Arquitecturas que el siguiente dev puede entender",
      },
    ],
    languages: {
      title: "Idiomas",
      spanish: { name: "Español", level: "Nativo" },
      english: { name: "Inglés", level: "Intermedio · B1 (Constante mejora)" },
    },
    education: {
      title: "Formación",
      degree1: "Tecnólogo en Análisis y Desarrollo de Software",
      degree2: "Técnico en Desarrollo de Software",
      institution: "SENA",
      period1: "2023–2024 · Medellín, Colombia",
      period2: "2021–2022 · Medellín, Colombia",
    },
  },
  projects: {
    label: "Proyectos",
    headline: "Trabajo que genera impacto",
    subtext:
      "Cada proyecto tiene un problema real, una solución técnica concreta y un resultado medible. Así es como trabajo.",
    othersLabel: "Otros proyectos",
    githubCtaText:
      "Estos son los proyectos que puedo mostrar públicamente. Mi trabajo diario incluye sistemas privados en producción.",
    githubCtaLink: "Ver mi actividad en GitHub →",
    detailsOpen: "Ver detalles",
    detailsClose: "Ver menos",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    resultLabel: "Resultado",
  },
  projectsData: [
    {
      id: "logistics-platform",
      title: "Plataforma de Logística Multi-país",
      shortDesc:
        "Sistema de gestión operativa para empresas de última milla en LATAM",
      category: "Enterprise",
      problem:
        "Arquitectura inestable heredada que fallaba bajo carga real. Los módulos financieros de liquidación tenían bugs silenciosos que generaban errores en los pagos a conductores.",
      solution:
        "Refactorización completa de los módulos críticos, implementación de un sistema de logging automatizado fullstack para detección de errores en tiempo real, y rediseño de la lógica de cálculo de liquidaciones por período.",
      result:
        "Eliminación de errores silenciosos en cálculos financieros. Sistema estabilizado operando en producción para Colombia, México y Brasil sin interrupciones.",
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
      category: "E-commerce",
      problem:
        "Empresa necesitaba digitalizar su operación de ventas con gestión de inventario, pedidos y administración de usuarios en una sola plataforma integrada.",
      solution:
        "Arquitectura full stack con Next.js para el frontend del cliente, panel administrativo con React + TypeScript, y API REST en Node.js con autenticación por roles y gestión completa de catálogo.",
      result:
        "Plataforma actualmente en operación. Redujo el tiempo de gestión de pedidos de horas a minutos y permitió escalar las ventas online.",
      metrics: [
        { value: "—", label: "tiempo de gestión" },
        { value: "2", label: "tipos de usuario" },
        { value: "100%", label: "en producción" },
      ],
    },
    {
      id: "admin-dashboard",
      title: "Sistema Administrativo Web",
      shortDesc:
        "Panel de administración escalable con arquitectura de módulos independientes",
      category: "Dashboard",
      problem:
        "Organización pública necesitaba digitalizar procesos manuales de gestión con múltiples roles de usuario, reportes en tiempo real y una API robusta.",
      solution:
        "Panel administrativo con React + Tailwind CSS y sistema de roles granular, más API REST en .NET 6 estructurada en capas con PostgreSQL.",
      result:
        "Sistema en producción que reemplazó procesos en papel. Arquitectura que permitió integración con sistemas externos sin modificar el core.",
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
      category: "SaaS",
      problem:
        "Startup necesitaba construir toda la interfaz de usuario de su plataforma desde cero, con múltiples módulos y arquitectura escalable desde el día uno.",
      solution:
        "Lideré el desarrollo completo del frontend con Next.js y TypeScript, sistema de componentes reutilizables e implementación de múltiples módulos en colaboración con el equipo de UX.",
      result:
        "Plataforma lanzada a producción en plazo. Arquitectura escalable que permitió incorporar nuevos módulos sin refactorización.",
      metrics: [
        { value: "0→1", label: "desde cero a producción" },
        { value: "Multi", label: "módulos entregados" },
        { value: "Lead", label: "rol técnico frontend" },
      ],
    },
  ],
  experience: {
    label: "Experiencia",
    headline: "2+ años construyendo en producción",
    subtext:
      "No simulacros. Sistemas reales con usuarios reales donde los errores tienen consecuencias.",
    currentBadge: "Actual",
  },
  experienceData: [
    {
      company: "Carryt",
      role: "Desarrollador Full Stack",
      type: "Full-time · Remoto",
      description:
        "Plataformas de logística de última milla (DIKE, Fieldvision, Treggo) que operan en Colombia, México y Brasil.",
      highlights: [
        "Responsabilidad directa sobre módulos financieros críticos en producción",
        "Refactorización de arquitectura inestable heredada en sistemas con usuarios reales",
        "Implementación de sistema de logging fullstack para detección de errores en tiempo real",
        "Resolución de incidentes urgentes directamente en producción",
        "Colaboración directa con stakeholders para transformar requerimientos en soluciones técnicas",
      ],
    },
    {
      company: "D&D",
      role: "Desarrollador Full Stack",
      type: "Freelance",
      description:
        "Desarrollo y mantenimiento de plataforma de comercio electrónico con panel administrativo.",
      highlights: [
        "Arquitectura full stack independiente de inicio a producción",
        "Implementación de funcionalidades para usuario final y panel administrativo",
        "Gestión autónoma del proyecto y comunicación directa con el cliente",
      ],
    },
    {
      company: "Disruptive Information Technologies",
      role: "Desarrollador Frontend",
      type: "Full-time · Remoto",
      description:
        "Lideré el desarrollo del frontend de Mesadoko, plataforma SaaS, desde cero hasta producción.",
      highlights: [
        "Lideré la arquitectura frontend con Next.js y TypeScript",
        "Entrega de múltiples módulos hasta producción",
        "Colaboración directa con equipo de producto para mejorar UX",
      ],
    },
    {
      company: "SENA",
      role: "Desarrollador Full Stack",
      type: "Práctica",
      description:
        "Desarrollo de panel administrativo y API REST para institución pública.",
      highlights: [
        "Panel administrativo con React y Tailwind CSS",
        "API REST en .NET 6 con arquitectura en capas",
      ],
    },
  ],
  stack: {
    label: "Stack Tecnológico",
    headline: "Herramientas que uso en producción",
    subtext:
      "No solo las conozco — las he usado en sistemas reales con usuarios reales.",
    categories: [
      { key: "frontend", name: "Frontend" },
      { key: "backend", name: "Backend" },
      { key: "database", name: "Bases de datos" },
      { key: "devops", name: "DevOps & Tools" },
    ],
    levels: {
      core: "Core",
      proficient: "Proficiente",
      familiar: "Familiar",
    },
  },
  contact: {
    label: "Contacto",
    headline: "¿Tienes un proyecto o una oportunidad?",
    subtext:
      "Estoy disponible para posiciones remotas full-time y proyectos freelance. Si necesitas un developer que entienda tanto el código como el negocio, hablemos.",
    primaryCta: "Enviarme un email",
    secondaryCta: "Descargar CV",
    clockNote: "Zona horaria: Colombia (UTC-5) · Flexible para equipos en US/EU",
    options: {
      email: {
        label: "Email directo",
        desc: "La forma más rápida. Respondo en menos de 24h.",
        action: `mailto:${personal.email}`,
      },
      linkedin: {
        label: "LinkedIn",
        desc: "Para conexiones profesionales y oportunidades laborales.",
        action: personal.linkedin,
      },
      github: {
        label: "GitHub",
        desc: "Mi actividad técnica, contribuciones y código público.",
        action: personal.github,
      },
    },
    lookingFor: {
      title: "Lo que estoy buscando",
      subtitle: "Para que no perdamos tiempo de ninguno",
      items: [
        { label: "Tipo de trabajo", value: "Full-time remoto o freelance" },
        { label: "Stack ideal", value: "React/Next.js + Node.js/TypeScript" },
        { label: "Disponibilidad", value: "Inmediata" },
        { label: "Zona horaria", value: "UTC-5 · Flexible para US/EU/LATAM" },
      ],
    },
  },
  footer: {
    location: "Medellín, Colombia · Remoto",
    backToTop: "Volver arriba",
    builtWith: "Construido con Next.js, TypeScript y Tailwind CSS",
  },
};
