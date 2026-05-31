"use client";

import { useMemo, useState } from "react";
import { getAllHooks, hookCategories } from "../data/hooks";

type Style = "viral" | "curiosity" | "authority" | "storytelling" | "sales";

const styles: { value: Style; label: string }[] = [
  { value: "viral", label: "Viral" },
  { value: "curiosity", label: "Curiosity" },
  { value: "authority", label: "Authority" },
  { value: "storytelling", label: "Storytelling" },
  { value: "sales", label: "Sales" },
];

function buildHook(topic: string, baseHook: string, style: Style) {
  const cleanTopic = topic.trim() || "your topic";

  const prefixes: Record<Style, string[]> = {
    viral: [
      "Nobody talks about",
      "This is why everyone is watching",
      "You need to see this before choosing",
    ],
    curiosity: [
      "The hidden truth about",
      "Most people miss this detail about",
      "I didn’t expect this from",
    ],
    authority: [
      "After studying this, here is what I learned about",
      "Experts know this about",
      "The smart way to understand",
    ],
    storytelling: [
      "I tried",
      "I almost ignored",
      "This started as a normal day with",
    ],
    sales: [
      "Before you buy",
      "This is why customers choose",
      "Stop wasting money before understanding",
    ],
  };

  const selected = prefixes[style][Math.floor(Math.random() * prefixes[style].length)];

  return `${selected} ${cleanTopic}: ${baseHook.charAt(0).toLowerCase()}${baseHook.slice(1)}`;
}

export default function HookGenerator() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState<Style>("viral");
  const [results, setResults] = useState<string[]>([]);

  const allHooks = useMemo(() => getAllHooks(), []);

  function generateHooks() {
    const shuffled = [...allHooks].sort(() => Math.random() - 0.5);
    const next = shuffled.slice(0, 10).map((item) => buildHook(topic, item.hook, style));
    setResults(next);
  }

  function copyHook(hook: string) {
    navigator.clipboard.writeText(hook);
  }

  return (
    <section className="mx-auto w-full max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur md:p-6">
      <div className="grid gap-4 md:grid-cols-[1.4fr_0.6fr_auto]">
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter your topic... e.g. luxury cars, real estate, fitness, TikTok Shop"
          className="min-h-[120px] resize-none rounded-3xl border border-white/10 bg-black/40 p-5 text-base text-white outline-none placeholder:text-white/40 focus:border-violet-400"
        />

        <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
          <p className="mb-3 text-sm font-semibold text-white/70">Hook style</p>
          <div className="grid gap-2">
            {styles.map((item) => (
              <button
                key={item.value}
                onClick={() => setStyle(item.value)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  style === item.value
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generateHooks}
          className="rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 px-7 py-5 text-base font-black text-white shadow-xl shadow-fuchsia-500/20 transition hover:scale-[1.02] md:min-w-[170px]"
        >
          Generate Hooks
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {hookCategories.map((category) => (
          <a
            key={category.slug}
            href={`/hooks-for/${category.slug}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            {category.name}
          </a>
        ))}
      </div>

      {results.length > 0 && (
        <div className="mt-8 grid gap-3">
          {results.map((hook, index) => (
            <div
              key={`${hook}-${index}`}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/35 p-5 md:flex-row md:items-center md:justify-between"
            >
              <p className="text-base font-semibold text-white">{hook}</p>
              <button
                onClick={() => copyHook(hook)}
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/70 hover:bg-white hover:text-black"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
