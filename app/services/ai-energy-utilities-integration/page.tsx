import EnergyUtilitiesServiceTemplate from '@/components/EnergyUtilitiesServiceTemplate';

export const metadata = {
  title: 'Services - Ai Energy Utilities Integration | Zion Tech Group',
  description: 'AI-powered integration, interoperability, and systems connectivity for energy utilities.',
  alternates: { canonical: '/services/ai-energy-utilities-integration' },
};

export default function Page() {
  return (
    <EnergyUtilitiesServiceTemplate
      title="AI Energy & Utilities Integration"
      description="Connect grid systems, data sources, and operational platforms with AI-first integration patterns."
      features={[
        'System and data source integration',
        'API and event-driven connectivity',
        'Interoperability with legacy and cloud systems',
        'Unified operational data models',
      ]}
      benefits={[
        'Faster integration projects',
        'Cleaner data flows between systems',
        'Reduced custom middleware',
        'Easier vendor and partner integration',
      ]}
    />
  );
}
