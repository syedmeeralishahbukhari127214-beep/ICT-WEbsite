import type { NextConfig } from "next";

// JSON file ko import karein
const redirectsList = require("./redirects.json");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return redirectsList;
  },
  // TypeScript errors ko ignore karne ka sahi tareeka
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;