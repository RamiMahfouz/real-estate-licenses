/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
