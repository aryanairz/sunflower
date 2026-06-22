// SereniShots: booster shot add-ons (single injections). Added on to a visit,
// not booked separately. Same data pattern as lib/services.ts; each shot has
// its own detail page at /shots/[slug].

export type Shot = {
  slug: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  image?: string; // card image
  detailImage?: string; // detail-page hero background
  imageClassName?: string; // optional per-image framing tweak on the card
  benefits?: string[]; // optional "Benefits may include" list on the detail page
};

export const shots: Shot[] = [
  {
    slug: "vitamin-c",
    name: "Vitamin C",
    price: "$19",
    tagline: "Immune and antioxidant support",
    description:
      "Give your body an extra dose of support with our Vitamin C Booster Shot. Vitamin C is a powerful antioxidant that helps support a healthy immune system, promotes collagen production, and protects cells from oxidative stress. A quick and convenient way to support overall wellness, especially during times of increased stress, travel, or seasonal challenges.",
    image: "/Images/citrus.png",
    detailImage: "/Images/citrus2.png",
    benefits: [
      "Supports immune health",
      "Promotes healthy skin and collagen production",
      "Provides antioxidant protection",
      "Helps support recovery and overall wellness",
      "Quick and convenient treatment",
    ],
  },
  {
    slug: "vita-complex",
    name: "Vita Complex (B Vitamins)",
    price: "$19",
    tagline: "Energy and metabolism support",
    description:
      "Recharge your body with our B-Complex Booster Shot, a blend of essential B vitamins that help support energy production, metabolism, and overall well-being. B vitamins play a key role in converting food into energy and supporting normal nervous system function, making this a great option for those with busy lifestyles or looking for an extra wellness boost.",
    image: "/Images/almond.png",
    detailImage: "/Images/almond2.png",
    benefits: [
      "Supports natural energy production",
      "Helps maintain healthy metabolism",
      "Supports nervous system function",
      "Promotes overall wellness and vitality",
      "Quick and convenient treatment",
    ],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    price: "$29",
    tagline: "Antioxidant, detox, and radiant skin",
    description:
      "Support your body's natural wellness with our Glutathione Booster Shot. Often referred to as the body's master antioxidant, glutathione helps protect cells from oxidative stress and supports the body's natural detoxification processes. A popular choice for those looking to support overall health, recovery, and healthy-looking skin.",
    image: "/Images/glutathione1.png",
    detailImage: "/Images/glutathione2.png",
    // Zoom in slightly and nudge down to match the other cards' framing.
    imageClassName: "scale-[1.12] translate-y-[4%] group-hover:scale-[1.15]",
    benefits: [
      "Powerful antioxidant support",
      "Helps protect cells from oxidative stress",
      "Supports the body's natural detoxification processes",
      "Promotes overall wellness and recovery",
      "Supports healthy, radiant-looking skin",
      "Quick and convenient treatment",
    ],
  },
  {
    slug: "vitamin-b12",
    name: "Vitamin B12",
    price: "$19",
    tagline: "Energy and mental clarity",
    description:
      "Give your body a quick pick-me-up with our Vitamin B12 Booster Shot. Vitamin B12 is an essential nutrient that plays an important role in energy production, nervous system health, and red blood cell formation. A popular choice for those looking to support their energy levels, mental focus, and overall wellness.",
    image: "/Images/beet.png",
    detailImage: "/Images/beet2.png",
    benefits: [
      "Supports natural energy production",
      "Helps maintain healthy nervous system function",
      "Supports mental focus and clarity",
      "Aids in red blood cell formation",
      "Promotes overall wellness and vitality",
      "Quick and convenient treatment",
    ],
  },
  {
    slug: "vitamin-d3",
    name: "Vitamin D3",
    price: "$29",
    tagline: "Immune, bone, and mood support",
    description:
      "Support your overall wellness with our Vitamin D3 Booster Shot. Vitamin D3 plays an essential role in maintaining healthy bones, supporting immune function, and promoting overall well-being. Many people have low vitamin D levels, especially with limited sun exposure, making this a convenient way to help maintain healthy levels year-round.",
    image: "/Images/mango.png",
    detailImage: "/Images/mango2.png",
    benefits: [
      "Supports immune system function",
      "Helps maintain strong bones and teeth",
      "Supports muscle function and overall vitality",
      "May help support mood and general wellness",
      "Convenient way to help maintain healthy vitamin D levels",
    ],
  },
  {
    slug: "zinc",
    name: "Zinc",
    price: "$15 (5mg) / $20 (10mg)",
    tagline: "Immune and skin health",
    description:
      "Support your body's natural defenses with our Zinc Booster Shot. Zinc is an essential trace mineral that plays a key role in immune function, wound healing, and overall cellular health. A simple yet powerful way to help keep your body supported, especially during times of seasonal stress or increased demand on the immune system.",
    image: "/Images/oyster.png",
    detailImage: "/Images/oyster2.png",
    benefits: [
      "Supports healthy immune system function",
      "Promotes skin health and wound healing",
      "Plays a role in cellular repair and growth",
      "Supports overall wellness and recovery",
      "Quick and convenient treatment",
    ],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    price: "$49",
    tagline: "Cellular energy and healthy aging",
    description:
      "Support your body at the cellular level with our NAD+ Booster Shot. NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell of the body and plays an essential role in energy production and cellular function. As natural NAD+ levels may decline with age and lifestyle stressors, this is a popular option for those looking to support energy, focus, mental clarity, and long-term wellness from within.",
    image: "/Images/dragonfruit.png",
    detailImage: "/Images/dragonfruit2.png",
    benefits: [
      "Supports cellular energy production",
      "Promotes mental clarity and cognitive support",
      "Helps support healthy aging and overall vitality",
      "Supports metabolism and cellular repair processes",
      "Quick and convenient treatment option",
    ],
  },
  {
    slug: "zofran",
    name: "Zofran (Ondansetron)",
    price: "$19",
    tagline: "Fast-acting nausea relief",
    description:
      "Our Zofran (ondansetron) injection helps support relief from nausea and vomiting when appropriate and administered under provider evaluation. A fast-acting option commonly used for nausea related to illness, dehydration, travel, or migraines. This treatment is provided by licensed medical professionals following appropriate assessment to ensure safety and suitability for each individual.",
    image: "/Images/ginger.png",
    detailImage: "/Images/ginger2.png",
    benefits: [
      "Supports relief from nausea and vomiting",
      "May help improve comfort and hydration tolerance",
      "Fast-acting option when clinically appropriate",
      "Useful during travel, illness recovery, or post-wellness treatments",
      "Administered under medical supervision",
    ],
  },
];

export function getShot(slug: string): Shot | undefined {
  return shots.find((s) => s.slug === slug);
}

export function getRelatedShots(slug: string, count = 3): Shot[] {
  return shots.filter((s) => s.slug !== slug).slice(0, count);
}
