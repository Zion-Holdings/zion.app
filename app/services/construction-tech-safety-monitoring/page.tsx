import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Construction Safety Monitoring - Zion Tech Group",
  description: "AI-powered construction site safety. PPE detection, hazard identification, incident prediction, and compliance reporting with computer vision.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/construction-tech-safety-monitoring`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Construction Safety Monitoring', 'description': 'AI-powered construction site safety. PPE detection, hazard identification, incident prediction, and compliance reporting with computer vision.', 'serviceType': 'construction-tech', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Construction'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Construction Safety Monitoring Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$599/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,799/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'PPE detection (hard hat, vest, gloves)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'PPE detection (hard hat, vest, gloves)'}}, {'@type': 'Question', 'name': 'Hazard zone monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Hazard zone monitoring'}}, {'@type': 'Question', 'name': 'Incident prediction', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Incident prediction'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce safety incidents 50%; Automated compliance; Real-time hazard alerts'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/construction-tech-safety-monitoring`} title="AI Construction Safety Monitoring" />
        <h1 className="text-4xl font-bold mb-6">🦺 AI Construction Safety Monitoring</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered construction site safety. PPE detection, hazard identification, incident prediction, and compliance reporting with computer vision.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>PPE detection (hard hat, vest, gloves)</li>
            <li>Hazard zone monitoring</li>
            <li>Incident prediction</li>
            <li>Integration with security cameras</li>
            <li>Real-time alerts to safety officers</li>
            <li>Compliance reporting</li>
            <li>Worker proximity alerts</li>
            <li>Integration with Procore, Autodesk Build</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce safety incidents 50%</li>
            <li>Automated compliance</li>
            <li>Real-time hazard alerts</li>
            <li>Protect workers proactively</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,799/mo/month</p>
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
