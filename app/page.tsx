const hooks = [
  "Nobody tells you this about your niche...",
  "I tried this for 30 days and this happened.",
  "The biggest mistake creators make.",
  "Stop posting before you watch this.",
  "This changed everything for my content.",
  "3 hook formulas that instantly increase retention.",
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
            radial-gradient(circle at top left, rgba(120, 119, 255, 0.24), transparent 34%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 30%),
            #050507;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(20px);
          background: rgba(5, 5, 7, 0.76);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header-inner {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 42px;
          height: 42px;
          border-radius: 16px;
          background: white;
          color: black;
          display: grid;
          place-items: center;
          font-weight: 900;
        }

        .brand-title {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .brand-sub {
          color: rgba(255,255,255,0.45);
          font-size: 13px;
          margin-top: 2px;
        }

        .nav {
          display: flex;
          gap: 22px;
          color: rgba(255,255,255,0.58);
          font-size: 14px;
        }

        .hero {
          padding: 112px 0 74px;
        }

        .badge {
          display: inline-flex;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          padding: 10px 15px;
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          margin-bottom: 26px;
        }

        .title {
          max-width: 900px;
          font-size: clamp(48px, 8vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.08em;
          margin: 0;
          font-weight: 950;
        }

        .desc {
          max-width: 690px;
          margin: 28px 0 0;
          color: rgba(255,255,255,0.62);
          font-size: 21px;
          line-height: 1.65;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 38px;
        }

        .primary, .secondary {
          border: 0;
          border-radius: 18px;
          padding: 16px 24px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .primary {
          background: white;
          color: black;
        }

        .secondary {
          background: rgba(255,255,255,0.06);
          color: white;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding-bottom: 54px;
        }

        .chip {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.045);
          color: rgba(255,255,255,0.72);
          border-radius: 999px;
          padding: 12px 16px;
          font-weight: 700;
        }

        .section-head {
          margin-bottom: 28px;
        }

        .section-title {
          font-size: 44px;
          letter-spacing: -0.05em;
          margin: 0;
        }

        .section-desc {
          color: rgba(255,255,255,0.5);
          font-size: 18px;
          margin-top: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          padding-bottom: 110px;
        }

        .card {
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
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

        @media (max-width: 760px) {
          .nav { display: none; }
          .hero { padding: 72px 0 48px; }
          .grid { grid-template-columns: 1fr; }
          .desc { font-size: 18px; }
        }
      `}</style>

      <header className="header">
        <div className="wrap header-inner">
          <div className="brand">
            <div className="logo">H</div>
            <div>
              <div className="brand-title">Hookify</div>
              <div className="brand-sub">Viral hooks for creators</div>
            </div>
          </div>

          <nav className="nav">
            <span>Generator</span>
            <span>Categories</span>
            <span>Contact</span>
          </nav>
        </div>
      </header>

      <section className="wrap hero">
        <div className="badge">⚡ Free creator growth tool</div>

        <h1 className="title">
          Generate viral hooks in seconds.
        </h1>

        <p className="desc">
          Hookify helps TikTok, Reels and YouTube Shorts creators generate
          scroll-stopping hooks, titles and CTAs without paid AI APIs.
        </p>

        <div className="actions">
          <button className="primary">Generate Hooks</button>
          <button className="secondary">Explore Categories</button>
        </div>
      </section>

      <section className="wrap categories">
        {categories.map((category) => (
          <button className="chip" key={category}>
            {category}
          </button>
        ))}
      </section>

      <section className="wrap">
        <div className="section-head">
          <h2 className="section-title">Viral Hooks</h2>
          <p className="section-desc">
            High-retention hooks built for modern short-form algorithms.
          </p>
        </div>

        <div className="grid">
          {hooks.map((hook) => (
            <article className="card" key={hook}>
              <div className="label">Viral Hook</div>
              <h3 className="hook">{hook}</h3>
              <button className="copy">Copy Hook</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
