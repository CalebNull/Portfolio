"use client"

import { useEffect, useState } from "react"

type Orb = {
  id: number
  top: number
  left: number
  size: number
  duration: number
  delay: number
}

function generateOrbs(count: number): Orb[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1.5 + Math.random() * 1.5,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * -20,
  }))
}

export function OrbField({ count = 45 }: { count?: number }) {
  const [orbs, setOrbs] = useState<Orb[] | null>(null)

  useEffect(() => {
    setOrbs(generateOrbs(count))
  }, [count])

  if (!orbs) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 animate-fade-in-up-orbs overflow-hidden [animate-delay:400ms]"
    >
      {orbs.map((orb) => (
        <span
          key={orb.id}
          className="absolute animate-float rounded-full bg-primary shadow-[0_0_8px_2px_var(--color-primary)]"
          style={{
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            width: orb.size,
            height: orb.size,
            animationDuration: `${orb.duration}`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
