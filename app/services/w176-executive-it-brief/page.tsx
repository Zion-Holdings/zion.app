import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Executive IT Briefing Service - Zion Tech Group",
  description: "Monthly executive briefings on IT health, security posture, cost trends, and strategic recommendations. Board-ready reports without the technical jargon.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-executive-it-brief`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Executive IT Briefing Service', 'description': 'Monthly executive briefings on IT health, security posture, cost trends, and strategic recommendations. Board-ready reports without the technical jargon.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Executive'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Executive IT Briefing Service Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$2,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$7,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Monthly IT health scorecard', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Monthly IT health scorecard'}}, {'@type': 'Question', 'name': 'Security posture summary (non-technical)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Security posture summary (non-technical)'}}, {'@type': 'Question', 'name': 'Cloud cost trends and forecasting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cloud cost trends and forecasting'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'IT insights in business language; Board-ready without technical translation; Proactive recommendations, not just status'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-executive-it-brief`} title="Executive IT Briefing Service" />
        <h1 className="text-4xl font-bold mb-6">📊 Executive IT Briefing Service</h1>
        <p className="text-lg text-gray-300 mb-8">Monthly executive briefings on IT health, security posture, cost trends, and strategic recommendations. Board-ready reports without the technical jargon.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Monthly IT health scorecard</li>
            <li>Security posture summary (non-technical)</li>
            <li>Cloud cost trends and forecasting</li>
            <li>Strategic recommendation roadmap</li>
            <li>Risk register and mitigation status</li>
            <li>Board-ready presentation format</li>
            <li>Quarterly deep-dive workshops</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>IT insights in business language</li>
            <li>Board-ready without technical translation</li>
            <li>Proactive recommendations, not just status</li>
            <li>Trends reveal direction, not just snapshots</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$2,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$7,999/mo/month</p>
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
