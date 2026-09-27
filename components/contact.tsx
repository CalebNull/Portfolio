import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { sectionLedes, site, socials } from "@/lib/content"

const linkClasses =
  "rounded-sm underline-offset-4 hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"

const Contact = () => {
  return (
    <Section id="contact" title="Contact" description={sectionLedes.contact}>
      {/* Details read as a compact strip above the form so the fields get the
          full width of the content column. */}
      <dl className="flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:flex-wrap sm:gap-x-16">
        <div>
          <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Elsewhere
          </dt>
          <dd className="mt-1.5 flex flex-col items-start gap-1.5 text-sm">
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
          <dd className="mt-1.5 text-sm text-muted-foreground">
            {site.location}
          </dd>
        </div>
      </dl>

      <div className="pt-7">
        <ContactForm />
      </div>
    </Section>
  )
}

export default Contact
