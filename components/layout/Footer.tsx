"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personal } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="font-semibold text-text-primary text-sm">
              daniel<span className="text-accent">.</span>dev
            </div>
            <p className="text-xs text-text-muted mt-1">
              Full Stack Developer · {t.footer.location}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personal.contactUrl}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="flex items-center gap-2 text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            <ArrowUp size={14} />
            {t.footer.backToTop}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-text-muted">
            {t.footer.builtWith} ·{" "}
            <span className="text-text-muted/70">{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
