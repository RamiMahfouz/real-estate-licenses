/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.api.baldy.com.co",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
