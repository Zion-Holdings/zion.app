import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Supply Chain Sustainability Platform - Zion Tech Group",
  description: "Measure, monitor, and improve supply chain sustainability. Carbon footprint tracking, supplier ESG scoring, and circular economy optimization.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-supply-chain-sustainability`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Supply Chain Sustainability Platform', 'description': 'Measure, monitor, and improve supply chain sustainability. Carbon footprint tracking, supplier ESG scoring, and circular economy optimization.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Supply Chain'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Supply Chain Sustainability Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$4,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Scope 1/2/3 carbon tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Scope 1/2/3 carbon tracking'}}, {'@type': 'Question', 'name': 'Supplier ESG scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Supplier ESG scoring'}}, {'@type': 'Question', 'name': 'Circular economy optimization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Circular economy optimization'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Meet ESG requirements; Reduce carbon footprint; Optimize sustainable sourcing'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-supply-chain-sustainability`} title="AI Supply Chain Sustainability Platform" />
        <h1 className="text-4xl font-bold mb-6">🌱 AI Supply Chain Sustainability Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Measure, monitor, and improve supply chain sustainability. Carbon footprint tracking, supplier ESG scoring, and circular economy optimization.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Scope 1/2/3 carbon tracking</li>
            <li>Supplier ESG scoring</li>
            <li>Circular economy optimization</li>
            <li>Sustainability reporting (GRI, CDP)</li>
            <li>Integration with procurement systems</li>
            <li>What-if scenario modeling</li>
            <li>Benchmarking</li>
            <li>Regulatory compliance</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Meet ESG requirements</li>
            <li>Reduce carbon footprint</li>
            <li>Optimize sustainable sourcing</li>
            <li>Improve brand reputation</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$1,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$4,499/mo/month</p>
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
