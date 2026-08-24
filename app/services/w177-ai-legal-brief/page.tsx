import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Legal Brief Analyzer - Zion Tech Group",
  description: "Analyze legal briefs: argument extraction, precedent matching, strength scoring, counter-argument suggestions.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-ai-legal-brief`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Legal Brief Analyzer', 'description': 'Analyze legal briefs: argument extraction, precedent matching, strength scoring, counter-argument suggestions.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Legal'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Legal Brief Analyzer Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$2,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Argument and claim extraction', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Argument and claim extraction'}}, {'@type': 'Question', 'name': 'Precedent matching and citation analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Precedent matching and citation analysis'}}, {'@type': 'Question', 'name': 'Argument strength scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Argument strength scoring'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Analyze briefs 10x faster; Precedent matching finds relevant cases; Strength scoring prioritizes arguments'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-ai-legal-brief`} title="AI Legal Brief Analyzer" />
        <h1 className="text-4xl font-bold mb-6">⚖️ AI Legal Brief Analyzer</h1>
        <p className="text-lg text-gray-300 mb-8">Analyze legal briefs: argument extraction, precedent matching, strength scoring, counter-argument suggestions.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Argument and claim extraction</li>
            <li>Precedent matching and citation analysis</li>
            <li>Argument strength scoring</li>
            <li>Counter-argument suggestions</li>
            <li>Brief comparison between cases</li>
            <li>Timeline and fact extraction</li>
            <li>Integration with Clio</li>
            <li>Westlaw</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Analyze briefs 10x faster</li>
            <li>Precedent matching finds relevant cases</li>
            <li>Strength scoring prioritizes arguments</li>
            <li>Counter-argument prep strengthens cases</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$899/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
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
