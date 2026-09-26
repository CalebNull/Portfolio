"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"

/**
 * The resolved theme is only known in the browser, so the icon is rendered
 * after mount. Reserving the button's size up front keeps the nav from
 * shifting when it appears.
 */
function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={className}
        style={{ display: "inline-block", width: "2.25rem", height: "2.25rem" }}
      />
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title="Toggle theme (D)"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}

export { ThemeToggle }
