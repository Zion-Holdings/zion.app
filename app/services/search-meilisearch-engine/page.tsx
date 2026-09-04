import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Meilisearch Instant Search Engine | Zion Tech Group",
  description: "Lightning-fast, typo-tolerant search engine for modern applications. Delivers relevant results in under 50ms with built-in faceting, filtering, geosearch, and AI-powered relevance tuning. Drop-in replacement for Elastics",
  openGraph: {
    title: "Meilisearch Instant Search Engine | Zion Tech Group",
    description: "Lightning-fast, typo-tolerant search engine for modern applications. Delivers relevant results in under 50ms with built-in faceting, filtering, geosearch, and AI-powered relevance tuning. Drop-in replacement for Elastics",
    url: "https://ziontechgroup.com/services/search-meilisearch-engine/",
    type: 'website',
  },
  alternates: { canonical: "/services/search-meilisearch-engine/" },
};

export default function SearchMeilisearchEnginePage() {
  return (
    <StandardPage
      title="Meilisearch Instant Search Engine"
      subtitle="Lightning-fast, typo-tolerant search engine for modern applications. Delivers relevant results in under 50ms with built-in faceting, filtering, geosearch, and AI-powered relevance tuning. Drop-in replacement for Elastics"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Meilisearch Instant Search Engine" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Lightning-fast, typo-tolerant search engine for modern applications. Delivers relevant results in under 50ms with built-in faceting, filtering, geosearch, and AI-powered relevance tuning. Drop-in replacement for Elastics</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607193810) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
