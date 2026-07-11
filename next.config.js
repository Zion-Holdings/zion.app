/** @type {import('next').NextConfig} */
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
      { source: '/services/ai-services/', destination: '/ai-services/', permanent: true },
      { source: '/services/cloud-services/', destination: '/cloud-services/', permanent: true },
      { source: '/services/cybersecurity/', destination: '/cybersecurity/', permanent: true },
      { source: '/services/data-analytics/', destination: '/data-analytics/', permanent: true },
      { source: '/services/devops-services/', destination: '/devops-services/', permanent: true },
      { source: '/services/iot-platform/', destination: '/iot-platform/', permanent: true },
      { source: '/services/it-services/', destination: '/it-services/', permanent: true },
      { source: '/services/security-services/', destination: '/security-services/', permanent: true },
      { source: '/services/micro-saas-services/', destination: '/services/?category=micro-saas', permanent: true },
      { source: '/help', destination: '/faq', permanent: true },
    ];
  },
};

export default nextConfig;
