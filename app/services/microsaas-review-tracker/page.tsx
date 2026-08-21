import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "ReviewTracker - Review Management - Zion Tech Group",
  description: "Monitor and respond to online reviews across Google, Yelp, Trustpilot, and industry-specific platforms. AI-suggested responses and sentiment tracking.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/microsaas-review-tracker`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'ReviewTracker - Review Management', 'description': 'Monitor and respond to online reviews across Google, Yelp, Trustpilot, and industry-specific platforms. AI-suggested responses and sentiment tracking.', 'serviceType': 'Micro-SaaS', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Marketing'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'ReviewTracker - Review Management Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$25/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$69/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$129/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Multi-platform Monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-platform Monitoring'}}, {'@type': 'Question', 'name': 'AI Response Suggestions', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI Response Suggestions'}}, {'@type': 'Question', 'name': 'Sentiment Tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Sentiment Tracking'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Boost online reputation; Save time on responses; Track sentiment trends'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/microsaas-review-tracker`} title="ReviewTracker - Review Management" />
        <h1 className="text-4xl font-bold mb-6">star ReviewTracker - Review Management</h1>
        <p className="text-lg text-gray-300 mb-8">Monitor and respond to online reviews across Google, Yelp, Trustpilot, and industry-specific platforms. AI-suggested responses and sentiment tracking.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-platform Monitoring</li>
            <li>AI Response Suggestions</li>
            <li>Sentiment Tracking</li>
            <li>Review Widget</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Boost online reputation</li>
            <li>Save time on responses</li>
            <li>Track sentiment trends</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$25/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$69/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$129/mo/month</p>
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
