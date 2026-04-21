import type { ReactNode } from "react"

type ExperienceItemProps = {
  company: string
  duration: string
  points?: string[]
  summary: ReactNode
  title: string
}

function ExperienceItem({
  company,
  duration,
  points,
  summary,
  title,
}: ExperienceItemProps) {
  return (
    <article className="grid gap-4 border-b border-[color:var(--portfolio-line)]/20 pb-7 last:border-b-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_10rem] sm:gap-6">
      <div className="space-y-2">
        <div className="space-y-1">
          <h3 className="text-[1.45rem] font-black tracking-[-0.06em] text-[color:var(--portfolio-ink)] sm:text-[1.95rem]">
            {title}
          </h3>
          <p className="text-base font-semibold text-[rgb(42,73,255)]">
            {company}
          </p>
        </div>

        <p className="max-w-xl text-[0.96rem] leading-7 text-[color:var(--portfolio-ink-soft)] sm:leading-8">
          {summary}
        </p>

        {points?.length ? (
          <ul className="space-y-2 pt-1 text-sm leading-7 text-[color:var(--portfolio-ink-soft)]">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-[0.62rem] size-1.5 rounded-full bg-[color:var(--portfolio-accent)]/45" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="pt-1 text-left sm:text-right">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[color:var(--portfolio-muted)]">
          {duration}
        </p>
      </div>
    </article>
  )
}

export { ExperienceItem }
