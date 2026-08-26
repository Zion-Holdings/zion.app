/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 300,
  // Force webpack (not Turbopack) for more stable memory usage with 16K+ routes
  webpack: (config, { isServer }) => {
    // Limit memory usage in webpack compilation
    if (!config.optimization) config.optimization = {};
    if (isServer) {
      config.optimization.splitChunks = false;
      config.optimization.minimize = false;
    }
    // Reduce file-handle pressure on Windows for very large route sets
    if (config.parallelism === undefined) {
      config.parallelism = 1;
    }
    return config;
  },
};

export default nextConfig;
