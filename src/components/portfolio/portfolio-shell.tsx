import { useState } from "react"

import { BackgroundGradient } from "./background-gradient"
import { EducationSection } from "./education-section"
import { ExperienceSection } from "./experience-section"
import { IdCard } from "./id-card"
import { PortfolioNav } from "./portfolio-nav"
import { ProfilePanel } from "./profile-panel"
import { ProjectsSection } from "./projects-section"
import { ResumeFooterLink } from "./resume-footer-link"
import { SkillsSection } from "./skills-section"
import type { PortfolioCardView, PortfolioSectionId, PortfolioSectionOption } from "./types"

const sections: PortfolioSectionOption[] = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
]

function PortfolioShell() {
  const [currentView, setCurrentView] = useState<PortfolioCardView>("home")

  const activeNavSection: PortfolioSectionId | null =
    currentView === "home" ? null : currentView

  function handleSectionChange(section: PortfolioSectionId) {
    setCurrentView(section)
  }

  function handleBackToHome() {
    setCurrentView("home")
  }

  return (
    <main className="portfolio-page relative isolate">
      <BackgroundGradient />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[92rem] items-start justify-center px-4 py-6 sm:px-6 sm:py-10 lg:items-center lg:px-10 lg:py-14">
        <IdCard
          left={<ProfilePanel />}
          right={
            <div
              key={currentView}
              className="portfolio-panel-enter h-full min-h-0"
            >
              {currentView === "home" ? (
                <section className="flex h-full min-h-0 flex-col justify-between gap-5 sm:gap-7">
                  <div className="flex flex-1 min-h-0 flex-col gap-5 sm:gap-7">
                    <header className="space-y-2">
                      <p className="text-[0.68rem] uppercase tracking-[0.42em] text-[color:var(--portfolio-muted)]">
                        Navigation
                      </p>
                      <h2 className="text-[2.15rem] font-black tracking-[-0.07em] text-[color:var(--portfolio-ink)] sm:text-[2.55rem]">
                        PORTFOLIO
                      </h2>
                    </header>

                    <PortfolioNav
                      activeSection={activeNavSection}
                      onChange={handleSectionChange}
                      sections={sections}
                    />
                  </div>

                  <footer className="flex items-end justify-end pt-2 text-right">
                    <ResumeFooterLink />
                  </footer>
                </section>
              ) : currentView === "projects" ? (
                <ProjectsSection onBack={handleBackToHome} />
              ) : currentView === "experience" ? (
                <ExperienceSection onBack={handleBackToHome} />
              ) : currentView === "skills" ? (
                <SkillsSection onBack={handleBackToHome} />
              ) : (
                <EducationSection onBack={handleBackToHome} />
              )}
            </div>
          }
        />
      </div>

      <footer className="pointer-events-none relative z-10 mx-auto hidden w-full max-w-[92rem] items-end justify-between px-6 pb-6 text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--portfolio-muted)] lg:flex lg:px-10">
        <p>(c) 2026 PJ Allen Figuracion.</p>
        <div className="pointer-events-auto flex gap-6">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-[color:var(--portfolio-accent)]"
          >
            Privacy
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-[color:var(--portfolio-accent)]"
          >
            Terms
          </a>
        </div>
      </footer>
    </main>
  )
}

export { PortfolioShell }
