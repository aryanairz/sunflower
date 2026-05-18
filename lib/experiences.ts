export type Experience = {
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
  "For Two",
  "Massage",
  "Skincare",
  "Waxing",
  "Salon",
] as const;

export type FilterLabel = (typeof FILTER_LABELS)[number];

export function filterByLabel(label: FilterLabel): Experience[] {
  if (label === "See all") return experiences;
  const tag = label.toUpperCase();
  return experiences.filter((e) => e.tags.includes(tag));
}

export const experiences: Experience[] = [
  {
    slug: "relaxing-package",
    title: "Relaxing Package",
    category: "MASSAGE",
    tags: ["MASSAGE", "FAVORITES"],
    cardDesc:
      "Full-body Swedish or deep tissue work with hot towel finish, organic oils, complimentary shower, and free cupping for new clients.",
    priceMain: "$80",
    priceSub: "PER SESSION  ·  60 MIN",
    image: "/Images/Massageonback.jpg",
    detailImage: "/Images/Massagesideview.jpg",
    headline: "An hour of slow, focused work.",
    paragraphs: [
      "The Relaxing Package is our signature offering — one full hour of attentive massage tailored to what your body asks for that day. Choose Swedish for relaxation, deep tissue for recovery, or a blend of both.",
      "Every session includes a complimentary hot towel finish, organic oils, and access to our private shower. New clients receive a free cupping session on their first visit.",
    ],
    inclusions: [
      "Full-body massage (Swedish or deep tissue)",
      "Hot towel finish",
      "Organic oils",
      "Complimentary shower",
      "Free cupping (first visit)",
    ],
    duration: "60 minutes",
  },
  {
    slug: "cupping-therapy",
    title: "Cupping Therapy",
    category: "WELLNESS",
    tags: ["MASSAGE", "FAVORITES"],
    cardDesc:
      "Traditional cupping for tension relief, improved circulation, and reduced inflammation. Performed by certified therapists.",
    priceMain: "From $40",
    priceSub: "PER SESSION  ·  30–45 MIN",
    image: "/Images/cuppingtherapycloseup.png",
    headline: "Heat, pressure, release.",
    paragraphs: [
      "Cupping is an ancient practice that uses suction to draw stagnant blood to the surface, releasing fascia and improving circulation. It looks dramatic and feels even better — most clients describe the after-effect as deeply restorative.",
      "Performed by certified therapists in candlelit treatment rooms. Free for new clients on their first visit when combined with a Relaxing Package.",
    ],
    inclusions: [
      "Traditional cupping technique",
      "Targeted muscle group focus",
      "Heated room",
      "Post-session hydration",
      "Aftercare guidance",
    ],
    duration: "30–45 minutes",
  },
  {
    slug: "hot-stone-massage",
    title: "Hot Stone Massage",
    category: "MASSAGE",
    tags: ["MASSAGE", "FAVORITES"],
    cardDesc:
      "Heated basalt stones placed along the spine and shoulders for a deeper, slower release than traditional massage.",
    priceMain: "$110",
    priceSub: "PER SESSION  ·  75 MIN",
    image: "/Images/Hotstonesonback.jpg",
    detailImage: "/Images/RocksonBack.jpg",
    headline: "A deeper, slower kind of release.",
    paragraphs: [
      "Heated basalt stones are placed along the spine, shoulders, and back of the legs. The heat penetrates deeper than hands alone, releasing chronic tension and quieting an overstimulated nervous system.",
      "Best for clients with persistent muscle pain, stress-related tension, or anyone who finds traditional massage too intense. 75 minutes from start to finish.",
    ],
    inclusions: [
      "75-minute session",
      "Heated basalt stones",
      "Aromatherapy oils",
      "Hot towel finish",
      "Complimentary shower",
    ],
    duration: "75 minutes",
  },
  {
    slug: "couples-massage",
    title: "Couples Massage",
    category: "FOR TWO",
    tags: ["FOR TWO", "MASSAGE"],
    cardDesc:
      "Side-by-side sessions in our private couples room. Choose Swedish or deep tissue for each partner independently.",
    priceMain: "$160",
    priceSub: "PER COUPLE  ·  60 MIN",
    image: "/Images/Couplestherapy.jpg",
    headline: "Side by side, fully yours.",
    paragraphs: [
      "Our private couples room is designed for two — two tables, two therapists, two simultaneous sessions. Each partner chooses their own treatment style (Swedish or deep tissue) and pressure preference.",
      "Perfect for anniversaries, birthdays, or just a Saturday morning together. Champagne and chocolate available by request.",
    ],
    inclusions: [
      "Private couples treatment room",
      "Two therapists",
      "Choice of Swedish or deep tissue per partner",
      "Hot towel finish",
      "Optional champagne and chocolate",
    ],
    duration: "60 minutes",
  },
  {
    slug: "micro-needling",
    title: "Micro-needling",
    category: "SKINCARE",
    tags: ["SKINCARE"],
    cardDesc:
      "Collagen induction therapy to refine texture, soften fine lines, and brighten tone. Includes a calming post-treatment serum.",
    priceMain: "Inquire",
    priceSub: "PER SESSION  ·  60–75 MIN",
    image: "/Images/Microneedlingonface.jpg",
    headline: "Collagen, from within.",
    paragraphs: [
      "Micro-needling creates microscopic channels in the skin that trigger collagen production. Over a series of sessions, the skin becomes firmer, smoother, and more even in tone. Visible results begin around the third week.",
      "Performed by licensed estheticians in a sterile treatment room. Includes a calming post-treatment serum and detailed aftercare instructions.",
    ],
    inclusions: [
      "Skin assessment",
      "Topical numbing cream",
      "Micro-needling treatment",
      "Post-treatment serum",
      "Aftercare instructions",
    ],
    duration: "60–75 minutes",
  },
  {
    slug: "body-waxing",
    title: "Body & Brazilian Waxing",
    category: "SKINCARE",
    tags: ["SKINCARE", "WAXING"],
    cardDesc:
      "Professional waxing in a clean, private treatment room. Sensitive-skin formulas available on request.",
    priceMain: "Inquire",
    priceSub: "BY AREA  ·  15–45 MIN",
    image: "/Images/Wax.jpg",
    headline: "Clean, careful, private.",
    paragraphs: [
      "Professional waxing in a private treatment room with sensitive-skin formulas available on request. Quick, clean, and as comfortable as waxing gets.",
      "Walk-ins welcome for small areas. For full body or Brazilian sessions, an appointment is encouraged.",
    ],
    inclusions: [
      "Sensitive-skin wax available",
      "Private treatment room",
      "Post-wax soothing oil",
      "Sterile single-use applicators",
    ],
    duration: "15–45 minutes",
  },
  {
    slug: "eyelash-extensions",
    title: "Eyelash Extensions",
    category: "SKINCARE",
    tags: ["SKINCARE"],
    cardDesc:
      "Classic, hybrid, or volume sets applied with care for natural-looking length and fullness.",
    priceMain: "Inquire",
    priceSub: "PER SET  ·  90–120 MIN",
    image: "/Images/Eyebrow.jpg",
    headline: "Lashes that look like yours, but more.",
    paragraphs: [
      "Choose classic for one-to-one application, hybrid for added volume, or full volume for a dramatic finish. Each set is applied lash by lash, lasting four to six weeks with proper care.",
      "Fills available every two to three weeks to maintain the look.",
    ],
    inclusions: [
      "Style consultation",
      "Choice of classic, hybrid, or volume",
      "Lash mapping",
      "Aftercare guide",
    ],
    duration: "90–120 minutes",
  },
  {
    slug: "hair-and-nails",
    title: "Hair & Nails",
    category: "SALON",
    tags: ["SALON"],
    cardDesc:
      "Full salon services including cuts, styling, and acrylic nails. Walk-in friendly, appointments preferred for color.",
    priceMain: "Inquire",
    priceSub: "BY SERVICE  ·  30–180 MIN",
    image: "/Images/hairsalon.jpg",
    headline: "The full salon, on the same visit.",
    paragraphs: [
      "Cuts, styling, color, acrylic nails, gel, and dip powder — all under the same roof as your massage. Walk-ins friendly for cuts and basic nails. For color services, please book ahead.",
      "Most clients pair a salon service with a massage and make a full afternoon of it.",
    ],
    inclusions: [
      "Cuts and styling",
      "Color services (appointment)",
      "Acrylic nails",
      "Gel and dip powder",
      "Pedicures",
    ],
    duration: "30–180 minutes",
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getRelatedExperiences(slug: string, count = 3): Experience[] {
  return experiences.filter((e) => e.slug !== slug).slice(0, count);
}
