"use client"

import { CodeIcon } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

type Skill = {
  label: string
  icon: React.ReactNode
}

type SkillGroup = {
  title: string
  skills: Skill[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { label: "TypeScript", icon: <CodeIcon weight="duotone" /> },
      { label: "JavaScript", icon: <CodeIcon weight="duotone" /> },
      { label: "Python", icon: <CodeIcon weight="duotone" /> },
      { label: "Java", icon: <CodeIcon weight="duotone" /> },
      { label: "C++", icon: <CodeIcon weight="duotone" /> },
      { label: "C", icon: <CodeIcon weight="duotone" /> },
      { label: "C#", icon: <CodeIcon weight="duotone" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { label: "React", icon: <CodeIcon weight="duotone" /> },
      { label: "NextJS", icon: <CodeIcon weight="duotone" /> },
      { label: "Tailwind", icon: <CodeIcon weight="duotone" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { label: "Git", icon: <CodeIcon weight="duotone" /> },
      { label: "Bun", icon: <CodeIcon weight="duotone" /> },
      { label: "Node", icon: <CodeIcon weight="duotone" /> },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -35% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="mx-auto bg-[rgba(0,0,0,0.2)] px-6 py-32"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>

      <div className="mt-12 flex gap-10">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <div
            key={group.title}
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            )}
            style={{ transitionDelay: `${groupIndex * 100}ms` }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50"
                >
                  <span className="text-primary">{skill.icon}</span>
                  {skill.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
