/** @type {import('next').NextConfig} */
import path from 'node:path';

const nextConfig = {
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  basePath: '',
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Static export via webpack
  webpack: (config, { isServer }) => {
    const appDir = path.join(process.cwd(), 'app');
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': appDir,
      'ncomponents': path.join(appDir, 'components'),
      'ndata': path.join(appDir, 'data'),
      'nlib': path.join(appDir, 'lib'),
    };
    // Reduce memory usage during build
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 100000,
        },
      };
    }
    // Limit parallelism in webpack
    config.parallelism = 1;
    return config;
  },
  generateBuildId: async () => 'zion-tech-group-v1',
  async redirects() {
    return [
      { source: '/agents/monitoring', destination: '/agents-monitoring', permanent: true },
      { source: '/agents/monitoring/:splat*', destination: '/agents-monitoring/:splat*', permanent: true },
      { source: '/services/ai-services', destination: '/services/?category=ai', permanent: true },
      { source: '/services/cloud-services', destination: '/services/?category=cloud', permanent: true },
      { source: '/services/cybersecurity', destination: '/services/?category=security', permanent: true },
      { source: '/services/data-analytics', destination: '/services/?category=data', permanent: true },
      { source: '/services/devops-services', destination: '/services/?category=devops', permanent: true },
      { source: '/services/iot-platform', destination: '/services/?category=iot', permanent: true },
      { source: '/services/it-services', destination: '/services/?category=it', permanent: true },
      { source: '/services/security-services', destination: '/services/?category=security', permanent: true },
      { source: '/services/data-services', destination: '/services/?category=data', permanent: true },
      { source: '/services/micro-saas-services', destination: '/services/?category=micro-saas', permanent: true },
      { source: '/ai-services/', destination: '/services/?category=ai', permanent: true },
      { source: '/cloud-services/', destination: '/services/?category=cloud', permanent: true },
      { source: '/cybersecurity/', destination: '/services/?category=security', permanent: true },
      { source: '/data-analytics/', destination: '/services/?category=data', permanent: true },
      { source: '/devops-services/', destination: '/services/?category=devops', permanent: true },
      { source: '/iot-platform/', destination: '/services/?category=iot', permanent: true },
      { source: '/it-services/', destination: '/services/?category=it', permanent: true },
      { source: '/security-services/', destination: '/services/?category=security', permanent: true },
      { source: '/micro-saas-services/', destination: '/services/?category=micro-saas', permanent: true },
      { source: '/help', destination: '/faq', permanent: true },
      { source: '/ai-agents', destination: '/services/ai-agents-autonomous', permanent: true },
      { source: '/ai-agents/', destination: '/services/ai-agents-autonomous/', permanent: true },
      { source: '/ai-chat-companion', destination: '/ai-services', permanent: true },
      { source: '/ai-chat-companion/', destination: '/ai-services/', permanent: true },
      { source: '/ai-financial-services', destination: '/ai-fraud-detection', permanent: true },
      { source: '/ai-financial-services/', destination: '/ai-fraud-detection/', permanent: true },
      { source: '/services/ai-chatbot-builder-pro', destination: '/services/ai-chatbot-builder', permanent: true },
      { source: '/services/ai-chatbot-builder-pro/', destination: '/services/ai-chatbot-builder/', permanent: true },
      { source: '/services/ai-fraud-detection', destination: '/ai-fraud-detection', permanent: true },
      { source: '/services/ai-fraud-detection/', destination: '/ai-fraud-detection/', permanent: true },
      { source: '/services/ai-automation', destination: '/services/?category=ai', permanent: true },
      { source: '/services/ai-automation/', destination: '/services/?category=ai', permanent: true },
      { source: '/services/it-outsourcing', destination: '/services/?category=it', permanent: true },
      { source: '/services/it-outsourcing/', destination: '/services/?category=it', permanent: true },
      { source: '/services/ai-network-performance-and-wan-optimization-for-it-in-2026', destination: '/services/ai-first-network-performance-and-wan-optimization-for-it-in-2026', permanent: true },
      { source: '/services/ai-network-performance-and-wan-optimization-for-it-in-2026/', destination: '/services/ai-first-network-performance-and-wan-optimization-for-it-in-2026/', permanent: true },
      { source: '/services/ai-endpoint-management-and-zero-trust-access-for-it-in-2026', destination: '/services/ai-first-endpoint-management-and-zero-trust-access-for-it-in-2026', permanent: true },
      { source: '/services/ai-endpoint-management-and-zero-trust-access-for-it-in-2026/', destination: '/services/ai-first-endpoint-management-and-zero-trust-access-for-it-in-2026/', permanent: true },
      { source: '/services/ai-development-acceleration', destination: '/services/', permanent: true },
      { source: '/services/ai-development-acceleration/', destination: '/services/', permanent: true },
      { source: '/services/ai-help-desk-automation', destination: '/services/', permanent: true },
      { source: '/services/ai-help-desk-automation/', destination: '/services/', permanent: true },
      { source: '/services/devops-automation-consulting', destination: '/services/', permanent: true },
      { source: '/services/devops-automation-consulting/', destination: '/services/', permanent: true },
      { source: '/services/fleet-management-gps-tracking', destination: '/services/', permanent: true },
      { source: '/services/fleet-management-gps-tracking/', destination: '/services/', permanent: true },
      { source: '/services/lead-generation-outreach-automation', destination: '/services/', permanent: true },
      { source: '/services/lead-generation-outreach-automation/', destination: '/services/', permanent: true },
    ];
  },
};

export default nextConfig;