import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.blowoutcards.com",
        pathname: "/media/catalog/product/**",
      },
      {
        protocol: "https",
        hostname: "d1i787aglh9bmb.cloudfront.net",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
        pathname: "/s-a0ebd/images/**",
      },
      {
        protocol: "https",
        hostname: "upperdeckstore.com",
        pathname: "/media/catalog/product/**",
      },
      {
        protocol: "https",
        hostname: "bleeckertrading.com",
        pathname: "/cdn/shop/**",
      },
    ],
  },
};

export default nextConfig;
