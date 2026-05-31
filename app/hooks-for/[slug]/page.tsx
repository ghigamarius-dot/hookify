import type { Metadata } from "next";
import { getCategoryBySlug, hookCategories } from "../../data/hooks";
import HookGenerator from "../../components/HookGenerator";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return hookCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Hook Generator - Hookify",
    };
  }

  return {
    title: `${category.name} Hook Generator - Hookify`,
    description: category.description,
  };
}

export default async function HooksForPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-[#05050a] px-4 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-black">Category not found</h1>
          <a href="/" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-black text-black">
            Back to Hookify
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <section className="relative overflow-hidden px-4 py-10 md:px-8 md:py-16">
        <div className="absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <a href="/" className="mb-10 inline-flex text-sm font-bold text-white/60 hover:text-white">
            ← Back to Hookify
          </a>

          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-violet-300">
              Free Hook Generator
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              {category.name} Hook Generator
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Generate viral hooks for {category.audience}. Use these hooks for TikTok,
              Instagram Reels, YouTube Shorts, LinkedIn, X, ads and content ideas.
            </p>
          </div>

          <div className="mt-12">
            <HookGenerator />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-black md:text-4xl">
            Example {category.name} Hooks
          </h2>

          <div className="grid gap-3">
            {category.hooks.map((hook, index) => (
              <div
                key={hook}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-sm font-black text-violet-300">#{index + 1}</p>
                <p className="mt-2 text-lg font-bold">{hook}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">
            How to use these hooks
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Pick a hook", "Choose the hook that creates the strongest curiosity."],
              ["2", "Add your story", "Connect the hook to your video, post, offer or lesson."],
              ["3", "End with CTA", "Tell people to follow, comment, save, buy or learn more."],
            ].map(([step, title, text]) => (
              <div key={step} className="rounded-3xl bg-black/30 p-6">
                <p className="text-3xl font-black text-violet-300">{step}</p>
                <p className="mt-3 font-black">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Hookify. Free {category.name} hook generator.
      </footer>
    </main>
  );
}
