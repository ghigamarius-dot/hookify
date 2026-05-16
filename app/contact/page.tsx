export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050507", color: "white", padding: 40, fontFamily: "Arial" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <a href="/" style={{ color: "white" }}>← Back to Hookify</a>
        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em" }}>Contact</h1>
        <p style={{ color: "rgba(255,255,255,.65)", fontSize: 20, lineHeight: 1.7 }}>
          For partnerships, advertising or feedback, contact us at:
        </p>
        <p style={{ fontSize: 22 }}>
          <a href="mailto:ghigamarius@gmail.com" style={{ color: "white" }}>
            ghigamarius@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
