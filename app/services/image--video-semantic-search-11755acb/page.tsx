
export const metadata = {
  title: "Image & Video Semantic Search - Zion Tech Group",
  description: "CLIP + multi-modal embedding semantic search across image and video libraries: object/scene/action detection, temporal segmentation, thumbnail clustering, natur",
  alternates: {
    canonical: `https://ziontechgroup.com/services/image--video-semantic-search-11755acb`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Image &amp; Video Semantic Search</h1>
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
            <li>Search video archives by description: find the clip of X product in Y city in 5 seconds vs. manual review</li>
            <li>Build visual product search for e-commerce: zero nuisance from differing angle, lighting, crop</li>
            <li>Auto-curate branded content: find all brand mentions in video without human review</li>
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
              <p className="text-2xl font-bold mb-2">$749/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
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
