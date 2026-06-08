import { useEffect, useRef, useState, type CSSProperties } from "react"

import usepLogo from "@/assets/usep-logo.png"
import wilyonaryoLogo from "@/assets/wilyonaryo-logo.gif"
import ScrollReveal from "@/components/ScrollReveal"

const affiliationLogos = [
  {
    alt: "Wilyonaryo logo",
    image: wilyonaryoLogo,
    name: "Wilyonaryo",
  },
  {
    alt: "University of Southeastern Philippines logo",
    image: usepLogo,
    name: "USEP",
  },
]

function getRevealProgress(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const travelDistance = rect.height + viewportHeight
  const rawProgress = (viewportHeight - rect.top) / travelDistance

  return Math.min(1, Math.max(0, rawProgress))
}

function getPhaseProgress(progress: number, start: number, end: number) {
  const phaseProgress = Math.min(1, Math.max(0, (progress - start) / (end - start)))

  return phaseProgress * phaseProgress * (3 - 2 * phaseProgress)
}

function ScrollRevealSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [progress, setProgress] = useState(0)
  const logoProgress = getPhaseProgress(progress, 0.42, 0.72)
  const revealStyle = {
    "--logo-opacity": 0.22 + logoProgress * 0.78,
    "--logo-offset": `${(1 - logoProgress) * 0.75}rem`,
    "--reveal-progress": logoProgress,
  } as CSSProperties & {
    "--logo-opacity": number
    "--logo-offset": string
    "--reveal-progress": number
  }

  useEffect(() => {
    const section = sectionRef.current

    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1)
      return
    }

    let frameId = 0

    function updateProgress() {
      if (!section) {
        return
      }

      setProgress(getRevealProgress(section))
      frameId = 0
    }

    function requestUpdate() {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="portfolio-story-section"
      style={revealStyle}
      aria-labelledby="portfolio-story-title"
    >
      <div className="portfolio-story-inner">
        <ScrollReveal
          id="portfolio-story-title"
          triggerRef={sectionRef}
          baseOpacity={0.18}
          baseRotation={0}
          blurStrength={2}
          containerClassName="portfolio-story-copy"
          textClassName="portfolio-story-copy-text"
          rotationStart="top top"
          rotationEnd="bottom bottom"
          wordAnimationStart="top top"
          wordAnimationEnd="65% top"
        >
          Full-stack developer and data scientist building thoughtful digital
          products, intelligent systems, and clean end-to-end experiences.
        </ScrollReveal>

        <ul className="portfolio-affiliations" aria-label="Affiliations">
          {affiliationLogos.map((logo) => (
            <li key={logo.name} className="portfolio-affiliation-item">
              <img
                src={logo.image}
                alt={logo.alt}
                className="portfolio-affiliation-image"
              />
            </li>
          ))}
          <li className="portfolio-affiliation-item portfolio-freelance-logo">
            Freelancing
          </li>
        </ul>
      </div>
    </section>
  )
}

export { ScrollRevealSection }
