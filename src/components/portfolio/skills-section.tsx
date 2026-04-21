import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ResumeFooterLink } from "./resume-footer-link"

type SkillsSectionProps = {
  onBack: () => void
}

function SkillsSection({ onBack }: SkillsSectionProps) {
  const skillGroups = [
    {
      label: "Backend",
      items: ["NodeJS", "Python", "PHP"],
    },
    {
      label: "Frontend",
      items: ["TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      label: "Frameworks",
      items: ["React", "Next.js", "Express", "Tailwind", "Flask", "FastAPI"],
    },
    {
      label: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      label: "Dev Tools",
      items: ["Docker", "Redis", "Git", "GitHub", "Visual Studio Code"],
    },
    {
      label: "AI/Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Google Colab"],
    },
  ]

  return (
    <section className="flex h-full min-h-0 flex-col justify-between gap-8">
      <div className="flex min-h-0 flex-1 flex-col gap-8">
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
            SKILLS
          </h2>
          <div className="h-1 w-14 bg-[color:var(--portfolio-accent)]" />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <div className="grid gap-3">
            {skillGroups.map((group) => (
              <article key={group.label} className="portfolio-soft-panel rounded-[1.4rem] p-4 sm:p-5">
                <p className="text-[0.7rem] uppercase tracking-[0.32em] text-[color:var(--portfolio-muted)]">
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="portfolio-pill inline-flex rounded-full px-3.5 py-2 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <footer className="flex items-end justify-end border-t border-[color:var(--portfolio-line)]/20 pt-6 text-right">
        <ResumeFooterLink />
      </footer>
    </section>
  )
}

export { SkillsSection }
