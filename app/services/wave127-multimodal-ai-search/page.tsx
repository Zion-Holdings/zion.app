import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Multimodal AI Search - Zion Tech Group",
  description: "Unified semantic search across text, images, video, and audio within a single query. Vision-language models understand visual content, speech-to-text handles audio, and cross-modal ranking surfaces the most relevant results regardless of format.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave127-multimodal-ai-search`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/wave127-multimodal-ai-search`} title="Multimodal AI Search" />
        <h1 className="text-4xl font-bold mb-6">🔎 Multimodal AI Search</h1>
        <p className="text-lg text-gray-300 mb-8">Unified semantic search across text, images, video, and audio within a single query. Vision-language models understand visual content, speech-to-text handles audio, and cross-modal ranking surfaces the most relevant results regardless of format.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cross-modal search (text → image, image → video, etc.)</li>
            <li>Vision-language model for visual understanding</li>
            <li>Speech-to-text audio indexing & search</li>
            <li>Video scene detection & timestamped retrieval</li>
            <li>Hybrid semantic + keyword ranking</li>
            <li>Real-time indexing with incremental updates</li>
            <li>Fine-tuning on enterprise domain data</li>
            <li>SaaS & self-hosted deployment options</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find information regardless of format — text, image, or video</li>
            <li>Search visual assets without manual tagging</li>
            <li>Reduce time-to-insight across unstructured data</li>
            <li>Enterprise-grade relevance with domain fine-tuning</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$7997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$16997/month</p>
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
      </div>
    </main>
  );
}
