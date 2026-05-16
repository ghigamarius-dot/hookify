export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              Hookify
            </h1>

            <p className="text-sm text-white/50">
              Viral hooks for creators
            </p>
          </div>

          <button className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
            Start Free
          </button>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            ⚡ AI-style viral hooks generator
          </div>

          <h2 className="max-w-4xl text-6xl font-black leading-tight tracking-tight">
            Generate viral hooks for TikTok, Reels and YouTube in seconds.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            Free creator growth tool for hooks, titles, CTAs and content ideas.
            Built for creators who want more views, retention and engagement.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-7 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]">
              Generate Hooks
            </button>

            <button className="rounded-2xl border border-white/15 px-7 py-4 text-lg font-semibold transition hover:bg-white hover:text-black">
              Explore Categories
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        {[
          "TikTok Hooks",
          "Instagram Reels",
          "YouTube Shorts",
          "Luxury Content",
          "Fitness Creators",
          "Business Content",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-white/40">
              Category
            </div>

            <h3 className="text-2xl font-bold">{item}</h3>

            <p className="mt-4 text-white/50">
              Generate high-retention viral hooks optimized for modern social
              media algorithms.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
