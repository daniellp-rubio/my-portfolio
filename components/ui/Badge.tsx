"use client";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "blue" | "purple" | "green" | "muted" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface border-border text-text-secondary",
  blue: "bg-accent/10 border-accent/20 text-accent",
  purple: "bg-purple/10 border-purple/20 text-purple",
  green: "bg-green-500/10 border-green-500/20 text-green-400",
  muted: "bg-transparent border-border text-text-muted",
  outline: "bg-transparent border-border text-text-secondary",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
