import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      /*{
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/static/uploads/**',
      },*/
      {
        protocol: 'http',
        hostname: 'backend-solitary-sea-3762.fly.dev',
        port: '',
        pathname: '/static/uploads/**',
      },
    ],
  },
};

export default nextConfig;