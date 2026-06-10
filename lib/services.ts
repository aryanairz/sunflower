export type Service = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  cardDesc: string;
  priceMain: string;
  priceSub: string;
  image: string;
  detailImage?: string;
  headline: string;
  paragraphs: [string, string];
  inclusions: string[];
  duration: string;
};

export const FILTER_LABELS = [
  "See all",
  "Favorites",
  "Hydration",
  "Wellness",
  "Immunity",
  "Recovery",
  "Beauty",
  "Shots",
] as const;

export type FilterLabel = (typeof FILTER_LABELS)[number];

export function filterByLabel(label: FilterLabel): Service[] {
  if (label === "See all") return services;
  const tag = label.toUpperCase();
  return services.filter((s) => s.tags.includes(tag));
}

export const services: Service[] = [
  {
    slug: "myers-cocktail",
    title: "Myers' Cocktail",
    category: "WELLNESS",
    tags: ["WELLNESS", "FAVORITES"],
    cardDesc:
      "A classic blend designed to support immune health, energy, and stress recovery. Administered by licensed professionals.",
    priceMain: "$100",
    priceSub: "PER SESSION  ·  45 MIN",
    image: "/Images/Myers.png",
    detailImage: "/Images/myers2.png",
    headline: "The original wellness blend.",
    paragraphs: [
      "First formulated by Dr. John Myers in the 1960s, the Myers' Cocktail combines magnesium, B-Complex, and Vitamin C — a blend that has supported immune health, energy, and stress recovery for decades.",
      "A 45-minute session that pairs well with travel recovery, midweek burnout, or simply needing a reset. Administered by our licensed team after a brief medical intake.",
    ],
    inclusions: [
      "Magnesium",
      "B-Complex",
      "Vitamin C",
      "Brief medical intake",
      "45-minute session",
    ],
    duration: "45 minutes",
  },
  {
    slug: "basic-drip",
    title: "Basic Drip",
    category: "HYDRATION",
    tags: ["HYDRATION", "FAVORITES"],
    cardDesc:
      "Supports hydration, energy, and overall wellness with fluids and essential electrolytes.",
    priceMain: "$100",
    priceSub: "PER SESSION  ·  45 MIN",
    image: "/Images/basicdrip.png",
    detailImage: "/Images/basic2.png",
    headline: "Hydration, restored.",
    paragraphs: [
      "Our Basic Drip delivers IV fluids and essential electrolytes directly to your bloodstream — fast, complete hydration that bypasses the slow path of drinking water.",
      "Ideal after travel, training, illness, or a long week. A clean baseline of hydration in 45 minutes.",
    ],
    inclusions: [
      "IV fluids",
      "Essential electrolytes",
      "Brief medical intake",
      "Licensed administration",
      "45-minute session",
    ],
    duration: "45 minutes",
  },
  {
    slug: "immunity-drip",
    title: "Immunity Drip",
    category: "IMMUNITY",
    tags: ["IMMUNITY"],
    cardDesc:
      "Supports immune wellness and recovery with a blend of Vitamin C, Zinc, and B-Complex.",
    priceMain: "$175",
    priceSub: "PER SESSION  ·  45 MIN",
    image: "/Images/immunity.png",
    detailImage: "/Images/immunity2.png",
    headline: "A defense against the everyday.",
    paragraphs: [
      "The Immunity Drip blends Vitamin C, Zinc, and B-Complex to support your body's immune wellness — especially helpful in seasons of stress, travel, or general fatigue.",
      "Delivered intravenously for full absorption in a single 45-minute session, after a brief medical intake.",
    ],
    inclusions: [
      "Vitamin C",
      "Zinc",
      "B-Complex",
      "Brief medical intake",
      "45-minute session",
    ],
    duration: "45 minutes",
  },
  {
    slug: "recovery-drip",
    title: "Recovery Drip",
    category: "RECOVERY",
    tags: ["RECOVERY"],
    cardDesc:
      "Supports muscle recovery and hydration with magnesium, fluids, and amino support.",
    priceMain: "$200",
    priceSub: "PER SESSION  ·  45 MIN",
    image: "/Images/recovery.png",
    headline: "After the work, the repair.",
    paragraphs: [
      "Magnesium, fluids, and amino support work together to ease muscle soreness, restore hydration, and accelerate recovery after training, racing, or a long day on your feet.",
      "A 45-minute session designed to put your body back into rhythm.",
    ],
    inclusions: [
      "Magnesium",
      "Fluids",
      "Amino support",
      "Brief medical intake",
      "45-minute session",
    ],
    duration: "45 minutes",
  },
  {
    slug: "beauty-drip",
    title: "Beauty Drip",
    category: "BEAUTY",
    tags: ["BEAUTY"],
    cardDesc:
      "Designed to support skin, hair, and nail health from within with glutathione, biotin, and Vitamin C.",
    priceMain: "$200",
    priceSub: "PER SESSION  ·  45 MIN",
    image: "/Images/beauty.png",
    headline: "Beauty from within.",
    paragraphs: [
      "The Beauty Drip combines glutathione, biotin, and Vitamin C — nutrients associated with skin clarity, hair strength, and nail health.",
      "A 45-minute session that supports the body's natural appearance, from the inside out.",
    ],
    inclusions: [
      "Glutathione",
      "Biotin",
      "Vitamin C",
      "Brief medical intake",
      "45-minute session",
    ],
    duration: "45 minutes",
  },
  {
    slug: "wellness-shots",
    title: "Wellness Shots",
    category: "SHOTS",
    tags: ["SHOTS"],
    cardDesc:
      "Quick vitamin boosts for an immediate lift. Ask our team about current options.",
    priceMain: "Price varies",
    priceSub: "PER SHOT  ·  15 MIN",
    image: "/Images/hydrate.png",
    headline: "A quick lift.",
    paragraphs: [
      "Wellness Shots deliver concentrated vitamins like B12 in a 15-minute visit — the shortest path to a noticeable lift.",
      "Ask our team about the current shot menu and which option fits how you're feeling that day.",
    ],
    inclusions: [
      "B12",
      "Other rotating vitamin boosts",
      "Brief consult",
      "Licensed administration",
      "15-minute session",
    ],
    duration: "15 minutes",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
