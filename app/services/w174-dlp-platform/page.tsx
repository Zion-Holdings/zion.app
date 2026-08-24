import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Data Loss Prevention (DLP) Platform - Zion Tech Group",
  description: "Enterprise DLP for endpoints, network, cloud, and email. Detect and prevent PII, IP, and sensitive data exfiltration with policy-based controls and OCR content inspection.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-dlp-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Data Loss Prevention (DLP) Platform', 'description': 'Enterprise DLP for endpoints, network, cloud, and email. Detect and prevent PII, IP, and sensitive data exfiltration with policy-based controls and OCR content inspection.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Data Protection'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Data Loss Prevention (DLP) Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$799/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$2,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$7,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Endpoint DLP (USB, clipboard, print control)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Endpoint DLP (USB, clipboard, print control)'}}, {'@type': 'Question', 'name': 'Network DLP (SSL inspection, content filtering)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Network DLP (SSL inspection, content filtering)'}}, {'@type': 'Question', 'name': 'Cloud DLP (CASB integration)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cloud DLP (CASB integration)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Prevent sensitive data exfiltration across all channels; Regulatory templates for quick deployment; OCR inspects images for sensitive content'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-dlp-platform`} title="Data Loss Prevention (DLP) Platform" />
        <h1 className="text-4xl font-bold mb-6">🔒 Data Loss Prevention (DLP) Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise DLP for endpoints, network, cloud, and email. Detect and prevent PII, IP, and sensitive data exfiltration with policy-based controls and OCR content inspection.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Endpoint DLP (USB, clipboard, print control)</li>
            <li>Network DLP (SSL inspection, content filtering)</li>
            <li>Cloud DLP (CASB integration)</li>
            <li>Email DLP with content inspection and OCR</li>
            <li>Policy engine with regulatory templates</li>
            <li>Incident workflow and remediation</li>
            <li>Integration with MIP, Zscaler, Netskope</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Prevent sensitive data exfiltration across all channels</li>
            <li>Regulatory templates for quick deployment</li>
            <li>OCR inspects images for sensitive content</li>
            <li>Incident workflow ensures accountability</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$799/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$2,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$7,999/mo/month</p>
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
