import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "cdn.tixfox.co" },
      { protocol: "https", hostname: "api.tixfox.co" },
    ],
    formats: ['image/avif', 'image/webp'],
    // Next.js 16 restricts image optimization to qualities listed here
    // (default is [75]). List every `quality` prop used across the site,
    // otherwise the optimizer rejects the request with a 400.
    qualities: [60, 70, 75, 85, 90],
    minimumCacheTTL: 3600,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },
};

export default nextConfig;
