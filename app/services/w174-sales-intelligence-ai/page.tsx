import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Sales Intelligence & Automation - Zion Tech Group",
  description: "AI-powered sales: lead prioritization, call coaching, deal intelligence, and automated CRM updates. Increase win rates by 20% with AI-guided selling.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-sales-intelligence-ai`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Sales Intelligence & Automation', 'description': 'AI-powered sales: lead prioritization, call coaching, deal intelligence, and automated CRM updates. Increase win rates by 20% with AI-guided selling.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Sales'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Sales Intelligence & Automation Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$599/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$1,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI lead scoring and prioritization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI lead scoring and prioritization'}}, {'@type': 'Question', 'name': 'Call coaching with real-time suggestions', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Call coaching with real-time suggestions'}}, {'@type': 'Question', 'name': 'Deal intelligence and risk assessment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Deal intelligence and risk assessment'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Increase win rates by 20% with AI guidance; Lead scoring focuses reps on best opportunities; Automated CRM updates reduce admin by 50%'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-sales-intelligence-ai`} title="AI Sales Intelligence & Automation" />
        <h1 className="text-4xl font-bold mb-6">📊 AI Sales Intelligence & Automation</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered sales: lead prioritization, call coaching, deal intelligence, and automated CRM updates. Increase win rates by 20% with AI-guided selling.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI lead scoring and prioritization</li>
            <li>Call coaching with real-time suggestions</li>
            <li>Deal intelligence and risk assessment</li>
            <li>Automated CRM data entry and updates</li>
            <li>Competitive intelligence for deals</li>
            <li>Pipeline forecasting with AI accuracy</li>
            <li>Integration with Salesforce, HubSpot, Outreach, Gong</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase win rates by 20% with AI guidance</li>
            <li>Lead scoring focuses reps on best opportunities</li>
            <li>Automated CRM updates reduce admin by 50%</li>
            <li>Deal intelligence catches at-risk deals early</li>
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
