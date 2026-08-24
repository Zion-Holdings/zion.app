import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "DigestIt — Internal Newsletter - Zion Tech Group",
  description: "Create and distribute internal newsletters: curated content, employee submissions, analytics, Slack/email distribution.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-digestion`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'DigestIt — Internal Newsletter', 'description': 'Create and distribute internal newsletters: curated content, employee submissions, analytics, Slack/email distribution.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Internal Communications'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'DigestIt — Internal Newsletter Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$9/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$29/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$99/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Editorial newsletter builder', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Editorial newsletter builder'}}, {'@type': 'Question', 'name': 'Employee contribution collection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Employee contribution collection'}}, {'@type': 'Question', 'name': 'Content curation from RSS and internal', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Content curation from RSS and internal'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Keep teams informed with curated content; Employee contributions drive engagement; Analytics show what resonates'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-digestion`} title="DigestIt — Internal Newsletter" />
        <h1 className="text-4xl font-bold mb-6">📰 DigestIt — Internal Newsletter</h1>
        <p className="text-lg text-gray-300 mb-8">Create and distribute internal newsletters: curated content, employee submissions, analytics, Slack/email distribution.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Editorial newsletter builder</li>
            <li>Employee contribution collection</li>
            <li>Content curation from RSS and internal</li>
            <li>Analytics on open and engagement</li>
            <li>Slack and email distribution</li>
            <li>Digest scheduling and archiving</li>
            <li>Integration with Slack</li>
            <li>Teams</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Keep teams informed with curated content</li>
            <li>Employee contributions drive engagement</li>
            <li>Analytics show what resonates</li>
            <li>Archiving for institutional memory</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$9/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$29/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
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
