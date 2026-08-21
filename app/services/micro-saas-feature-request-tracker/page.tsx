import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "FeatureVault — Feature Request Tracker - Zion Tech Group",
  description: "Customer feedback and feature request management platform. Public roadmap, voting boards, and automatic categorization of feedback using AI. Integrates with Intercom, Zendesk, and Slack.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-feature-request-tracker`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'FeatureVault — Feature Request Tracker', 'description': 'Customer feedback and feature request management platform. Public roadmap, voting boards, and automatic categorization of feedback using AI. Integrates with Intercom, Zendesk, and Slack.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'SaaS'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'FeatureVault — Feature Request Tracker Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$149/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Public roadmap with voting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Public roadmap with voting'}}, {'@type': 'Question', 'name': 'AI-powered feedback categorization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI-powered feedback categorization'}}, {'@type': 'Question', 'name': 'Intercom/Zendesk/Slack integration', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Intercom/Zendesk/Slack integration'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Prioritize features by customer demand; Reduce support ticket volume; Increase customer engagement'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-feature-request-tracker`} title="FeatureVault — Feature Request Tracker" />
        <h1 className="text-4xl font-bold mb-6">🗳️ FeatureVault — Feature Request Tracker</h1>
        <p className="text-lg text-gray-300 mb-8">Customer feedback and feature request management platform. Public roadmap, voting boards, and automatic categorization of feedback using AI. Integrates with Intercom, Zendesk, and Slack.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Public roadmap with voting</li>
            <li>AI-powered feedback categorization</li>
            <li>Intercom/Zendesk/Slack integration</li>
            <li>Customer segmentation by plan</li>
            <li>Changelog and release notes</li>
            <li>Duplicate request merging</li>
            <li>ROI scoring for features</li>
            <li>Custom branding and domain</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Prioritize features by customer demand</li>
            <li>Reduce support ticket volume</li>
            <li>Increase customer engagement</li>
            <li>Data-driven product decisions</li>
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
