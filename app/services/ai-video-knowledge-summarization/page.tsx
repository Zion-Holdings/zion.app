import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Video Summarization & Knowledge Extraction Platform - Zion Tech Group",
  description: "Automatically transcribe, summarize, and extract key insights from video content. Generate chapters, highlight reels, and searchable transcripts.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-video-knowledge-summarization`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Video Summarization & Knowledge Extraction Platform', 'description': 'Automatically transcribe, summarize, and extract key insights from video content. Generate chapters, highlight reels, and searchable transcripts.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'media'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Video Summarization & Knowledge Extraction Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$39/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$149/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Automatic transcription in 50+ languages', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automatic transcription in 50+ languages'}}, {'@type': 'Question', 'name': 'AI-generated video summaries and chapters', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI-generated video summaries and chapters'}}, {'@type': 'Question', 'name': 'Key moment and highlight detection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Key moment and highlight detection'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Turn hours of video into minutes of insights; Make all video content searchable; Never miss important decisions'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-video-knowledge-summarization`} title="AI Video Summarization & Knowledge Extraction Platform" />
        <h1 className="text-4xl font-bold mb-6">🎬 AI Video Summarization & Knowledge Extraction Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Automatically transcribe, summarize, and extract key insights from video content. Generate chapters, highlight reels, and searchable transcripts.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automatic transcription in 50+ languages</li>
            <li>AI-generated video summaries and chapters</li>
            <li>Key moment and highlight detection</li>
            <li>Searchable video knowledge base</li>
            <li>Action item and decision extraction</li>
            <li>Speaker identification and diarization</li>
            <li>Zoom, Teams, YouTube integration</li>
            <li>API for embedding</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Turn hours of video into minutes of insights</li>
            <li>Make all video content searchable</li>
            <li>Never miss important decisions</li>
            <li>Increase video content ROI by 5x</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$39/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$149/mo/month</p>
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
