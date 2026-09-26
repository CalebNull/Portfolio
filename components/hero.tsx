import Image from "next/image"
import { ArrowUpRight, ReadCvLogo } from "@phosphor-icons/react/dist/ssr"

import headshot from "@/public/headshot.jpg"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/content"

const Hero = () => {
  return (
    <section id="top" className="px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        {/* Image first in the markup so the mobile stack reads photo-then-name;
            on desktop it moves to the right of the text. */}
        <div className="shrink-0 md:order-last">
          {/* Statically imported so Next infers the intrinsic size and can
              generate the blur placeholder, avoiding layout shift. The source
              is 3:4, so a portrait frame uses it without cropping the sides. */}
          <Image
            src={headshot}
            alt={`Portrait of ${site.name}`}
            placeholder="blur"
            priority
            sizes="(min-width: 768px) 176px, 128px"
            className="aspect-[3/4] w-32 rounded-lg object-cover ring-1 ring-border md:w-44"
          />
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {site.role}
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              {site.name}
            </h1>
          </div>

          <p className="max-w-prose text-pretty text-muted-foreground md:text-lg md:leading-relaxed">
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
