import Nav from "@/components/ui/nav"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal"
import { Stars } from "@/components/ui/stars"

export default function Page() {
  return (
    <div className="transition-all duration-300 ease-out">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Stars />

      <Nav />

      <RevealOnScroll />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
