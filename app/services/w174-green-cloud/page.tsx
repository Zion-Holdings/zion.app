import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Green Cloud & Sustainability Optimizer - Zion Tech Group",
  description: "Optimize cloud workloads for carbon efficiency: right-size for energy, choose green regions, schedule non-critical workloads off-peak, and report carbon metrics.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-green-cloud`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Green Cloud & Sustainability Optimizer', 'description': 'Optimize cloud workloads for carbon efficiency: right-size for energy, choose green regions, schedule non-critical workloads off-peak, and report carbon metrics.', 'serviceType': 'cloud', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Sustainability'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Green Cloud & Sustainability Optimizer Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$599/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$1,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Carbon footprint tracking per workload', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Carbon footprint tracking per workload'}}, {'@type': 'Question', 'name': 'Green region recommendation (AWS, Azure, GCP)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Green region recommendation (AWS, Azure, GCP)'}}, {'@type': 'Question', 'name': 'Right-sizing for energy efficiency', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Right-sizing for energy efficiency'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce cloud carbon footprint by 30-50%; Green regions use renewable energy; Off-peak scheduling reduces grid impact'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-green-cloud`} title="Green Cloud & Sustainability Optimizer" />
        <h1 className="text-4xl font-bold mb-6">🌿 Green Cloud & Sustainability Optimizer</h1>
        <p className="text-lg text-gray-300 mb-8">Optimize cloud workloads for carbon efficiency: right-size for energy, choose green regions, schedule non-critical workloads off-peak, and report carbon metrics.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Carbon footprint tracking per workload</li>
            <li>Green region recommendation (AWS, Azure, GCP)</li>
            <li>Right-sizing for energy efficiency</li>
            <li>Non-critical workload scheduling (off-peak)</li>
            <li>Carbon offset integration</li>
            <li>Sustainability reporting (ESG-aligned)</li>
            <li>API for carbon metrics in your dashboard</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce cloud carbon footprint by 30-50%</li>
            <li>Green regions use renewable energy</li>
            <li>Off-peak scheduling reduces grid impact</li>
            <li>ESG-aligned reporting for sustainability goals</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$1,999/mo/month</p>
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
