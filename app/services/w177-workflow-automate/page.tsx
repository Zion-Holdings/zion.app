import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "No-Code Workflow Automation - Zion Tech Group",
  description: "Visual workflow builder: drag-drop, conditional logic, API orchestration, 200+ connectors. Automate without code.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-workflow-automate`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'No-Code Workflow Automation', 'description': 'Visual workflow builder: drag-drop, conditional logic, API orchestration, 200+ connectors. Automate without code.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Operations'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'No-Code Workflow Automation Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$149/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$499/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Visual drag-drop workflow builder', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Visual drag-drop workflow builder'}}, {'@type': 'Question', 'name': 'Conditional logic and branching', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Conditional logic and branching'}}, {'@type': 'Question', 'name': 'API orchestration and transformation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'API orchestration and transformation'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automate complex multi-step processes; Visual builder; no code required'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-workflow-automate`} title="No-Code Workflow Automation" />
        <h1 className="text-4xl font-bold mb-6">⚙️ No-Code Workflow Automation</h1>
        <p className="text-lg text-gray-300 mb-8">Visual workflow builder: drag-drop, conditional logic, API orchestration, 200+ connectors. Automate without code.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Visual drag-drop workflow builder</li>
            <li>Conditional logic and branching</li>
            <li>API orchestration and transformation</li>
            <li>200+ pre-built connectors</li>
            <li>Error handling and retry logic</li>
            <li>Scheduled and event-triggered workflows</li>
            <li>Integration with Zapier</li>
            <li>Make</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automate complex multi-step processes</li>
            <li>Visual builder</li>
            <li>no code required</li>
            <li>200+ connectors for popular services</li>
            <li>Error handling prevents workflow failures</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$49/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$149/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
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
