import { useEffect, useRef, useState } from "react"
import { BrainCircuit, Leaf, LineChart } from "lucide-react"

import mangopraImage from "@/assets/mangopra.png"
import nososImage from "@/assets/nosos.png"
import projectGardsImage from "@/assets/project-gards.png"

const projects = [
  {
    accent: "Agriculture AI",
    description:
      "A mobile application for automated copra quality classification that allows users to capture or upload images and receive instant grading results using a lightweight CNN enhanced with GLCM texture features. The system is designed to function offline, enabling reliable deep learning inference without internet connectivity, and delivers fast predictions through a simple, intuitive interface optimized for accessibility and ease of use in agricultural settings.",
    href: "https://github.com/NorLz/Mangopra",
    icon: Leaf,
    image: mangopraImage,
    title: "Mangopra",
  },
  {
    accent: "NASA Hackathon",
    description:
      "An AI-powered research platform developed during a NASA hackathon, designed to help scientists navigate vast space biology data. It leverages Gemini generative AI and semantic search to deliver intelligent summaries and surface relevant research, enabling faster discovery of insights and new research directions.",
    href: "https://gard-nasa-hackathon.vercel.app",
    icon: BrainCircuit,
    image: projectGardsImage,
    title: "Project GARDS",
  },
  {
    accent: "Public Health Analytics",
    description:
      "An interactive analytics dashboard that visualizes and predicts outbreaks of climate-sensitive diseases in Philippine cities, empowering stakeholders with actionable insights for proactive public health decisions.",
    href: "https://github.com/NorLz/ADS-Dashboard",
    icon: LineChart,
    image: nososImage,
    title: "NOSOS Alert",
  },
]

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const [activeProject, setActiveProject] = useState(1)

  useEffect(() => {
    const section = sectionRef.current
    const viewport = viewportRef.current
    const track = trackRef.current
    const progress = progressRef.current

    if (!section || !viewport || !track || !progress) return

    let frame = 0
    let maxOffset = 0
    let previousActive = 1

    const measure = () => {
      const viewportWidth = viewport.clientWidth
      maxOffset = Math.max(0, track.scrollWidth - viewportWidth)
    }

    const update = () => {
      frame = 0

      const rect = section.getBoundingClientRect()
      const scrollableDistance = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      )
      const nextProgress = clamp(-rect.top / scrollableDistance, 0, 1)
      const translateX = Math.round(maxOffset * nextProgress * 100) / 100
      const nextActive = clamp(
        Math.round(nextProgress * (projects.length - 1)) + 1,
        1,
        projects.length,
      )

      track.style.transform = `translate3d(${-translateX}px, 0, 0)`
      progress.style.transform = `scaleX(${nextProgress})`

      if (nextActive !== previousActive) {
        previousActive = nextActive
        setActiveProject(nextActive)
      }
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    const handleResize = () => {
      measure()
      requestUpdate()
    }

    measure()
    update()

    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="portfolio-projects-section"
      aria-labelledby="projects-title"
    >
      <div className="portfolio-projects-sticky">
        <div className="portfolio-projects-heading">
          <h2 id="projects-title">
            /projects that
            <span>I built.</span>
          </h2>

          <div className="portfolio-projects-meter" aria-hidden="true">
            <span className="portfolio-projects-meter-track">
              <span
                ref={progressRef}
                className="portfolio-projects-meter-progress"
              />
            </span>
            <span className="portfolio-projects-count">
              {activeProject} / {projects.length}
            </span>
          </div>
        </div>

        <div ref={viewportRef} className="portfolio-projects-viewport">
          <ul ref={trackRef} className="portfolio-projects-track">
            {projects.map((project) => {
              const ProjectIcon = project.icon

              return (
                <li key={project.title} className="portfolio-project-card">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <div
                      className={
                        project.image
                          ? "portfolio-project-preview portfolio-project-preview-image"
                          : "portfolio-project-preview"
                      }
                    >
                      {project.image ? (
                        <img src={project.image} alt="" aria-hidden="true" />
                      ) : (
                        <ProjectIcon aria-hidden="true" />
                      )}
                      {!project.image && <span>{project.accent}</span>}
                    </div>

                    <div className="portfolio-project-card-copy">
                      <p>{project.accent}</p>
                      <h3>/{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection }
