import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Drug Discovery Assistant - Zion Tech Group",
  description: "AI-accelerated drug discovery: molecular property prediction, virtual screening, de novo molecule design, and ADMET optimization. Reduce early-stage discovery time by 60%.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-ai-drug-discovery`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Drug Discovery Assistant', 'description': 'AI-accelerated drug discovery: molecular property prediction, virtual screening, de novo molecule design, and ADMET optimization. Reduce early-stage discovery time by 60%.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Pharmaceuticals'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Drug Discovery Assistant Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$4,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$14,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Molecular property prediction (binding, toxicity, solubility)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Molecular property prediction (binding, toxicity, solubility)'}}, {'@type': 'Question', 'name': 'Virtual screening of compound libraries', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Virtual screening of compound libraries'}}, {'@type': 'Question', 'name': 'De novo molecule generation with constraints', 'acceptedAnswer': {'@type': 'Answer', 'text': 'De novo molecule generation with constraints'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce discovery phase by 60%; Screen millions of compounds virtually; Novel molecule generation with target constraints'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-ai-drug-discovery`} title="AI Drug Discovery Assistant" />
        <h1 className="text-4xl font-bold mb-6">💊 AI Drug Discovery Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">AI-accelerated drug discovery: molecular property prediction, virtual screening, de novo molecule design, and ADMET optimization. Reduce early-stage discovery time by 60%.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Molecular property prediction (binding, toxicity, solubility)</li>
            <li>Virtual screening of compound libraries</li>
            <li>De novo molecule generation with constraints</li>
            <li>ADMET optimization and prediction</li>
            <li>Protein-ligand interaction analysis</li>
            <li>Literature and patent search integration</li>
            <li>Collaboration with Schrödinger, ChemAxon, RDKit</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce discovery phase by 60%</li>
            <li>Screen millions of compounds virtually</li>
            <li>Novel molecule generation with target constraints</li>
            <li>ADMET prediction reduces late-stage failures</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$4,999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$14,999/mo/month</p>
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
