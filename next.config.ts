import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // English and Serbian each have their own root layout, so unmatched URLs
  // need a standalone 404 page (src/app/global-not-found.tsx).
  experimental: {
    globalNotFound: true,
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
