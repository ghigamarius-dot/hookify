export type HookCategory = {
  slug: string;
  name: string;
  description: string;
  audience: string;
  hooks: string[];
};

export const hookCategories: HookCategory[] = [
  {
    slug: "luxury-cars",
    name: "Luxury Cars",
    description: "Viral hooks for luxury cars, supercars, dealerships and premium auto content.",
    audience: "car creators, luxury dealers and automotive influencers",
    hooks: [
      "Nobody talks about this luxury car secret...",
      "This feature makes every other car feel outdated.",
      "I found the one thing buyers always miss before buying a supercar.",
      "This is why rich people choose this car over everything else.",
      "The sound of this car explains the price.",
      "Before you buy a luxury car, watch this.",
      "This car looks expensive, but the real flex is hidden inside.",
      "I thought this was overpriced until I drove it.",
      "This detail is why car people respect this model.",
      "Most people see the badge. I see the engineering.",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Hooks for real estate agents, property tours, investment videos and listings.",
    audience: "real estate agents, property investors and brokers",
    hooks: [
      "This house looks normal until you see the inside.",
      "Most buyers miss this red flag during a viewing.",
      "Here’s what €500,000 actually buys you in this area.",
      "This is the room that sells the entire property.",
      "Before buying a home, check this one thing.",
      "This apartment has one feature everyone is searching for.",
      "The location is good, but this detail makes it valuable.",
      "This is why investors are looking at this neighborhood.",
      "You won’t believe what’s hidden behind this door.",
      "This property looks simple, but the numbers are crazy.",
    ],
  },
  {
    slug: "fitness",
    name: "Fitness",
    description: "Hooks for gym content, transformation videos, personal trainers and fitness creators.",
    audience: "fitness creators, gyms and personal trainers",
    hooks: [
      "Stop doing this if you want real results.",
      "This exercise changed my entire physique.",
      "Most beginners make this mistake in the gym.",
      "You don’t need more motivation. You need this.",
      "This is why your workouts are not working.",
      "Try this for 30 days and watch what happens.",
      "The truth about losing fat nobody wants to hear.",
      "This simple habit beats most workout plans.",
      "If I started again, I would do this first.",
      "Your diet is not the problem. This is.",
    ],
  },
  {
    slug: "business",
    name: "Business",
    description: "Hooks for entrepreneurs, startup founders, sales content and business education.",
    audience: "entrepreneurs, founders and business creators",
    hooks: [
      "This mistake cost me more than money.",
      "Most businesses fail because they ignore this.",
      "I wish someone told me this before starting.",
      "This is how small businesses lose profit every day.",
      "The fastest way to look unprofessional is this.",
      "This one decision changed my business.",
      "Stop chasing clients. Fix this first.",
      "The difference between busy and profitable is here.",
      "This is why your competitors are growing faster.",
      "If your business feels stuck, check this.",
    ],
  },
  {
    slug: "tiktok-shop",
    name: "TikTok Shop",
    description: "Hooks for TikTok Shop sellers, product videos, UGC ads and ecommerce content.",
    audience: "TikTok Shop sellers, ecommerce brands and UGC creators",
    hooks: [
      "I didn’t expect this product to go viral.",
      "This product solves a problem you didn’t know you had.",
      "TikTok made me try it, but here’s the truth.",
      "This looks simple, but it sells like crazy.",
      "Stop scrolling if you hate wasting money.",
      "This is the product everyone keeps asking about.",
      "I tested it so you don’t have to.",
      "This tiny product fixed a daily problem.",
      "You’ll either love this or buy it immediately.",
      "This is why this product keeps selling out.",
    ],
  },
  {
    slug: "podcasts",
    name: "Podcasts",
    description: "Hooks for podcast clips, interviews, storytelling and thought leadership.",
    audience: "podcasters, interviewers and personal brands",
    hooks: [
      "What he said next changed the whole conversation.",
      "This is the part of the interview everyone missed.",
      "I asked one question and the room went silent.",
      "This story explains why most people quit too early.",
      "The answer was not what I expected.",
      "This 30-second clip says everything.",
      "He revealed the mistake that almost ruined everything.",
      "This conversation started normal, then got real.",
      "The most valuable lesson came at the end.",
      "This is why I couldn’t cut this part.",
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return hookCategories.find((category) => category.slug === slug);
}

export function getAllHooks() {
  return hookCategories.flatMap((category) =>
    category.hooks.map((hook) => ({
      hook,
      category: category.name,
      slug: category.slug,
    }))
  );
}
