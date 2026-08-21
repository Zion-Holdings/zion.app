import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Incident Response & War Room - Zion Tech Group",
  description: "Structured incident response with war rooms, runbooks, automated triage, and post-mortem workflows. Reduce MTTR by 60% with orchestrated response.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-incident-response`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Incident Response & War Room', 'description': 'Structured incident response with war rooms, runbooks, automated triage, and post-mortem workflows. Reduce MTTR by 60% with orchestrated response.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'IT Operations'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Incident Response & War Room Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$399/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$3,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Automated incident triage and classification', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated incident triage and classification'}}, {'@type': 'Question', 'name': 'War room creation with Slack/Teams bridge', 'acceptedAnswer': {'@type': 'Answer', 'text': 'War room creation with Slack/Teams bridge'}}, {'@type': 'Question', 'name': 'Runbook execution (manual and automated)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Runbook execution (manual and automated)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce MTTR by 60% with structured response; War rooms unify communication instantly; Runbooks ensure consistent response'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-incident-response`} title="IT Incident Response & War Room" />
        <h1 className="text-4xl font-bold mb-6">🚨 IT Incident Response & War Room</h1>
        <p className="text-lg text-gray-300 mb-8">Structured incident response with war rooms, runbooks, automated triage, and post-mortem workflows. Reduce MTTR by 60% with orchestrated response.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated incident triage and classification</li>
            <li>War room creation with Slack/Teams bridge</li>
            <li>Runbook execution (manual and automated)</li>
            <li>Escalation policies and on-call management</li>
            <li>Status page integration</li>
            <li>Post-mortem templates and tracking</li>
            <li>PagerDuty, Opsgenie, VictorOps integration</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce MTTR by 60% with structured response</li>
            <li>War rooms unify communication instantly</li>
            <li>Runbooks ensure consistent response</li>
            <li>Post-mortems drive continuous improvement</li>
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
