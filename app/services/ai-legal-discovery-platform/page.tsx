import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Legal eDiscovery & Review Platform - Zion Tech Group",
  description: "Automated document review for litigation: privilege detection, relevance scoring, entity extraction, chronology building. Cuts review costs by 70%.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-legal-discovery-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Legal eDiscovery & Review Platform', 'description': 'Automated document review for litigation: privilege detection, relevance scoring, entity extraction, chronology building. Cuts review costs by 70%.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Legal & Compliance'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Legal eDiscovery & Review Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '499', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '1499', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '5999', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI-powered relevance scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI-powered relevance scoring'}}, {'@type': 'Question', 'name': 'Privilege & confidence detection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Privilege & confidence detection'}}, {'@type': 'Question', 'name': 'Entity extraction (people, orgs, dates)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Entity extraction (people, orgs, dates)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cut review costs by 70%; Improve accuracy by 40%; Review 10x more docs per hour'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-legal-discovery-platform`} title="AI Legal eDiscovery & Review Platform" />
        <h1 className="text-4xl font-bold mb-6">⚖️ AI Legal eDiscovery & Review Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Automated document review for litigation: privilege detection, relevance scoring, entity extraction, chronology building. Cuts review costs by 70%.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered relevance scoring</li>
            <li>Privilege & confidence detection</li>
            <li>Entity extraction (people, orgs, dates)</li>
            <li>Chronology auto-building</li>
            <li>Redaction automation</li>
            <li>Production-ready export</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cut review costs by 70%</li>
            <li>Improve accuracy by 40%</li>
            <li>Review 10x more docs per hour</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$5999/month</p>
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
