import { useEffect, useState } from "react"

type AnimatedHeroTextProps = {
  phrases: string[]
}

function AnimatedHeroText({ phrases }: AnimatedHeroTextProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePhrase = phrases[activeIndex] ?? phrases[0]
  const [prefix, suffix] = activePhrase.split("/")

  useEffect(() => {
    if (phrases.length <= 1) {
      return
    }

    const phraseTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % phrases.length)
    }, 2600)

    return () => window.clearInterval(phraseTimer)
  }, [phrases.length])

  return (
    <span className="inline-flex min-h-[1.12em] flex-wrap items-baseline">
      <span>{prefix}/</span>
      <span
        key={activePhrase}
        aria-live="polite"
        className="portfolio-swap-text"
      >
        {suffix}
      </span>
    </span>
  )
}

export { AnimatedHeroText }
