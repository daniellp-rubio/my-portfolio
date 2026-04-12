"use client";

import { Monitor, Server, Database, Wrench } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stack } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/hooks/useReveal";

const iconMap = {
  monitor: Monitor,
  server: Server,
  database: Database,
  tool: Wrench,
};

export function Stack() {
  const { t } = useLanguage();
  const { levels } = t.stack;
  const sectionRef = useReveal<HTMLDivElement>();

  const levelStyles = {
    core: "bg-accent/15 text-accent border-accent/25 font-medium",
    proficient: "bg-surface text-text-secondary border-border",
    familiar: "bg-transparent text-text-muted border-border/50",
  };

  const levelLabel = {
    core: levels.core,
    proficient: levels.proficient,
    familiar: levels.familiar,
  };

  return (
    <section id="stack" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={sectionRef} className="reveal max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel className="justify-center">{t.stack.label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            {t.stack.headline}
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            {t.stack.subtext}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            // Get translated category name by key (robust — order-independent)
            const translatedCategory = t.stack.categories.find(
              (c) => c.key === category.key
            );
            const categoryName = translatedCategory?.name ?? category.name;

            return (
              <div
                key={category.name}
                className="p-6 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <span className="font-semibold text-sm text-text-primary">
                    {categoryName}
                  </span>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-2"
                    >
                      <span
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs border flex-1",
                          levelStyles[skill.level]
                        )}
                      >
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-text-muted shrink-0 text-right whitespace-nowrap">
                        {levelLabel[skill.level]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-10" aria-label={t.lang === "es" ? "Leyenda de niveles" : "Level legend"}>
          {(["core", "proficient", "familiar"] as const).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <span
                className={cn(
                  "px-2 py-0.5 rounded text-[10px] border",
                  levelStyles[level]
                )}
                aria-hidden="true"
              >
                {levelLabel[level]}
              </span>
              <span className="text-xs text-text-muted">{levelLabel[level]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
