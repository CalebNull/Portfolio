import { site, socials } from "@/lib/content"

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-8 md:px-10">
      <p className="font-mono text-xs tracking-wide text-muted-foreground">
        &copy; {new Date().getFullYear()} {site.name}
      </p>
      <ul className="flex flex-wrap items-center gap-5">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm font-mono text-xs tracking-wide text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
