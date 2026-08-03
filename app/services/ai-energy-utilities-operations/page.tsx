import EnergyUtilitiesServiceTemplate from '@/components/EnergyUtilitiesServiceTemplate';

export const metadata = {
  title: 'Services - Ai Energy Utilities Operations | Zion Tech Group',
  description: 'AI-powered operations management, control-room optimization, and asset reliability for utilities.',
  alternates: { canonical: '/services/ai-energy-utilities-operations' },
};

export default function Page() {
  return (
    <EnergyUtilitiesServiceTemplate
      title="AI Energy & Utilities Operations"
      description="Optimize control-room operations, asset reliability, and workforce execution for energy and utility operators."
      features={[
        'Control-room decision support',
        'Asset reliability and maintenance planning',
        'Workforce and field operations optimization',
        'Real-time operational dashboards',
      ]}
      benefits={[
        'Faster operational decisions',
        'Lower unplanned downtime',
        'Better workforce utilization',
        'Improved safety and incident response',
      ]}
    />
  );
}
