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
    // Ab mapping ki zaroorat nahi kyunki JSON pehle se hi sahi format mein hai
    return redirectsList;
  },
};

export default nextConfig;