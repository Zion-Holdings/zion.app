import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Anti-Money Laundering (AML) Compliance Platform - Zion Tech Group",
  description: "AI-powered AML compliance with transaction monitoring, suspicious activity detection, customer due diligence, and regulatory reporting. Meet FinCEN, FATF, and BSA requirements.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/fintech-aml-compliance-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Anti-Money Laundering (AML) Compliance Platform', 'description': 'AI-powered AML compliance with transaction monitoring, suspicious activity detection, customer due diligence, and regulatory reporting. Meet FinCEN, FATF, and BSA requirements.', 'serviceType': 'fintech', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Finance'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Anti-Money Laundering (AML) Compliance Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$2,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$8,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Real-time transaction monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time transaction monitoring'}}, {'@type': 'Question', 'name': 'Suspicious activity detection (AI)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Suspicious activity detection (AI)'}}, {'@type': 'Question', 'name': 'Customer due diligence (CDD/EDD)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Customer due diligence (CDD/EDD)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce false positives by 60%; Automate compliance reporting; Meet regulatory requirements'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/fintech-aml-compliance-platform`} title="Anti-Money Laundering (AML) Compliance Platform" />
        <h1 className="text-4xl font-bold mb-6">🏦 Anti-Money Laundering (AML) Compliance Platform</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered AML compliance with transaction monitoring, suspicious activity detection, customer due diligence, and regulatory reporting. Meet FinCEN, FATF, and BSA requirements.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time transaction monitoring</li>
            <li>Suspicious activity detection (AI)</li>
            <li>Customer due diligence (CDD/EDD)</li>
            <li>Sanctions screening</li>
            <li>SAR filing automation</li>
            <li>Risk scoring models</li>
            <li>Regulatory reporting</li>
            <li>Audit trail and documentation</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce false positives by 60%</li>
            <li>Automate compliance reporting</li>
            <li>Meet regulatory requirements</li>
            <li>Reduce compliance costs</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$8,999/mo/month</p>
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
