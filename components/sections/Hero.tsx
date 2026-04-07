"use client";

import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { personal, stats } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="glow-dot" />
              <span className="text-xs font-medium text-green-400">
                {personal.availability}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <MapPin size={12} />
              {personal.location}
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-text-primary">Construyo sistemas</span>
            <br />
            <span className="gradient-text-blue">que escalan,</span>
            <br />
            <span className="text-text-primary">no solo código</span>
            <br />
            <span className="text-text-secondary font-light">que funciona.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
            Full Stack Developer especializado en{" "}
            <span className="text-text-primary font-medium">React, Next.js y Node.js</span>.
            {" "}Dos años construyendo y estabilizando plataformas en producción
            que operan en{" "}
            <span className="text-text-primary font-medium">Colombia, México y Brasil</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Button
              size="lg"
              href="#projects"
              className="group"
            >
              Ver mis proyectos
              <ArrowDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`mailto:${personal.email}`}
              className="group"
            >
              <Mail size={16} />
              Hablemos
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href={personal.github}
              external
            >
              <Github size={16} />
              GitHub
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-0.5 p-4 rounded-xl bg-surface/50 border border-border/50 backdrop-blur-sm"
              >
                <span className="text-2xl font-bold gradient-text-blue">
                  {stat.value}
                </span>
                <span className="text-xs text-text-muted leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
              <Badge key={tech} variant="muted">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-text-muted tracking-widest uppercase">scroll</span>
        <ArrowDown size={14} className="text-text-muted" />
      </div>
    </section>
  );
}
