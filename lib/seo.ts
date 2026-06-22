// Centralized SEO / structured-data config. NAP (name, address, phone) here is
// the single source of truth for JSON-LD and must match what's shown on-page.

import type { Metadata } from "next";
import type { Service } from "@/lib/services";
import type { Shot } from "@/lib/shots";

export const SITE_URL = "https://serenidripivhydration.com";
export const SITE_NAME = "SereniDrip IV Hydration";
export const OG_IMAGE = "/Images/SerenidripOD.png";

export const BUSINESS = {
  name: SITE_NAME,
  streetAddress: "2001 W Trenton Rd, Spc 101 Unit 22",
  addressLocality: "Edinburg",
  addressRegion: "TX",
  postalCode: "78539",
  addressCountry: "US",
  telephone: "(956) 655-0055",
  priceRange: "$$",
  areaServed: ["Edinburg, TX", "Rio Grande Valley"],
} as const;

/**
 * Build a page's Metadata: title, description, canonical, and complete
 * Open Graph + Twitter card. Because Next merges metadata shallowly (a child
 * `openGraph` overwrites the parent's), every page emits its own full block.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  image = OG_IMAGE,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url,
      title,
      description,
      images: [
        { url: image, width: 1200, height: 630, alt: `${SITE_NAME} in Edinburg, TX` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// Mon–Sat 9:00–18:00, by appointment.
const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "09:00",
  closes: "18:00",
} as const;

/** LocalBusiness schema for the homepage. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: [OPENING_HOURS],
  };
}

/** Service schema for a single drip's detail page. */
export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.cardDesc,
    url: `${SITE_URL}/services/${service.slug}`,
    image: `${SITE_URL}${service.detailImage ?? service.image}`,
    serviceType: "IV hydration therapy",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

/** Service schema for a single SereniShot's detail page. */
export function shotJsonLd(shot: Shot) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${shot.name} Booster Shot`,
    description: shot.description,
    url: `${SITE_URL}/shots/${shot.slug}`,
    ...(shot.detailImage || shot.image
      ? { image: `${SITE_URL}${shot.detailImage ?? shot.image}` }
      : {}),
    serviceType: "Vitamin and wellness booster injection",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

// Plain-language FAQ. No em dashes in any of this copy.
export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "What is IV hydration therapy?",
    answer:
      "IV hydration therapy delivers fluids, vitamins, and minerals directly into your bloodstream through a small IV. Because it bypasses digestion, your body absorbs nearly all of the nutrients right away, so you feel rehydrated and replenished faster than with drinking water alone.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are at 2001 W Trenton Rd, Spc 101 Unit 22, Edinburg, TX 78539, near the Cinemark Bistro.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Yes. SereniDrip is by appointment, Monday through Saturday. Booking ahead lets us prepare your drip and keep your visit calm and unhurried.",
  },
  {
    question: "How much do IV drips cost?",
    answer:
      "Our IV drips start at $149 per session. Pricing varies by the blend you choose, and the full menu is listed on our services page.",
  },
  {
    question: "Who administers the treatments?",
    answer:
      "Every treatment is administered by licensed nurses. Each visit begins with a brief medical intake so your drip is a good fit for you.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Edinburg, TX and the surrounding Rio Grande Valley area, including nearby McAllen, Pharr, Mission, and Weslaco.",
  },
];

/** FAQPage schema wrapping the FAQ. */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
