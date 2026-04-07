"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-semibold text-text-primary hover:text-accent transition-colors text-sm tracking-tight"
          >
            daniel<span className="text-accent">.</span>dev
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary rounded-md hover:bg-surface transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" href={personal.cvUrl} external>
              Descargar CV
            </Button>
            <Button size="sm" href={`mailto:${personal.email}`}>
              Hablemos
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8 md:hidden">
          <div className="flex flex-col gap-1 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg font-medium text-text-secondary hover:text-text-primary border-b border-border/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <Button variant="secondary" size="lg" href={personal.cvUrl} external>
              Descargar CV
            </Button>
            <Button size="lg" href={`mailto:${personal.email}`}>
              Hablemos
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
