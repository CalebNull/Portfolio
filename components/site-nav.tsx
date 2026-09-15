"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type NavLink = {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  // { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  const [active, setActive] = useState(links[0].href)

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 z-50 flex w-full animate-fade-in-up items-center justify-center border-none px-6 py-8 [animate-delay:175ms] sm:px-12"
    >
      <div className="flex w-[75%] items-center justify-between">
        <Link href="#home" className="text-lg font-bold tracking-tight">
          Caleb Null
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
          {links.map((link) => {
            const isActive = link.href === active
            return (
              <Link
                href={link.href}
                key={link.href}
                className={cn(
                  "nav-link transition-colors",
                  isActive
                    ? "text-primary"
                    : "a-underline text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
