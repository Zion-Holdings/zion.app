import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Clinical Documentation AI - Zion Tech Group",
  description: "Automate clinical documentation with ambient AI scribes. Generates SOAP notes, coding suggestions, and compliance checks in real-time during patient encounters.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/clinical-documentation-ai-8e55aa5c`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Clinical Documentation AI', 'description': 'Automate clinical documentation with ambient AI scribes. Generates SOAP notes, coding suggestions, and compliance checks in real-time during patient encounters.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'hello@ziontechgroup.com', 'telephone': '+1 (302) 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'healthcare'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Clinical Documentation AI Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '299/provider/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '599/provider/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Ambient clinical listening', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Ambient clinical listening'}}, {'@type': 'Question', 'name': 'Real-time SOAP generation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time SOAP generation'}}, {'@type': 'Question', 'name': 'ICD-10/CPT code suggestions', 'acceptedAnswer': {'@type': 'Answer', 'text': 'ICD-10/CPT code suggestions'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Save 2 hours/day per physician; Reduce documentation errors; Improve coding accuracy'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/clinical-documentation-ai-8e55aa5c`} title="Clinical Documentation AI" />
        <h1 className="text-4xl font-bold mb-6">🏥 Clinical Documentation AI</h1>
        <p className="text-lg text-gray-300 mb-8">Automate clinical documentation with ambient AI scribes. Generates SOAP notes, coding suggestions, and compliance checks in real-time during patient encounters.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ambient clinical listening</li>
            <li>Real-time SOAP generation</li>
            <li>ICD-10/CPT code suggestions</li>
            <li>Compliance validation</li>
            <li>EHR integration (Epic, Cerner)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Save 2 hours/day per physician</li>
            <li>Reduce documentation errors</li>
            <li>Improve coding accuracy</li>
            <li>Increase patient face time</li>
            <li>Burnout reduction</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$299/provider/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$599/provider/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$custom/month</p>
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
