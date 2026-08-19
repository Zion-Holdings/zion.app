import type { Metadata } from 'next';
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
      </div>
    </StandardPage>
  );
}
