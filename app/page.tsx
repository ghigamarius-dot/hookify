const hooks = [
  "Nobody tells you this about your niche...",
  "I tried this for 30 days and this happened.",
  "The biggest mistake creators make.",
  "Stop posting before you watch this.",
  "This changed everything for my content.",
  "3 hook formulas that instantly increase retention.",
  "Why your videos are dying after 2 seconds.",
  "The psychology behind viral videos.",
];

const categories = [
  "TikTok",
  "Instagram Reels",
  "YouTube Shorts",
  "Luxury",
  "Business",
  "Fitness",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-black tracking-tight">
              Hookify
            </h1>

            <p className="text-sm text-white/40">
              Viral hooks for creators
            </p>
          </div>

          <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]">
            Start Free
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              ⚡ AI-style hook generator
            </div>

            <h2 className="text-6xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Generate viral hooks in seconds.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/55">
              Free creator growth tool for TikTok, Instagram Reels and
              YouTube Shorts. Generate hooks, titles and CTAs optimized
              for retention and engagement.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-7 py-4 text-lg font-bold text-black transition hover:scale-[1.03]">
                Generate Hooks
              </button>

              <button className="rounded-2xl border border-white/10 px-7 py-4 text-lg font-bold transition hover:bg-white hover:text-black">
                Explore Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium transition hover:border-white/30 hover:bg-white/10"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-10">
          <h3 className="text-4xl font-black">
            Viral Hooks
          </h3>

          <p className="mt-3 text-white/50">
            High-retention hooks optimized for modern algorithms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hooks.map((hook) => (
            <div
              key={hook}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-6 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/40">
                Viral Hook
              </div>

              <h4 className="text-2xl font-bold leading-relaxed">
                {hook}
              </h4>

              <button className="mt-8 rounded-2xl bg-white px-5 py-3 font-semibold text-black opacity-90 transition hover:opacity-100">
                Copy Hook
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
