import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "B2B Lead Generation & Enrichment Services | Zion Tech Group",
  description: "Zion Tech Group delivers AI-powered B2B lead generation and enrichment services. We combine Composio automation, Firecrawl scraping, and AI agents to find, qualify, and nurture enterprise leads at scale.",
  openGraph: {
    title: "B2B Lead Generation & Enrichment Services | Zion Tech Group",
    description: "Zion Tech Group delivers AI-powered B2B lead generation and enrichment services. We combine Composio automation, Firecrawl scraping, and AI agents to find, qualify, and nurture enterprise leads at scale.",
    url: "https://ziontechgroup.com/docs/services/b2b-lead-generation-enrichment/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/b2b-lead-generation-enrichment/" },
};

export default function DocsServicesB2bLeadGenerationEnrichmentPage() {
  return (
    <StandardPage
      title="B2B Lead Generation & Enrichment Services"
      subtitle="Zion Tech Group delivers AI-powered B2B lead generation and enrichment services. We combine Composio automation, Firecrawl scraping, and AI agents to find, qualify, and nurture enterprise leads at scale."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "B2b Lead Generation Enrichment" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group delivers AI-powered B2B lead generation and enrichment services. We combine Composio automation, Firecrawl scraping, and AI agents to find, qualify, and nurture enterprise leads at scale.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
