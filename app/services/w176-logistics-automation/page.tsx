import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Logistics & Freight Automation - Zion Tech Group",
  description: "Automate logistics operations: freight booking, route optimization, tracking, customs documentation, and carrier management across modes.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-logistics-automation`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Logistics & Freight Automation', 'description': 'Automate logistics operations: freight booking, route optimization, tracking, customs documentation, and carrier management across modes.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Logistics'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Logistics & Freight Automation Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$4,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Freight booking and carrier selection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Freight booking and carrier selection'}}, {'@type': 'Question', 'name': 'Route optimization across modes (road, rail, air, sea)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Route optimization across modes (road, rail, air, sea)'}}, {'@type': 'Question', 'name': 'Real-time shipment tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time shipment tracking'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Carrier selection optimized for cost and reliability; Route optimization reduces transit time; Customs automation prevents delays'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-logistics-automation`} title="Logistics & Freight Automation" />
        <h1 className="text-4xl font-bold mb-6">🚛 Logistics & Freight Automation</h1>
        <p className="text-lg text-gray-300 mb-8">Automate logistics operations: freight booking, route optimization, tracking, customs documentation, and carrier management across modes.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Freight booking and carrier selection</li>
            <li>Route optimization across modes (road, rail, air, sea)</li>
            <li>Real-time shipment tracking</li>
            <li>Customs and compliance documentation</li>
            <li>Carrier performance scoring</li>
            <li>Freight audit and invoice matching</li>
            <li>Integration with SAP TM, Oracle TMS, project44</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Carrier selection optimized for cost and reliability</li>
            <li>Route optimization reduces transit time</li>
            <li>Customs automation prevents delays</li>
            <li>Freight audit catches billing errors</li>
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
              <p className="text-2xl font-bold mb-2">$$4,999/mo/month</p>
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
