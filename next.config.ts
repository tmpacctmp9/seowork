import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gift-codes",
        destination: "/yaarwin-gift-codes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
