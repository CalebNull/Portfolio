import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  /** Names the section. Rendered as a small label, not a display heading. */
  title: string
  /** Lede line that carries the section's meaning at display size. */
  description?: string
  children: React.ReactNode
  className?: string
}

/**
 * Shared shell for every content section.
 *
 * The heading is deliberately set small and monospaced: the label identifies
 * the section while the lede beneath it does the typographic work. Keeps the
 * `h2` semantically correct without four competing display headings down the
 * page.
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
      className={cn(
        "border-t border-border px-6 py-16 md:px-10 md:py-24",
        className
      )}
    >
      <header className="mb-10 md:mb-12">
        <div className="flex items-center gap-4">
          <h2
            id={headingId}
            className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase"
          >
            {title}
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        {description ? (
          <p className="mt-5 max-w-prose text-lg font-medium tracking-tight text-balance md:text-xl">
            {description}
          </p>
        ) : null}
      </header>
      {children}
    </section>
  )
}

export { Section }
