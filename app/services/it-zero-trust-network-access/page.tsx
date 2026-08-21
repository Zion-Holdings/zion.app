import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Zero Trust Network Access (ZTNA) - Zion Tech Group",
  description: "Implement zero trust security architecture with identity-aware micro-segmentation, continuous device trust verification, and least-privilege access controls. Replace VPN with secure, granular access.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-zero-trust-network-access`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Zero Trust Network Access (ZTNA)', 'description': 'Implement zero trust security architecture with identity-aware micro-segmentation, continuous device trust verification, and least-privilege access controls. Replace VPN with secure, granular access.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Zero Trust Network Access (ZTNA) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$5,000 setup + $2,000/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': 'Custom', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Identity-aware proxy for application access', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Identity-aware proxy for application access'}}, {'@type': 'Question', 'name': 'Device trust verification (MDM, EDR integration)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Device trust verification (MDM, EDR integration)'}}, {'@type': 'Question', 'name': 'Micro-segmentation with software-defined perimeters', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Micro-segmentation with software-defined perimeters'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Eliminate VPN bottlenecks and security gaps; Reduce attack surface by 90% with micro-segmentation; Enable secure remote work without compromising security'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-zero-trust-network-access`} title="IT Zero Trust Network Access (ZTNA)" />
        <h1 className="text-4xl font-bold mb-6">🔒 IT Zero Trust Network Access (ZTNA)</h1>
        <p className="text-lg text-gray-300 mb-8">Implement zero trust security architecture with identity-aware micro-segmentation, continuous device trust verification, and least-privilege access controls. Replace VPN with secure, granular access.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Identity-aware proxy for application access</li>
            <li>Device trust verification (MDM, EDR integration)</li>
            <li>Micro-segmentation with software-defined perimeters</li>
            <li>Continuous authentication and session monitoring</li>
            <li>Least-privilege access with just-in-time provisioning</li>
            <li>Full audit trail of all access events</li>
            <li>Integration with Okta, Azure AD, Google Workspace</li>
            <li>Legacy application support without agents</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Eliminate VPN bottlenecks and security gaps</li>
            <li>Reduce attack surface by 90% with micro-segmentation</li>
            <li>Enable secure remote work without compromising security</li>
            <li>Meet zero trust compliance requirements (NIST 800-207)</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$5,000 setup + $2,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
