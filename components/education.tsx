import { Section } from "@/components/section"
import { education, sectionLedes } from "@/lib/content"

const Education = () => {
  return (
    <Section
      id="education"
      title="Education"
      description={sectionLedes.education}
    >
      <ul className="divide-y divide-border">
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
    </Section>
  )
}

export default Education
