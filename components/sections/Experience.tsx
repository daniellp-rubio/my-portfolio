import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <SectionLabel>Experiencia</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            2+ años construyendo en producción
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl">
            No simulacros. Sistemas reales con usuarios reales donde los errores tienen consecuencias.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-8" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={`${job.company}-${index}`} className="relative flex gap-6 md:gap-10">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className={cn(
                      "w-8 h-8 md:w-16 md:h-auto md:py-3 rounded-full md:rounded-xl border flex items-center justify-center z-10 relative",
                      job.current
                        ? "bg-accent/15 border-accent/30"
                        : "bg-surface border-border"
                    )}
                  >
                    <Briefcase
                      size={14}
                      className={job.current ? "text-accent" : "text-text-muted"}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "flex-1 pb-8 rounded-xl p-5 border card-hover",
                    job.current
                      ? "bg-surface border-border"
                      : "bg-surface/50 border-border/50"
                  )}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-text-primary">
                          {job.role}
                        </h3>
                        {job.current && (
                          <Badge variant="green">Actual</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-sm font-medium text-accent">
                          {job.company}
                        </span>
                        <span className="text-text-muted text-xs">·</span>
                        <span className="text-xs text-text-muted">{job.type}</span>
                      </div>
                    </div>
                    <span className="text-xs text-text-muted bg-border/50 px-3 py-1 rounded-full shrink-0">
                      {job.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-text-secondary">
                        <CheckCircle2
                          size={14}
                          className="text-accent/70 mt-0.5 shrink-0"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
