import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Chaos Engineering & Resilience Testing - Zion Tech Group",
  description: "Proactive chaos experiments: inject failures (latency, pod kill, DB disconnect) on non-production to validate recovery paths. Auto-generate incident response playbooks from results.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/chaos-engineering-svc`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Chaos Engineering & Resilience Testing', 'description': 'Proactive chaos experiments: inject failures (latency, pod kill, DB disconnect) on non-production to validate recovery paths. Auto-generate incident response playbooks from results.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Manufacturing'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Chaos Engineering & Resilience Testing Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$2,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': 'Custom', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Automated chaos experiment runner (Litmus/Chaos Monkey)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated chaos experiment runner (Litmus/Chaos Monkey)'}}, {'@type': 'Question', 'name': 'Failure scenario library: network, pod, DB, region', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Failure scenario library: network, pod, DB, region'}}, {'@type': 'Question', 'name': 'Auto-generated recovery playbook', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Auto-generated recovery playbook'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with chaos engineering & resilience testing; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/chaos-engineering-svc`} title="Chaos Engineering & Resilience Testing" />
        <h1 className="text-4xl font-bold mb-6">♿ Chaos Engineering & Resilience Testing</h1>
        <p className="text-lg text-gray-300 mb-8">Proactive chaos experiments: inject failures (latency, pod kill, DB disconnect) on non-production to validate recovery paths. Auto-generate incident response playbooks from results.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated chaos experiment runner (Litmus/Chaos Monkey)</li>
            <li>Failure scenario library: network, pod, DB, region</li>
            <li>Auto-generated recovery playbook</li>
            <li>Blast-radius analysis + dependency mapping</li>
            <li>Resilience scorecard + monthly score trend</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with chaos engineering & resilience testing</li>
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
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
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
