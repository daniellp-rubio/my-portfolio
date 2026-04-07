"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personal } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const HINT_KEY = "lang-hint-dismissed";

function LangHintTooltip({ onDismiss }: { onDismiss: () => void }) {
  const [visible, setVisible] = useState(false);

  // Fade in after a short delay so it doesn't flash on hydration
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Auto-dismiss after 5 s
  useEffect(() => {
    const t = setTimeout(() => onDismiss(), 5000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <div
      className={cn(
        "absolute top-full right-0 mt-3 z-50 transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
      )}
    >
      {/* Arrow pointing UP */}
      <div className="absolute -top-1.5 right-[42px] w-3 h-3 bg-accent rotate-45 rounded-sm border-l border-t border-accent/60" />

      {/* Bubble */}
      <div className="relative bg-accent text-white text-xs font-medium px-3.5 py-2.5 rounded-xl shadow-lg shadow-accent/30 whitespace-nowrap border border-accent/60 max-w-[180px] text-center leading-snug">
        <button
          onClick={onDismiss}
          className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-background border border-border text-text-muted hover:text-text-primary flex items-center justify-center transition-colors"
          aria-label="Dismiss"
        >
          <X size={8} />
        </button>
        <span className="block">🌐 Cambia el idioma</span>
        <span className="block text-white/70 text-[10px] mt-0.5">Change language here</span>
      </div>
    </div>
  );
}

function LangToggle() {
  const { lang, setLang } = useLanguage();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem(HINT_KEY);
    if (!dismissed) setShowHint(true);
  }, []);

  function dismiss() {
    setShowHint(false);
    localStorage.setItem(HINT_KEY, "1");
  }

  function handleToggle(next: "es" | "en") {
    setLang(next);
    dismiss();
  }

  return (
    <div className="relative">
      {/* Pill with ES · EN */}
      <div
        className={cn(
          "flex items-center gap-0.5 rounded-lg border p-0.5 transition-all duration-200",
          showHint
            ? "border-accent/50 bg-accent/5 shadow-sm shadow-accent/20"
            : "border-border bg-transparent hover:border-border"
        )}
      >
        {/* Pulsing glow ring while hint is visible */}
        {showHint && (
          <span className="absolute inset-0 rounded-lg animate-pulse bg-accent/10 pointer-events-none" />
        )}

        <button
          onClick={() => handleToggle("es")}
          className={cn(
            "relative px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider transition-all duration-200",
            lang === "es"
              ? "bg-accent text-white shadow-sm"
              : "text-text-muted hover:text-text-secondary"
          )}
          aria-label="Español"
        >
          ES
        </button>

        <button
          onClick={() => handleToggle("en")}
          className={cn(
            "relative px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider transition-all duration-200",
            lang === "en"
              ? "bg-accent text-white shadow-sm"
              : "text-text-muted hover:text-text-secondary"
          )}
          aria-label="English"
        >
          EN
        </button>
      </div>

      {/* Tooltip hint */}
      {showHint && <LangHintTooltip onDismiss={dismiss} />}
    </div>
  );
}

function LangToggleMobile() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border p-0.5">
      <button
        onClick={() => setLang("es")}
        className={cn(
          "px-2 py-1 rounded-md text-[11px] font-semibold tracking-wider transition-all duration-200",
          lang === "es" ? "bg-accent text-white" : "text-text-muted"
        )}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={cn(
          "px-2 py-1 rounded-md text-[11px] font-semibold tracking-wider transition-all duration-200",
          lang === "en" ? "bg-accent text-white" : "text-text-muted"
        )}
      >
        EN
      </button>
    </div>
  );
}

export function Nav() {
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const cvUrl = lang === "en" ? personal.cvUrlEn : personal.cvUrl;

  const navLinks = [
    { href: "#about", label: t.nav.links.about },
    { href: "#projects", label: t.nav.links.projects },
    { href: "#experience", label: t.nav.links.experience },
    { href: "#stack", label: t.nav.links.stack },
    { href: "#contact", label: t.nav.links.contact },
  ];

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

          {/* CTA + Language switcher */}
          <div className="hidden md:flex items-center gap-2">
            <LangToggle />
            <Button variant="outline" size="sm" href={cvUrl} external>
              {t.nav.cta.cv}
            </Button>
            <Button size="sm" href={personal.contactUrl}>
              {t.nav.cta.contact}
            </Button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggleMobile />
            <button
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
            <Button variant="secondary" size="lg" href={cvUrl} external>
              {t.nav.cta.cv}
            </Button>
            <Button size="lg" href={personal.contactUrl}>
              {t.nav.cta.contact}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
