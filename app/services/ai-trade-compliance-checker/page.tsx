import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI International Trade Compliance Checker - Zion Tech Group",
  description: "Screen every transaction for sanctions, export controls, and denied-party lists (OFAC, EU, UN). Real-time screening, false-positive reduction, and audit-ready reporting.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-trade-compliance-checker`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI International Trade Compliance Checker', 'description': 'Screen every transaction for sanctions, export controls, and denied-party lists (OFAC, EU, UN). Real-time screening, false-positive reduction, and audit-ready reporting.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Financial Services'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI International Trade Compliance Checker Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '299', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '799', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '2999', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Real-time sanctions screening (OFAC, EU, UN)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time sanctions screening (OFAC, EU, UN)'}}, {'@type': 'Question', 'name': 'Export control classification (ECCN)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Export control classification (ECCN)'}}, {'@type': 'Question', 'name': 'Denied-party list screening', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Denied-party list screening'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Screen transactions instantly; Reduce false positives by 80%; Full audit trail'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-trade-compliance-checker`} title="AI International Trade Compliance Checker" />
        <h1 className="text-4xl font-bold mb-6">🌍 AI International Trade Compliance Checker</h1>
        <p className="text-lg text-gray-300 mb-8">Screen every transaction for sanctions, export controls, and denied-party lists (OFAC, EU, UN). Real-time screening, false-positive reduction, and audit-ready reporting.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time sanctions screening (OFAC, EU, UN)</li>
            <li>Export control classification (ECCN)</li>
            <li>Denied-party list screening</li>
            <li>False-positive reduction (AI)</li>
            <li>Audit-ready screening records</li>
            <li>Batch transaction screening</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Screen transactions instantly</li>
            <li>Reduce false positives by 80%</li>
            <li>Full audit trail</li>
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
              <p className="text-2xl font-bold mb-2">$799/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2999/month</p>
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
