import type { NextConfig } from "next";

// Old service slug -> new brand slug. Old URLs 301 to the new ones.
const SERVICE_SLUG_REDIRECTS: Record<string, string> = {
  "myers-cocktail": "serenivital",
  "quench-iv": "serenihydrate",
  "reboot-iv": "serenirevive",
  "nad-therapy": "sereniyouth",
  "snow-bright-iv": "sereniglow",
  "get-up-and-go-iv": "sereniboost",
  "immunity-iv": "serenishield",
};

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    // statusCode: 301 emits a literal 301 (Next's `permanent: true` would be a
    // 308). Both are permanent and preserve SEO; 301 is the conventional choice
    // for these GET page redirects.
    return Object.entries(SERVICE_SLUG_REDIRECTS).map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
