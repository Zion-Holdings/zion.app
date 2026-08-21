import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Multimodal Search & Discovery Platform - Zion Tech Group",
  description: "AI search that understands text, images, video, and audio. Find anything across your enterprise content with natural language queries and visual similarity search.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-multimodal-search`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Multimodal Search & Discovery Platform', 'description': 'AI search that understands text, images, video, and audio. Find anything across your enterprise content with natural language queries and visual similarity search.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Multimodal Search & Discovery Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Text, image, video, and audio search', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Text, image, video, and audio search'}}, {'@type': 'Question', 'name': 'Natural language query understanding', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Natural language query understanding'}}, {'@type': 'Question', 'name': 'Visual similarity search', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Visual similarity search'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Find any content in seconds across all formats; Increase knowledge reuse by 60%; Support 100+ languages out of the box'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-multimodal-search`} title="AI Multimodal Search & Discovery Platform" />
        <h1 className="text-4xl font-bold mb-6">🔎 AI Multimodal Search & Discovery Platform</h1>
        <p className="text-lg text-gray-300 mb-8">AI search that understands text, images, video, and audio. Find anything across your enterprise content with natural language queries and visual similarity search.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Text, image, video, and audio search</li>
            <li>Natural language query understanding</li>
            <li>Visual similarity search</li>
            <li>Cross-language search and translation</li>
            <li>Integration with SharePoint, Confluence, Google Drive</li>
            <li>Custom embedding models for your domain</li>
            <li>Search analytics and relevance tuning</li>
            <li>API and embeddable search widgets</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find any content in seconds across all formats</li>
            <li>Increase knowledge reuse by 60%</li>
            <li>Support 100+ languages out of the box</li>
            <li>Embed intelligent search in any application</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
