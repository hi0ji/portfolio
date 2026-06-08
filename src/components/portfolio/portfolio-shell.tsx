import { Menu } from "lucide-react"

import luffyAvatar from "@/assets/luffy.jpg"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { AnimatedHeroText } from "./animated-hero-text"
import { EducationSection } from "./education-section"
import { ExperienceScrollStackSection } from "./experience-scroll-stack-section"
import { heroPhrases } from "./portfolio-data"
import { ProjectsSection } from "./projects-section"
import { ScrollRevealSection } from "./scroll-reveal-section"
import { SkillsSection } from "./skills-section"

function PortfolioShell() {
  return (
    <main className="portfolio-page text-foreground">
      <header className="portfolio-header">
        <div className="flex h-full items-center justify-between px-7 sm:px-12 lg:px-[3.7rem]">
          <a
            href="#home"
            className="portfolio-brand"
            aria-label="pjallen dev home"
          >
            <span>pjallen/</span>
            <span className="block">dev</span>
          </a>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="portfolio-menu-button"
            aria-label="Open portfolio navigation"
          >
            <Menu />
          </Button>
        </div>
      </header>

      <section
        id="home"
        className="portfolio-hero"
        aria-label="PJ Allen portfolio home"
      >
        <div className="portfolio-hero-content">
          <Avatar className="portfolio-avatar" size="lg">
            <AvatarImage src={luffyAvatar} alt="PJ Allen avatar" />
            <AvatarFallback>PJ</AvatarFallback>
          </Avatar>

          <h1 className="portfolio-hero-title">
            <AnimatedHeroText phrases={heroPhrases} />
          </h1>
        </div>
      </section>

      <ScrollRevealSection />

      <ExperienceScrollStackSection />

      <ProjectsSection />

      <EducationSection />

      <SkillsSection />
    </main>
  )
}

export { PortfolioShell }
