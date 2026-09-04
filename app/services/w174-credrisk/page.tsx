import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "CredRisk — Credit Decisioning Engine | Zion Tech Group",
  description: "AI-powered credit scoring and loan decisioning for fintech and lenders. Alternative data scoring, real-time decisions, and fair lending compliance.",
  openGraph: {
    title: "CredRisk — Credit Decisioning Engine | Zion Tech Group",
    description: "AI-powered credit scoring and loan decisioning for fintech and lenders. Alternative data scoring, real-time decisions, and fair lending compliance.",
    url: "https://ziontechgroup.com/services/w174-credrisk/",
    type: 'website',
  },
  alternates: { canonical: "/services/w174-credrisk/" },
};

export default function ServicesW174CredriskPage() {
  return (
    <StandardPage
      title="CredRisk — Credit Decisioning Engine"
      subtitle="AI-powered credit scoring and loan decisioning for fintech and lenders. Alternative data scoring, real-time decisions, and fair lending compliance."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "W174 Credrisk" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered credit scoring and loan decisioning for fintech and lenders. Alternative data scoring, real-time decisions, and fair lending compliance.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
