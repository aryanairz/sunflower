import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/lib/services";
import { team } from "@/lib/team";

// Fixed build-time date keeps the sitemap static (no request-time API).
const lastModified = "2026-06-21";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const teamRoutes: MetadataRoute.Sitemap = team.map((m) => ({
    url: `${SITE_URL}/team/${m.id}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes];
}
