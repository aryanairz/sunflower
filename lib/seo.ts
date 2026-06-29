// Centralized SEO / structured-data config. NAP (name, address, phone) here is
// the single source of truth for JSON-LD and must match what's shown on-page.

import type { Metadata } from "next";
import { SOCIAL } from "@/lib/site";

export const SITE_URL = "https://sunflowerranchedinburg.com";
export const SITE_NAME = "Sunflower Ranch";
export const OG_IMAGE = "/Images/pool.jpg";

export const DEFAULT_TITLE =
  "Sunflower Ranch | Outdoor Event Venue in Edinburg, TX & the RGV";

export const DEFAULT_DESCRIPTION =
  "Sunflower Ranch is a family-owned outdoor event venue in Edinburg, Texas, serving the Rio Grande Valley (RGV). With a pool, shaded palapa, and spacious grounds, it's perfect for quinceañeras, gender reveals, birthdays, graduations, and private parties. Call (956) 331-4450 to book.";

export const BUSINESS = {
  name: SITE_NAME,
  streetAddress: "901 S Sunflower Rd",
  addressLocality: "Edinburg",
  addressRegion: "TX",
  postalCode: "78542",
  addressCountry: "US",
  telephone: "(956) 331-4450",
  email: "sunflowerranch901@gmail.com",
  priceRange: "$$",
  areaServed: ["Edinburg, TX", "McAllen, TX", "Rio Grande Valley (RGV)"],
  // Confirmed public profiles.
  sameAs: [SOCIAL.tiktok, SOCIAL.facebook, SOCIAL.instagram],
} as const;

// Reusable Open Graph image descriptor (golden-hour pool photo).
const OG_IMAGES = [
  {
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    alt: "The pool at golden hour at Sunflower Ranch in Edinburg, TX",
  },
];

/**
 * Root (default) metadata applied site-wide via app/layout.tsx. Establishes the
 * title template, default title/description, default Open Graph + Twitter card,
 * indexing directives, and canonical base. Child pages override per-field.
 */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
    description: DEFAULT_DESCRIPTION,
    applicationName: SITE_NAME,
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: SITE_URL,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE],
    },
  };
}

/**
 * Build a page's Metadata: title, description, canonical, and complete
 * Open Graph + Twitter card. Because Next merges metadata shallowly (a child
 * `openGraph` overwrites the parent's), every page emits its own full block.
 *
 * Pass `absoluteTitle` when the title already contains the brand name, to skip
 * the "%s | Sunflower Ranch" template and avoid a doubled brand.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  image = OG_IMAGE,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  // OG/Twitter titles can't use the document template, so brand them here.
  const socialTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url,
      title: socialTitle,
      description,
      images: [
        { url: image, width: 1200, height: 630, alt: `${SITE_NAME} in Edinburg, TX` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

/** LocalBusiness + EventVenue schema for the homepage and contact page. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventVenue"],
    "@id": `${SITE_URL}/#venue`,
    name: BUSINESS.name,
    description:
      "A family-owned outdoor event venue in Edinburg, TX serving the Rio Grande Valley (RGV). A spacious setting with a pool and shaded palapa for quinceañeras, gender reveals, birthdays, graduations, and private parties.",
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
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
    sameAs: BUSINESS.sameAs,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Shaded Palapa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Grounds", value: true },
    ],
  };
}
