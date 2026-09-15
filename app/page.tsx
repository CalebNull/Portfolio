import About from "@/components/about"
import Contact from "@/components/contact"
import { Hero } from "@/components/hero"
import { MouseBlurTracker } from "@/components/mouse-blur-tracker"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import { SiteNav } from "@/components/site-nav"
import Skills from "@/components/skills"

export default function Page() {
  return (
    <>
      <MouseBlurTracker />
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
