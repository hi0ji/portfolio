import { useEffect, useRef } from "react"
import {
  ExternalLink,
  FileText,
  GraduationCap,
  MapPin,
  Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const educationDetails = [
  "Trained and optimized lightweight convolutional neural networks (CNNs), integrating Gray-Level Co-occurrence Matrix (GLCM) features to enhance texture-based classification performance.",
  "Developed and evaluated a prototype system using validation and testing metrics to assess model accuracy, generalization, and real-world applicability in agricultural quality assessment.",
]

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

function EducationSection() {
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
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      sticky.style.setProperty("--education-progress", progress.toFixed(4))
      sticky.style.setProperty(
        "--education-eased-progress",
        easedProgress.toFixed(4),
      )
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
      className="portfolio-education-section"
      aria-labelledby="education-title"
    >
      <div ref={stickyRef} className="portfolio-education-sticky">
        <div className="portfolio-education-inner">
          <div className="portfolio-education-heading">
            <p>/education</p>
            <h2 id="education-title">
              Bachelor of Science in Computer Science
            </h2>
          </div>

          <div className="portfolio-education-card">
            <div className="portfolio-education-school">
              <span aria-hidden="true">
                <GraduationCap />
              </span>
              <div>
                <p>University of Southeastern Philippines</p>
                <p>
                  <MapPin aria-hidden="true" />
                  Davao City, Philippines
                </p>
              </div>
            </div>

            <div className="portfolio-education-thesis">
              <p>Thesis</p>
              <h3>
                A deep learning-based thesis focused on improving copra quality
                classification by combining lightweight CNN models with texture
                feature enhancement techniques to achieve more accurate and
                consistent grading.
              </h3>
            </div>

            <ul className="portfolio-education-details">
              {educationDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="portfolio-education-actions">
              <Button asChild size="lg">
                <a href="#research-paper">
                  <FileText data-icon="inline-start" />
                  View research paper
                  <ExternalLink data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#mobile-app">
                  <Smartphone data-icon="inline-start" />
                  View mobile app
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { EducationSection }
