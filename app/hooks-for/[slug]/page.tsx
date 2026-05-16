type Props = {
  params: {
    slug: string;
  };
};

function formatSlug(slug: string) {
  return slug
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const hooks = [
  "Nobody tells you this about {topic}...",
  "This changed everything for {topic}.",
  "The biggest mistake people make with {topic}.",
  "Why your {topic} content gets ignored.",
  "3 viral hook ideas for {topic}.",
  "Stop creating {topic} content like this.",
];

export async function generateMetadata({ params }: Props) {
  const topic = formatSlug(params.slug);

  return {
    title: `${topic} Hooks Generator | Hookify`,
    description: `Generate viral hooks for ${topic} content with Hookify.`,
  };
}

export default function HooksForPage({ params }: Props) {
  const topic = formatSlug(params.slug);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050507",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <a href="/" style={{ color: "white" }}>
          ← Back to Hookify
        </a>

        <div style={{ marginTop: 40 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.05)",
              color: "rgba(255,255,255,.7)",
            }}
          >
            SEO Landing Page
          </div>

          <h1
            style={{
              fontSize: "clamp(52px, 8vw, 92px)",
              lineHeight: 0.95,
              letterSpacing: "-0.08em",
              margin: "26px 0",
            }}
          >
            {topic} Hooks
          </h1>

          <p
            style={{
              maxWidth: 720,
              color: "rgba(255,255,255,.6)",
              fontSize: 20,
              lineHeight: 1.7,
            }}
          >
            Generate high-retention viral hooks for {topic} creators,
            businesses and content marketers.
          </p>
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 18,
            marginTop: 50,
          }}
        >
          {hooks.map((hook) => (
            <article
              key={hook}
              style={{
                border: "1px solid rgba(255,255,255,.1)",
                background: "rgba(255,255,255,.04)",
                borderRadius: 28,
                padding: 28,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "rgba(255,255,255,.45)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: ".18em",
                  marginBottom: 18,
                }}
              >
                Viral Hook
              </div>

              <h2
                style={{
                  fontSize: 28,
                  lineHeight: 1.3,
                  letterSpacing: "-0.04em",
                  margin: 0,
                }}
              >
                {hook.replaceAll("{topic}", topic)}
              </h2>

              <button
                style={{
                  marginTop: 22,
                  border: 0,
                  background: "white",
                  color: "black",
                  borderRadius: 14,
                  padding: "12px 16px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Copy Hook
              </button>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
