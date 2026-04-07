"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "./Badge";
import { type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

type CardLabels = {
  problem?: string;
  solution?: string;
  result?: string;
  detailsOpen?: string;
  detailsClose?: string;
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  labels?: CardLabels;
}

const DEFAULT_LABELS: Required<CardLabels> = {
  problem: "Problema",
  solution: "Solución",
  result: "Resultado",
  detailsOpen: "Ver detalles",
  detailsClose: "Ver menos",
};

export function ProjectCard({
  project,
  featured = false,
  labels = {},
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const l = { ...DEFAULT_LABELS, ...labels };

  if (featured) {
    return (
      <article className="group relative bg-surface border border-border rounded-2xl overflow-hidden card-hover">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <Badge variant="blue" className="mb-3">
                {project.category}
              </Badge>
              <h3 className="text-xl font-semibold text-text-primary leading-tight">
                {project.title}
              </h3>
              <p className="text-text-secondary mt-1.5 text-sm leading-relaxed">
                {project.shortDesc}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-border/50 text-text-muted hover:text-text-primary hover:bg-border transition-all"
                  aria-label="Source code"
                >
                  <Github size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-border/50 text-text-muted hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="Live project"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-background/50 border border-border/50">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold gradient-text-blue">
                  {metric.value}
                </div>
                <div className="text-xs text-text-muted mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem / Solution / Result */}
          <div className="space-y-4">
            <ProjectDetail label={l.problem} text={project.problem} color="red" />
            <ProjectDetail label={l.solution} text={project.solution} color="blue" />
            <ProjectDetail label={l.result} text={project.result} color="green" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-surface border border-border rounded-xl overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <Badge variant="outline" className="mb-2 text-xs">
              {project.category}
            </Badge>
            <h3 className="font-semibold text-text-primary">{project.title}</h3>
            <p className="text-sm text-text-secondary mt-1">{project.shortDesc}</p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-text-muted hover:text-text-primary transition-colors"
              >
                <Github size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-text-muted hover:text-accent transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-accent hover:text-accent-hover transition-colors mb-3"
        >
          <span>{expanded ? l.detailsClose : l.detailsOpen}</span>
          <ArrowRight
            size={12}
            className={cn("transition-transform", expanded && "rotate-90")}
          />
        </button>

        {expanded && (
          <div className="space-y-3 mb-4 animate-fade-in">
            <ProjectDetail label={l.result} text={project.result} color="green" small />
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="muted">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectDetail({
  label,
  text,
  color,
  small,
}: {
  label: string;
  text: string;
  color: "red" | "blue" | "green";
  small?: boolean;
}) {
  const colorMap = {
    red: "text-red-400 bg-red-500/5 border-red-500/10",
    blue: "text-blue-400 bg-blue-500/5 border-blue-500/10",
    green: "text-green-400 bg-green-500/5 border-green-500/10",
  };

  return (
    <div className={cn("rounded-lg border p-3", colorMap[color])}>
      <div
        className={cn(
          "font-semibold mb-1",
          small ? "text-xs" : "text-xs uppercase tracking-wider"
        )}
      >
        {label}
      </div>
      <p
        className={cn(
          "text-text-secondary leading-relaxed",
          small ? "text-xs" : "text-sm"
        )}
      >
        {text}
      </p>
    </div>
  );
}
