import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

type ExperienceHeaderProps = {
  onBack: () => void
}

function ExperienceHeader({ onBack }: ExperienceHeaderProps) {
  return (
    <header className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <Button
          type="button"
          variant="ghost"
          className="portfolio-pill h-auto rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--portfolio-ink-soft)] hover:bg-white/50 hover:text-[color:var(--portfolio-ink)]"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>
      </div>

      <div className="space-y-3">
        <p className="text-[0.68rem] uppercase tracking-[0.36em] text-[color:var(--portfolio-muted)]">
          Portfolio
        </p>
        <h2 className="text-[2.3rem] font-black tracking-[-0.09em] text-[color:var(--portfolio-ink)] sm:text-[4.4rem]">
          EXPERIENCE
        </h2>
        <div className="h-1 w-14 bg-[color:var(--portfolio-accent)]" />
      </div>
    </header>
  )
}

export { ExperienceHeader }
