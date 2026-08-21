import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Document Summarizer & Analyzer - Zion Tech Group",
  description: "Summarize and analyze long documents: research papers, legal filings, financial reports, and technical docs. Multi-level summaries, key insight extraction, and comparative analysis.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-ai-document-summarizer`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Document Summarizer & Analyzer', 'description': 'Summarize and analyze long documents: research papers, legal filings, financial reports, and technical docs. Multi-level summaries, key insight extraction, and comparative analysis.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Knowledge Management'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Document Summarizer & Analyzer Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$29/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$89/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$299/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Multi-level summarization (brief, standard, detailed)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-level summarization (brief, standard, detailed)'}}, {'@type': 'Question', 'name': 'Key insight and finding extraction', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Key insight and finding extraction'}}, {'@type': 'Question', 'name': 'Cross-document comparative analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cross-document comparative analysis'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Summarize 100-page docs in seconds; Multi-level detail for different audiences; Comparative analysis across documents'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-ai-document-summarizer`} title="AI Document Summarizer & Analyzer" />
        <h1 className="text-4xl font-bold mb-6">📝 AI Document Summarizer & Analyzer</h1>
        <p className="text-lg text-gray-300 mb-8">Summarize and analyze long documents: research papers, legal filings, financial reports, and technical docs. Multi-level summaries, key insight extraction, and comparative analysis.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-level summarization (brief, standard, detailed)</li>
            <li>Key insight and finding extraction</li>
            <li>Cross-document comparative analysis</li>
            <li>Custom summary templates by domain</li>
            <li>Entity and relationship extraction</li>
            <li>Query-focused summarization</li>
            <li>API with batch processing</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Summarize 100-page docs in seconds</li>
            <li>Multi-level detail for different audiences</li>
            <li>Comparative analysis across documents</li>
            <li>Custom templates for your domain</li>
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
              <p className="text-2xl font-bold mb-2">$$89/mo/month</p>
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
