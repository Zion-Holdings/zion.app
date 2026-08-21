import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Legal Research & Case Analysis - Zion Tech Group",
  description: "AI legal research assistant that analyzes case law, statutes, and regulations in seconds. Generate legal memos, find relevant precedents, and predict case outcomes.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-legal-research-assistant`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Legal Research & Case Analysis', 'description': 'AI legal research assistant that analyzes case law, statutes, and regulations in seconds. Generate legal memos, find relevant precedents, and predict case outcomes.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'legal-tech'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Legal Research & Case Analysis Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$599/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,799/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Natural language legal research across jurisdictions', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Natural language legal research across jurisdictions'}}, {'@type': 'Question', 'name': 'Case law analysis with relevance scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Case law analysis with relevance scoring'}}, {'@type': 'Question', 'name': 'Automated legal memo generation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated legal memo generation'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Research 10x faster than manual methods; Find relevant precedents others miss; Reduce legal research costs by 70%'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-legal-research-assistant`} title="AI Legal Research & Case Analysis" />
        <h1 className="text-4xl font-bold mb-6">⚖️ AI Legal Research & Case Analysis</h1>
        <p className="text-lg text-gray-300 mb-8">AI legal research assistant that analyzes case law, statutes, and regulations in seconds. Generate legal memos, find relevant precedents, and predict case outcomes.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Natural language legal research across jurisdictions</li>
            <li>Case law analysis with relevance scoring</li>
            <li>Automated legal memo generation</li>
            <li>Contract clause risk analysis</li>
            <li>Regulatory change monitoring</li>
            <li>Case outcome prediction based on historical data</li>
            <li>Integration with Westlaw, LexisNexis, Clio</li>
            <li>Citation checking and brief analysis</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Research 10x faster than manual methods</li>
            <li>Find relevant precedents others miss</li>
            <li>Reduce legal research costs by 70%</li>
            <li>Predict case outcomes with 85% accuracy</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,799/mo/month</p>
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
