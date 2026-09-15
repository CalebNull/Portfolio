import About from "@/components/about"
import Contact from "@/components/contact"
import { Hero } from "@/components/hero"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import { SiteNav } from "@/components/site-nav"
import Skills from "@/components/skills"

export default function Page() {
  return (
    <>
      <SiteNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </>
  )
}
