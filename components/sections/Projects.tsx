import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <SectionLabel>Proyectos</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                Trabajo que genera impacto
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl">
                Cada proyecto tiene un problema real, una solución técnica concreta y un resultado medible.
                Así es como trabajo.
              </p>
            </div>
          </div>
        </div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-text-muted uppercase tracking-widest">
                Otros proyectos
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* GitHub CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-border text-center">
          <p className="text-text-secondary text-sm mb-4">
            Estos son los proyectos que puedo mostrar públicamente. Mi trabajo diario incluye
            sistemas privados en producción.
          </p>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
          >
            Ver mi actividad en GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
