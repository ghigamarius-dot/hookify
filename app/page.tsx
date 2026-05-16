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
    "Stop posting about {topic} before you know this.",
    "If you create content about {topic}, watch this first.",
  ],
  Reels: [
    "I tried {topic} for 30 days and this happened.",
    "This changed how I see {topic}.",
    "Stop posting {topic} like this.",
    "Why nobody talks about this in {topic}.",
    "You are losing views because of this.",
    "The psychology behind viral {topic} content.",
    "Most people get {topic} completely wrong.",
    "This one idea made {topic} easier.",
  ],
  "YouTube Shorts": [
    "Before you start {topic}, watch this.",
    "The truth about {topic} nobody says.",
    "How creators grow fast with {topic}.",
    "This hook formula explodes retention.",
    "Why your audience skips your {topic} videos.",
    "I wish I knew this earlier about {topic}.",
    "The fastest way to make {topic} content better.",
    "This is why {topic} videos go viral.",
  ],
};

const platforms = ["TikTok", "Reels", "YouTube Shorts"] as const;

const affiliates = [
  {
    name: "Canva",
    text: "Design thumbnails, carousels and creator visuals faster.",
    url: "https://www.canva.com/",
  },
  {
    name: "CapCut",
    text: "Edit short-form videos for TikTok, Reels and Shorts.",
    url: "https://www.capcut.com/",
  },
  {
    name: "Beehiiv",
    text: "Turn your audience into a newsletter and owned traffic.",
    url: "https://www.beehiiv.com/",
  },
];

function formatTopic(value: string) {
  const clean = value.trim();
  return clean.length ? clean : "your niche";
}

export default function HomePage() {
  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #050507; color: white; font-family: Inter, Arial, sans-serif; }
        a { color: inherit; text-decoration: none; }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(105, 105, 255, 0.22), transparent 34%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.10), transparent 28%),
            #050507;
        }

        .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(5,5,7,0.78);
          backdrop-filter: blur(20px);
        }

        .headerInner {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand { display: flex; align-items: center; gap: 12px; }
        .logo {
          width: 42px; height: 42px; border-radius: 16px;
          display: grid; place-items: center;
          background: white; color: black; font-weight: 950;
        }

        .brandName { font-size: 23px; font-weight: 950; letter-spacing: -0.05em; }
        .brandSub { color: rgba(255,255,255,0.42); font-size: 13px; margin-top: 2px; }

        .nav { display: flex; gap: 20px; color: rgba(255,255,255,0.58); font-size: 14px; }
        .nav a:hover { color: white; }

        .hero { padding: 95px 0 50px; }

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

        .adBox {
          margin: 34px 0 0;
          min-height: 96px;
          border: 1px dashed rgba(255,255,255,0.18);
          border-radius: 24px;
          display: grid;
          place-items: center;
          color: rgba(255,255,255,0.38);
          background: rgba(255,255,255,0.035);
          font-size: 14px;
        }

        .generator { margin-top: 44px; }

        .form { display: grid; grid-template-columns: 1fr 190px; gap: 16px; }

        input, select {
          height: 62px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.055);
          color: white;
          padding: 0 18px;
          font-size: 16px;
          outline: none;
        }

        input:focus, select:focus { border-color: rgba(255,255,255,0.36); }

        .generate {
          margin-top: 16px;
          border: 0;
          background: white;
          color: black;
          border-radius: 18px;
          padding: 17px 24px;
          font-weight: 900;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .generate:hover { transform: translateY(-1px); opacity: 0.92; }

        .results {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          padding: 48px 0 60px;
        }

        .card, .affiliateCard {
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

        .hook { font-size: 24px; line-height: 1.35; letter-spacing: -0.03em; margin: 0; }

        .copy, .affiliateBtn {
          margin-top: 24px;
          border: 0;
          background: white;
          color: black;
          border-radius: 14px;
          padding: 12px 16px;
          font-weight: 850;
          cursor: pointer;
          display: inline-flex;
        }

        .copied { margin-top: 14px; color: rgba(255,255,255,0.48); font-size: 13px; }

        .section { padding: 30px 0 80px; }
        .sectionTitle { font-size: clamp(36px, 5vw, 62px); letter-spacing: -0.06em; margin: 0 0 14px; }
        .sectionText { color: rgba(255,255,255,0.55); font-size: 18px; line-height: 1.65; max-width: 760px; }

        .affiliateGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 28px; }
        .affiliateCard h3 { margin: 0; font-size: 26px; letter-spacing: -0.04em; }
        .affiliateCard p { color: rgba(255,255,255,0.55); line-height: 1.6; }

        .footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 34px 0;
          color: rgba(255,255,255,0.42);
          font-size: 14px;
        }

        .footerInner { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        .footerLinks { display: flex; gap: 18px; }

        @media (max-width: 760px) {
          .nav { display: none; }
          .hero { padding: 70px 0 40px; }
          .form { grid-template-columns: 1fr; }
          .results, .affiliateGrid { grid-template-columns: 1fr; }
          .desc { font-size: 18px; }
        }
      `}</style>

      <header className="header">
        <div className="wrap headerInner">
          <a className="brand" href="/">
            <div className="logo">H</div>
            <div>
              <div className="brandName">Hookify</div>
              <div className="brandSub">Creator growth tool</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#generator">Generator</a>
            <a href="#tools">Creator Tools</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="wrap hero">
        <div className="badge">⚡ Free creator growth tool</div>

        <h1 className="title">Generate viral hooks in seconds.</h1>

        <p className="desc">
          Hookify helps TikTok, Reels and YouTube Shorts creators generate
          scroll-stopping hooks, titles and CTAs without paid AI APIs.
        </p>

        <div className="adBox">
          Ad space reserved for Google AdSense after approval
        </div>

        <Generator />
      </section>

      <section className="wrap section" id="tools">
        <h2 className="sectionTitle">Creator tools we recommend.</h2>
        <p className="sectionText">
          These are useful creator tools for design, editing and audience growth.
          Later, these links can be replaced with your affiliate links.
        </p>

        <div className="affiliateGrid">
          {affiliates.map((item) => (
            <article className="affiliateCard" key={item.name}>
              <div className="label">Recommended</div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <a className="affiliateBtn" href={item.url} target="_blank">
                Visit Tool
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footerInner">
          <div>© 2026 Hookify. Built for creators.</div>
          <div className="footerLinks">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Generator() {
  const [topic, setTopic] = useState("one green car");
  const [platform, setPlatform] =
    useState<(typeof platforms)[number]>("TikTok");
  const [copied, setCopied] = useState("");
  const [seed, setSeed] = useState(0);

  const finalTopic = formatTopic(topic);

  const hooks = useMemo(() => {
    const shuffled = [...hooksByCategory[platform]]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    return shuffled.map((hook) => hook.replaceAll("{topic}", finalTopic));
  }, [platform, finalTopic, seed]);

  async function copyHook(text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1300);
  }

  return (
    <div className="generator" id="generator">
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

      <button className="generate" onClick={() => setSeed((prev) => prev + 1)}>
        Generate Hooks
      </button>

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
