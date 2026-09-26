"use client"

import * as React from "react"
import {
  GithubLogo,
  LinkedinLogo,
  List,
  ReadCvLogo,
  X,
} from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { navLinks, sectionIds, site, socials } from "@/lib/content"

const githubHref = socials.find((s) => s.label === "GitHub")?.href
const linkedinHref = socials.find((s) => s.label === "LinkedIn")?.href

/** Highlights the nav link for whichever section is currently near the top. */
function useActiveSection() {
  const [active, setActive] = React.useState<string>(sectionIds[0])

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const topmost = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0]

        if (topmost) {
          setActive(topmost.target.id)
        }
      },
      // Ignore the area under the fixed nav, and only count a section once it
      // reaches the upper part of the viewport.
      { rootMargin: "-96px 0px -55% 0px" }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return active
}

function Nav() {
  const active = useActiveSection()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const navRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!menuOpen) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [menuOpen])

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-3xl"
    >
      <div className="flex items-center justify-between gap-2 rounded-full border border-border bg-background/80 px-2 py-2 shadow-sm backdrop-blur-md sm:px-4">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" /> : <List className="size-5" />}
        </Button>

        <ul className="hidden flex-wrap items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            const isActive = active === id

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "a-underline rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1">
          {githubHref ? (
            <Button
              render={<a href={githubHref} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GithubLogo className="size-5" />
            </Button>
          ) : null}

          {linkedinHref ? (
            <Button
              render={
                <a href={linkedinHref} target="_blank" rel="noreferrer" />
              }
              nativeButton={false}
              variant="ghost"
              size="icon"
              className="hidden rounded-full sm:inline-flex"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedinLogo className="size-5" />
            </Button>
          ) : null}

          <Button
            render={<a href={site.resume} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Open resume PDF (opens in a new tab)"
          >
            <ReadCvLogo className="size-5" />
          </Button>

          <ThemeToggle className="rounded-full" />

          <span aria-hidden="true" className="h-6 w-px bg-border" />

          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            size="sm"
            className="rounded-full"
          >
            Contact
          </Button>
        </div>
      </div>

      {/* Mobile section links, collapsed into the pill above on small screens. */}
      {menuOpen ? (
        <ul
          id="nav-menu"
          className="mt-2 space-y-1 rounded-2xl border border-border bg-background/95 p-2 shadow-md backdrop-blur-md sm:hidden"
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? "true" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    active === id ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      ) : null}
    </nav>
  )
}

export default Nav
