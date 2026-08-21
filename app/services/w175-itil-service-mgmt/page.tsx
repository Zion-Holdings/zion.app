import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "ITIL Service Management Platform - Zion Tech Group",
  description: "ITIL-aligned ITSM: incident, problem, change, and release management with CMDB, knowledge base, and self-service portal.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-itil-service-mgmt`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'ITIL Service Management Platform', 'description': 'ITIL-aligned ITSM: incident, problem, change, and release management with CMDB, knowledge base, and self-service portal.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'IT Operations'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'ITIL Service Management Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$399/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$3,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Incident and problem management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Incident and problem management'}}, {'@type': 'Question', 'name': 'Change and release management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Change and release management'}}, {'@type': 'Question', 'name': 'CMDB with auto-discovery', 'acceptedAnswer': {'@type': 'Answer', 'text': 'CMDB with auto-discovery'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'ITIL best practices out of the box; CMDB auto-discovery keeps data current; Self-service portal reduces ticket volume'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-itil-service-mgmt`} title="ITIL Service Management Platform" />
        <h1 className="text-4xl font-bold mb-6">🎫 ITIL Service Management Platform</h1>
        <p className="text-lg text-gray-300 mb-8">ITIL-aligned ITSM: incident, problem, change, and release management with CMDB, knowledge base, and self-service portal.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Incident and problem management</li>
            <li>Change and release management</li>
            <li>CMDB with auto-discovery</li>
            <li>Knowledge base and self-service</li>
            <li>Service catalog and request management</li>
            <li>SLA and OLA tracking</li>
            <li>Integration with Jira, ServiceNow, Freshservice</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ITIL best practices out of the box</li>
            <li>CMDB auto-discovery keeps data current</li>
            <li>Self-service portal reduces ticket volume</li>
            <li>SLA tracking ensures service quality</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$399/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$3,999/mo/month</p>
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
