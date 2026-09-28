

export const site = {
  name: "Caleb Null",
  role: "Software Engineer",
  tagline:
    "I design and build backend systems that stay fast, reliable, and easy to reason about as they grow, from API design to data modeling and infrastructure.",
  url: "https://calebnull.vercel.app/",
  email: "calebnull88@outlook.com",
  resume: "/Caleb Null.pdf",
  location: "Lenexa, KS",
  availability: null as string | null,
} as const

export const socials = [
  { label: "GitHub", href: "https://github.com/CalebNull" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/caleb-null-2a0997226/" },
] as const

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
] as const

export const sectionLedes = {
  skills: "The tools I reach for most often.",
  projects: "A few things I've designed, built, and shipped.",
  education: "Where I trained, and the certifications I've earned along the way.",
  contact:
    "Have a role, a project, or a question? Send a message and I'll get back to you.",
} as const

export const sectionIds = ["home", "skills", "projects", "education", "contact"]

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Kotlin", "CSS", "Java"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tooling",
    items: ["Git", "Docker", "Vercel", "Bun", "VS Code"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Redis", "REST"],
  },
] as const

export type Project = {
  name: string
  description: string
  stack: readonly string[]
  repo?: string
  demo?: string
  status?: string
}

export const projects: readonly Project[] = [
  {
    name: "GitHub Wrapped",
    description:
      "Type any GitHub username and get a swipeable recap of their last year, such as their total contributions, longest streak, busiest month, top languages, a full contribution heatmap, and a 'developer persona', ending in a share card built for link previews.",
    stack: ["Next.js", "TypeScript", "Redis", "Tailwind"],
    repo: "https://github.com/CalebNull/Github-Wrapped",
    demo: "https://github-wrapped-sigma.vercel.app/",
    status: "2026",
  },
  {
    name: "Corporate Expense Tracker",
    description:
      "Android app for submitting, approving and reimbursing employee expenses with role-based access, backed by a serverless AWS API of 10 tested Lambda functions that handle budgets, audit trails and spending reports.",
    stack: ["Kotlin", "Jetpack Compose", "Python", "AWS Lambda", "API Gateway", "DynamoDB", "Retrofit", "pytest"],
    repo: "https://github.com/CalebNull/CorporateExpenseTracker",
    status: "2026",
  },
] as const

export type EducationEntry = {
  school: string
  credential: string
  dates: string
  details?: readonly string[]
}

export const education: readonly EducationEntry[] = [
  {
    school: "Western Governors University",
    credential: "B.S. in Software Engineering",
    dates: "2023 — 2026",
    details: [
      "Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems.",
    ],
  },
] as const

export type Certification = {
  name: string
  issuer: string
  date: string
  url?: string
}

export const certifications: readonly Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    date: "Mar 2025 - Mar 2028",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/2d9a864a2664410fbb5210b9dd71bb75",
  },
  {
    name: "CompTIA Project+ Certification",
    issuer: "CompTIA",
    date: "Sep 2024",
    url: "https://www.credly.com/badges/35b692ed-cf2e-474d-83f3-3c72811a06b0/linked_in_profile",
  },
  {
    name: "Google IT Support Specialization",
    issuer: "Coursera",
    date: "Feb 2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/QS85S3VGS8LD",
  }
] as const
