"use client"

import { useRef, useEffect, type ComponentPropsWithoutRef } from "react"
import { gsap } from "gsap"

type FadeContentProps = ComponentPropsWithoutRef<"div"> & {
  /** Observer root: an element, a selector, or null for the viewport. */
  container?: Element | string | null
  blur?: boolean
  /**
   * Values above 10 are read as milliseconds, 10 and below as seconds — the
   * defaults mix both (`duration` 1000ms, `disappearDuration` 0.5s).
   */
  duration?: number
  ease?: gsap.TweenVars["ease"]
  delay?: number
  /** 0-1: how much of the element must be visible before it animates. */
  threshold?: number
  initialOpacity?: number
  /** 0 disables the fade-out entirely. */
  disappearAfter?: number
  disappearDuration?: number
  disappearEase?: gsap.TweenVars["ease"]
  onComplete?: () => void
  onDisappearanceComplete?: () => void
  /** Slide distance in px: the element travels up from this offset. 0 = no slide. */
  y?: number
  /** Animate on mount instead of waiting to be scrolled into view. */
  playOnMount?: boolean
}

const FadeContent = ({
  children,
  container,
  blur = false,
  duration = 1000,
  ease = "power2.out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power2.in",
  onComplete,
  onDisappearanceComplete,
  className = "",
  style,
  y = 0,
  playOnMount = false,
  ...props
}: FadeContentProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const forceMotion = document.documentElement.dataset.motion === "force"
    if (
      !forceMotion &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const getSeconds = (val: number) =>
      typeof val === "number" && val > 10 ? val / 1000 : val

    gsap.set(el, {
      opacity: initialOpacity,
      y,
      filter: blur ? "blur(10px)" : "blur(0px)",
      willChange: "opacity, filter, transform",
    })

    const tl = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete: () => {
        gsap.set(el, { clearProps: "willChange" })
        if (onComplete) onComplete()
        if (disappearAfter > 0) {
          gsap.to(el, {
            opacity: initialOpacity,
            filter: blur ? "blur(10px)" : "blur(0px)",
            delay: getSeconds(disappearAfter),
            duration: getSeconds(disappearDuration),
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.(),
          })
        }
      },
    })

    tl.to(el, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: getSeconds(duration),
      ease: ease,
    })

    if (playOnMount) {
      tl.play()
      return () => {
        tl.kill()
        gsap.killTweensOf(el)
      }
    }

    const root =
      typeof container === "string"
        ? document.querySelector(container)
        : (container ?? null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          tl.play()
          observer.unobserve(entry.target)
        }
      },
      { root, threshold: Math.min(Math.max(threshold, 0), 1) }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      tl.kill()
      gsap.killTweensOf(el)
    }
  }, [])

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  )
}

export default FadeContent
