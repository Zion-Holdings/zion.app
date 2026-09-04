import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Email Threat Detector | Zion Tech Group",
  description: "AI-powered email security platform that detects phishing, BEC attacks, spear-phishing, and zero-day email threats. Real-time scanning of inbound and outbound mail with natural language understanding.",
  openGraph: {
    title: "Email Threat Detector | Zion Tech Group",
    description: "AI-powered email security platform that detects phishing, BEC attacks, spear-phishing, and zero-day email threats. Real-time scanning of inbound and outbound mail with natural language understanding.",
    url: "https://ziontechgroup.com/services/email-threat-detector/",
    type: 'website',
  },
  alternates: { canonical: "/services/email-threat-detector/" },
};

export default function EmailThreatDetectorPage() {
  return (
    <StandardPage
      title="Email Threat Detector"
      subtitle="AI-powered email security platform that detects phishing, BEC attacks, spear-phishing, and zero-day email threats. Real-time scanning of inbound and outbound mail with natural language understanding."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Email Threat Detector" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered email security platform that detects phishing, BEC attacks, spear-phishing, and zero-day email threats. Real-time scanning of inbound and outbound mail with natural language understanding.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614095052) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
