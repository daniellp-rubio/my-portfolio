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
      "Full Stack Developer especializado en React, Next.js y Node.js. 2.5 años construyendo y estabilizando plataformas en producción que operan en Colombia, México y Brasil.",
    cta: {
      primary: "Ver mis proyectos",
      secondary: "Hablemos",
      github: "GitHub",
    },
    stats: [
      { value: "2.5+", label: "años en producción" },
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
      "En los últimos 2.5 años he trabajado directamente sobre sistemas en producción que operan en Colombia, México y Brasil. No simulacros ni proyectos académicos — módulos financieros críticos, arquitecturas estabilizadas bajo presión, integraciones con consecuencias legales ante errores.",
      "Me especializo en convertir problemas complejos de negocio en soluciones técnicas que se entregan, no solo que se diseñan. Entiendo el impacto de cada decisión técnica, trabajo directo con stakeholders, y sé cuándo la solución perfecta es peor que la que llega a tiempo.",
      "Estoy buscando un equipo remoto donde el criterio técnico tenga peso real — donde lo que construyo va a producción y donde hacerlo bien desde el inicio tiene valor.",
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
      english: { name: "Inglés", level: "Intermedio B1 · En progreso activo" },
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
  experience: {
    label: "Experiencia",
    headline: "2.5+ años construyendo en producción",
    subtext:
      "No simulacros. Sistemas reales con usuarios reales donde los errores tienen consecuencias.",
    currentBadge: "Actual",
  },
  experienceData: [
    {
      company: "Carryt",
      role: "Desarrollador Full Stack",
      type: "Tiempo completo · Remoto",
      description:
        "Desarrollador Fullstack en plataformas de logística de última milla (DIKE, FieldVision, Treggo) operando en producción en Colombia, México y Brasil.",
      highlights: [
        "Refactoricé completamente el módulo de liquidación de pagos de conductores sobre arquitectura inestable con errores semanales recurrentes → +20% en velocidad de procesamiento, cero errores desde la intervención",
        "Asumí módulo RNDC (Registro Nacional de Despachos de Carga) — integración obligatoria con el Ministerio de Transporte de Colombia, con consecuencias legales ante errores",
        "Me integré a un proyecto activo en 1 semana, asumiendo responsabilidad directa sobre módulos críticos sin periodo de gracia",
        "Implementé sistema de logging fullstack automatizado para detección de errores en tiempo real",
        "Adapté lógica de negocio financiera para cálculos específicos por país (Colombia y México) con reglas distintas por mercado",
        "Resolví incidentes críticos con intervención directa en producción, minimizando tiempo de caída en sistemas con usuarios activos",
        "Traduje requerimientos de negocio complejos en soluciones técnicas coordinando directamente con stakeholders de operaciones",
      ],
    },
    {
      company: "Disruptive Information Technologies",
      role: "Desarrollador Frontend",
      type: "Tiempo completo · Remoto",
      description:
        "Lideré el frontend del aplicativo web Mesadoko (plataforma educativa gamificada) desde cero hasta producción, en Next.js 13 + TypeScript.",
      highlights: [
        "Lideré reescritura completa del frontend (propuesta, aprobación del cliente y ejecución) logrando +60% de mejora en UX y -40% en tiempos de carga respecto a la versión heredada",
        "Entregué la plataforma dentro del plazo estimado, habilitando el lanzamiento comercial del producto en tiempo",
        "Diseñé arquitectura de componentes reutilizables que permitió incorporar módulos adicionales sin refactorización",
        "Construí sistema conectado a app móvil con múltiples módulos funcionales desde día uno",
        "Entregué código documentado y mantenible como entregable explícito para el equipo de continuidad",
      ],
    },
    {
      company: "SENA",
      role: "Desarrollador Full Stack",
      type: "Voluntariado",
      description:
        "Lideré el desarrollo fullstack de SenaOnPrinting, sistema de gestión centralizada para el taller de preprensa del SENA, reemplazando procesos manuales dispersos en múltiples Excel sin sincronización.",
      highlights: [
        "Diseñé y desarrollé la arquitectura backend en .NET 6 con estructura en capas, incluyendo módulos de inventario, ventas, producción y compras.",
        "Construí el frontend en React + Tailwind CSS con CRUD completo, paginación, búsqueda y reportes.",
        "Participé en la estructura inicial de la app móvil (navegación, layout, primeras pantallas).",
        "Coordiné con cliente sin experiencia técnica para aterrizar requerimientos ambiguos en soluciones concretas.",
        "Proyecto ejecutado como voluntariado, liderando coordinación entre 10 personas",
      ],
    },
  ],
  projects: {
    label: "Proyectos",
    headline: "Trabajo que genera impacto",
    subtext:
      "Cada proyecto tiene un problema real, una solución técnica concreta y un resultado medible. Así es como trabajo.",
    othersLabel: "Otros proyectos",
    githubCtaText:
      "Estos son los proyectos que puedo mostrar públicamente. Mi trabajo principal son sistemas privados en producción — logística multi-país, módulos financieros, integraciones gubernamentales.",
    githubCtaLink: "Ver mi actividad en GitHub →",
    detailsOpen: "Ver detalles",
    detailsClose: "Ver menos",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    resultLabel: "Resultado",
    codeLabel: "Código",
    liveLabel: "Ver proyecto",
    privateLabel: "Sistema privado en producción",
  },
  projectsData: [
    {
      id: "dyd-tech",
      title: "D&D Tech — Ecommerce de Gadgets",
      shortDesc:
        "Emprendimiento personal: tienda online de gadgets tecnológicos con pagos reales",
      category: "Proyecto Personal",
      problem:
        "Necesitaba construir desde cero un ecommerce propio para vender gadgets tecnológicos (audífonos, cargadores Apple, bafles), con pagos reales integrados, panel de administración completo y sin depender de plataformas como Shopify.",
      solution:
        "Desarrollé toda la plataforma de forma autodidacta y sin asistencia de IA: Next.js 15 + Prisma + PostgreSQL, NextAuth v5 con roles (admin/user), integración nativa de Mercado Pago con webhook de confirmación, Cloudinary para imágenes, Zustand para el carrito y panel admin con gestión de productos, pedidos y usuarios.",
      result:
        "Plataforma propia en producción (Vercel) con pagos reales procesados vía Mercado Pago. 9 categorías, checkout completo con gestión de direcciones, historial de órdenes y panel administrativo funcional.",
      metrics: [
        { value: "9", label: "categorías de productos" },
        { value: "8", label: "modelos Prisma en producción" },
        { value: "2", label: "roles (admin / usuario)" },
      ],
    },
    {
      id: "sana-on-printing",
      title: "SENA On Printing — Sistema de Gestión Industrial",
      shortDesc:
        "Sistema web y móvil que digitalizó completamente la operación de un taller de impresión (offset, digital y sublimación) en Medellín.",
      category: "Enterprise",
      problem:
        "El centro operaba con papel y Excel desconectados: sin trazabilidad de insumos, cotizaciones poco confiables y sin verificación de stock antes de aceptar órdenes de producción.",
      solution:
        "Lideré un equipo de 10 personas construyendo fullstack en 3 repositorios (backend, frontend, móvil): Web API REST en ASP.NET Core 6.0 con arquitectura en capas sobre SQL Server, frontend en React.js y app móvil en Flutter. Módulos de configuración, usuarios con RBAC, compras (insumos, proveedores, lotes, etiquetas QR, fichas de seguridad), producción y ventas.",
      result:
        "Sistema en producción con más de 90 endpoints REST desplegado en Vercel. Reemplazó todos los procesos en papel del centro, logrando trazabilidad total de insumos y control de stock en tiempo real.",
      metrics: [
        { value: "28", label: "tablas SQL Server" },
        { value: "90+", label: "endpoints REST" },
        { value: "10", label: "personas lideradas" },
      ],
    },
    {
      id: "agent-hub",
      title: "AgentHub — Plataforma de Agentes IA",
      shortDesc:
        "Plataforma multi-tenant para desplegar agentes de IA conversacionales que califican leads y convierten consultas en pacientes para clínicas.",
      category: "IA / SaaS",
      problem:
        "Las clínicas perdían leads al no tener atención 24/7: sin sistema para calificar pacientes automáticamente ni capturar señales de intención en tiempo real.",
      solution:
        "Plataforma multi-tenant con agentes embebibles vía un script tag, LLMs en streaming por OpenRouter, persistencia en Supabase (PostgreSQL + RLS) y pipeline de clasificación automática que genera analytics de intención, sentimiento y objeciones.",
      result:
        "Agentes operando 24/7 en sitios de clínicas con dashboard de conversión, detección de cuellos de botella y mejora automática de prompts generada por IA.",
      metrics: [
        { value: "24/7", label: "atención automatizada" },
        { value: "Multi-tenant", label: "arquitectura multi-organización" },
        { value: "Streaming", label: "LLM en tiempo real" },
      ],
    },
    {
      id: "franchise-api",
      title: "Franchise API — Gestión Reactiva de Franquicias",
      shortDesc:
        "API reactiva cloud-ready para gestión de franquicias, sucursales y productos. Spring WebFlux + MongoDB + Terraform en AWS.",
      category: "API / Backend",
      problem:
        "Gestionar operaciones de franquicias bajo alta concurrencia requería una arquitectura no bloqueante — los sistemas tradicionales Servlet degradaban latencia bajo carga real.",
      solution:
        "API reactiva end-to-end con Spring WebFlux + MongoDB reactive driver (non-blocking I/O completo), containerizada con Docker Compose, infraestructura cloud-ready desplegada en AWS ECS Fargate vía Terraform e integrada con SpringDoc OpenAPI para documentación automática.",
      result:
        "Sistema production-ready con arquitectura reactiva completa, infraestructura como código reproducible y documentación interactiva auto-generada con Swagger UI.",
      metrics: [
        { value: "Reactivo", label: "Spring WebFlux + MongoDB no-blocking" },
        { value: "IaC", label: "Terraform + AWS ECS Fargate" },
        { value: "OpenAPI", label: "docs auto-generadas con Swagger" },
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
    headline: "Hablemos.",
    subtext:
      "Disponible para posiciones remotas full-time y proyectos freelance. Si necesitas un developer que entienda el negocio detrás del código — no solo la sintaxis — estoy aquí.",
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
    builtWith: "Full Stack Developer disponible para trabajo remoto · Construido con Next.js, TypeScript y Tailwind CSS",
  },
};
