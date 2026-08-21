import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Data Loss Prevention (DLP) - Zion Tech Group",
  description: "Comprehensive data protection across endpoints, cloud applications, and email. AI-powered classification, policy enforcement, and insider threat detection — ensuring sensitive data never leaves your organization undetected.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave126-data-loss-prevention`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Data Loss Prevention (DLP)', 'description': 'Comprehensive data protection across endpoints, cloud applications, and email. AI-powered classification, policy enforcement, and insider threat detection — ensuring sensitive data never leaves your organization undetected.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Data Security'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Data Loss Prevention (DLP) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '9997', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '22997', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Endpoint DLP for managed & unmanaged devices', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Endpoint DLP for managed & unmanaged devices'}}, {'@type': 'Question', 'name': 'Cloud app DLP (CASB integration for O365, GSuite, Slack)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cloud app DLP (CASB integration for O365, GSuite, Slack)'}}, {'@type': 'Question', 'name': 'Email DLP with content inspection & encryption', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Email DLP with content inspection & encryption'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Stop data exfiltration before it happens; Meet HIPAA, PCI-DSS, GDPR data handling requirements; Detect insider threats through behavioral analytics'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/wave126-data-loss-prevention`} title="Data Loss Prevention (DLP)" />
        <h1 className="text-4xl font-bold mb-6">🔒 Data Loss Prevention (DLP)</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive data protection across endpoints, cloud applications, and email. AI-powered classification, policy enforcement, and insider threat detection — ensuring sensitive data never leaves your organization undetected.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Endpoint DLP for managed & unmanaged devices</li>
            <li>Cloud app DLP (CASB integration for O365, GSuite, Slack)</li>
            <li>Email DLP with content inspection & encryption</li>
            <li>AI-powered data classification & labeling</li>
            <li>Insider threat detection & behavioral analysis</li>
            <li>PCI/PHI/PII discovery across file shares & databases</li>
            <li>Policy orchestration & incident workflow</li>
            <li>Forensic investigation & evidence export</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Stop data exfiltration before it happens</li>
            <li>Meet HIPAA, PCI-DSS, GDPR data handling requirements</li>
            <li>Detect insider threats through behavioral analytics</li>
            <li>Full visibility into where sensitive data lives and moves</li>
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
              <p className="text-2xl font-bold mb-2">$9997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$22997/month</p>
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
