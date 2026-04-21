import luffyPortrait from "@/assets/luffy.jpg"

function ProfilePanel() {
  return (
    <section className="flex h-full flex-col justify-between gap-7 sm:gap-10">
      <div className="space-y-7 sm:space-y-10">
        <header className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-[color:var(--portfolio-accent)] opacity-90">
            Analyze. Build. Code.
          </p>
          <div className="space-y-1">
            <h1 className="text-[2.5rem] font-black tracking-[-0.08em] text-[color:var(--portfolio-ink)] sm:text-5xl">
              PJ ALLEN
            </h1>
            <p className="max-w-sm text-sm leading-6 text-[color:var(--portfolio-ink-soft)]">
              Full-stack developer and data scientist building thoughtful digital products, intelligent systems, and clean end-to-end experiences.
            </p>
          </div>
        </header>

        <div className="group relative mx-auto w-full max-w-[18rem] sm:mx-0 sm:max-w-[20rem]">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/80 via-transparent to-[rgba(215,106,75,0.18)] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="portfolio-soft-panel relative overflow-hidden rounded-[2.4rem] p-2">
            <img
              src={luffyPortrait}
              alt="Portrait illustration used for PJ Allen profile card"
              className="portfolio-touch-color aspect-square w-full rounded-[2rem] object-cover shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)] saturate-[0.9] contrast-110 grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.48em] text-[color:var(--portfolio-muted)]">
          2504251009
        </p>
        <div className="h-px w-16 bg-[color:var(--portfolio-line)]" />
      </div>
    </section>
  )
}

export { ProfilePanel }
