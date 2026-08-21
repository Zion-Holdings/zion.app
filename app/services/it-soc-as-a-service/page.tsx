import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Security Operations Center as a Service (SOCaaS) - Zion Tech Group",
  description: "24/7 managed security operations center without the $2M+ price tag. Full SIEM, threat detection, incident response, and compliance monitoring delivered as a service.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-soc-as-a-service`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Security Operations Center as a Service (SOCaaS)', 'description': '24/7 managed security operations center without the $2M+ price tag. Full SIEM, threat detection, incident response, and compliance monitoring delivered as a service.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Security Operations Center as a Service (SOCaaS) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$3,500/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$7,500/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': '24/7/365 monitoring by certified security analysts', 'acceptedAnswer': {'@type': 'Answer', 'text': '24/7/365 monitoring by certified security analysts'}}, {'@type': 'Question', 'name': 'SIEM deployment and management (Splunk, Sentinel, Elastic)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'SIEM deployment and management (Splunk, Sentinel, Elastic)'}}, {'@type': 'Question', 'name': 'Threat detection with custom correlation rules', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Threat detection with custom correlation rules'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Enterprise SOC at 1/5 the cost of building in-house; Detect and respond to threats in under 15 minutes; Meet compliance requirements without dedicated staff'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-soc-as-a-service`} title="IT Security Operations Center as a Service (SOCaaS)" />
        <h1 className="text-4xl font-bold mb-6">🛡️ IT Security Operations Center as a Service (SOCaaS)</h1>
        <p className="text-lg text-gray-300 mb-8">24/7 managed security operations center without the $2M+ price tag. Full SIEM, threat detection, incident response, and compliance monitoring delivered as a service.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7/365 monitoring by certified security analysts</li>
            <li>SIEM deployment and management (Splunk, Sentinel, Elastic)</li>
            <li>Threat detection with custom correlation rules</li>
            <li>Incident response with 15-min critical alert SLA</li>
            <li>Vulnerability management and patch prioritization</li>
            <li>Compliance reporting (SOC 2, HIPAA, PCI DSS, ISO 27001)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enterprise SOC at 1/5 the cost of building in-house</li>
            <li>Detect and respond to threats in under 15 minutes</li>
            <li>Meet compliance requirements without dedicated staff</li>
            <li>Scale security as you grow</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$3,500/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$7,500/mo/month</p>
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
