import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Meeting Intelligence Platform - Zion Tech Group",
  description: "AI that joins every meeting: real-time transcription, action item extraction, decision logging, and follow-up automation. Works with Zoom, Teams, Google Meet, and Webex.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-ai-meeting-intelligence`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Meeting Intelligence Platform', 'description': 'AI that joins every meeting: real-time transcription, action item extraction, decision logging, and follow-up automation. Works with Zoom, Teams, Google Meet, and Webex.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Productivity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Meeting Intelligence Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$29/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$79/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$249/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Real-time transcription with speaker IDs', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time transcription with speaker IDs'}}, {'@type': 'Question', 'name': 'Action item extraction and assignment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Action item extraction and assignment'}}, {'@type': 'Question', 'name': 'Decision and key takeaway logging', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Decision and key takeaway logging'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Never lose a meeting decision again; Action items captured and assigned automatically; Searchable archive of all organizational knowledge'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-ai-meeting-intelligence`} title="AI Meeting Intelligence Platform" />
        <h1 className="text-4xl font-bold mb-6">🎯 AI Meeting Intelligence Platform</h1>
        <p className="text-lg text-gray-300 mb-8">AI that joins every meeting: real-time transcription, action item extraction, decision logging, and follow-up automation. Works with Zoom, Teams, Google Meet, and Webex.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time transcription with speaker IDs</li>
            <li>Action item extraction and assignment</li>
            <li>Decision and key takeaway logging</li>
            <li>Automated follow-up email drafting</li>
            <li>Searchable meeting knowledge base</li>
            <li>Meeting effectiveness scoring</li>
            <li>CRM integration for customer meetings</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Never lose a meeting decision again</li>
            <li>Action items captured and assigned automatically</li>
            <li>Searchable archive of all organizational knowledge</li>
            <li>Meeting effectiveness data drives improvement</li>
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
