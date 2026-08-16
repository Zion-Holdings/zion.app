
export const metadata = {
  title: "Multimodal Video Understanding Engine - Zion Tech Group",
  description: "End-to-end video understanding pipeline: per-frame CLIP + action recognition, temporal scene segmentation, automatic transcript + OCR extraction, chapter/time-s",
  alternates: {
    canonical: `https://ziontechgroup.com/services/multimodal-video-understanding-engine-c184f639`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Multimodal Video Understanding Engine</h1>
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
            <li>Search 10 000+ hours of video content in seconds — find any mention of any product or event instantly</li>
            <li>Auto-generated video chapter index reduces manual editing time from hours per video to zero</li>
            <li>Compliance review: find potentially sensitive visuals or language across all video content automatically</li>
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
