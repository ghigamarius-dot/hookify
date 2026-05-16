export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050507", color: "white", padding: 40, fontFamily: "Arial" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <a href="/" style={{ color: "white" }}>← Back to Hookify</a>
        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em" }}>About Hookify</h1>
        <p style={{ color: "rgba(255,255,255,.65)", fontSize: 20, lineHeight: 1.7 }}>
          Hookify is a free creator growth tool built to help creators generate better hooks,
          video ideas and calls to action for TikTok, Instagram Reels and YouTube Shorts.
        </p>
        <p style={{ color: "rgba(255,255,255,.65)", fontSize: 20, lineHeight: 1.7 }}>
          The first version works without paid AI APIs, using smart templates and creator-focused
          formulas to help users beat blank-page syndrome.
        </p>
      </div>
    </main>
  );
}
