"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type NavLink = {
  label: string
  href: string
}

const links: NavLink[] = [
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
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsPinned(window.scrollY > 10000)
    }

    handleScroll() // in case the page loads already scrolled
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        aria-label="Primary"
        className="-wk-sticky sticky top-0 z-10 mt-5 w-full px-3 py-8 select-none"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 h-[95%] [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)] backdrop-blur-2xl"
        />

        {/* content layer: sits on top, always sharp, always clickable */}
        <div className="cont mx-auto flex w-full items-center justify-between px-6 py-4">
          <div className="hidden items-center justify-center gap-8 text-[1.2rem] font-semibold sm:flex">
            {links.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className="nav-link a-underline transition-colors"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
