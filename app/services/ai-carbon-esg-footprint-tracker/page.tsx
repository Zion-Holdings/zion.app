import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Carbon Footprint Tracker & ESG Reporting - Zion Tech Group",
  description: "Automatically track, analyze, and report organizational carbon emissions across Scope 1, 2, and 3. AI identifies reduction opportunities and generates compliance reports.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-carbon-esg-footprint-tracker`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Carbon Footprint Tracker & ESG Reporting', 'description': 'Automatically track, analyze, and report organizational carbon emissions across Scope 1, 2, and 3. AI identifies reduction opportunities and generates compliance reports.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'sustainability'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Carbon Footprint Tracker & ESG Reporting Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$599/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Automated Scope 1,2,3 emissions calculation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated Scope 1,2,3 emissions calculation'}}, {'@type': 'Question', 'name': 'AI-powered reduction opportunity identification', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI-powered reduction opportunity identification'}}, {'@type': 'Question', 'name': 'Real-time carbon dashboard', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time carbon dashboard'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Achieve carbon neutrality; Reduce ESG reporting time by 70%; Avoid greenwashing'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-carbon-esg-footprint-tracker`} title="AI Carbon Footprint Tracker & ESG Reporting" />
        <h1 className="text-4xl font-bold mb-6">🌿 AI Carbon Footprint Tracker & ESG Reporting</h1>
        <p className="text-lg text-gray-300 mb-8">Automatically track, analyze, and report organizational carbon emissions across Scope 1, 2, and 3. AI identifies reduction opportunities and generates compliance reports.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated Scope 1,2,3 emissions calculation</li>
            <li>AI-powered reduction opportunity identification</li>
            <li>Real-time carbon dashboard</li>
            <li>GRI, CDP, TCFD, SEC templates</li>
            <li>Supply chain emissions tracking</li>
            <li>Carbon offset marketplace integration</li>
            <li>Peer benchmarking</li>
            <li>Automated ESG report generation</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieve carbon neutrality</li>
            <li>Reduce ESG reporting time by 70%</li>
            <li>Avoid greenwashing</li>
            <li>Meet regulatory compliance</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
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
