import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "FeedbackLoop — Product Feedback - Zion Tech Group",
  description: "Collect, prioritize, and act on product feedback: feature request voting, roadmap communication, and changelog integration. Close the loop with users.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-feedbackloop`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'FeedbackLoop — Product Feedback', 'description': 'Collect, prioritize, and act on product feedback: feature request voting, roadmap communication, and changelog integration. Close the loop with users.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Product'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'FeedbackLoop — Product Feedback Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$29/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$79/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$249/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Feature request collection and voting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Feature request collection and voting'}}, {'@type': 'Question', 'name': 'Priority scoring and auto-tagging', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Priority scoring and auto-tagging'}}, {'@type': 'Question', 'name': 'Public roadmap with status updates', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Public roadmap with status updates'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Users vote on features they want; Priority scoring based on demand; Roadmap transparency builds trust'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-feedbackloop`} title="FeedbackLoop — Product Feedback" />
        <h1 className="text-4xl font-bold mb-6">💬 FeedbackLoop — Product Feedback</h1>
        <p className="text-lg text-gray-300 mb-8">Collect, prioritize, and act on product feedback: feature request voting, roadmap communication, and changelog integration. Close the loop with users.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Feature request collection and voting</li>
            <li>Priority scoring and auto-tagging</li>
            <li>Public roadmap with status updates</li>
            <li>Changelog integration from git/PR</li>
            <li>User segmentation for targeted feedback</li>
            <li>Duplicate detection and merging</li>
            <li>Integration with Jira, Linear, Intercom</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Users vote on features they want</li>
            <li>Priority scoring based on demand</li>
            <li>Roadmap transparency builds trust</li>
            <li>Changelog auto-generated from merges</li>
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
              <p className="text-2xl font-bold mb-2">$$79/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$249/mo/month</p>
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
