import { ProjectCard } from "./project-card"
import { ProjectsHeader } from "./projects-header"
import { ResumeFooterLink } from "./resume-footer-link"

type ProjectsSectionProps = {
  onBack: () => void
}

const projects = [
  {
    accentClassName: "bg-[rgba(254,72,40,0.08)] text-[color:var(--portfolio-accent)]",
    ctaLabel: "View Project",
    description:
      "A mobile application for automated copra quality classification that allows users to capture or upload images and receive instant grading results using a lightweight CNN enhanced with GLCM texture features. The system is designed to function offline, enabling reliable deep learning inference without internet connectivity, and delivers fast predictions through a simple, intuitive interface optimized for accessibility and ease of use in agricultural settings.",
    href: "#",
    index: "01",
    stack: ["Kotlin", "Android Studio"],
    title: "Mangopra",
  },
  {
    accentClassName: "bg-[rgba(42,73,255,0.08)] text-[rgb(42,73,255)]",
    ctaLabel: "View Project",
    description:
      "An AI-powered research platform developed during a NASA hackathon, designed to help scientists navigate vast space biology data. It leverages Gemini generative AI and semantic search to deliver intelligent summaries and surface relevant research, enabling faster discovery of insights and new research directions.",
    href: "https://gard-nasa-hackathon.vercel.app/",
    index: "02",
    stack: ["React", "Flask"],
    title: "Project GARDS",
  },
  {
    accentClassName: "bg-[rgba(56,145,92,0.1)] text-[rgb(56,145,92)]",
    ctaLabel: "View Project",
    description:
      "It is an interactive analytics dashboard that visualizes and predicts outbreaks of climate-sensitive diseases in Philippine cities, empowering stakeholders with actionable insights for proactive public health decisions.",
    href: "https://github.com/hi0ji/MAS-Dashboard",
    index: "03",
    stack: ["HTML", "CSS", "JavaScript", "Flask"],
    title: "NOSOS Alert",
  },
]

function ProjectsSection({ onBack }: ProjectsSectionProps) {
  return (
    <section className="flex h-full min-h-0 flex-col justify-between gap-8">
      <div className="flex min-h-0 flex-1 flex-col gap-8">
        <ProjectsHeader onBack={onBack} />

        <div className="min-h-0 flex-1 space-y-8 overflow-y-auto pr-1">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      <footer className="flex items-end justify-end border-t border-[color:var(--portfolio-line)]/20 pt-6 text-right">
        <ResumeFooterLink />
      </footer>
    </section>
  )
}

export { ProjectsSection }
