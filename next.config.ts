import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as-is instead of routing them through the Next.js image
    // optimizer (/_next/image). The Vercel image-optimization quota is shared
    // account-wide and, once exhausted for the month, every optimized request
    // fails and images render broken. Serving unoptimized keeps them working.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "cdn.tixfox.co" },
      { protocol: "https", hostname: "api.tixfox.co" },
    ],
  },
};

export default nextConfig;
