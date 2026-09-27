import Image from "next/image"
import { ArrowUpRight, ReadCvLogo } from "@phosphor-icons/react/dist/ssr"

import headshot from "@/public/headshot.jpg"
import { Button } from "@/components/ui/button"
import FadeContent from "@/components/ui/FadeContent"
import { site } from "@/lib/content"

const FADE = { playOnMount: true, y: 36, duration: 1100 } as const

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-10rem)] items-center px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
        <FadeContent {...FADE} delay={270} className="md:order-last">
          <Image
            src={headshot}
            alt={`Portrait of ${site.name}`}
            placeholder="blur"
            priority
            sizes="(min-width: 768px) 208px, 144px"
            className="aspect-[3/4] w-36 rounded-xl object-cover ring-1 ring-border md:w-52"
          />
        </FadeContent>

        <div>
          <FadeContent {...FADE} delay={120} className="space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {site.role}
            </p>
            <h1 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-6xl">
              {site.name}
            </h1>
          </FadeContent>

          <FadeContent {...FADE} delay={200} className="mt-6 md:mt-7">
            <p className="max-w-prose text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {site.tagline}
            </p>
          </FadeContent>

          <FadeContent
            {...FADE}
            delay={340}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
          >
            <span>{site.location}</span>
            {site.availability ? (
              <>
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-muted-foreground/50"
                />
                <span className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-emerald-500"
                  />
                  {site.availability}
                </span>
              </>
            ) : null}
          </FadeContent>

          <FadeContent
            {...FADE}
            delay={430}
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-10"
          >
            <Button
              render={<a href="#projects" />}
              nativeButton={false}
              size="lg"
            >
              View projects
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              render={<a href={site.resume} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              <ReadCvLogo className="size-4" />
              Resume
            </Button>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Hero
