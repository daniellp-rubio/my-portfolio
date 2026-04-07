"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  // Merge language-agnostic data (tags, github, live, featured) with translated content
  const mergedProjects = projects.map((p) => {
    const translated = t.projectsData.find((tp) => tp.id === p.id);
    return {
      ...p,
      title: translated?.title ?? p.title,
      shortDesc: translated?.shortDesc ?? p.shortDesc,
      category: translated?.category ?? p.category,
      problem: translated?.problem ?? p.problem,
      solution: translated?.solution ?? p.solution,
      result: translated?.result ?? p.result,
      metrics: translated?.metrics ?? p.metrics,
    };
  });

  const featured = mergedProjects.filter((p) => p.featured);
  const others = mergedProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <SectionLabel>{t.projects.label}</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                {t.projects.headline}
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl">
                {t.projects.subtext}
              </p>
            </div>
          </div>
        </div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured
              labels={{
                problem: t.projects.problemLabel,
                solution: t.projects.solutionLabel,
                result: t.projects.resultLabel,
              }}
            />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-text-muted uppercase tracking-widest">
                {t.projects.othersLabel}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  labels={{
                    problem: t.projects.problemLabel,
                    solution: t.projects.solutionLabel,
                    result: t.projects.resultLabel,
                    detailsOpen: t.projects.detailsOpen,
                    detailsClose: t.projects.detailsClose,
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* GitHub CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-border text-center">
          <p className="text-text-secondary text-sm mb-4">
            {t.projects.githubCtaText}
          </p>
          <a
            href="https://github.com/daniellp-rubio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
          >
            {t.projects.githubCtaLink}
          </a>
        </div>
      </div>
    </section>
  );
}
