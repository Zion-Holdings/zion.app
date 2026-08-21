import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Endpoint Management & Security (UEM) - Zion Tech Group",
  description: "Unified endpoint management: device enrollment, policy enforcement, remote wipe, compliance, and threat detection across Windows, Mac, iOS, Android.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-endpoint-mgmt`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Endpoint Management & Security (UEM)', 'description': 'Unified endpoint management: device enrollment, policy enforcement, remote wipe, compliance, and threat detection across Windows, Mac, iOS, Android.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'End User Computing'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Endpoint Management & Security (UEM) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$6/device/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$12/device/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$25/device/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Device enrollment (BYOD and corporate)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Device enrollment (BYOD and corporate)'}}, {'@type': 'Question', 'name': 'Policy enforcement and configuration', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Policy enforcement and configuration'}}, {'@type': 'Question', 'name': 'Remote lock, wipe, and troubleshooting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Remote lock, wipe, and troubleshooting'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Manage all platforms from one console; Compliance enforcement automated; Remote wipe protects lost/stolen devices'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-endpoint-mgmt`} title="Endpoint Management & Security (UEM)" />
        <h1 className="text-4xl font-bold mb-6">💻 Endpoint Management & Security (UEM)</h1>
        <p className="text-lg text-gray-300 mb-8">Unified endpoint management: device enrollment, policy enforcement, remote wipe, compliance, and threat detection across Windows, Mac, iOS, Android.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Device enrollment (BYOD and corporate)</li>
            <li>Policy enforcement and configuration</li>
            <li>Remote lock, wipe, and troubleshooting</li>
            <li>Compliance monitoring and reporting</li>
            <li>Integrated threat detection (EDR)</li>
            <li>OS and app deployment</li>
            <li>Integration with Intune, Jamf, Workspace ONE</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Manage all platforms from one console</li>
            <li>Compliance enforcement automated</li>
            <li>Remote wipe protects lost/stolen devices</li>
            <li>Integrated EDR for endpoint security</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$6/device/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$12/device/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$25/device/mo/month</p>
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
