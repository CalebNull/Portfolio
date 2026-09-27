import Nav from "@/components/ui/nav"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      {/* Sticky, so it stays a sibling in normal flow. Each section centres its
          own content, which lets the dividers run the full page width. */}
      <Nav />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
