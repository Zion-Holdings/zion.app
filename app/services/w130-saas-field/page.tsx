import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Field Service Management - Zion Tech Group",
  description: "Optimize field operations with AI scheduling, route optimization, and predictive maintenance. Mobile-first platform for technicians and dispatchers.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w130-saas-field`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Field Service Management', 'description': 'Optimize field operations with AI scheduling, route optimization, and predictive maintenance. Mobile-first platform for technicians and dispatchers.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'field-services'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Field Service Management Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '2497', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '5997', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI scheduling & dispatch', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI scheduling & dispatch'}}, {'@type': 'Question', 'name': 'Route optimization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Route optimization'}}, {'@type': 'Question', 'name': 'Predictive maintenance alerts', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Predictive maintenance alerts'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '35% more jobs per day; 25% fuel cost reduction; 92% SLA compliance'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w130-saas-field`} title="AI Field Service Management" />
        <h1 className="text-4xl font-bold mb-6">🔧 AI Field Service Management</h1>
        <p className="text-lg text-gray-300 mb-8">Optimize field operations with AI scheduling, route optimization, and predictive maintenance. Mobile-first platform for technicians and dispatchers.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI scheduling & dispatch</li>
            <li>Route optimization</li>
            <li>Predictive maintenance alerts</li>
            <li>Mobile technician app</li>
            <li>Parts inventory management</li>
            <li>Customer portal</li>
            <li>SLA tracking</li>
            <li>Photo/video documentation</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>35% more jobs per day</li>
            <li>25% fuel cost reduction</li>
            <li>92% SLA compliance</li>
            <li>Faster first-time fix rate</li>
            <li>Improved customer satisfaction</li>
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
              <p className="text-2xl font-bold mb-2">$2497/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$5997/month</p>
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
