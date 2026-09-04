import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Redirecting to AI Fraud Detection | Zion Tech Group",
  description: "Redirecting to AI Fraud Detection — Zion Tech Group.",
  openGraph: {
    title: "Redirecting to AI Fraud Detection | Zion Tech Group",
    description: "Redirecting to AI Fraud Detection — Zion Tech Group.",
    url: "https://ziontechgroup.com/ai-financial-services/",
    type: 'website',
  },
  alternates: { canonical: "/ai-financial-services/" },
};

export default function AiFinancialServicesPage() {
  return (
    <StandardPage
      title="Redirecting to AI Fraud Detection"
      subtitle="Redirecting to AI Fraud Detection — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Financial Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Redirecting to AI Fraud Detection — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
