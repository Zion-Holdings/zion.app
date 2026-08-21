import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "The Offer Engine - Zion Tech Group",
  description: "AI-powered offer management: dynamically generate, test, and optimize personalized offers, discounts, and promotions across channels. Real-time A/B testing, conversion lift forecasting, and margin-safe pricing recommendations.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/offer-engine`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'The Offer Engine', 'description': 'AI-powered offer management: dynamically generate, test, and optimize personalized offers, discounts, and promotions across channels. Real-time A/B testing, conversion lift forecasting, and margin-safe pricing recommendations.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'General'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'The Offer Engine Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI-powered offer generation from product catalog + audience segments', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI-powered offer generation from product catalog + audience segments'}}, {'@type': 'Question', 'name': 'Multi-armed bandit + lift simulation for conversion uplift estimates', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-armed bandit + lift simulation for conversion uplift estimates'}}, {'@type': 'Question', 'name': 'Margin-safe pricing recommendations with floor/ceiling guardrails', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Margin-safe pricing recommendations with floor/ceiling guardrails'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Increase promo conversion rate by 40-80% vs static discounts; Preserve margin by capping discounts to optimal % per segment; Eliminate offer sprawl — auto-prune underperforming variants'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/offer-engine`} title="The Offer Engine" />
        <h1 className="text-4xl font-bold mb-6">🔥 The Offer Engine</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered offer management: dynamically generate, test, and optimize personalized offers, discounts, and promotions across channels. Real-time A/B testing, conversion lift forecasting, and margin-safe pricing recommendations.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered offer generation from product catalog + audience segments</li>
            <li>Multi-armed bandit + lift simulation for conversion uplift estimates</li>
            <li>Margin-safe pricing recommendations with floor/ceiling guardrails</li>
            <li>Real-time A/B testing with automatic winner promotion</li>
            <li>Audience-personalized offers by cohort/segment/behavior</li>
            <li>Coupon code generator with expiry, usage caps, channel gating</li>
            <li>Attribution-linked ROI analysis per offer variant</li>
            <li>CRM, e-commerce, and ad platform integrations</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase promo conversion rate by 40-80% vs static discounts</li>
            <li>Preserve margin by capping discounts to optimal % per segment</li>
            <li>Eliminate offer sprawl — auto-prune underperforming variants</li>
            <li>Shorten test cycles from weeks to hours with real-time bandits</li>
            <li>Marketing team self-serve via offer dashboard</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,499/mo/month</p>
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
