import ServiceLanding from '../components/sections/ServiceLanding';

export default function Page() {
  return (
    <ServiceLanding
      title="Innovative Business Solutions"
      slug="innovative-business-solutions"
      subtitle="Modern micro SaaS and AI to transform operations"
      description="From AI-driven sales and marketing to HR analytics and finance planning, accelerate your growth with productized solutions and transparent pricing."
      features={[ 'AI Sales Intelligence', 'CRM Intelligence', 'Content Automation', 'Financial Planning' ]}
      typicalBudget="$99–$1,500/month by seats and volume"
      references={[
        { name: 'Mixpanel pricing', href: 'https://mixpanel.com/pricing/' },
        { name: 'Amplitude pricing', href: 'https://amplitude.com/pricing' },
        { name: 'Semrush pricing', href: 'https://www.semrush.com/pricing/' }
      ]}
    />
  );
}