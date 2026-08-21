import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Privileged Access Management (PAM) - Zion Tech Group",
  description: "Secure privileged accounts: vault credentials, session recording, just-in-time access, and approval workflows. Eliminate standing privileges.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-privileged-access`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Privileged Access Management (PAM)', 'description': 'Secure privileged accounts: vault credentials, session recording, just-in-time access, and approval workflows. Eliminate standing privileges.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Identity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Privileged Access Management (PAM) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$799/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$2,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$7,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Credential vaulting and rotation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Credential vaulting and rotation'}}, {'@type': 'Question', 'name': 'Session recording and audit', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Session recording and audit'}}, {'@type': 'Question', 'name': 'Just-in-time (JIT) access provisioning', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Just-in-time (JIT) access provisioning'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Eliminate standing privileged access; Session recording provides accountability; JIT access reduces attack surface'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-privileged-access`} title="Privileged Access Management (PAM)" />
        <h1 className="text-4xl font-bold mb-6">🔑 Privileged Access Management (PAM)</h1>
        <p className="text-lg text-gray-300 mb-8">Secure privileged accounts: vault credentials, session recording, just-in-time access, and approval workflows. Eliminate standing privileges.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Credential vaulting and rotation</li>
            <li>Session recording and audit</li>
            <li>Just-in-time (JIT) access provisioning</li>
            <li>Approval workflows for privileged access</li>
            <li>SSH and RDP session proxy</li>
            <li>Multi-cloud secret management</li>
            <li>CyberArk, BeyondTrust, HashiCorp Vault support</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Eliminate standing privileged access</li>
            <li>Session recording provides accountability</li>
            <li>JIT access reduces attack surface</li>
            <li>Credential rotation prevents credential abuse</li>
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
