import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.join(process.cwd(), 'app'),
      '@components': path.join(process.cwd(), 'app/components'),
    };
    if (!isServer) {
      config.resolve.fallback = { ...(config.resolve.fallback || {}), fs: false, net: false, tls: false };
    }
    return config;
  },
};
export default nextConfig;
