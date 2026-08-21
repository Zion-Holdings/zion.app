import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Multimodal Video Understanding Engine - Zion Tech Group",
  description: "End-to-end video understanding pipeline: per-frame CLIP + action recognition, temporal scene segmentation, automatic transcript + OCR extraction, chapter/time-stamped topic indexing, and natural-language search across full video library.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-multimodal-video-understanding`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Multimodal Video Understanding Engine', 'description': 'End-to-end video understanding pipeline: per-frame CLIP + action recognition, temporal scene segmentation, automatic transcript + OCR extraction, chapter/time-stamped topic indexing, and natural-language search across full video library.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'General'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Multimodal Video Understanding Engine Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$79/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$249/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$799/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Frame-level CLIP embeddings + action-recognition time-series across entire video', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Frame-level CLIP embeddings + action-recognition time-series across entire video'}}, {'@type': 'Question', 'name': 'Scene-change detection + automatic key-frame extraction per 30-second segment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Scene-change detection + automatic key-frame extraction per 30-second segment'}}, {'@type': 'Question', 'name': 'Auto-generated transcript + OCR with chapter marker overlay', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Auto-generated transcript + OCR with chapter marker overlay'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with multimodal video understanding engine; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-multimodal-video-understanding`} title="Multimodal Video Understanding Engine" />
        <h1 className="text-4xl font-bold mb-6">♿ Multimodal Video Understanding Engine</h1>
        <p className="text-lg text-gray-300 mb-8">End-to-end video understanding pipeline: per-frame CLIP + action recognition, temporal scene segmentation, automatic transcript + OCR extraction, chapter/time-stamped topic indexing, and natural-language search across full video library.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Frame-level CLIP embeddings + action-recognition time-series across entire video</li>
            <li>Scene-change detection + automatic key-frame extraction per 30-second segment</li>
            <li>Auto-generated transcript + OCR with chapter marker overlay</li>
            <li>Natural-language question answering across video with time-stamped answer snippets</li>
            <li>Batch ingest: 1000+ video files automatically processed and indexed within hours</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with multimodal video understanding engine</li>
            <li>Improve operational efficiency</li>
            <li>Scale without complexity</li>
            <li>Enterprise-grade reliability</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$79/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$249/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$799/mo/month</p>
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
