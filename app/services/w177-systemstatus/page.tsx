import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "SystemStatus — Infra Monitor - Zion Tech Group",
  description: "Infrastructure monitoring: servers, containers, APIs, databases. Alerting, runbook automation, incident management.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-systemstatus`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'SystemStatus — Infra Monitor', 'description': 'Infrastructure monitoring: servers, containers, APIs, databases. Alerting, runbook automation, incident management.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Monitoring'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'SystemStatus — Infra Monitor Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$15/host/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$30/host/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$60/host/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Server and container monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Server and container monitoring'}}, {'@type': 'Question', 'name': 'API endpoint monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'API endpoint monitoring'}}, {'@type': 'Question', 'name': 'Database performance monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Database performance monitoring'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Full-stack infrastructure visibility; Runbook automation fixes common issues; API monitoring catches endpoint degradation'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-systemstatus`} title="SystemStatus — Infra Monitor" />
        <h1 className="text-4xl font-bold mb-6">🖥️ SystemStatus — Infra Monitor</h1>
        <p className="text-lg text-gray-300 mb-8">Infrastructure monitoring: servers, containers, APIs, databases. Alerting, runbook automation, incident management.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Server and container monitoring</li>
            <li>API endpoint monitoring</li>
            <li>Database performance monitoring</li>
            <li>Custom metric alerting</li>
            <li>Runbook automation for common alerts</li>
            <li>Incident timeline and post-mortem</li>
            <li>Integration with PagerDuty</li>
            <li>Opsgenie</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full-stack infrastructure visibility</li>
            <li>Runbook automation fixes common issues</li>
            <li>API monitoring catches endpoint degradation</li>
            <li>Database monitoring prevents slowdowns</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$15/host/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$30/host/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$60/host/mo/month</p>
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
