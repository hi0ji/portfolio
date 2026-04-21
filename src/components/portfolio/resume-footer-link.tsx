const resumeHref = "#"
const githubHref = "https://github.com/hi0ji"

function ResumeFooterLink() {
  return (
    <div className="flex flex-col items-end justify-end gap-4 text-right sm:flex-row sm:flex-wrap sm:items-end sm:gap-6">
      <a
        href={resumeHref}
        className="group inline-flex flex-col items-end gap-1"
        aria-label="View resume"
      >
        <span className="text-[1.25rem] font-black tracking-[-0.08em] text-[color:var(--portfolio-ink)] transition-colors duration-200 group-hover:text-[color:var(--portfolio-accent)] sm:text-2xl">
          View Resume
        </span>
        <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--portfolio-muted)] transition-colors duration-200 group-hover:text-[color:var(--portfolio-accent)]">
          Resume link
        </span>
      </a>

      <a
        href={githubHref}
        className="group inline-flex flex-col items-end gap-1"
        aria-label="View GitHub profile"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-[1.25rem] font-black tracking-[-0.08em] text-[color:var(--portfolio-ink)] transition-colors duration-200 group-hover:text-[color:var(--portfolio-accent)] sm:text-2xl">
          GitHub
        </span>
        <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--portfolio-muted)] transition-colors duration-200 group-hover:text-[color:var(--portfolio-accent)]">
          Profile link
        </span>
      </a>
    </div>
  )
}

export { ResumeFooterLink }
