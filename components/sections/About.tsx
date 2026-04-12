"use client";

import { Target, Zap, Users, Shield } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/hooks/useReveal";

const iconMap = {
  target: Target,
  zap: Zap,
  users: Users,
  shield: Shield,
};

export function About() {
  const { t } = useLanguage();
  const { about } = t;
  const sectionRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 relative">
      <div ref={sectionRef} className="reveal max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <SectionLabel>{about.label}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
              {about.headline}
            </h2>
            <div className="space-y-4">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 p-4 rounded-xl bg-surface border border-border">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">
                {about.languages.title}
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="text-sm font-medium text-text-primary">
                    {about.languages.spanish.name}
                  </div>
                  <div className="text-xs text-text-muted">
                    {about.languages.spanish.level}
                  </div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="text-sm font-medium text-text-primary">
                    {about.languages.english.name}
                  </div>
                  <div className="text-xs text-text-muted">
                    {about.languages.english.level}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.values.map((value) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div
                  key={value.label}
                  className="p-5 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div className="font-semibold text-text-primary text-sm mb-1">
                    {value.label}
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    {value.desc}
                  </div>
                </div>
              );
            })}

            {/* Education card */}
            <div className="sm:col-span-2 p-5 rounded-xl bg-surface border border-border">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">
                {about.education.title}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-purple text-xs font-bold">S</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      {about.education.degree1}
                    </div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      {about.education.institution} · {about.education.period1}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-purple text-xs font-bold">S</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      {about.education.degree2}
                    </div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      {about.education.institution} · {about.education.period2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
