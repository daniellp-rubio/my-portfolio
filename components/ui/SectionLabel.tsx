import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div className="h-px w-8 bg-accent/50" />
      <span className="text-xs font-semibold tracking-widest uppercase text-accent/80">
        {children}
      </span>
    </div>
  );
}
