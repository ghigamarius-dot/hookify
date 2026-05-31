import type { Metadata } from "next";
import HookGenerator from "./components/HookGenerator";
import { hookCategories } from "./data/hooks";

export const metadata: Metadata = {
  title: "Hookify - Free AI Hook Generator for Viral Content",
  description:
    "Generate viral hooks for TikTok, Instagram Reels, YouTube Shorts, LinkedIn and more. Free hook generator for creators, businesses and marketers.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <section className="relative overflow-hidden px-4 py-8 md:px-8 md:py-12">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <header className="mb-14 flex items-center justify-between">
            <a href="/" className="text-2xl font-black tracking-tight">
              Hookify
            </a>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-white/60 md:flex">
              <a href="#generator" className="hover:text-white">
                Generator
              </a>
              <a href="#categories" className="hover:text-white">
                Categories
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </nav>

            <a
              href="#generator"
              className="rounded-full bg-white px-5 py-3 text-sm font-black text-black hover:bg-white/90"
            >
              Generate Free
            </a>
          </header>

          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/70">
              TikTok • Reels • Shorts • LinkedIn • X
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Generate Viral Hooks in Seconds
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
              Hookify helps creators, founders and marketers create scroll-stopping hooks for
              short-form videos, social posts, ads and content ideas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#generator"
                className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-8 py-4 text-base font-black text-white shadow-xl shadow-fuchsia-500/20"
              >
                Start Generating
              </a>
              <a
                href="#categories"
                className="rounded-full border border-white/10 px-8 py-4 text-base font-bold text-white/70 hover:bg-white/10 hover:text-white"
              >
                Explore Categories
              </a>
            </div>
          </div>

          <div id="generator" className="mt-14">
            <HookGenerator />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["50,000+", "Hook combinations"],
            ["0€", "No API cost"],
            ["SEO-first", "Built for organic traffic"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-4xl font-black">{title}</p>
              <p className="mt-2 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-violet-300">
              Categories
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Viral hooks for every niche
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Start with high-intent SEO pages and expand into hundreds of niches.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {hookCategories.map((category) => (
              <a
                key={category.slug}
                href={`/hooks-for/${category.slug}`}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <p className="text-2xl font-black">{category.name}</p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {category.description}
                </p>
                <p className="mt-6 text-sm font-black text-violet-300 group-hover:text-white">
                  View hooks →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-300">
                Why Hookify
              </p>
              <h2 className="text-4xl font-black md:text-5xl">
                Better hooks. More retention. More views.
              </h2>
            </div>

            <div className="space-y-4 text-white/65">
              <p>
                The first 3 seconds decide if someone watches or scrolls. Hookify gives creators a
                faster way to test strong openings before filming.
              </p>
              <p>
                Use it for TikTok, Instagram Reels, YouTube Shorts, LinkedIn, X, ads, UGC scripts
                and content calendars.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-14 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-4xl font-black md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-4">
            {[
              [
                "Is Hookify free?",
                "Yes. This version works with local templates, so there is no API cost.",
              ],
              [
                "Can I use these hooks for TikTok and Reels?",
                "Yes. The hooks are designed for short-form video platforms like TikTok, Reels and Shorts.",
              ],
              [
                "Is this real AI?",
                "This first version uses a smart template engine. Later it can be upgraded with AI API generation.",
              ],
              [
                "Can Hookify rank on Google?",
                "Yes. The project is built around SEO category pages like hooks for real estate, luxury cars, fitness and more.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-black">{q}</p>
                <p className="mt-2 text-white/60">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black md:text-6xl">
            Ready to create better hooks?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
            Start with one topic. Generate hooks. Pick the strongest one. Create faster.
          </p>
          <a
            href="#generator"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-base font-black text-black hover:bg-white/90"
          >
            Generate Hooks Now
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Hookify. Free viral hook generator.
      </footer>
    </main>
  );
}
