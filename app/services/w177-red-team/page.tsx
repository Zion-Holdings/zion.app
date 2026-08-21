import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Red Team and Adversary Simulation - Zion Tech Group",
  description: "Red team operations: adversary simulation, social engineering, physical security testing, purple team exercises.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-red-team`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Red Team and Adversary Simulation', 'description': 'Red team operations: adversary simulation, social engineering, physical security testing, purple team exercises.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Cybersecurity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Red Team and Adversary Simulation Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$15,000', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$35,000', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Adversary simulation (MITRE ATT&CK)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Adversary simulation (MITRE ATT&CK)'}}, {'@type': 'Question', 'name': 'Social engineering campaigns', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Social engineering campaigns'}}, {'@type': 'Question', 'name': 'Physical security testing', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Physical security testing'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Test defenses against real adversaries; Social engineering tests human layer; Physical security testing finds gaps'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-red-team`} title="Red Team and Adversary Simulation" />
        <h1 className="text-4xl font-bold mb-6">⚔️ Red Team and Adversary Simulation</h1>
        <p className="text-lg text-gray-300 mb-8">Red team operations: adversary simulation, social engineering, physical security testing, purple team exercises.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Adversary simulation (MITRE ATT&CK)</li>
            <li>Social engineering campaigns</li>
            <li>Physical security testing</li>
            <li>Purple team exercises</li>
            <li>Custom attack scenarios</li>
            <li>Executive briefing and remediation roadmap</li>
            <li>OSCP/OSCE certified operators</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Test defenses against real adversaries</li>
            <li>Social engineering tests human layer</li>
            <li>Physical security testing finds gaps</li>
            <li>Purple team improves detection and response</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$15,000/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$35,000/month</p>
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
