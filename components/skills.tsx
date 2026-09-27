import { Section } from "@/components/section"
import { sectionLedes, skillGroups } from "@/lib/content"
import FadeContent from "@/components/ui/FadeContent"

// No `playOnMount` here, unlike the hero: these rows sit below the fold and
// should animate when they are scrolled to. Values are milliseconds.
const FADE = { y: 24, duration: 900 } as const

const Skills = () => {
  return (
    <Section id="skills" title="Skills" description={sectionLedes.skills}>
      <dl className="divide-y divide-border">
        {skillGroups.map((group, groupIndex) => (
          <FadeContent
            key={group.title}
            {...FADE}
            delay={groupIndex * 80}
            className="grid gap-1.5 py-4 first:pt-0 last:pb-0 sm:grid-cols-[6.5rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase sm:pt-0.5">
              {group.title}
            </dt>
            <dd>
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                {group.items.map((item, index) => (
                  <li key={item} className="flex items-center gap-2">
                    {item}
                    {index < group.items.length - 1 ? (
                      <span aria-hidden="true" className="text-border">
                        &middot;
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </dd>
          </FadeContent>
        ))}
      </dl>
    </Section>
  )
}

export default Skills
