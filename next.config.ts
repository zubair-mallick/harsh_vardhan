import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'youthexpress.com.au',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
    ],
  },
};

export default nextConfig;
