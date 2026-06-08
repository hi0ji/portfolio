import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"

const skillGroups = [
  {
    items: ["NodeJS", "Python", "PHP"],
    label: "Backend",
  },
  {
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
    label: "Frontend",
  },
  {
    items: ["React", "Next.js", "Express", "Tailwind", "Flask", "FastAPI"],
    label: "Frameworks",
  },
  {
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    label: "Database",
  },
  {
    items: ["Docker", "Redis", "Git", "GitHub", "Visual Studio Code"],
    label: "Dev Tools",
  },
  {
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Google Colab"],
    label: "AI/Machine Learning",
  },
]

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const sticky = stickyRef.current

    if (!section || !sticky) return

    let frame = 0

    const update = () => {
      frame = 0

      const rect = section.getBoundingClientRect()
      const scrollableDistance = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      )
      const progress = clamp(-rect.top / scrollableDistance, 0, 1)

      sticky.style.setProperty("--skills-progress", progress.toFixed(4))
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()

    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="portfolio-skills-section"
      aria-labelledby="skills-title"
    >
      <div ref={stickyRef} className="portfolio-skills-sticky">
        <div className="portfolio-skills-inner">
          <div className="portfolio-skills-heading">
            <p>/skills</p>
            <h2 id="skills-title">Tools I use to build clean systems.</h2>
          </div>

          <ul className="portfolio-skills-grid">
            {skillGroups.map((group, groupIndex) => (
              <li
                key={group.label}
                className="portfolio-skills-group"
                style={
                  {
                    "--skill-delay": groupIndex * 0.1,
                  } as CSSProperties
                }
              >
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { SkillsSection }
