import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Software License Management - Zion Tech Group",
  description: "Track and optimize software licenses: usage monitoring, compliance alerting, renewal management, and vendor negotiation support. Reduce waste by 25%.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-license-management`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Software License Management', 'description': 'Track and optimize software licenses: usage monitoring, compliance alerting, renewal management, and vendor negotiation support. Reduce waste by 25%.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'IT Operations'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Software License Management Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$2,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'License inventory and usage tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'License inventory and usage tracking'}}, {'@type': 'Question', 'name': 'Under-utilized license identification', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Under-utilized license identification'}}, {'@type': 'Question', 'name': 'Compliance alerting (over and under-deployed)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Compliance alerting (over and under-deployed)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce software spend waste by 25%; Compliance alerting prevents audit risk; Usage data strengthens vendor negotiations'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-license-management`} title="Software License Management" />
        <h1 className="text-4xl font-bold mb-6">📄 Software License Management</h1>
        <p className="text-lg text-gray-300 mb-8">Track and optimize software licenses: usage monitoring, compliance alerting, renewal management, and vendor negotiation support. Reduce waste by 25%.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>License inventory and usage tracking</li>
            <li>Under-utilized license identification</li>
            <li>Compliance alerting (over and under-deployed)</li>
            <li>Renewal and expiry management</li>
            <li>Vendor negotiation data and benchmarks</li>
            <li>SaaS and on-prem license support</li>
            <li>Integration with SNOW, Flexera, ServiceNow</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce software spend waste by 25%</li>
            <li>Compliance alerting prevents audit risk</li>
            <li>Usage data strengthens vendor negotiations</li>
            <li>Renewal management never misses a date</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$899/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
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
