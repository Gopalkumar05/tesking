import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgcdn.stablediffusionweb.com',
        port: '',
      
      },
    ],
  },

};

export default nextConfig;
