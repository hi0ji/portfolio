import type { CSSProperties, ReactNode } from "react"
import { useMemo, useState } from "react"

type IdCardProps = {
  left: ReactNode
  right: ReactNode
}

function IdCard({ left, right }: IdCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const cardStyle = useMemo(
    () =>
      ({
        "--portfolio-rotate-x": `${rotation.x}deg`,
        "--portfolio-rotate-y": `${rotation.y}deg`,
      }) as CSSProperties,
    [rotation.x, rotation.y]
  )

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const percentX = (event.clientX - bounds.left) / bounds.width - 0.5
    const percentY = (event.clientY - bounds.top) / bounds.height - 0.5

    setRotation({
      x: percentY * -4.5,
      y: percentX * 5.5,
    })
  }

  function resetRotation() {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <article
      className="portfolio-card-frame portfolio-card-surface relative w-full max-w-[70rem] overflow-hidden rounded-[2.4rem] px-5 py-6 sm:rounded-[2.8rem] sm:px-7 sm:py-8 lg:h-[min(44rem,calc(100svh-7rem))] lg:rounded-[3.35rem_2.65rem_3.85rem_2.45rem] lg:px-10 lg:py-10"
      style={cardStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetRotation}
    >
      <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-white/60" />
      <div className="pointer-events-none absolute right-8 top-8 h-14 w-14 rounded-full border border-[rgba(215,106,75,0.14)] sm:right-10 sm:top-10" />
      <div className="pointer-events-none absolute bottom-10 left-8 h-4 w-4 rounded-full bg-[rgba(215,106,75,0.1)] shadow-[0_0_0_14px_rgba(255,255,255,0.08)] sm:bottom-12 sm:left-10" />

      <div className="grid gap-8 lg:h-full lg:grid-cols-[minmax(0,0.92fr)_1px_minmax(0,1.08fr)] lg:gap-10">
        <div className="min-w-0 lg:h-full">{left}</div>
        <div className="hidden lg:h-full lg:block">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[color:var(--portfolio-line)] to-transparent" />
        </div>
        <div className="min-w-0 lg:col-start-3 lg:h-full lg:overflow-hidden">{right}</div>
      </div>
    </article>
  )
}

export { IdCard }
