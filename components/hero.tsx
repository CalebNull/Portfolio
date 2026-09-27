import Image from "next/image"
import { ArrowUpRight, ReadCvLogo } from "@phosphor-icons/react/dist/ssr"

import headshot from "@/public/headshot.jpg"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/content"

const Hero = () => {
  return (
    <section id="top" className="px-6 pt-8 pb-16 md:px-10 md:pt-14 md:pb-24">
      <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-[1fr_auto] md:items-center md:gap-14">
        <div className="md:order-last">
          <Image
            src={headshot}
            alt={`Portrait of ${site.name}`}
            placeholder="blur"
            priority
            sizes="(min-width: 768px) 208px, 144px"
            className="aspect-[3/4] w-36 rounded-xl object-cover ring-1 ring-border md:w-52"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {site.role}
            </p>
            <h1 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-6xl">
              {site.name}
            </h1>
          </div>

          <p className="max-w-prose text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
            {site.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
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
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
