/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '95.217.111.114',
        port: '3000',
        pathname: '/images/**',
      },
    ],
  }
};

module.exports = nextConfig;
