/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Removed deprecated appDir and swcMinify options
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
