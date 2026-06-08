import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack"
import ShinyText from "@/components/ShinyText"
import {
  BriefcaseBusiness,
  ClipboardCheck,
  CodeXml,
  DatabaseSearch,
} from "lucide-react"

const experienceItems = [
  {
    company: "Wilyonaryo - North Cotabato Branch",
    duration: "Dec 2025 - Mar 2026",
    icon: CodeXml,
    index: "01",
    summary:
      "Consolidated commission, withdrawal, and approval monitoring for three user roles into a centralized dashboard, streamlining payout tracking and referral oversight while reducing manual reconciliation time by an estimated 40-60% through automated updates, searchable reports, and improved transaction history visibility.",
    title: "Full-stack Developer",
  },
  {
    company: "University of Southeastern Philippines",
    duration: "Jun 2025 - Aug 2025",
    icon: DatabaseSearch,
    index: "02",
    summary:
      "Developed an automated dashboard to track scores and votes for over 30 research studies, eliminating manual data processing and errors entirely while improving calculation accuracy and increasing efficiency for judges and organizers by up to 90%, enabling faster decision-making and real-time insights.",
    title: "Data Science Intern",
  },
  {
    company: "Freelance Software & Machine Learning Developer",
    duration: "Aug 2024 - Present",
    icon: BriefcaseBusiness,
    index: "03",
    summary:
      "Completed over 7 projects for students and small clients, developing machine learning models, AI solutions, and web applications while reducing client workload by 50-70% through automation and custom data analysis scripts, and consistently managing projects independently with 100% on-time delivery and adherence to client requirements.",
    title: "Freelancer",
  },
  {
    company: "AI Model Training Data Annotation",
    duration: "Project-based",
    icon: ClipboardCheck,
    index: "04",
    summary:
      "Performed large-scale image classification for 10,000+ images by assigning accurate labels based on structured guidelines for AI model training. Maintained 90-99% annotation accuracy by strictly following detailed guidelines and QA standards, and processed 500-1,000 data points per day while meeting tight deadlines without compromising quality.",
    title: "Data Annotation Specialist",
  },
]

function ExperienceScrollStackSection() {
  return (
    <section className="portfolio-stack-section" aria-labelledby="experience-stack-title">
      <h2 id="experience-stack-title" className="sr-only">
        Experience
      </h2>

      <ScrollStack
        className="portfolio-scroll-stack"
        useWindowScroll
        itemDistance={56}
        itemStackDistance={6}
        itemScale={0.01}
        stackPosition="16%"
        scaleEndPosition="7%"
        baseScale={0.97}
        rotationAmount={0}
        blurAmount={0}
      >
        {experienceItems.map((item) => {
          const RoleIcon = item.icon

          return (
            <ScrollStackItem key={item.title} itemClassName="portfolio-stack-card">
              <article className="portfolio-stack-card-content">
                <div className="portfolio-stack-card-main">
                  <div className="portfolio-stack-card-header">
                    <ShinyText
                      text={item.index}
                      className="portfolio-stack-index"
                      color="oklch(0.5 0.18 27)"
                      shineColor="oklch(0.78 0.16 24)"
                      speed={2}
                      spread={105}
                    />
                    <div>
                      <p className="portfolio-stack-duration">{item.duration}</p>
                      <h3>{item.title}</h3>
                      <p className="portfolio-stack-company">{item.company}</p>
                    </div>
                  </div>

                  <p className="portfolio-stack-summary">{item.summary}</p>
                </div>

                <div className="portfolio-stack-icon" aria-hidden="true">
                  <RoleIcon />
                </div>
              </article>
            </ScrollStackItem>
          )
        })}
      </ScrollStack>
    </section>
  )
}

export { ExperienceScrollStackSection }
