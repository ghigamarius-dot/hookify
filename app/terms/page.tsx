export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050507", color: "white", padding: 40, fontFamily: "Arial" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <a href="/" style={{ color: "white" }}>← Back to Hookify</a>
        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em" }}>Terms of Use</h1>

        <p style={{ color: "rgba(255,255,255,.65)", fontSize: 18, lineHeight: 1.7 }}>
          By using Hookify, you agree to use the website for lawful purposes only.
        </p>

        <h2>Content generation</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          Hookify provides content ideas, hooks and templates for inspiration. Users are responsible
          for reviewing and adapting any generated text before publishing it.
        </p>

        <h2>No guarantee</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          Hookify does not guarantee views, followers, revenue or social media performance.
        </p>

        <h2>Affiliate disclosure</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          Some links may be affiliate links. We may earn a commission if you purchase through them.
        </p>

        <h2>Contact</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          Contact: ghigamarius@gmail.com
        </p>
      </div>
    </main>
  );
}
