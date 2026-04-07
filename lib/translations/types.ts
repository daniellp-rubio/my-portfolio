export type Lang = "es" | "en";

export type ProjectTranslation = {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { value: string; label: string }[];
};

export type ExperienceTranslation = {
  company: string;
  role: string;
  type: string;
  description: string;
  highlights: string[];
};

export type Translation = {
  lang: Lang;
  nav: {
    links: {
      about: string;
      projects: string;
      experience: string;
      stack: string;
      contact: string;
    };
    cta: {
      cv: string;
      contact: string;
    };
  };
  hero: {
    availability: string;
    headline: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    };
    subtext: string;
    cta: {
      primary: string;
      secondary: string;
      github: string;
    };
    stats: { value: string; label: string }[];
    scroll: string;
  };
  about: {
    label: string;
    headline: string;
    paragraphs: string[];
    values: { icon: string; label: string; desc: string }[];
    languages: {
      title: string;
      spanish: { name: string; level: string };
      english: { name: string; level: string };
    };
    education: {
      title: string;
      degree1: string;
      degree2: string;
      institution: string;
      period1: string;
      period2: string;
    };
  };
  projects: {
    label: string;
    headline: string;
    subtext: string;
    othersLabel: string;
    githubCtaText: string;
    githubCtaLink: string;
    detailsOpen: string;
    detailsClose: string;
    problemLabel: string;
    solutionLabel: string;
    resultLabel: string;
  };
  projectsData: ProjectTranslation[];
  experience: {
    label: string;
    headline: string;
    subtext: string;
    currentBadge: string;
  };
  experienceData: ExperienceTranslation[];
  stack: {
    label: string;
    headline: string;
    subtext: string;
    categories: { key: string; name: string }[];
    levels: {
      core: string;
      proficient: string;
      familiar: string;
    };
  };
  contact: {
    label: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    clockNote: string;
    options: {
      email: { label: string; desc: string; action: string };
      linkedin: { label: string; desc: string; action: string };
      github: { label: string; desc: string; action: string };
    };
    lookingFor: {
      title: string;
      subtitle: string;
      items: { label: string; value: string }[];
    };
  };
  footer: {
    location: string;
    backToTop: string;
    builtWith: string;
  };
};
