import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { Section } from "@/components/section"
import { certifications, education, sectionLedes } from "@/lib/content"

const Education = () => {
  return (
    <Section
      id="education"
      title="Education"
      description={sectionLedes.education}
    >
      <ul data-reveal-stagger className="divide-y divide-border">
        {education.map((entry) => (
          <li
            key={`${entry.school}-${entry.credential}`}
            className="py-7 first:pt-0 last:pb-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {entry.school}
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                {entry.dates}
              </span>
            </div>

            <p className="mt-1.5 text-sm text-muted-foreground">
              {entry.credential}
            </p>

            {entry.details?.length ? (
              <ul className="mt-3 space-y-1.5">
                {entry.details.map((detail) => (
                  <li
                    key={detail}
                    className="max-w-prose text-sm leading-relaxed text-pretty text-muted-foreground"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>

      {certifications.length ? (
        <div className="mt-12 md:mt-14">
          <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Certifications
          </h3>

          <ul data-reveal-stagger className="mt-4 divide-y divide-border">
            {certifications.map((cert) => (
              <li
                key={`${cert.issuer}-${cert.name}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
              >
                <div>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-sm font-medium focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      <span className="a-underline">{cert.name}</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                      <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-px group-hover:-translate-y-px" />
                    </a>
                  ) : (
                    <span className="font-medium">{cert.name}</span>
                  )}
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  )
}

export default Education
