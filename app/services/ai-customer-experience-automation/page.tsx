import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Customer Experience Automation | Zion Tech Group",
  description: "Deploy AI-powered customer support: intelligent chatbots, ticket routing, sentiment analysis, and personalized self-service that resolves issues faster.",
  openGraph: {
    title: "AI Customer Experience Automation | Zion Tech Group",
    description: "Deploy AI-powered customer support: intelligent chatbots, ticket routing, sentiment analysis, and personalized self-service that resolves issues faster.",
    url: "https://ziontechgroup.com/services/ai-customer-experience-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-customer-experience-automation/" },
};

export default function ServicesAiCustomerExperienceAutomationPage() {
  return (
    <StandardPage
      title="AI Customer Experience Automation"
      subtitle="Deploy AI-powered customer support: intelligent chatbots, ticket routing, sentiment analysis, and personalized self-service that resolves issues faster."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Customer Experience Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Deploy AI-powered customer support: intelligent chatbots, ticket routing, sentiment analysis, and personalized self-service that resolves issues faster.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
