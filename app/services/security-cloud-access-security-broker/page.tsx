import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Cloud Access Security Broker (CASB) - Zion Tech Group",
  description: "CASB solution for visibility and control over cloud applications. Shadow IT discovery, data loss prevention, threat protection, and compliance monitoring across SaaS.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-cloud-access-security-broker`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Cloud Access Security Broker (CASB)', 'description': 'CASB solution for visibility and control over cloud applications. Shadow IT discovery, data loss prevention, threat protection, and compliance monitoring across SaaS.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Cloud Access Security Broker (CASB) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$4,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Shadow IT discovery', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Shadow IT discovery'}}, {'@type': 'Question', 'name': 'Cloud app risk assessment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cloud app risk assessment'}}, {'@type': 'Question', 'name': 'Data loss prevention for cloud', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Data loss prevention for cloud'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Discover and control shadow IT; Prevent data leaks in cloud apps; Meet compliance requirements'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/security-cloud-access-security-broker`} title="Cloud Access Security Broker (CASB)" />
        <h1 className="text-4xl font-bold mb-6">☁️ Cloud Access Security Broker (CASB)</h1>
        <p className="text-lg text-gray-300 mb-8">CASB solution for visibility and control over cloud applications. Shadow IT discovery, data loss prevention, threat protection, and compliance monitoring across SaaS.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Shadow IT discovery</li>
            <li>Cloud app risk assessment</li>
            <li>Data loss prevention for cloud</li>
            <li>Threat protection (UEBA)</li>
            <li>Compliance monitoring (GDPR, HIPAA)</li>
            <li>Integration with 1000+ cloud apps</li>
            <li>Real-time policy enforcement</li>
            <li>Cloud security posture dashboard</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Discover and control shadow IT</li>
            <li>Prevent data leaks in cloud apps</li>
            <li>Meet compliance requirements</li>
            <li>Unified cloud security visibility</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$1,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$4,499/mo/month</p>
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
