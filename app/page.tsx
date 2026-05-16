"use client";

import { useMemo, useState } from "react";

const hooksByCategory = {
  TikTok: [
    "Nobody tells you this about {topic}...",
    "This trend changed everything for {topic}.",
    "POV: you finally understand {topic}.",
    "The biggest mistake people make with {topic}.",
    "This is why your {topic} videos flop.",
    "3 secrets viral creators use for {topic}.",
  ],
  Reels: [
    "I tried {topic} for 30 days and this happened.",
    "This changed how I see {topic}.",
    "Stop posting {topic} like this.",
    "Why nobody talks about this in {topic}.",
    "You are losing views because of this.",
    "The psychology behind viral {topic} content.",
  ],
  "YouTube Shorts": [
    "Before you start {topic}, watch this.",
    "The truth about {topic} nobody says.",
    "How creators grow fast with {topic}.",
    "This hook formula explodes retention.",
    "Why your audience skips your {topic} videos.",
    "I wish I knew this earlier about {topic}.",
  ],
};

const platforms = ["TikTok", "Reels", "YouTube Shorts"] as const;

function formatTopic(value: string) {
  const clean = value.trim();
  return clean.length ? clean : "your niche";
}

export default function HomePage() {
  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #050507;
          color: white;
          font-family: Inter, Arial, sans-serif;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(105, 105, 255, 0.22), transparent 34%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.10), transparent 28%),
            #050507;
        }

        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero {
          padding: 110px 0 70px;
        }

        .badge {
          display: inline-flex;
          border: 1px solid rgba(255,255,255,0.13);
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          padding: 10px 16px;
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          margin-bottom: 30px;
        }

        .title {
          max-width: 980px;
          font-size: clamp(52px, 8vw, 108px);
          line-height: 0.94;
          letter-spacing: -0.085em;
          margin: 0;
          font-weight: 950;
        }

        .desc {
          max-width: 740px;
          margin: 30px 0 0;
          color: rgba(255,255,255,0.58);
          font-size: 21px;
          line-height: 1.65;
        }

        .generator {
          margin-top: 44px;
        }

        .form {
          display: grid;
          grid-template-columns: 1fr 190px;
          gap: 16px;
        }

        input,
        select {
          height: 62px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.055);
          color: white;
          padding: 0 18px;
          font-size: 16px;
          outline: none;
        }

        input:focus,
        select:focus {
          border-color: rgba(255,255,255,0.36);
        }

        .generate {
          margin-top: 16px;
          border: 0;
          background: white;
          color: black;
          border-radius: 18px;
          padding: 17px 24px;
          font-weight: 900;
          cursor: pointer;
        }

        .results {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          padding: 48px 0 100px;
        }

        .card {
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035));
          border-radius: 30px;
          padding: 28px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.35);
        }

        .label {
          display: inline-flex;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 7px 10px;
          color: rgba(255,255,255,0.42);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hook {
          font-size: 24px;
          line-height: 1.35;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .copy {
          margin-top: 24px;
          border: 0;
          background: white;
          color: black;
          border-radius: 14px;
          padding: 12px 16px;
          font-weight: 850;
          cursor: pointer;
        }

        .copied {
          margin-top: 14px;
          color: rgba(255,255,255,0.48);
          font-size: 13px;
        }

        @media (max-width: 760px) {
          .hero { padding: 70px 0 40px; }
          .form { grid-template-columns: 1fr; }
          .results { grid-template-columns: 1fr; }
          .desc { font-size: 18px; }
        }
      `}</style>

      <section className="wrap hero">
        <div className="badge">⚡ Free creator growth tool</div>

        <h1 className="title">Generate viral hooks in seconds.</h1>

        <p className="desc">
          Hookify helps TikTok, Reels and YouTube Shorts creators generate
          scroll-stopping hooks, titles and CTAs without paid AI APIs.
        </p>

        <Generator />
      </section>
    </main>
  );
}

function Generator() {
  const [topic, setTopic] = useState("one green car");
  const [platform, setPlatform] =
    useState<(typeof platforms)[number]>("TikTok");
  const [copied, setCopied] = useState("");

  const finalTopic = formatTopic(topic);

  const hooks = useMemo(() => {
    return hooksByCategory[platform].map((hook) =>
      hook.replaceAll("{topic}", finalTopic)
    );
  }, [platform, finalTopic]);

  async function copyHook(text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1300);
  }

  return (
    <div className="generator">
      <div className="form">
        <input
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          placeholder="What is your content about?"
        />

        <select
          value={platform}
          onChange={(event) =>
            setPlatform(event.target.value as (typeof platforms)[number])
          }
        >
          {platforms.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <button className="generate">Generate Hooks</button>

      <section className="results">
        {hooks.map((hook) => (
          <article className="card" key={hook}>
            <div className="label">{platform} Hook</div>
            <h3 className="hook">{hook}</h3>

            <button className="copy" onClick={() => copyHook(hook)}>
              Copy Hook
            </button>

            {copied === hook ? <div className="copied">Copied!</div> : null}
          </article>
        ))}
      </section>
    </div>
  );
}
