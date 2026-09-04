import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Intelligent Document Processing (IDP) | Zion Tech Group",
  description: "AI-powered document processing that extracts, classifies, and validates data from any document type. Handles invoices, contracts, forms, and unstructured documents with human-in-the-loop verification.",
  openGraph: {
    title: "Intelligent Document Processing (IDP) | Zion Tech Group",
    description: "AI-powered document processing that extracts, classifies, and validates data from any document type. Handles invoices, contracts, forms, and unstructured documents with human-in-the-loop verification.",
    url: "https://ziontechgroup.com/services/intelligent-document-processing/",
    type: 'website',
  },
  alternates: { canonical: "/services/intelligent-document-processing/" },
};

export default function IntelligentDocumentProcessingPage() {
  return (
    <StandardPage
      title="Intelligent Document Processing (IDP)"
      subtitle="AI-powered document processing that extracts, classifies, and validates data from any document type. Handles invoices, contracts, forms, and unstructured documents with human-in-the-loop verification."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Intelligent Document Processing (IDP)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered document processing that extracts, classifies, and validates data from any document type. Handles invoices, contracts, forms, and unstructured documents with human-in-the-loop verification.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614095549) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
