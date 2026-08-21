import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "ScreenDoor — Feature Flag Platform - Zion Tech Group",
  description: "Feature flags and progressive rollouts: toggle features, A/B test, canary releases, and kill switches. Target by segment, gradual rollout, and instant rollback.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-screendoor`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'ScreenDoor — Feature Flag Platform', 'description': 'Feature flags and progressive rollouts: toggle features, A/B test, canary releases, and kill switches. Target by segment, gradual rollout, and instant rollback.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Developer Tools'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'ScreenDoor — Feature Flag Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$15/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$149/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Feature toggle management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Feature toggle management'}}, {'@type': 'Question', 'name': 'Progressive and canary rollouts', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Progressive and canary rollouts'}}, {'@type': 'Question', 'name': 'Segment targeting (user, geo, device, custom)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Segment targeting (user, geo, device, custom)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Deploy with confidence using feature flags; Canary releases limit blast radius; Kill switch rolls back in milliseconds'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-screendoor`} title="ScreenDoor — Feature Flag Platform" />
        <h1 className="text-4xl font-bold mb-6">🚩 ScreenDoor — Feature Flag Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Feature flags and progressive rollouts: toggle features, A/B test, canary releases, and kill switches. Target by segment, gradual rollout, and instant rollback.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Feature toggle management</li>
            <li>Progressive and canary rollouts</li>
            <li>Segment targeting (user, geo, device, custom)</li>
            <li>A/B testing with statistical significance</li>
            <li>Kill switch for instant rollback</li>
            <li>Server-side SDK (sub-5ms evaluation)</li>
            <li>Integration with LaunchDarkly, Unleash, Statsig</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Deploy with confidence using feature flags</li>
            <li>Canary releases limit blast radius</li>
            <li>Kill switch rolls back in milliseconds</li>
            <li>Sub-5ms evaluation, zero performance impact</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$15/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$49/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$149/mo/month</p>
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
