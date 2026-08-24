import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Cloud Telephony & VoIP Service - Zion Tech Group",
  description: "Business cloud telephony: PBX, call routing, IVR, conferencing, and call analytics. Replace PBX hardware with cloud VoIP.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-cloud-telephony`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Cloud Telephony & VoIP Service', 'description': 'Business cloud telephony: PBX, call routing, IVR, conferencing, and call analytics. Replace PBX hardware with cloud VoIP.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Communication'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Cloud Telephony & VoIP Service Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$20/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$35/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$55/user/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Cloud PBX with auto-attendant', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cloud PBX with auto-attendant'}}, {'@type': 'Question', 'name': 'Advanced call routing and IVR', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Advanced call routing and IVR'}}, {'@type': 'Question', 'name': 'HD audio conferencing', 'acceptedAnswer': {'@type': 'Answer', 'text': 'HD audio conferencing'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Replace expensive PBX hardware; Analytics reveal call patterns and quality; IVR routes callers efficiently'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-cloud-telephony`} title="Cloud Telephony & VoIP Service" />
        <h1 className="text-4xl font-bold mb-6">📞 Cloud Telephony & VoIP Service</h1>
        <p className="text-lg text-gray-300 mb-8">Business cloud telephony: PBX, call routing, IVR, conferencing, and call analytics. Replace PBX hardware with cloud VoIP.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud PBX with auto-attendant</li>
            <li>Advanced call routing and IVR</li>
            <li>HD audio conferencing</li>
            <li>Call recording and analytics</li>
            <li>Number porting and management</li>
            <li>SMS and MMS messaging</li>
            <li>Integration with CRM (Salesforce, HubSpot)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Replace expensive PBX hardware</li>
            <li>Analytics reveal call patterns and quality</li>
            <li>IVR routes callers efficiently</li>
            <li>CRM integration for screen pops</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$20/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$35/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$55/user/mo/month</p>
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
