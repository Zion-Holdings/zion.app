import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Supply Chain Risk Intelligence Platform - Zion Tech Group",
  description: "Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predicts disruptions 30-90 days in advance.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-supply-chain-risk-intelligence`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Supply Chain Risk Intelligence Platform', 'description': 'Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predicts disruptions 30-90 days in advance.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'logistics'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Supply Chain Risk Intelligence Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$2,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$6,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Multi-tier supplier risk scoring and monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-tier supplier risk scoring and monitoring'}}, {'@type': 'Question', 'name': 'Geopolitical and regulatory change impact analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Geopolitical and regulatory change impact analysis'}}, {'@type': 'Question', 'name': 'Weather and natural disaster disruption forecasting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Weather and natural disaster disruption forecasting'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Predict supply chain disruptions 30-90 days ahead; Reduce stockouts by 45% with demand sensing; Diversify supplier base with data-driven insights'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-supply-chain-risk-intelligence`} title="AI Supply Chain Risk Intelligence Platform" />
        <h1 className="text-4xl font-bold mb-6">🔗 AI Supply Chain Risk Intelligence Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predicts disruptions 30-90 days in advance.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-tier supplier risk scoring and monitoring</li>
            <li>Geopolitical and regulatory change impact analysis</li>
            <li>Weather and natural disaster disruption forecasting</li>
            <li>Logistics bottleneck prediction with alternative routing</li>
            <li>Supplier financial health monitoring and early warning</li>
            <li>Inventory optimization with demand sensing</li>
            <li>ESG compliance tracking across supply chain</li>
            <li>Executive risk dashboard with scenario modeling</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predict supply chain disruptions 30-90 days ahead</li>
            <li>Reduce stockouts by 45% with demand sensing</li>
            <li>Diversify supplier base with data-driven insights</li>
            <li>Meet ESG reporting requirements across supply chain</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$6,999/mo/month</p>
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
