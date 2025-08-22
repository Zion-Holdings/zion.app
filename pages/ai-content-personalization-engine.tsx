import ServiceLanding from '../components/sections/ServiceLanding';

export default function Page() {
  return (
    <ServiceLanding
      title="AI Content Personalization Engine"
      slug="ai-content-personalization-engine"
      subtitle="Deliver personalized content and recommendations at scale"
      description="Behavioral and firmographic personalization for websites and apps. Integrates with analytics and CDPs to tailor experiences and boost conversion."
      features={[ 'Segment and audience rules', 'Real-time personalization', 'Experimentation', 'CDP integrations' ]}
      typicalBudget="$100–$1,500/month depending on MAUs"
      references={[
        { name: 'Mutiny product', href: 'https://www.mutinyhq.com/product' },
        { name: 'Segment pricing', href: 'https://segment.com/pricing/' }
      ]}
    />
  );
}