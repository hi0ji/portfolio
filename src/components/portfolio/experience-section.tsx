import { ExperienceHeader } from "./experience-header"
import { ExperienceItem } from "./experience-item"
import { ResumeFooterLink } from "./resume-footer-link"

type ExperienceSectionProps = {
  onBack: () => void
}

function ExperienceSection({ onBack }: ExperienceSectionProps) {
  const experienceItems = [
    {
      company: "Wilyonaryo - North Cotabato Branch",
      duration: "Dec 2025 - Mar 2026",
      summary: (
        <>
          Consolidated commission, withdrawal, and approval monitoring for three
          user roles into a <strong>centralized dashboard</strong>, streamlining
          payout tracking and referral oversight while reducing manual
          reconciliation time by an estimated <strong>40-60%</strong> through
          automated updates, searchable reports, and improved transaction history
          visibility.
        </>
      ),
      title: "Full-stack Developer",
    },
    {
      company: "University of Southeastern Philippines",
      duration: "Jun 2025 - Aug 2025",
      summary: (
        <>
          Developed an automated dashboard to track scores and votes for{" "}
          <strong>over 30</strong> research studies, eliminating manual data
          processing and errors entirely while improving calculation accuracy
          and increasing efficiency for judges and organizers by up to{" "}
          <strong>90%</strong>, enabling faster decision-making and real-time
          insights.
        </>
      ),
      title: "Data Science Intern",
    },
    {
      company: "Freelance Software & Machine Learning Developer",
      duration: "Aug 2024 - Present (depends on the project)",
      summary: (
        <>
          Completed <strong>over 7</strong> projects for students and small
          clients, developing machine learning models, AI solutions, and web
          applications while reducing client workload by{" "}
          <strong>50-70%</strong> through automation and custom data analysis
          scripts, and consistently managing projects independently with{" "}
          <strong>100%</strong> on-time delivery and adherence to client
          requirements.
        </>
      ),
      title: "Freelancer",
    },
  ]

  return (
    <section className="flex h-full min-h-0 flex-col justify-between gap-8">
      <div className="flex min-h-0 flex-1 flex-col gap-8">
        <ExperienceHeader onBack={onBack} />

        <div className="min-h-0 flex-1 space-y-8 overflow-y-auto pr-1">
          {experienceItems.map((item) => (
            <ExperienceItem key={`${item.title}-${item.company}`} {...item} />
          ))}
        </div>
      </div>

      <footer className="flex items-end justify-end border-t border-[color:var(--portfolio-line)]/20 pt-6 text-right">
        <ResumeFooterLink />
      </footer>
    </section>
  )
}

export { ExperienceSection }
