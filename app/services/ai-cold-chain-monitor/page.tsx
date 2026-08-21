import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Cold Chain Monitoring for Pharmaceuticals - Zion Tech Group",
  description: "IoT + AI for pharma cold chain: real-time temperature monitoring, excursion prediction, compliance reporting (GDP/FDA), and automated corrective actions. Prevents $35B in annual spoilage.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-cold-chain-monitor`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Cold Chain Monitoring for Pharmaceuticals', 'description': 'IoT + AI for pharma cold chain: real-time temperature monitoring, excursion prediction, compliance reporting (GDP/FDA), and automated corrective actions. Prevents $35B in annual spoilage.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Healthcare'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Cold Chain Monitoring for Pharmaceuticals Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '199', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '499', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '1499', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Real-time temperature/humidity monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time temperature/humidity monitoring'}}, {'@type': 'Question', 'name': 'Excursion prediction (30-min advance)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Excursion prediction (30-min advance)'}}, {'@type': 'Question', 'name': 'Automated corrective actions', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated corrective actions'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Prevent spoilage 30 min early; Full FDA/GDP compliance; Save millions in recalled products'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-cold-chain-monitor`} title="AI Cold Chain Monitoring for Pharmaceuticals" />
        <h1 className="text-4xl font-bold mb-6">🌡️ AI Cold Chain Monitoring for Pharmaceuticals</h1>
        <p className="text-lg text-gray-300 mb-8">IoT + AI for pharma cold chain: real-time temperature monitoring, excursion prediction, compliance reporting (GDP/FDA), and automated corrective actions. Prevents $35B in annual spoilage.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time temperature/humidity monitoring</li>
            <li>Excursion prediction (30-min advance)</li>
            <li>Automated corrective actions</li>
            <li>FDA 21 CFR Part 11 compliance</li>
            <li>GDP documentation auto-generation</li>
            <li>Recall batch identification</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Prevent spoilage 30 min early</li>
            <li>Full FDA/GDP compliance</li>
            <li>Save millions in recalled products</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499/month</p>
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
