import ServiceLanding from '../components/sections/ServiceLanding';

export default function Page() {
  return (
    <ServiceLanding
      title="AI-Powered Cybersecurity"
      slug="ai-powered-cybersecurity"
      subtitle="Intelligent threat detection, response and posture management"
      description="Combine AI detection, exposure management, and automated playbooks to improve security posture and reduce MTTR. Integrates across cloud and endpoints."
      features={[ 'Threat detection', 'Exposure management', 'Automated playbooks', 'Cloud integrations' ]}
      typicalBudget="$200–$5,000/month depending on assets"
      references={[
        { name: 'Wiz pricing', href: 'https://www.wiz.io/pricing' },
        { name: 'Prisma Cloud pricing', href: 'https://www.paloaltonetworks.com/prisma/cloud/pricing' }
      ]}
    />
  );
}