import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Cloud Developer Sandboxes - Zion Tech Group",
  description: "Self-service cloud sandboxes for developers: pre-configured environments, auto-cleanup, cost caps, and production-like data. Dev without breaking prod.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-cloud-dev-sandbox`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Cloud Developer Sandboxes', 'description': 'Self-service cloud sandboxes for developers: pre-configured environments, auto-cleanup, cost caps, and production-like data. Dev without breaking prod.', 'serviceType': 'cloud', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Developer Tools'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Cloud Developer Sandboxes Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/dev/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$99/dev/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$199/dev/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Self-service environment provisioning', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Self-service environment provisioning'}}, {'@type': 'Question', 'name': 'Pre-configured with your stack', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Pre-configured with your stack'}}, {'@type': 'Question', 'name': 'Production-like test data (anonymized)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Production-like test data (anonymized)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Developers get environments in seconds; Auto-cleanup prevents cloud sprawl; Cost caps prevent runaway spend'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-cloud-dev-sandbox`} title="Cloud Developer Sandboxes" />
        <h1 className="text-4xl font-bold mb-6">🧪 Cloud Developer Sandboxes</h1>
        <p className="text-lg text-gray-300 mb-8">Self-service cloud sandboxes for developers: pre-configured environments, auto-cleanup, cost caps, and production-like data. Dev without breaking prod.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Self-service environment provisioning</li>
            <li>Pre-configured with your stack</li>
            <li>Production-like test data (anonymized)</li>
            <li>Auto-cleanup and TTL management</li>
            <li>Per-developer cost caps</li>
            <li>Infrastructure-as-code templates</li>
            <li>Ephemeral and persistent sandbox modes</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Developers get environments in seconds</li>
            <li>Auto-cleanup prevents cloud sprawl</li>
            <li>Cost caps prevent runaway spend</li>
            <li>Production-like data improves testing</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$49/dev/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$99/dev/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$199/dev/mo/month</p>
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
