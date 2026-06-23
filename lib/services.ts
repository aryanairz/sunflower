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
};

export const FILTER_LABELS = [
  "See all",
  "Favorites",
  "Hydration",
  "Wellness",
  "Immunity",
  "Recovery",
  "Beauty",
  "Energy",
] as const;

export type FilterLabel = (typeof FILTER_LABELS)[number];

export function filterByLabel(label: FilterLabel): Service[] {
  if (label === "See all") return services;
  const tag = label.toUpperCase();
  return services.filter((s) => s.tags.includes(tag));
}

export const services: Service[] = [
  {
    slug: "serenivital",
    title: "SereniVital",
    category: "WELLNESS",
    tags: ["WELLNESS", "FAVORITES"],
    cardDesc:
      "A classic blend designed to support immune health, energy, and stress recovery.",
    priceMain: "$169",
    priceSub: "PER SESSION",
    image: "/Images/Myers.png",
    detailImage: "/Images/myers2.png",
    headline: "The classic your body knows",
    paragraphs: [
      "A time-tested blend of B vitamins, Vitamin C, magnesium, and calcium delivered straight to your bloodstream to support immune health, energy, and stress recovery.",
      "A go-to for anyone feeling run down, depleted, or in need of a reliable reset.",
    ],
    inclusions: [
      "Supports immune health",
      "Supports energy",
      "Helps with stress recovery",
      "Replenishes essential nutrients",
    ],
  },
  {
    slug: "sereniflow",
    title: "SereniFlow",
    category: "HYDRATION",
    tags: ["HYDRATION", "FAVORITES"],
    cardDesc:
      "Our foundational hydration drip to replenish fluids, support energy, and help you feel refreshed.",
    priceMain: "$75",
    priceSub: "PER SESSION",
    image: "/Images/raspberry.png",
    detailImage: "/Images/raspberry2.png",
    headline: "Everyday hydration, restored",
    paragraphs: [
      "Our foundational hydration drip is designed to replenish fluids, support energy, and help you feel refreshed from the inside out. A balanced blend for everyday wellness.",
      "Perfect for recovery from travel or exercise, or simply staying hydrated and feeling your best.",
    ],
    inclusions: [
      "Replenishes fluids and hydration",
      "Supports energy",
      "Helps you feel refreshed",
      "Ideal for recovery after travel or exercise",
    ],
  },
  {
    slug: "serenihydrate",
    title: "SereniHydrate",
    category: "HYDRATION",
    tags: ["HYDRATION"],
    cardDesc:
      "Combines fluids, Vitamin C, B vitamins, and minerals to support hydration, energy, and overall wellness.",
    priceMain: "$149",
    priceSub: "PER SESSION",
    image: "/Images/basicdrip.png",
    detailImage: "/Images/basic2.png",
    headline: "Hydration that goes deeper",
    paragraphs: [
      "Fluids, Vitamin C, B vitamins, and essential minerals work together to rehydrate and replenish from the inside out, bypassing the slow path of drinking water.",
      "Ideal after travel, training, illness, or a long week.",
    ],
    inclusions: [
      "Rapid hydration support",
      "Replenishes vitamins and minerals",
      "Supports energy",
      "Helps recovery after travel or exercise",
    ],
  },
  {
    slug: "serenirevive",
    title: "SereniRevive",
    category: "RECOVERY",
    tags: ["RECOVERY"],
    cardDesc:
      "A recovery blend with hydration, B vitamins, minerals, and anti-nausea support to help you feel refreshed and reset.",
    priceMain: "$149",
    priceSub: "PER SESSION",
    image: "/Images/recovery.png",
    detailImage: "/Images/recovery2.png",
    headline: "Back to feeling like yourself",
    paragraphs: [
      "Built for the days you need to bounce back. Hydration, B vitamins, and minerals combine with anti-nausea support to ease discomfort and help you feel like yourself again.",
      "A reliable reset after travel, dehydration, or overindulgence.",
    ],
    inclusions: [
      "Rehydration support",
      "Helps ease nausea and discomfort",
      "Supports energy",
      "Promotes overall recovery",
    ],
  },
  {
    slug: "sereniyouth",
    title: "SereniYouth",
    category: "WELLNESS",
    tags: ["WELLNESS"],
    cardDesc:
      "A cellular wellness therapy supporting energy production, mental clarity, and healthy aging.",
    priceMain: "$250",
    priceSub: "STARTING PRICE",
    image: "/Images/nadplus.png",
    detailImage: "/Images/nadplus2.png",
    headline: "Energy at the cellular level",
    paragraphs: [
      "NAD+ is a coenzyme found in every cell of your body, central to energy production and cellular function.",
      "This therapy supports mental clarity, healthy aging, and recovery from physical and mental fatigue. A premium option for those focused on long-term vitality.",
    ],
    inclusions: [
      "Supports cellular energy",
      "Mental clarity and focus support",
      "Healthy aging support",
      "Supports recovery from fatigue",
    ],
  },
  {
    slug: "sereniglow",
    title: "SereniGlow",
    category: "BEAUTY",
    tags: ["BEAUTY"],
    cardDesc:
      "A beauty blend with Vitamin C, Glutathione, and Alpha Lipoic Acid to support radiant skin and antioxidant defense.",
    priceMain: "$149",
    priceSub: "PER SESSION",
    image: "/Images/beauty.png",
    detailImage: "/Images/beauty2.png",
    headline: "Glow from within",
    paragraphs: [
      "An advanced beauty blend of Vitamin C, Glutathione, and Alpha Lipoic Acid to support radiant skin, antioxidant defense, and your body's natural detox pathways.",
      "For a healthy, luminous complexion that starts beneath the surface.",
    ],
    inclusions: [
      "Antioxidant support",
      "Supports radiant, healthy skin",
      "Supports detox pathways",
      "Helps combat oxidative stress",
    ],
  },
  {
    slug: "sereniboost",
    title: "SereniBoost",
    category: "ENERGY",
    tags: ["ENERGY"],
    cardDesc:
      "High-potency Vitamin C and amino acids to support energy, muscle recovery, and mental clarity.",
    priceMain: "$149",
    priceSub: "PER SESSION",
    image: "/Images/getup.png",
    detailImage: "/Images/getup2.png",
    headline: "Fuel to get moving",
    paragraphs: [
      "A potent blend of high-potency Vitamin C and essential amino acids to support energy production, muscle recovery, and mental clarity.",
      "For when you need to shake off fatigue and get moving.",
    ],
    inclusions: [
      "Supports energy and alertness",
      "Helps with muscle recovery",
      "Antioxidant support",
      "Supports mental clarity and focus",
    ],
  },
  {
    slug: "serenishield",
    title: "SereniShield",
    category: "IMMUNITY",
    tags: ["IMMUNITY"],
    cardDesc:
      "High-dose Vitamin C and Zinc for antioxidant support and immune system nourishment.",
    priceMain: "$149",
    priceSub: "PER SESSION",
    image: "/Images/immunity.png",
    detailImage: "/Images/immunity2.png",
    headline: "Support your natural defenses",
    paragraphs: [
      "High-dose Vitamin C and Zinc deliver powerful antioxidant support and immune system nourishment to help your body stay resilient.",
      "A smart choice during high-stress stretches, travel, or seasonal changes.",
    ],
    inclusions: [
      "Immune system support",
      "Antioxidant protection",
      "Helps combat oxidative stress",
      "Supports recovery and resilience",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
