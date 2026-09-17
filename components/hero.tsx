import {
  ArrowRightIcon,
  CaretDown,
  Code,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { OrbField } from "./ui/orb-field"
import Stack from "./ui/Stack"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center gap-8 overflow-hidden pt-20 pb-0 text-center"
    >
      <OrbField />

      {/* add photos later */}
      <div className="relative h-full w-full sm:h-56 sm:w-56">
        <Stack
          autoplay
          autoplayDelay={2200}
          pauseOnHover={true}
          sensitivity={200}
          sendToBackOnClick={true}
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="max-w-3xl animate-fade-in-up text-4xl font-bold tracking-tight [animation-delay:290ms] sm:text-5xl md:text-6xl">
          Hey there, I&apos;m <span className="text-primary">Caleb Null</span>
        </h1>
        <p className="max-w-xl animate-fade-in-up font-semibold text-balance text-muted-foreground [animation-delay:375ms] sm:text-lg">
          A passionate{" "}
          <span className="font-bold text-primary">Software Engineer</span> with
          a interest in backend systems, developer tooling, and clean
          architecture.
        </p>
      </div>

      <div className="flex animate-fade-in-up flex-wrap items-center justify-center gap-4 [animation-delay:450ms]">
        <Button
          size="lg"
          variant="outline"
          render={
            <Link href="#contact">
              <PaperPlaneTiltIcon weight="bold" size={24} /> Get In Touch
            </Link>
          }
        />
        <Button
          size="lg"
          render={
            <Link href="#projects">
              <ArrowRightIcon size={24} weight="bold" />
              View Projects
            </Link>
          }
        />
      </div>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
      >
        <div className="flex flex-col items-center">
          <p>Scroll to explore</p>
          <CaretDown className="size-6" />
        </div>
      </Link>
    </section>
  )
}
