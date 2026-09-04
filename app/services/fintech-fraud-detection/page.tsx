import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "FinTech Fraud Detection | Zion Tech Group",
  description: "Real-time fraud detection for financial transactions. ML models trained on billions of transactions. Detects account takeover, synthetic identity, and money laundering.",
  openGraph: {
    title: "FinTech Fraud Detection | Zion Tech Group",
    description: "Real-time fraud detection for financial transactions. ML models trained on billions of transactions. Detects account takeover, synthetic identity, and money laundering.",
    url: "https://ziontechgroup.com/services/fintech-fraud-detection/",
    type: 'website',
  },
  alternates: { canonical: "/services/fintech-fraud-detection/" },
};

export default function FintechFraudDetectionPage() {
  return (
    <StandardPage
      title="FinTech Fraud Detection"
      subtitle="Real-time fraud detection for financial transactions. ML models trained on billions of transactions. Detects account takeover, synthetic identity, and money laundering."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "FinTech Fraud Detection" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Real-time fraud detection for financial transactions. ML models trained on billions of transactions. Detects account takeover, synthetic identity, and money laundering.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607103623) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
