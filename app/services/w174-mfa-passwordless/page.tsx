import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "MFA & Passwordless Authentication - Zion Tech Group",
  description: "Deploy modern MFA and passwordless auth: FIDO2/WebAuthn, passkeys, push auth, and conditional access. Reduce phishing by 99% with phishing-resistant factors.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-mfa-passwordless`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'MFA & Passwordless Authentication', 'description': 'Deploy modern MFA and passwordless auth: FIDO2/WebAuthn, passkeys, push auth, and conditional access. Reduce phishing by 99% with phishing-resistant factors.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Identity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'MFA & Passwordless Authentication Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$3/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$6/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$12/user/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'FIDO2/WebAuthn and passkey deployment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'FIDO2/WebAuthn and passkey deployment'}}, {'@type': 'Question', 'name': 'Push notification authentication', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Push notification authentication'}}, {'@type': 'Question', 'name': 'Conditional access policies', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Conditional access policies'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce phishing success by 99%; Passwordless eliminates password attacks; Passkeys work across all devices'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-mfa-passwordless`} title="MFA & Passwordless Authentication" />
        <h1 className="text-4xl font-bold mb-6">🔐 MFA & Passwordless Authentication</h1>
        <p className="text-lg text-gray-300 mb-8">Deploy modern MFA and passwordless auth: FIDO2/WebAuthn, passkeys, push auth, and conditional access. Reduce phishing by 99% with phishing-resistant factors.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>FIDO2/WebAuthn and passkey deployment</li>
            <li>Push notification authentication</li>
            <li>Conditional access policies</li>
            <li>Phishing-resistant MFA enforcement</li>
            <li>Passwordless migration path</li>
            <li>Self-service account recovery</li>
            <li>Integration with Okta, Entra ID, Duo, Yubico</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce phishing success by 99%</li>
            <li>Passwordless eliminates password attacks</li>
            <li>Passkeys work across all devices</li>
            <li>Conditional access adapts to risk level</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$3/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$6/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$12/user/mo/month</p>
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
