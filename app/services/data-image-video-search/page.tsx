import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Image & Video Semantic Search - Zion Tech Group",
  description: "CLIP + multi-modal embedding semantic search across image and video libraries: object/scene/action detection, temporal segmentation, thumbnail clustering, natural-language query support, and vector-powered similarity matching at scale.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-image-video-search`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/data-image-video-search`} title="Image & Video Semantic Search" />
        <h1 className="text-4xl font-bold mb-6">♿ Image & Video Semantic Search</h1>
        <p className="text-lg text-gray-300 mb-8">CLIP + multi-modal embedding semantic search across image and video libraries: object/scene/action detection, temporal segmentation, thumbnail clustering, natural-language query support, and vector-powered similarity matching at scale.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-modal CLIP embeddings for image and video frame similarity</li>
            <li>Object, scene, action detection, OCR text extraction from frames and video</li>
            <li>Temporal segmentation: shot boundary, scene change, key-frame extraction per video clip</li>
            <li>Natural language query: 3 words to find all videos mentioning X brand or Y activity</li>
            <li>Vector index: Milvus or Pinecone; scales to 100M+ clips with sub-10ms query</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with image & video semantic search</li>
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
              <p className="text-2xl font-bold mb-2">$$149/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$449/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$1,499/mo/month</p>
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
