import { useEffect, useMemo, useRef, type ReactNode, type RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  triggerRef?: RefObject<HTMLElement | null>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  id?: string
  textClassName?: string
  rotationStart?: string
  rotationEnd?: string
  wordAnimationStart?: string
  wordAnimationEnd?: string
}

function ScrollReveal({
  children,
  scrollContainerRef,
  triggerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  id,
  textClassName = '',
  rotationStart = 'top bottom',
  rotationEnd = 'bottom bottom',
  wordAnimationStart = 'top bottom-=10%',
  wordAnimationEnd = 'bottom bottom'
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : ""

    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word

      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current

    if (!el) return

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window
    const trigger = triggerRef?.current ?? el
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const context = gsap.context(() => {
      const wordElements = el.querySelectorAll<HTMLElement>(".word")

      if (reduceMotion) {
        gsap.set(wordElements, { filter: "blur(0px)", opacity: 1 })
        gsap.set(el, { rotate: 0 })
        return
      }

      gsap.fromTo(
        el,
        { transformOrigin: "0% 50%", rotate: baseRotation },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: {
            trigger,
            scroller,
            start: rotationStart,
            end: rotationEnd,
            scrub: true
          }
        }
      )

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: "opacity" },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger,
            scroller,
            start: wordAnimationStart,
            end: wordAnimationEnd,
            scrub: true
          }
        }
      )

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: "none",
            filter: "blur(0px)",
            stagger: 0.05,
            scrollTrigger: {
              trigger,
              scroller,
              start: wordAnimationStart,
              end: wordAnimationEnd,
              scrub: true
            }
          }
        )
      }
    }, el)

    return () => context.revert()
  }, [
    scrollContainerRef,
    triggerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationStart,
    rotationEnd,
    wordAnimationStart,
    wordAnimationEnd,
    blurStrength,
  ])

  return (
    <h2 id={id} ref={containerRef} className={containerClassName}>
      <span className={textClassName}>{splitText}</span>
    </h2>
  )
}

export default ScrollReveal
