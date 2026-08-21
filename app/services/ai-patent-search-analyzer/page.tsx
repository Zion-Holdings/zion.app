import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Patent Search & IP Intelligence - Zion Tech Group",
  description: "Semantic patent search across USPTO, EPO, WIPO: novelty assessment, freedom-to-operate analysis, patent landscape mapping, competitor IP tracking.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-patent-search-analyzer`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Patent Search & IP Intelligence', 'description': 'Semantic patent search across USPTO, EPO, WIPO: novelty assessment, freedom-to-operate analysis, patent landscape mapping, competitor IP tracking.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Patent Search & IP Intelligence Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '99', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '299', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '999', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Semantic patent search (80M+ patents)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Semantic patent search (80M+ patents)'}}, {'@type': 'Question', 'name': 'Novelty & patentability assessment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Novelty & patentability assessment'}}, {'@type': 'Question', 'name': 'Freedom-to-operate analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Freedom-to-operate analysis'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Search 100x faster than manual; Identify patent risks early; Track competitor IP moves'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-patent-search-analyzer`} title="AI Patent Search & IP Intelligence" />
        <h1 className="text-4xl font-bold mb-6">💡 AI Patent Search & IP Intelligence</h1>
        <p className="text-lg text-gray-300 mb-8">Semantic patent search across USPTO, EPO, WIPO: novelty assessment, freedom-to-operate analysis, patent landscape mapping, competitor IP tracking.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Semantic patent search (80M+ patents)</li>
            <li>Novelty & patentability assessment</li>
            <li>Freedom-to-operate analysis</li>
            <li>Patent landscape visualization</li>
            <li>Competent IP monitoring alerts</li>
            <li>Prior art discovery</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Search 100x faster than manual</li>
            <li>Identify patent risks early</li>
            <li>Track competitor IP moves</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$99/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$299/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$999/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div></main>
  );
}
