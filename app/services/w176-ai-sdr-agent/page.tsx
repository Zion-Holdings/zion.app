import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI SDR & Prospecting Agent - Zion Tech Group",
  description: "AI sales development rep: research prospects, write personalized outreach, manage sequences, and book meetings. Replaces 3 SDRs for a fraction of the cost.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-ai-sdr-agent`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI SDR & Prospecting Agent', 'description': 'AI sales development rep: research prospects, write personalized outreach, manage sequences, and book meetings. Replaces 3 SDRs for a fraction of the cost.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Sales'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI SDR & Prospecting Agent Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$4,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI prospect research and qualification', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI prospect research and qualification'}}, {'@type': 'Question', 'name': 'Personalized email and LinkedIn outreach', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Personalized email and LinkedIn outreach'}}, {'@type': 'Question', 'name': 'Multi-step sequence management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-step sequence management'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI SDR operates 24/7 without burnout; Personalized at scale, not template spam; Response routing to right rep instantly'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-ai-sdr-agent`} title="AI SDR & Prospecting Agent" />
        <h1 className="text-4xl font-bold mb-6">🎯 AI SDR & Prospecting Agent</h1>
        <p className="text-lg text-gray-300 mb-8">AI sales development rep: research prospects, write personalized outreach, manage sequences, and book meetings. Replaces 3 SDRs for a fraction of the cost.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI prospect research and qualification</li>
            <li>Personalized email and LinkedIn outreach</li>
            <li>Multi-step sequence management</li>
            <li>Meeting booking with calendar integration</li>
            <li>Response classification and routing</li>
            <li>Lead scoring and priority ranking</li>
            <li>Integration with Salesforce, HubSpot, Outreach, Salesloft</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI SDR operates 24/7 without burnout</li>
            <li>Personalized at scale, not template spam</li>
            <li>Response routing to right rep instantly</li>
            <li>Fraction of an SDR cost with more output</li>
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
              <p className="text-2xl font-bold mb-2">$$4,999/mo/month</p>
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
