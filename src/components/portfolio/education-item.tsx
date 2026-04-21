import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type EducationLink = {
  href: string
  label: string
}

type EducationItemProps = {
  degree: string
  details?: string[]
  links: EducationLink[]
  location: string
  school: string
  thesis: string
}

function EducationItem({
  degree,
  details,
  links,
  location,
  school,
  thesis,
}: EducationItemProps) {
  return (
    <article className="relative space-y-8">
      <div className="space-y-3">
        <div className="space-y-2">
          <h3 className="text-[1.45rem] font-black tracking-[-0.06em] text-[color:var(--portfolio-accent)] sm:text-[2rem]">
            {school}
          </h3>
          <p className="text-[0.78rem] uppercase tracking-[0.24em] text-[color:var(--portfolio-muted)]">
            {location}
          </p>
        </div>

        <p className="text-base font-semibold text-[color:var(--portfolio-ink)]">
          {degree}
        </p>
      </div>

      <div className="max-w-2xl space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-[color:var(--portfolio-accent)]/35" />
          <p className="text-[0.8rem] font-black uppercase tracking-[0.26em] text-[color:var(--portfolio-ink)]">
            Thesis
          </p>
        </div>

        <p className="text-[0.96rem] leading-7 text-[color:var(--portfolio-ink-soft)] sm:leading-8">
          {thesis}
        </p>

        {details?.length ? (
          <ul className="space-y-2 pt-1 text-sm leading-7 text-[color:var(--portfolio-ink-soft)]">
            {details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-[0.65rem] size-1.5 rounded-full bg-[color:var(--portfolio-accent)]/45" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-4 pt-3">
        {links.map((link) => (
          <Button
            key={link.label}
            asChild
            variant="ghost"
            className="h-auto justify-start rounded-none border-b border-[color:var(--portfolio-line)]/40 px-0 py-0 pb-2 text-[0.8rem] font-black uppercase tracking-[0.18em] text-[rgb(42,73,255)] hover:bg-transparent hover:text-[rgb(42,73,255)]"
          >
            <a href={link.href} className="inline-flex items-center gap-2">
              <span>{link.label}</span>
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        ))}
      </div>
    </article>
  )
}

export { EducationItem }
