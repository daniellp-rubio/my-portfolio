"use client";

import { Mail, Linkedin, Github, ArrowRight, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personal } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/hooks/useReveal";

const iconComponents = { Mail, Linkedin, Github };

export function Contact() {
  const { t, lang } = useLanguage();
  const { contact } = t;
  const cvUrl = lang === "en" ? personal.cvUrlEn : personal.cvUrl;
  const sectionRef = useReveal<HTMLDivElement>();

  const contactOptions = [
    {
      icon: "Mail" as const,
      ...contact.options.email,
    },
    {
      icon: "Linkedin" as const,
      ...contact.options.linkedin,
    },
    {
      icon: "Github" as const,
      ...contact.options.github,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] pointer-events-none" />

      <div ref={sectionRef} className="reveal max-w-6xl mx-auto px-6 relative">
        {/* Main CTA block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="justify-center">{contact.label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-6">
            {contact.headline}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            {contact.subtext}
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" href={personal.contactUrl} className="group">
              <Mail size={18} />
              {contact.primaryCta}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Button>
            <Button variant="secondary" size="lg" href={cvUrl} external>
              {contact.secondaryCta}
            </Button>
          </div>

          {/* Availability note */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
            <Clock size={14} />
            <span>{contact.clockNote}</span>
          </div>
        </div>

        {/* Contact options grid */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactOptions.map((option) => {
            const Icon = iconComponents[option.icon];
            const isEmail = option.action.startsWith("mailto");
            return (
              <a
                key={option.label}
                href={option.action}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="group p-5 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={16} className="text-accent" />
                </div>
                <div className="font-semibold text-text-primary text-sm mb-1.5">
                  {option.label}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  {option.desc}
                </p>
                <div className="flex items-center gap-1 text-xs text-accent font-medium group-hover:gap-2 transition-all">
                  {option.label}
                  <ArrowRight size={12} />
                </div>
              </a>
            );
          })}
        </div>

        {/* What I'm looking for */}
        <div className="mt-16 p-8 rounded-2xl bg-surface border border-border max-w-3xl mx-auto">
          <div className="flex items-start gap-3 mb-5">
            <MessageSquare size={18} className="text-accent mt-0.5" />
            <div>
              <h3 className="font-semibold text-text-primary">
                {contact.lookingFor.title}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {contact.lookingFor.subtitle}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {contact.lookingFor.items.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm text-text-primary font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
