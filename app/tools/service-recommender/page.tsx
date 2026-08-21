import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Recommender | Zion Tech Group',
  description: 'Answer a few questions and get a ranked list of best-fit Zion AI/IT services with estimated ROI and timeline.',
  openGraph: {
    title: 'Service Recommender | Zion Tech Group',
    description: 'AI-powered service recommendations tailored to your needs.',
    url: 'https://ziontechgroup.com/tools/service-recommender',
    type: 'website',
  },
  alternates: { canonical: '/tools/service-recommender' },
};

export default function ServiceRecommenderPage() {
  return (
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Service Recommender",
  "description": "Answer a few questions and get a ranked list of best-fit Zion AI/IT services with estimated ROI and timeline.",
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
  "url": "https://ziontechgroup.com/tools/service-recommender/",
  "@id": "https://ziontechgroup.com/tools/service-recommender/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
    <StandardPage
      title="Service Recommender"
      subtitle="Answer a few questions and get a ranked list of best-fit Zion AI/IT services."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Service Recommender' },
      ]}
    >
      <div className="prose prose-invert max-w-3xl">
        <p>The AI-powered service recommender is coming soon. Use the form below to get matched with the right Zion services.</p>
      </div></StandardPage>
  );
}
