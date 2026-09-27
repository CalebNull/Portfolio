import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  /** Names the section. Rendered as a small label, not a display heading. */
  title: string
  /** Supporting line under the label. */
  description?: string
  children: React.ReactNode
  className?: string
}

/**
 * Shared shell for every content section.
 *
 * The rule runs the full width of the page while the content stays in a
 * centred column, so the page reads as structured rather than boxed. On large
 * screens the label column sticks while its content scrolls past it.
 */
function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-t border-border", className)}
    >
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[13rem_1fr] lg:gap-16">
        <header
          data-reveal-stagger
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <div className="flex items-center gap-3">
            <h2
              id={headingId}
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase"
            >
              {title}
            </h2>
            {/* The rule only earns its place while the label sits above the
                content, not beside it. */}
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-border lg:hidden"
            />
          </div>
          {description ? (
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-pretty text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}

export { Section }
