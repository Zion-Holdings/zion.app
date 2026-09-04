import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Legal Document Automation | Zion Tech Group",
  description: "AI-powered legal document creation, review, and lifecycle management for law firms.",
  openGraph: {
    title: "Legal Document Automation | Zion Tech Group",
    description: "AI-powered legal document creation, review, and lifecycle management for law firms.",
    url: "https://ziontechgroup.com/services/microsaas-legal-document/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsaas-legal-document/" },
};

export default function MicrosaasLegalDocumentPage() {
  return (
    <StandardPage
      title="Legal Document Automation"
      subtitle="AI-powered legal document creation, review, and lifecycle management for law firms."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Legal Document Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered legal document creation, review, and lifecycle management for law firms.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608120952) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
