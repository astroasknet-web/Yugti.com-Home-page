import type { FooterConfig } from "@/components/standard-footer/types";
import { CONTACT_EMAIL, DIVISIONS, LINKEDIN_URL, SOCIAL_URL } from "@/lib/content";

/**
 * Footer settings for YUGTI.com. The layout is the standard footer used by every Yugty web application
 * (components/standard-footer); only the values below are specific to this site.
 * Division destinations come from lib/content.ts (NEXT_PUBLIC_*_URL).
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yugti.com";
const div = (id: string) => DIVISIONS.find((d) => d.id === id)!;

export const FOOTER: FooterConfig = {
  brand: { name: "YUGTI", logoSrc: "/yugti-logo-full.svg", logoAlt: "YUGTI", tagline: "Connecting Intelligence, Technology & Opportunities." },
  siteUrl: SITE_URL,
  cta: {
    eyebrow: "One vision. Multiple possibilities.",
    title: "Your next opportunity starts here.",
    text: "Learn, study abroad, build intelligent technology, develop your career or transform your business. Discover how YUGTI can help.",
    primary: { label: "Explore our divisions", href: "/#divisions" },
    secondary: { label: "Contact us", href: `mailto:${CONTACT_EMAIL}` },
  },
  appsTitle: "One family. One vision.",
  apps: [
    { key: "home", name: "Yugti", href: "/", icon: "Home" },
    { key: "ai", name: "Yugti AI", href: div("ai").url, icon: "Sparkles", external: true },
    { key: "overseas", name: "Overseas Education", href: div("overseas").url, icon: "Globe", external: true },
    { key: "learning", name: "Learning", href: div("learning").url, icon: "GraduationCap", external: true },
    { key: "jobs", name: "Jobs", href: div("jobs").url, icon: "Briefcase", external: true },
    { key: "technology", name: "Technology", href: div("technology").url, icon: "Code2", external: true },
  ],
  newsletter: { label: "Get news and updates", button: "Join", endpoint: "/api/newsletter", source: "footer" },
  columns: [
    { title: "YUGTI", links: [
      { href: "/#about", label: "About YUGTI" },
      { href: "/#vision", label: "Our Vision" },
      { href: `mailto:${CONTACT_EMAIL}`, label: "Contact Us" },
    ] },
    { title: "Our Ecosystem", links: DIVISIONS.map((d) => ({ href: d.url, label: d.name, external: true })) },
    { title: "Quick Links", links: [
      { href: "/#about", label: "About Us" },
      { href: "/#divisions", label: "Our Services" },
      { href: `mailto:${CONTACT_EMAIL}?subject=Careers%20at%20YUGTI`, label: "Careers" },
      { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
    ] },
    { title: "Connect", links: [
      { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
      ...(LINKEDIN_URL ? [{ href: LINKEDIN_URL, label: "LinkedIn", external: true }] : []),
      ...(SOCIAL_URL ? [{ href: SOCIAL_URL, label: "Social media", external: true }] : []),
    ] },
  ],
  social: [
    { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
    { label: "X", href: "", icon: "x" },
    { label: "Instagram", href: "", icon: "instagram" },
    { label: "YouTube", href: "", icon: "youtube" },
    { label: "Facebook", href: "", icon: "facebook" },
  ],
  supportEmail: CONTACT_EMAIL,
  share: { title: "Know someone who should see YUGTI?", text: "YUGTI: AI, education, learning, jobs and technology in one ecosystem", subject: "Have a look at YUGTI" },
  legal: [{ href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms of Use" }],
};
