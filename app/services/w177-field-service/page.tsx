import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Field Service Management - Zion Tech Group",
  description: "Manage field service: scheduling, dispatch, mobile work orders, customer communication. Optimize technician utilization.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-field-service`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Field Service Management', 'description': 'Manage field service: scheduling, dispatch, mobile work orders, customer communication. Optimize technician utilization.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Field Service'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Field Service Management Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/tech/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$99/tech/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$199/tech/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Intelligent scheduling and dispatch', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Intelligent scheduling and dispatch'}}, {'@type': 'Question', 'name': 'Mobile work orders and checklists', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Mobile work orders and checklists'}}, {'@type': 'Question', 'name': 'Parts and inventory management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Parts and inventory management'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Optimize technician utilization; Mobile work orders eliminate paper; Customer ETA improves satisfaction'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-field-service`} title="Field Service Management" />
        <h1 className="text-4xl font-bold mb-6">🔧 Field Service Management</h1>
        <p className="text-lg text-gray-300 mb-8">Manage field service: scheduling, dispatch, mobile work orders, customer communication. Optimize technician utilization.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Intelligent scheduling and dispatch</li>
            <li>Mobile work orders and checklists</li>
            <li>Parts and inventory management</li>
            <li>Customer communication and ETA</li>
            <li>Technician tracking and route optimization</li>
            <li>Integration with ServiceMax</li>
            <li>Salesforce Field Service</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Optimize technician utilization</li>
            <li>Mobile work orders eliminate paper</li>
            <li>Customer ETA improves satisfaction</li>
            <li>Route optimization reduces drive time</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$49/tech/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$99/tech/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$199/tech/mo/month</p>
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
