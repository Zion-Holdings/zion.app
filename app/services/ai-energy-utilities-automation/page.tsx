import EnergyUtilitiesServiceTemplate from '@/components/EnergyUtilitiesServiceTemplate';

export const metadata = {
  title: 'Services - Ai Energy Utilities Automation | Zion Tech Group',
  description: 'AI-powered energy automation, control, and operations optimization for utility infrastructure.',
  alternates: { canonical: '/services/ai-energy-utilities-automation' },
};

export default function Page() {
  return (
    <EnergyUtilitiesServiceTemplate
      title="AI Energy & Utilities Automation"
      description="Automate control, operations, and optimization for energy and utility infrastructure with AI-driven workflows."
      features={[
        'Automated control and operations workflows',
        'Predictive maintenance and asset optimization',
        'Workforce scheduling and dispatch optimization',
        'Outage prevention and self-healing controls',
      ]}
      benefits={[
        'Reduce manual operational overhead',
        'Improve uptime with predictive interventions',
        'Faster response to grid and asset events',
        'Scale operations without proportional staffing',
      ]}
    />
  );
}
