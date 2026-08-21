import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "FeatureVote — Feature Request Voting Board - Zion Tech Group",
  description: "Public feature request board with voting, status tracking, and roadmap publishing. Help product teams prioritize based on real customer demand.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-feature-request-voting`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'FeatureVote — Feature Request Voting Board', 'description': 'Public feature request board with voting, status tracking, and roadmap publishing. Help product teams prioritize based on real customer demand.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'SaaS'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'FeatureVote — Feature Request Voting Board Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$29/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$99/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$299/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Public voting board', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Public voting board'}}, {'@type': 'Question', 'name': 'Duplicate detection and merging', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Duplicate detection and merging'}}, {'@type': 'Question', 'name': 'Status tracking (planned, in-progress, done)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Status tracking (planned, in-progress, done)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Build what customers actually want; Reduce support ticket volume; Transparent product roadmap'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-feature-request-voting`} title="FeatureVote — Feature Request Voting Board" />
        <h1 className="text-4xl font-bold mb-6">🗳️ FeatureVote — Feature Request Voting Board</h1>
        <p className="text-lg text-gray-300 mb-8">Public feature request board with voting, status tracking, and roadmap publishing. Help product teams prioritize based on real customer demand.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Public voting board</li>
            <li>Duplicate detection and merging</li>
            <li>Status tracking (planned, in-progress, done)</li>
            <li>Public roadmap publishing</li>
            <li>Integration with Intercom, Slack, Zendesk</li>
            <li>Admin moderation tools</li>
            <li>Email notifications for voters</li>
            <li>Embeddable widget</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Build what customers actually want</li>
            <li>Reduce support ticket volume</li>
            <li>Transparent product roadmap</li>
            <li>Increase customer engagement</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$29/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
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
