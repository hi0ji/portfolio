function BackgroundGradient() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-white/45 blur-[110px]" />
      <div className="absolute right-[-10rem] top-[7%] h-[30rem] w-[30rem] rounded-full bg-[color:var(--portfolio-glow)] blur-[140px]" />
      <div className="absolute bottom-[-14rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(255,244,239,0.88)] blur-[120px]" />
      <div className="absolute bottom-[16%] left-[12%] h-24 w-24 rounded-full border border-white/40 bg-white/12 blur-2xl" />
    </div>
  )
}

export { BackgroundGradient }
