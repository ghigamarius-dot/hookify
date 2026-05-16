"use client";

import { useMemo, useState } from "react";
import { Copy, Sparkles, Zap } from "lucide-react";

const categories = [
  "Fitness",
  "Luxury",
  "Business",
  "Podcasts",
  "Real Estate",
  "Motivation",
  "Cars",
];

const hookTemplates = [
  "Nobody tells you this about {topic}...",
  "I tried {topic} for 30 days and this happened.",
  "The biggest mistake people make with {topic}.",
  "Stop doing this if you care about {topic}.",
  "This changed how I think about {topic}.",
  "Before you try {topic}, watch this.",
  "3 things I wish I knew before starting {topic}.",
  "The truth about {topic} that nobody says online.",
  "Most people fail at {topic} because of this.",
  "This simple {topic} trick can save you years.",
];

const ideaTemplates = [
  "3 beginner mistakes about {topic}",
  "A day in the life using {topic}",
  "Before vs after: {topic}",
  "What nobody understands about {topic}",
  "The fastest way to improve at {topic}",
];

const ctaTemplates = [
  "Save this before you forget.",
  "Share this with someone who needs it.",
  "Comment your biggest question below.",
  "Follow for more creator growth ideas.",
  "Try this today and come back tomorrow.",
];

function cleanTopic(value: string) {
  const next = value.trim();
  return next.length ? next : "your niche";
}

function fill(template: string, topic: string) {
  return template.replaceAll("{topic}", topic);
}

export default function HomePage() {
  const [topic, setTopic] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TikTok");

  const finalTopic = cleanTopic(topic);

  const results = useMemo(() => {
    return {
      hooks: hookTemplates.map((item) => fill(item, finalTopic)),
      ideas: ideaTemplates.map((item) => fill(item, finalTopic)),
      ctas: ctaTemplates,
    };
  }, [finalTopic]);

  async function copyText(text: string) {
    await navigator.clipboard.writeText(text);
  }

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black">
            <Sparkles size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">Hookify</span>
        </div>

        <nav className="hidden gap-6 text-sm text-white/60 md:flex">
          <a href="#generator">Generator</a>
          <a href="#categories">Categories</a>
          <a href="#footer">Contact</a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Zap size={16} />
            Free creator growth tool
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Generate Viral Hooks In Seconds
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
            Hooks, video ideas and CTAs for TikTok, Reels and YouTube creators.
            No AI API. No login. Free to use.
          </p>
        </div>

        <div
          id="generator"
          className="mx-auto mt-12 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40 md:p-6"
        >
          <div className="grid gap-3 md:grid-cols-[1fr_180px]">
            <input
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="What is your content about?"
              className="h-16 rounded-2xl border border-white/10 bg-black/40 px-5 text-white outline-none placeholder:text-white/35 focus:border-white/30"
            />

            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="h-16 rounded-2xl border border-white/10 bg-black/40 px-5 text-white outline-none"
            >
              <option>TikTok</option>
              <option>Reels</option>
              <option>YouTube Shorts</option>
              <option>Ads</option>
            </select>
          </div>

          <div className="mt-4 rounded-2xl bg-white px-5 py-4 text-center font-bold text-black">
            Generated for {selectedCategory}: {finalTopic}
          </div>
        </div>

        <div
          id="categories"
          className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setTopic(category.toLowerCase())}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 transition hover:bg-white hover:text-black"
            >
              {category}
            </button>
          ))}
        </div>

        <section className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3">
          <ResultColumn
            title="Viral Hooks"
            items={results.hooks}
            onCopy={copyText}
          />
          <ResultColumn
            title="Video Ideas"
            items={results.ideas}
            onCopy={copyText}
          />
          <ResultColumn title="CTAs" items={results.ctas} onCopy={copyText} />
        </section>

        <section className="mx-auto mt-20 max-w-5xl rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 text-center md:p-14">
          <h2 className="text-3xl font-black md:text-5xl">
            Start creating better content today.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Hookify helps creators beat blank-page syndrome with instant hooks,
            ideas and calls to action.
          </p>
        </section>
      </section>

      <footer
        id="footer"
        className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50"
      >
        <div className="flex justify-center gap-6">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="mt-4">© 2026 Hookify. Built for creators.</p>
      </footer>
    </main>
  );
}

function ResultColumn({
  title,
  items,
  onCopy,
}: {
  title: string;
  items: string[];
  onCopy: (text: string) => void;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
      <h2 className="mb-5 text-2xl font-black">{title}</h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="group rounded-2xl border border-white/10 bg-black/30 p-4"
          >
            <p className="text-sm leading-6 text-white/80">{item}</p>

            <button
              onClick={() => onCopy(item)}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs text-white/70 transition hover:bg-white hover:text-black"
            >
              <Copy size={14} />
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
