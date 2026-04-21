import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { PortfolioSectionId, PortfolioSectionOption } from "./types"

type PortfolioNavProps = {
  activeSection: PortfolioSectionId | null
  onChange: (section: PortfolioSectionId) => void
  sections: PortfolioSectionOption[]
}

function PortfolioNav({ activeSection, onChange, sections }: PortfolioNavProps) {
  return (
    <div className="space-y-3" role="tablist" aria-label="Portfolio sections">
      {sections.map((section) => {
        const isActive = section.id === activeSection

        return (
          <Button
            key={section.id}
            type="button"
            variant="ghost"
            size="lg"
            role="tab"
            aria-selected={isActive}
            data-active={isActive}
            className="portfolio-nav-button h-auto w-full justify-between rounded-full border px-5 py-4 text-left text-base font-medium sm:px-6 sm:py-4 sm:text-[1.05rem]"
            onClick={() => onChange(section.id)}
          >
            <span>{section.label}</span>
            <ArrowRight
              className={`size-5 transition-transform duration-300 ${
                isActive ? "translate-x-1 text-[color:var(--portfolio-accent)]" : "text-[color:var(--portfolio-muted)]"
              }`}
            />
          </Button>
        )
      })}
    </div>
  )
}

export { PortfolioNav }
