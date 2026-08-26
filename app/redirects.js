export default function redirects() {
  return [
    { source: '/services/:slug', destination: '/services/', permanent: true },
    { source: '/industry-solutions', destination: '/industries/', permanent: true },
    { source: '/industry-solutions/', destination: '/industries/', permanent: true },
    { source: '/service-comparison', destination: '/tools/service-comparison/', permanent: true },
    { source: '/tools/roi-calculator', destination: '/tools/roi-calculator/', permanent: true },
    { source: '/tools/service-recommender', destination: '/tools/service-recommender/', permanent: true },
    { source: '/tools/ai-service-router', destination: '/tools/ai-service-router/', permanent: true },
    { source: '/tools/port-scanner', destination: '/tools/port-scanner/', permanent: true },
    { source: '/tools/ssl-checker', destination: '/tools/ssl-checker/', permanent: true },
    { source: '/tools/health-check', destination: '/tools/health-check/', permanent: true },
    { source: '/blog', destination: '/blog/', permanent: true },
    { source: '/new-ai-services', destination: '/services/', permanent: true },
    { source: '/new-ai-services/', destination: '/services/', permanent: true },
  ];
}
