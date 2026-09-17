"use client"

import { useEffect, useRef } from "react"

export function MouseBlurTracker() {
  const dotRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const hasMoved = useRef(false)

  useEffect(() => {
    let rafId: number

    const handleMouseMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY }
      if (!hasMoved.current) {
        hasMoved.current = true
        current.current = { ...target.current }
        dotRef.current?.style.setProperty("opacity", "1")
      }
    }

    const tick = () => {
      const dot = dotRef.current
      if (dot) {
        // ease 12% of the remaining distance toward the target each frame
        current.current.x += (target.current.x - current.current.x) * 0.12
        current.current.y += (target.current.y - current.current.y) * 0.12
        dot.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", handleMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div ref={dotRef} style={blurStyle} />
    </div>
  )
}

const blurStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "150px",
  height: "150px",
  borderRadius: "100%",
  background: "var(--primary)",
  filter: "blur(50px)",
  opacity: 0,
  transition: "opacity 0.3s ease-out",
  willChange: "transform",
}
