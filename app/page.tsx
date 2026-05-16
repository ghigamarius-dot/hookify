"use client";

const hooks = [
  "Nobody tells you this about {topic}...",
  "I tried {topic} for 30 days and this happened.",
  "The biggest mistake creators make with {topic}.",
  "Stop posting about {topic} before you watch this.",
  "This changed everything about {topic}.",
  "3 hook formulas that instantly increase retention for {topic}.",
];

export default function HomePage() {
  return (
    <main className="page">
      <style>{`
        body { margin: 0; background: #050507; color: white; font-family: Arial, sans-serif; }
        .page { min-height: 100vh; padding: 40px; background: radial-gradient(circle at top left, #1b1b3a, transparent 35%), #050507; }
        .wrap { max-width: 1100px; margin: 0 auto; }
        .hero { padding: 80px 0; }
        .badge { display:inline-block; padding:10px 16px; border:1px solid rgba(255,255,255,.15); border-radius:999px; color:#aaa; }
        h1 { font-size: clamp(52px, 8vw, 96px); line-height:.95; letter-spacing:-.07em; margin:28px 0; }
        p { color:#aaa; font-size:20px; line-height:1.6; max-width:720px; }
        .box { margin-top:38px; display:grid; gap:14px; grid-template-columns:1fr 180px; }
        input, select { height:58px; border-radius:16px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.06); color:white; padding:0 18px; font-size:16px; }
        button { cursor:pointer; border:0; border-radius:16px; padding:16px 20px; font-weight:800; }
        .btn { background:white; color:black; margin-top:14px; }
        .grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; padding-bottom:80px; }
        .card { border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.05); border-radius:26px; padding:26px; }
        .label { color:#777; text-transform:uppercase; font-size:12px; letter-spacing:.16em; margin-bottom:14px; }
        .hook { font-size:22px; color:white; }
        @media(max-width:760px){ .page{padding:22px;} .box,.grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="wrap">
        <section className="hero">
          <div className="badge">⚡ Free creator growth tool</div>

          <h1>Generate viral hooks in seconds.</h1>

          <p>
            Hookify helps TikTok, Reels and YouTube Shorts creators generate
            scroll-stopping hooks without paid AI APIs.
          </p>

          <Generator />
        </section>
      </div>
    </main>
  );
}

function Generator() {
  const topic = "your niche";

  return (
    <>
      <div className="box">
        <input placeholder="What is your content about?" />
        <select defaultValue="TikTok">
          <option>TikTok</option>
          <option>Reels</option>
          <option>YouTube Shorts</option>
        </select>
      </div>

      <button className="btn">Generate Hooks</button>

      <section className="grid" style={{ marginTop: 40 }}>
        {hooks.map((hook) => (
          <div className="card" key={hook}>
            <div className="label">Viral Hook</div>
            <div className="hook">{hook.replaceAll("{topic}", topic)}</div>
            <button
              className="btn"
              onClick={() =>
                navigator.clipboard.writeText(
                  hook.replaceAll("{topic}", topic)
                )
              }
            >
              Copy Hook
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
