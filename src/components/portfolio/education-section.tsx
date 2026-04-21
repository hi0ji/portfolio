import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { EducationItem } from "./education-item"
import { ResumeFooterLink } from "./resume-footer-link"

type EducationSectionProps = {
  onBack: () => void
}

function EducationSection({ onBack }: EducationSectionProps) {
  const educationEntry = {
    degree: "Bachelor of Science in Computer Science",
    details: [
      "Trained and optimized lightweight convolutional neural networks (CNNs), integrating Gray-Level Co-occurrence Matrix (GLCM) features to enhance texture-based classification performance.",
      "Developed and evaluated a prototype system using validation and testing metrics to assess model accuracy, generalization, and real-world applicability in agricultural quality assessment.",
    ],
    links: [
      { href: "#", label: "View Research Paper" },
      { href: "#", label: "View Mobile App" },
    ],
    location: "Davao City, Philippines",
    school: "University of Southeastern Philippines",
    thesis:
      "A deep learning-based thesis focused on improving copra quality classification by combining lightweight CNN models with texture feature enhancement techniques to achieve more accurate and consistent grading.",
  }

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
          <h2 className="text-[2.3rem] font-black tracking-[-0.09em] text-[color:var(--portfolio-ink)] sm:text-[4.4rem]">
            EDUCATION
          </h2>
          <div className="h-1 w-14 bg-[color:var(--portfolio-accent)]" />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <EducationItem {...educationEntry} />
        </div>
      </div>

      <footer className="flex items-end justify-end border-t border-[color:var(--portfolio-line)]/20 pt-6 text-right">
        <ResumeFooterLink />
      </footer>
    </section>
  )
}

export { EducationSection }
