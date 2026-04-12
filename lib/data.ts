// =============================================================
// PORTFOLIO DATA — Daniel Felipe Lopez Rubio
// All copy is conversion-optimized and results-focused
// =============================================================

export const personal = {
  name: "Daniel Lopez",
  fullName: "Daniel Felipe Lopez Rubio",
  title: "Full Stack Developer | Software Engineer",
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
    return `mailto:${this.email}`;
  },
};

export const stats = [
  { value: "2.5+", label: "años en producción" },
  { value: "3", label: "países de operación" },
  { value: "5+", label: "sistemas activos" },
  { value: "100%", label: "remoto" },
];
// NOTE: stats values are authoritative here. Translations (es.ts / en.ts) must match these values.

export const about = {
  headline: "No solo escribo código. Entiendo el negocio.",
  paragraphs: [
    "Llevo 2+ años con responsabilidad directa sobre sistemas en producción que operan en Colombia, México y Brasil — módulos financieros críticos, arquitecturas inestables estabilizadas, incidentes resueltos directamente en producción donde cada minuto de caída tiene costo real.",
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
      "Desarrollador Fullstack en plataformas de logística de última milla (DIKE, FieldVision, Treggo) operando en producción en Colombia, México y Brasil.",
    highlights: [
      "Refactoricé completamente el módulo de liquidación de pagos de conductores sobre arquitectura inestable con errores semanales recurrentes → +20% en velocidad de procesamiento, cero errores desde la intervención",
      "Asumí módulo RNDC (Registro Nacional de Despachos de Carga) — integración obligatoria con el Ministerio de Transporte de Colombia, con consecuencias legales ante errores",
      "Me integré a un proyecto activo en 1 semana, asumiendo responsabilidad directa sobre módulos críticos sin periodo de gracia",
      "Implementé sistema de logging fullstack automatizado para detección de errores en tiempo real",
      "Adapté lógica de negocio financiera para cálculos específicos por país (Colombia y México) con reglas distintas por mercado",
      "Resolví incidentes críticos con intervención directa en producción, minimizando tiempo de caída en sistemas con usuarios activos",
      "Traduje requerimientos de negocio complejos en soluciones técnicas coordinando directamente con stakeholders de operaciones"
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    company: "Disruptive Information Technologies",
    role: "Desarrollador Frontend",
    period: "Octubre 2023 — Abril 2024",
    current: false,
    type: "Full-time · Remoto",
    description:
      "Lideré el frontend del aplicativo web Mesadoko (plataforma educativa gamificada) desde cero hasta producción, en Next.js 13 + TypeScript.",
    highlights: [
      "Lideré reescritura completa del frontend (propuesta, aprobación del cliente y ejecución) logrando +60% de mejora en UX y -40% en tiempos de carga respecto a la versión heredada",
      "Entregué la plataforma dentro del plazo estimado, habilitando el lanzamiento comercial del producto en tiempo",
      "Diseñé arquitectura de componentes reutilizables que permitió incorporar módulos adicionales sin refactorización",
      "Construí sistema conectado a app móvil con múltiples módulos funcionales desde día uno",
      "Entregué código documentado y mantenible como entregable explícito para el equipo de continuidad"
    ],
    tags: ["Next.js", "TypeScript", "React"],
  },
  {
    company: "SENA",
    role: "Desarrollador Full Stack",
    period: "Abril 2023 — Octubre 2023",
    current: false,
    type: "Voluntariado",
    description:
      "Lideré el desarrollo fullstack de SenaOnPrinting, sistema de gestión centralizada para el taller de preprensa del SENA, reemplazando procesos manuales dispersos en múltiples Excel sin sincronización.",
    highlights: [
      "Diseñé y desarrollé la arquitectura backend en .NET 6 con estructura en capas, incluyendo módulos de inventario, ventas, producción y compras.",
      "Construí el frontend en React + Tailwind CSS con CRUD completo, paginación, búsqueda y reportes.",
      "Participé en la estructura inicial de la app móvil (navegación, layout, primeras pantallas).",
      "Coordiné con cliente sin experiencia técnica para aterrizar requerimientos ambiguos en soluciones concretas.",
      "Proyecto ejecutado como voluntariado, liderando coordinación entre 10 personas"
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
    id: "dyd-tech",
    title: "D&D Tech — Ecommerce de Gadgets",
    shortDesc:
      "Emprendimiento personal: tienda online de gadgets tecnológicos con pasarela de pagos real",
    problem:
      "Necesitaba construir desde cero un ecommerce propio para vender gadgets tecnológicos (audífonos, cargadores Apple, bafles), con pagos reales integrados, panel de administración completo y sin depender de plataformas terceras como Shopify.",
    solution:
      "Desarrollé toda la plataforma de forma autodidacta y sin asistencia de IA: Next.js 15 + Prisma + PostgreSQL para el backend, NextAuth v5 con sistema de roles (admin/user), integración nativa de Mercado Pago con webhook de confirmación de pagos, Cloudinary para imágenes, Zustand para el carrito y panel admin completo con gestión de productos, pedidos y usuarios.",
    result:
      "Plataforma propia en producción (Vercel) con pagos reales procesados vía Mercado Pago. 9 categorías de productos, checkout completo con gestión de direcciones, historial de órdenes y panel administrativo funcional.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Mercado Pago", "Cloudinary", "Zustand", "Tailwind CSS"],
    category: "Proyecto Personal",
    featured: true,
    metrics: [
      { value: "9", label: "categorías de productos" },
      { value: "8", label: "modelos Prisma en producción" },
      { value: "2", label: "roles (admin / usuario)" },
    ],
    github: "https://github.com/daniellp-rubio/DyD",
    live: "https://gadgetsdyd-daintzs-projects.vercel.app/",
  },
  {
    id: "sana-on-printing",
    title: "SENA On Printing — Sistema de Gestión Industrial",
    shortDesc:
      "Sistema web y móvil que digitalizó completamente la operación de un taller de impresión (offset, digital y sublimación) en Medellín.",
    problem:
      "El centro operaba con papel y Excel desconectados: sin trazabilidad de insumos, cotizaciones poco confiables y sin verificación de stock antes de aceptar órdenes de producción. Cada área trabajaba con datos distintos y desactualizados.",
    solution:
      "Lideré un equipo de 10 personas en el desarrollo fullstack del sistema (3 repositorios: backend, frontend y móvil). Construí la Web API REST en ASP.NET Core 6.0 con arquitectura en capas sobre SQL Server (28 tablas), el frontend en React.js y la app móvil en Flutter. Entregué módulos de configuración, usuarios con RBAC, compras (insumos, proveedores, lotes, etiquetas QR, fichas de seguridad), producción y ventas.",
    result:
      "Sistema en producción con más de 90 endpoints REST, desplegado en Vercel. Reemplazó todos los procesos en papel del centro y logró trazabilidad total de insumos, cotizaciones confiables y control de stock en tiempo real.",
    tags: ["C#", "ASP.NET Core 6.0", "React.js", "Flutter", "Dart", "SQL Server", "REST API"],
    category: "Enterprise",
    featured: false,
    github: "https://github.com/daniellp-rubio/SenaOnPrintingBackend",
    live: "https://senaonprinting-frontend-production.vercel.app/login",
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
    problem:
      "Las clínicas perdían leads al no tener atención 24/7: sin sistema para calificar pacientes automáticamente ni capturar señales de intención en tiempo real.",
    solution:
      "Plataforma multi-tenant con agentes embebibles vía un script tag, LLMs en streaming por OpenRouter, persistencia en Supabase (PostgreSQL + RLS) y pipeline de clasificación automática que genera analytics de intención, sentimiento y objeciones.",
    result:
      "Agentes operando 24/7 en sitios de clínicas con dashboard de conversión, detección de cuellos de botella y mejora automática de prompts generada por IA.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "OpenRouter", "PostgreSQL", "Tailwind CSS"],
    category: "IA / SaaS",
    featured: true,
    github: "https://github.com/daniellp-rubio/project-agent",
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
    problem:
      "Gestionar operaciones de franquicias bajo alta concurrencia requería una arquitectura no bloqueante — los sistemas tradicionales Servlet degradaban latencia bajo carga real.",
    solution:
      "API reactiva end-to-end con Spring WebFlux + MongoDB reactive driver (non-blocking I/O completo), containerizada con Docker Compose, infraestructura cloud-ready desplegada en AWS ECS Fargate vía Terraform e integrada con SpringDoc OpenAPI para documentación automática.",
    result:
      "Sistema production-ready con arquitectura reactiva completa, infraestructura como código reproducible y documentación interactiva auto-generada con Swagger UI.",
    tags: ["Java 17", "Spring WebFlux", "MongoDB", "Docker", "Terraform", "AWS ECS Fargate", "Swagger/OpenAPI"],
    category: "API / Backend",
    featured: false,
    github: "https://github.com/daniellp-rubio/franchise-api",
    metrics: [
      { value: "Reactivo", label: "Spring WebFlux + MongoDB no-blocking" },
      { value: "IaC", label: "Terraform + AWS ECS Fargate" },
      { value: "OpenAPI", label: "docs auto-generadas con Swagger" },
    ],
  },
];

export type SkillCategory = {
  key: string;
  name: string;
  icon: string;
  skills: { name: string; level: "core" | "proficient" | "familiar" }[];
};

export const stack: SkillCategory[] = [
  {
    key: "frontend",
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
    key: "backend",
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
    key: "database",
    name: "Bases de datos",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
    ],
  },
  {
    key: "devops",
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
