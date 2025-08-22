import ServiceLanding from '../components/sections/ServiceLanding';

export default function Page() {
  return (
    <ServiceLanding
      title="Enterprise Solutions Showcase"
      slug="enterprise-solutions-showcase"
      subtitle="Enterprise-grade platforms across security, cloud and AI"
      description="Explore our portfolio of enterprise IT platforms including Zero Trust, autonomous operations, edge orchestration, and quantum-secure infrastructure. Built for scale, compliance, and reliability."
      features={[
        'Zero Trust reference architectures',
        'Autonomous IT operations centers',
        'Edge and multi-cloud orchestration',
        'Quantum-secure infrastructure options'
      ]}
      typicalBudget="$2,000–$25,000/month depending on scope"
      references={[
        { name: 'Cloudflare Zero Trust', href: 'https://www.cloudflare.com/products/zero-trust/pricing/' },
        { name: 'AWS Pricing Calculator', href: 'https://calculator.aws' },
        { name: 'Prisma Cloud', href: 'https://www.paloaltonetworks.com/prisma/cloud/pricing' }
      ]}
    />
  );
}