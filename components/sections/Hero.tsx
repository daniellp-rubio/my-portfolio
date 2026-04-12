"use client";

import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { personal } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-100" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple/5 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Availability badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="glow-dot" aria-hidden="true" />
              <span className="text-xs font-medium text-green-400">
                {t.hero.availability}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <MapPin size={12} aria-hidden="true" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-text-primary">{t.hero.headline.line1}</span>
            <br />
            <span className="gradient-text-blue">{t.hero.headline.line2}</span>
            <br />
            <span className="text-text-primary">{t.hero.headline.line3}</span>
            <br />
            <span className="text-text-secondary font-light">{t.hero.headline.line4}</span>
          </h1>

          {/* Subtitle — rendered directly from translation, no fragile string splits */}
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
            {t.hero.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Button size="lg" href="#projects" className="group">
              {t.hero.cta.primary}
              <ArrowDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </Button>
            <Button variant="secondary" size="lg" href={personal.contactUrl}>
              <Mail size={16} aria-hidden="true" />
              {t.hero.cta.secondary}
            </Button>
            <Button variant="ghost" size="lg" href={personal.github} external>
              <Github size={16} aria-hidden="true" />
              {t.hero.cta.github}
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl" role="list" aria-label={t.lang === "es" ? "Estadísticas" : "Stats"}>
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                role="listitem"
                className="flex flex-col gap-0.5 p-4 rounded-xl bg-surface/50 border border-border/50 backdrop-blur-sm"
              >
                <span className="text-2xl font-bold gradient-text-blue" aria-label={`${stat.value} ${stat.label}`}>
                  {stat.value}
                </span>
                <span className="text-xs text-text-muted leading-tight" aria-hidden="true">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-8" role="list" aria-label={t.lang === "es" ? "Tecnologías principales" : "Core technologies"}>
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} role="listitem">
                <Badge variant="muted">{tech}</Badge>
              </span>
            ))}
          </div>
        </div>

          {/* Photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-accent/20 blur-2xl -z-10" aria-hidden="true" />
              <div className="relative w-80 aspect-[3/4] rounded-3xl overflow-hidden border border-border/50">
                <Image
                  src="/profile.jpg"
                  alt={`${personal.fullName} — Full Stack Developer`}
                  fill
                  sizes="(max-width: 1024px) 0px, 320px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">
          {t.hero.scroll}
        </span>
        <ArrowDown size={14} className="text-text-muted" />
      </div>
    </section>
  );
}
