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
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
]

const START_OFFSET = 40
const SCROLL_THRESHOLD = 40

export function SiteNav() {
  const [active, setActive] = useState(links[0].href)
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsPinned(window.scrollY > 10000)
    }

    handleScroll() // in case the page loads already scrolled
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      className="fixed inset-x-0 z-50 flex animate-fade-in-up items-center justify-between px-6 py-8 backdrop-blur-2xl transition-all duration-300 ease-out [animation-delay:150ms]"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6">
        <Link href="#home" className="text-lg font-bold tracking-tight">
          Caleb Null
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold sm:flex">
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
