import { } from 'next/navigation';

export const metadata = {
  title: "Image and Video Search Engine - Zion Tech Group",
  description: "Visual search engine for media libraries: CLIP-compatible index built from images and video frames up to 60 frames per second; multi-modal query with text or im",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-image-video-search-engine`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Image and Video Search Engine</h1>
        <p className="text-lg text-gray-300 mb-8">Visual search engine for media libraries: CLIP-compatible index built from images and video frames up to 60 frames per second; multi-modal query with text or image; auto-cluster same-scene per video clip; people, location, and label auto-tags per frame.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>CLIP-compatible embedding index from any image or video frame up to 60 frames per second</li>
            <li>Multi-modal retrieval — text-to-image, image-to-image, and image-to-video query supported</li>
            <li>Parent-album auto-cluster — same-scene and same-people clips auto-grouped per video</li>
            <li>Auto-detected people, location, and label tags per frame with searchable metadata</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Search a 10-million-image library as quickly as Google Images</li>
            <li>Complete commercial rights asset audit in 1 day versus 1 week of manual curation</li>
            <li>Parent-album auto-clustering saves archivists 20 hours of manual work per first batch</li>
            <li>Per-video embedding saved permanently means visual duplicate finder across years of archive</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$8999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$29999</p>
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
