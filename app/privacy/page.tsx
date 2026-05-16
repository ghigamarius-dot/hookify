export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050507", color: "white", padding: 40, fontFamily: "Arial" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <a href="/" style={{ color: "white" }}>← Back to Hookify</a>
        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em" }}>Privacy Policy</h1>

        <p style={{ color: "rgba(255,255,255,.65)", fontSize: 18, lineHeight: 1.7 }}>
          Hookify is a free creator tool. We do not require users to create an account to use
          the basic generator.
        </p>

        <h2>Information we may collect</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          We may collect basic analytics data such as page views, device type, browser type and
          general usage information to improve the website.
        </p>

        <h2>Advertising and affiliate links</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          Hookify may display advertising and may include affiliate links. If you click an
          affiliate link and make a purchase, we may earn a commission at no extra cost to you.
        </p>

        <h2>Cookies</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          Advertising partners may use cookies or similar technologies to personalize or measure ads,
          depending on your location and consent settings.
        </p>

        <h2>Contact</h2>
        <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>
          For privacy questions, contact: ghigamarius@gmail.com
        </p>
      </div>
    </main>
  );
}
