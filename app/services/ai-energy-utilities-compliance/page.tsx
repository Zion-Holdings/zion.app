import EnergyUtilitiesServiceTemplate from '@/components/EnergyUtilitiesServiceTemplate';

export const metadata = {
  title: 'Services - Ai Energy Utilities Compliance | Zion Tech Group',
  description: 'AI-powered compliance automation, reporting, and regulatory analytics for energy utilities.',
  alternates: { canonical: '/services/ai-energy-utilities-compliance' },
};

export default function Page() {
  return (
    <EnergyUtilitiesServiceTemplate
      title="AI Energy & Utilities Compliance"
      description="Automate compliance reporting, regulatory analytics, and audit readiness for energy and utility operators."
      features={[
        'Regulatory report generation and filing',
        'Policy compliance monitoring and alerts',
        'Audit trail and evidence automation',
        'Cross-jurisdiction rule mapping',
      ]}
      benefits={[
        'Faster audit cycles and fewer findings',
        'Reduced compliance staffing burden',
        'Consistent evidence collection',
        'Lower regulatory risk',
      ]}
    />
  );
}
