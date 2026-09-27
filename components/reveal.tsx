"use client"

import { useEffect, useLayoutEffect } from "react"

const useArmEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

function RevealOnScroll() {
  useArmEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-reveal-stagger]"
      )
    )

    if (targets.length === 0) {
      return
    }
    const forceMotion = document.documentElement.dataset.motion === "force"

    if (
      !forceMotion &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    targets.forEach((element) => element.classList.add("is-armed"))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue
          }

          entry.target.classList.add("is-revealed")
          entry.target.classList.remove("is-armed")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    )

    targets.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return null
}

export { RevealOnScroll }
