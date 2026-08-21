import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "CostLens — Usage-Based Cost Calculator - Zion Tech Group",
  description: "Interactive pricing calculator widget for usage-based SaaS. Real-time cost estimation, scenario comparison, and embed in any site with one script tag.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-usage-based-cost-calculator`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'CostLens — Usage-Based Cost Calculator', 'description': 'Interactive pricing calculator widget for usage-based SaaS. Real-time cost estimation, scenario comparison, and embed in any site with one script tag.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'SaaS'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'CostLens — Usage-Based Cost Calculator Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$149/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$399/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Drag-and-drop calculator builder', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Drag-and-drop calculator builder'}}, {'@type': 'Question', 'name': 'Real-time cost updates', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time cost updates'}}, {'@type': 'Question', 'name': 'Scenario comparison tables', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Scenario comparison tables'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Increase pricing page conversions; Reduce sales cycle length; Self-service pricing transparency'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-usage-based-cost-calculator`} title="CostLens — Usage-Based Cost Calculator" />
        <h1 className="text-4xl font-bold mb-6">💲 CostLens — Usage-Based Cost Calculator</h1>
        <p className="text-lg text-gray-300 mb-8">Interactive pricing calculator widget for usage-based SaaS. Real-time cost estimation, scenario comparison, and embed in any site with one script tag.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Drag-and-drop calculator builder</li>
            <li>Real-time cost updates</li>
            <li>Scenario comparison tables</li>
            <li>Embeddable JavaScript widget</li>
            <li>Currency conversion</li>
            <li>Integration with Stripe billing</li>
            <li>PDF export for proposals</li>
            <li>Analytics on calculator usage</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase pricing page conversions</li>
            <li>Reduce sales cycle length</li>
            <li>Self-service pricing transparency</li>
            <li>Better lead qualification</li>
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
              <p className="text-2xl font-bold mb-2">$$399/mo/month</p>
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
