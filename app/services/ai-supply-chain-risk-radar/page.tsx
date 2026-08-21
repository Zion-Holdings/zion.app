import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Supply Chain Risk Intelligence - Zion Tech Group",
  description: "Real-time supply chain disruption monitoring: natural disasters, geopolitical events, port congestion, supplier health. Predictive alerts 30 days before impact.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-supply-chain-risk-radar`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Supply Chain Risk Intelligence', 'description': 'Real-time supply chain disruption monitoring: natural disasters, geopolitical events, port congestion, supplier health. Predictive alerts 30 days before impact.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Logistics & Supply Chain'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Supply Chain Risk Intelligence Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '299', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '899', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '3999', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Multi-tier supplier monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-tier supplier monitoring'}}, {'@type': 'Question', 'name': 'Disaster & weather impact prediction', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Disaster & weather impact prediction'}}, {'@type': 'Question', 'name': 'Geopolitical risk scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Geopolitical risk scoring'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '30-day advance disruption alerts; Reduce stockouts by 45%; Maintain supply continuity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-supply-chain-risk-radar`} title="AI Supply Chain Risk Intelligence" />
        <h1 className="text-4xl font-bold mb-6">🌊 AI Supply Chain Risk Intelligence</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time supply chain disruption monitoring: natural disasters, geopolitical events, port congestion, supplier health. Predictive alerts 30 days before impact.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-tier supplier monitoring</li>
            <li>Disaster & weather impact prediction</li>
            <li>Geopolitical risk scoring</li>
            <li>Port congestion forecasting</li>
            <li>Supplier financial health tracking</li>
            <li>Alternative supplier matching</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>30-day advance disruption alerts</li>
            <li>Reduce stockouts by 45%</li>
            <li>Maintain supply continuity</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$299/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$899/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$3999/month</p>
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
