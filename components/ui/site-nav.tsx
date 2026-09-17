"use client"

import Link from "next/link"

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

export function SiteNav() {
  return (
    <>
      <nav
        aria-label="Primary"
        className="absolute inset-x-0 top-0 z-10 w-full animate-fade-in-up px-3 py-8 select-none [animation-delay:150ms]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 h-[95%] [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)] backdrop-blur-2xl"
        />
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
