"use client"

import { useEffect, useRef } from "react"

type Stars = {
  x: number
  y: number
  angle: number
  speed: number
  size: number
  phase: number
  blinkRate: number
  depth: number
}

const SPRITE_SIZE = 64

const SCROLL_FOLLOW = 0.6

function makeSprite(color: string) {
  const sprite = document.createElement("canvas")
  sprite.width = SPRITE_SIZE
  sprite.height = SPRITE_SIZE
  const ctx = sprite.getContext("2d")!
  const c = SPRITE_SIZE / 2

  const gradient = ctx.createRadialGradient(c, c, 0, c, c, c)
  gradient.addColorStop(0, "rgba(0, 0, 0, 1)")
  gradient.addColorStop(0.15, "rgba(0, 0, 0, 0.9)")
  gradient.addColorStop(0.35, "rgba(0, 0, 0, 0.25)")
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE)

  ctx.globalCompositeOperation = "source-in"
  ctx.fillStyle = color
  ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE)

  return sprite
}

function spawn(width: number, height: number) {
  const depth = 0.3 + Math.random() * 0.7
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    angle: Math.random() * Math.PI * 2,
    speed: 8 + Math.random() * 18,
    size: (5 + Math.random() * 6) * (0.6 + depth * 0.6),
    phase: Math.random() * Math.PI * 2,
    blinkRate: 0.15 + Math.random() * 0.35,
    depth,
  }
}

function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) {
      return
    }

    const root = document.documentElement

    let width = 0
    let height = 0
    let stars: Stars[] = []
    let isDark = false
    let sprite: HTMLCanvasElement

    function applyTheme() {
      isDark = root.classList.contains("dark")
      sprite = makeSprite(getComputedStyle(canvas!).color)
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = Math.round(width * dpr)
      canvas!.height = Math.round(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.max(
        14,
        Math.min(55, Math.round((width * height) / 30000))
      )
      stars = stars
        .filter((s) => s.x <= width && s.y <= height)
        .slice(0, target)
      while (stars.length < target) {
        stars.push(spawn(width, height))
      }
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height)
      ctx!.globalCompositeOperation = isDark ? "lighter" : "source-over"

      const seconds = time / 1000
      for (const s of stars) {
        const wave =
          (Math.sin(seconds * s.blinkRate * Math.PI * 2 + s.phase) + 1) / 2
        const pulse = 0.12 + 0.88 * wave ** 3
        ctx!.globalAlpha = pulse * s.depth * (isDark ? 0.8 : 0.35)
        const d = s.size * 2
        ctx!.drawImage(sprite, s.x - s.size, s.y - s.size, d, d)
      }
      ctx!.globalAlpha = 1
    }

    function wrap(s: Stars) {
      const m = s.size * 2
      if (s.x < -m) s.x = width + m
      else if (s.x > width + m) s.x = -m
      if (s.y < -m) s.y = height + m
      else if (s.y > height + m) s.y = -m
    }

    let frame = 0
    let last = performance.now()
    let lastScroll = window.scrollY

    function tick(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      const scrollY = window.scrollY
      const scrolled = scrollY - lastScroll
      lastScroll = scrollY

      for (const s of stars) {
        s.angle += (Math.random() - 0.5) * 2.4 * dt
        s.x += Math.cos(s.angle) * s.speed * dt
        s.y += Math.sin(s.angle) * s.speed * dt
        s.y -= scrolled * SCROLL_FOLLOW * s.depth
        wrap(s)
      }

      draw(now)
      frame = requestAnimationFrame(tick)
    }

    const themeObserver = new MutationObserver(applyTheme)
    themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    })

    applyTheme()
    resize()
    window.addEventListener("resize", resize)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      themeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full text-foreground"
    />
  )
}

export { Stars }
