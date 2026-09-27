import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr"

import { Section } from "@/components/section"
import { projects, sectionLedes } from "@/lib/content"

const linkClasses =
  "group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"

const Projects = () => {
  return (
    <Section id="projects" title="Projects" description={sectionLedes.projects}>
      {/* Divided rows instead of bordered cards: less chrome, and the eye can
          scan names down a single edge. */}
      <ul className="divide-y divide-border">
        {projects.map((project) => (
          <li key={project.name} className="py-7 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {project.name}
              </h3>
              {project.status ? (
                <span className="font-mono text-xs text-muted-foreground">
                  {project.status}
                </span>
              ) : null}
            </div>

            <p className="mt-2 max-w-prose text-sm leading-relaxed text-pretty text-muted-foreground">
              {project.description}
            </p>

            <p className="mt-3 font-mono text-xs text-muted-foreground">
              {project.stack.join(" / ")}
            </p>

            {project.repo || project.demo ? (
              <div className="mt-4 flex flex-wrap items-center gap-5">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClasses}
                  >
                    <GithubLogo className="size-4" />
                    Source
                    <span className="sr-only">
                      {" "}
                      for {project.name} (opens in a new tab)
                    </span>
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClasses}
                  >
                    Live demo
                    <span className="sr-only">
                      {" "}
                      of {project.name} (opens in a new tab)
                    </span>
                    <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-px group-hover:-translate-y-px" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
