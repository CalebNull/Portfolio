/**
 * Every piece of copy on the site lives here.
 *
 * Anything marked TODO is placeholder text — edit it in this file and the
 * whole page updates. You should not need to touch any JSX to change content.
 */

export const site = {
  name: "Caleb Null",
  role: "Software Engineer",
  // TODO: your real one-liner. Keep it to a sentence or two.
  tagline:
    "I build fast, accessible web applications — mostly TypeScript, React, and Next.js.",
  // TODO: replace with the deployed URL. Used for metadata and the sitemap.
  url: "https://calebnull.com",
  // TODO: your public contact address.
  email: "you@example.com",
  // TODO: drop the real file at public/resume.pdf — this link 404s until you do.
  resume: "/resume.pdf",
  location: "TODO: City, State",
  // Optional status line in the hero. Off by default so the site doesn't
  // claim anything you haven't said. Set a string to show it, e.g.
  // "Open to new grad roles" or "Available for freelance".
  availability: null as string | null,
} as const

export const socials = [
  { label: "GitHub", href: "https://github.com/CalebNull" },
  // TODO: replace with your real LinkedIn handle.
  { label: "LinkedIn", href: "https://www.linkedin.com/in/calebnull" },
] as const

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
] as const

/** Lede line shown under each section label. */
export const sectionLedes = {
  skills: "The tools I reach for most often.",
  projects: "A few things I've designed, built, and shipped.",
  education: "Where I trained, and what I focused on.",
  contact:
    "Have a role, a project, or a question? Send a message and I'll get back to you.",
} as const

/** Section ids the nav highlights as you scroll. */
export const sectionIds = ["top", "skills", "projects", "education", "contact"]

// TODO: adjust these groups to what you actually want to lead with.
export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "Tooling",
    items: ["Git", "Docker", "Vitest", "Playwright", "Vercel", "Figma"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Prisma", "Redis", "REST", "tRPC"],
  },
] as const

export type Project = {
  name: string
  description: string
  stack: readonly string[]
  repo?: string
  demo?: string
  /** Shown as a small label on the card, e.g. "2025" or "In progress". */
  status?: string
}

// TODO: swap in two to four real projects. Quality over quantity — each one
// should say what it does and what you actually built.
export const projects: readonly Project[] = [
  {
    name: "TODO: Project One",
    description:
      "One or two sentences on the problem it solves and the part you built. Mention scale or results if you have them.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    repo: "https://github.com/CalebNull",
    demo: "https://example.com",
    status: "2025",
  },
  {
    name: "TODO: Project Two",
    description:
      "One or two sentences on the problem it solves and the part you built. Mention scale or results if you have them.",
    stack: ["React", "Node.js", "Tailwind CSS"],
    repo: "https://github.com/CalebNull",
    status: "2025",
  },
  {
    name: "TODO: Project Three",
    description:
      "One or two sentences on the problem it solves and the part you built. Mention scale or results if you have them.",
    stack: ["Python", "FastAPI", "Redis"],
    repo: "https://github.com/CalebNull",
    status: "In progress",
  },
] as const

export type EducationEntry = {
  school: string
  credential: string
  dates: string
  details?: readonly string[]
}

// TODO: your real education history.
export const education: readonly EducationEntry[] = [
  {
    school: "TODO: University Name",
    credential: "B.S. in Computer Science",
    dates: "2021 — 2025",
    details: [
      "Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems.",
      "TODO: honors, GPA, or a leadership role, if you want them here.",
    ],
  },
] as const
