import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Comparison | Zion Tech Group',
  description: 'Side-by-side comparison of AI and IT services across cost, complexity, and expected impact.',
  openGraph: {
    title: 'Service Comparison | Zion Tech Group',
    description: 'Compare Zion AI/IT services side by side.',
    url: 'https://ziontechgroup.com/tools/service-comparison',
    type: 'website',
  },
  alternates: { canonical: '/tools/service-comparison' },
};

export default function ServiceComparisonPage() {
  return (
    <>
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Service Comparison",
  "description": "Side-by-side comparison of AI and IT services across cost, complexity, and expected impact.",
  "applicationCategory": "BusinessApplication",
  "applicationSuite": "Zion Tech Group Tools",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "url": "https://ziontechgroup.com/tools/service-comparison/",
  "@id": "https://ziontechgroup.com/tools/service-comparison/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
    <StandardPage
      title="Service Comparison"
      subtitle="Compare AI and IT services across cost, complexity, and expected impact."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Service Comparison' },
      ]}
    >
      <div className="prose prose-invert max-w-3xl">
        <p>The service comparison tool will let you compare Zion services side by side. Stay tuned.</p>
      </div></StandardPage>
    </>
  );
}
