import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Legal Contract Analysis | Zion Tech Group",
  description: "AI-powered contract review and analysis. Clause extraction, risk scoring, obligation tracking, and comparison against standard templates.",
  openGraph: {
    title: "Legal Contract Analysis | Zion Tech Group",
    description: "AI-powered contract review and analysis. Clause extraction, risk scoring, obligation tracking, and comparison against standard templates.",
    url: "https://ziontechgroup.com/services/legal-contract-analysis/",
    type: 'website',
  },
  alternates: { canonical: "/services/legal-contract-analysis/" },
};

export default function LegalContractAnalysisPage() {
  return (
    <StandardPage
      title="Legal Contract Analysis"
      subtitle="AI-powered contract review and analysis. Clause extraction, risk scoring, obligation tracking, and comparison against standard templates."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Legal Contract Analysis" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered contract review and analysis. Clause extraction, risk scoring, obligation tracking, and comparison against standard templates.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608104213) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
