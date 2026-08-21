import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Zero Trust Access Platform - Zion Tech Group",
  description: "Identity-first zero trust: device posture check, per-session access policy, micro-VPN per-app access, continuous auth risk scoring.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-zero-trust-access-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Zero Trust Access Platform', 'description': 'Identity-first zero trust: device posture check, per-session access policy, micro-VPN per-app access, continuous auth risk scoring.', 'serviceType': 'cloud', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'E-Commerce'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Zero Trust Access Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$99/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$349/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$1,299/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Identity-verified per-session auth (OIDC/SAML)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Identity-verified per-session auth (OIDC/SAML)'}}, {'@type': 'Question', 'name': 'Device posture check before granting access', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Device posture check before granting access'}}, {'@type': 'Question', 'name': 'Per-app micro-segmented VPN access', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Per-app micro-segmented VPN access'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with zero trust access platform; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/cloud-zero-trust-access-platform`} title="Zero Trust Access Platform" />
        <h1 className="text-4xl font-bold mb-6">♿ Zero Trust Access Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Identity-first zero trust: device posture check, per-session access policy, micro-VPN per-app access, continuous auth risk scoring.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Identity-verified per-session auth (OIDC/SAML)</li>
            <li>Device posture check before granting access</li>
            <li>Per-app micro-segmented VPN access</li>
            <li>Continuous risk score per session (anomaly detector)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with zero trust access platform</li>
            <li>Improve operational efficiency</li>
            <li>Scale without complexity</li>
            <li>Enterprise-grade reliability</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$349/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$1,299/mo/month</p>
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
