import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  accentClassName: string
  ctaLabel: string
  description: string
  href: string
  index: string
  stack: string[]
  title: string
}

function ProjectCard({
  accentClassName,
  ctaLabel,
  description,
  href,
  index,
  stack,
  title,
}: ProjectCardProps) {
  return (
    <article className="group grid gap-4 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6">
      <div
        className={`flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-full text-lg font-bold tracking-[-0.04em] ${accentClassName}`}
      >
        {index}
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <h3 className="text-[1.45rem] font-black tracking-[-0.06em] text-[color:var(--portfolio-ink)] transition-colors duration-300 group-hover:text-[color:var(--portfolio-accent)] sm:text-[1.95rem]">
            {title}
          </h3>
          <p className="max-w-xl text-[0.96rem] leading-7 text-[color:var(--portfolio-ink-soft)] sm:leading-8">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="portfolio-pill inline-flex rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.24em]">
              {item}
            </span>
          ))}
        </div>

        <Button
          asChild
          variant="ghost"
          className="h-auto justify-start px-0 py-0 text-[0.78rem] font-black uppercase tracking-[0.3em] text-[color:var(--portfolio-accent)] hover:bg-transparent hover:text-[color:var(--portfolio-accent)]"
        >
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
          >
            {ctaLabel}
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>
    </article>
  )
}

export { ProjectCard }
