import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { sectionLedes, site, socials } from "@/lib/content"

const linkClasses =
  "rounded-sm underline-offset-4 hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      description={sectionLedes.contact}
      className="pb-20 md:pb-28"
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10">
        <dl className="space-y-5 text-sm">
          <div>
            <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Email
            </dt>
            <dd className="mt-1.5">
              <a href={`mailto:${site.email}`} className={linkClasses}>
                {site.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Elsewhere
            </dt>
            <dd className="mt-1.5 flex flex-col gap-1.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClasses}
                >
                  {social.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </dd>
          </div>

          <div>
            <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Location
            </dt>
            <dd className="mt-1.5 text-muted-foreground">{site.location}</dd>
          </div>
        </dl>

        <ContactForm />
      </div>
    </Section>
  )
}

export default Contact
