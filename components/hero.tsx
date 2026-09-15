import { CaretDown, Code } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { OrbField } from "./orb-field"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center gap-8 overflow-hidden pt-20 pb-0 text-center"
    >
      <OrbField />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-accent-foreground/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-chart-2/25 blur-3xl" />
      </div>

      {/* dd photos later */}
      <div className="relative h-48 w-48 animate-fade-in-up [animation-delay:225ms] sm:h-56 sm:w-56">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-6 rounded-2xl border border-border bg-secondary" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <Code className="size-16 text-muted-foreground" weight="light" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="max-w-3xl animate-fade-in-up text-4xl font-bold tracking-tight [animation-delay:290ms] sm:text-5xl md:text-6xl">
          Hey there, I&apos;m <span className="text-primary">Caleb Null</span>
        </h1>
        <p className="max-w-xl animate-fade-in-up text-balance text-muted-foreground [animation-delay:375ms] sm:text-lg">
          <span className="font-semibold text-primary">Software Engineer</span>{" "}
          passionate about building scalable applications and solving real-world
          problems.
        </p>
      </div>

      <div className="flex animate-fade-in-up flex-wrap items-center justify-center gap-4 [animation-delay:450ms]">
        <Button
          size="lg"
          render={<Link href="#projects">View Projects</Link>}
        />
        <Button
          size="lg"
          variant="outline"
          render={<Link href="#contact">Get In Touch</Link>}
        />
      </div>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
      >
        <CaretDown className="size-6" />
      </Link>
    </section>
  )
}
