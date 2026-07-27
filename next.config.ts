import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slabstat-production.s3.amazonaws.com",
        pathname: "/Listings/**",
      },
      // Legacy retailer CDN images (kept for any remaining references)
      {
        protocol: "https",
        hostname: "d1i787aglh9bmb.cloudfront.net",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
