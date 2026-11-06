// Single source of truth for the homepage. Destination URLs are configurable
// through NEXT_PUBLIC_* env vars so a domain can change without touching a component.

export type Division = {
  id: string;
  name: string;
  short: string;
  category: string;
  blurb: string;
  services: string[];
  url: string;
  host: string;
  hue: string; // accent colour for the card and orbit node
  hue2: string;
};

const env = (v: string | undefined, fallback: string) => (v && v.trim() ? v.trim().replace(/\/$/, "") : fallback);

const host = (u: string) => u.replace(/^https?:\/\//, "");

const URLS = {
  ai: env(process.env.NEXT_PUBLIC_AI_URL, "https://yugti.ai"),
  overseas: env(process.env.NEXT_PUBLIC_OVERSEAS_URL, "https://yugtioverseaseducation.com"),
  learning: env(process.env.NEXT_PUBLIC_LEARNING_URL, "https://yugtilearning.com"),
  jobs: env(process.env.NEXT_PUBLIC_JOBS_URL, "https://yugtijobs.com"),
  technology: env(process.env.NEXT_PUBLIC_TECHNOLOGY_URL, "https://yugtitechnology.com"),
  math: env(process.env.NEXT_PUBLIC_MATHSTUDY_URL, "https://mathstudy.in"),
};

export const DIVISIONS: Division[] = [
  {
    id: "ai", name: "YUGTI AI", short: "AI", category: "Artificial Intelligence & AI Agent Development",
    blurb: "Building intelligent AI agents and automation solutions that transform business operations, simplify complex workflows and accelerate digital innovation.",
    services: ["AI Agent Development", "Business Process Automation", "Intelligent AI Platforms", "Custom AI Solutions", "AI-Powered Business Applications"],
    url: URLS.ai, host: host(URLS.ai), hue: "#7c5cff", hue2: "#28d7ff",
  },
  {
    id: "overseas", name: "YUGTI Overseas Education", short: "Overseas", category: "International Education & Global Opportunities",
    blurb: "Helping students explore international education opportunities through university guidance, admissions assistance and global academic pathways.",
    services: ["Overseas University Admissions", "Study Abroad Consultancy", "University Selection", "Application Assistance", "International Education Guidance"],
    url: URLS.overseas, host: host(URLS.overseas), hue: "#2f7bff", hue2: "#5ee7ff",
  },
  {
    id: "learning", name: "YUGTI Learning", short: "Learning", category: "Online Education & Professional Learning",
    blurb: "Making quality education accessible through online learning, professional development and structured academic programmes.",
    services: ["IELTS Preparation", "Spoken English", "Class 11 and 12 Mathematics", "Physics and Chemistry", "Competitive Examination Preparation", "Online Courses", "Skill Development"],
    url: URLS.learning, host: host(URLS.learning), hue: "#ffb02e", hue2: "#ff7a59",
  },
  {
    id: "jobs", name: "YUGTI Jobs", short: "Jobs", category: "Recruitment, Jobs & Internships",
    blurb: "Connecting talented individuals with meaningful career opportunities and helping organisations discover the right talent.",
    services: ["Job Opportunities", "Recruitment Solutions", "Internship Programmes", "Talent Acquisition", "Resume and Career Development", "Employer–Candidate Connections"],
    url: URLS.jobs, host: host(URLS.jobs), hue: "#22d3a6", hue2: "#2f7bff",
  },
  {
    id: "technology", name: "YUGTI Technology", short: "Technology", category: "Enterprise Technology & Software Development",
    blurb: "Delivering innovative digital products and technology solutions that help businesses transform, scale and succeed.",
    services: ["Website Development", "Web Application Development", "Android Application Development", "iOS Application Development", "Enterprise Software Solutions", "Custom Digital Platforms", "IT Consulting"],
    url: URLS.technology, host: host(URLS.technology), hue: "#a855f7", hue2: "#ff5fa2",
  },
  {
    id: "math", name: "mathstudy.in", short: "mathstudy", category: "Digital Knowledge & E-Books",
    blurb: "Empowering learners through accessible digital study materials, mathematics resources, e-books and online educational content.",
    services: ["Mathematics E-Books", "Digital Study Materials", "Online Mathematics Resources", "Educational Content", "Academic Learning Resources"],
    url: URLS.math, host: host(URLS.math), hue: "#38bdf8", hue2: "#818cf8",
  },
];

export const CONTACT_EMAIL = env(process.env.NEXT_PUBLIC_CONTACT_EMAIL, "hello@yugti.com");
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "";
export const SOCIAL_URL = process.env.NEXT_PUBLIC_SOCIAL_URL?.trim() || "";

export const STRENGTHS = [
  { t: "Innovation-driven approach", d: "New ideas are tested in real products across our divisions, not left on a slide." },
  { t: "AI-powered solutions", d: "Intelligent agents and automation sit at the centre of how we build." },
  { t: "Specialised business verticals", d: "Six focused divisions, each with its own team, domain and expertise." },
  { t: "Education and career empowerment", d: "Learning, study abroad and jobs designed to move people forward." },
  { t: "Technology for businesses", d: "Software, apps and platforms that help organisations scale." },
  { t: "Global perspective", d: "Built to connect learners, talent and companies across borders." },
  { t: "Integrated digital ecosystem", d: "One group, many doors: each division opens onto the others." },
];

export const AUDIENCES = [
  { id: "students", t: "Students & Learners", d: "Prepare for exams, build skills and find the right university anywhere in the world.", go: "Learning · Overseas · mathstudy.in" },
  { id: "seekers", t: "Job Seekers & Professionals", d: "Discover roles and internships, sharpen your resume and grow your career.", go: "Jobs · Learning · AI" },
  { id: "business", t: "Businesses & Enterprises", d: "Automate operations with AI agents and build the software your business needs.", go: "AI · Technology · Jobs" },
  { id: "institutions", t: "Educational Institutions & Organisations", d: "Reach learners, connect with talent and bring digital capability to your teams.", go: "Overseas · Learning · Technology" },
];

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Our Divisions", href: "#divisions", mega: true },
  { label: "Contact", href: "#company" },
];
