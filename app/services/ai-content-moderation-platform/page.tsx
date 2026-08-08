import { } from 'next/navigation';

export const metadata = {
  title: "AI Content Moderation Platform - Zion Tech Group",
  description: "Multi-modal moderation (text/image/video): NSFW, hate-speech, PII, copyright, brand-safety classifier; moderation queue + human-review.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-content-moderation-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Content Moderation Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Multi-modal moderation (text/image/video): NSFW, hate-speech, PII, copyright, brand-safety classifier; moderation queue + human-review.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Text/image/video multi-modal classifier</li>
            <li>NSFW + hate-speech + PII + copyright tagging</li>
            <li>Auto-approve with confidence score threshold</li>
            <li>Moderation queue + human-review escalations</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-moderate UGC at scale, no human bottleneck</li>
            <li>NSFW/hate-speech caught before published</li>
            <li>PII detected = prevent data breach in UGC</li>
            <li>Approve high-confidence = spend less human-review time</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$4999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$14999</p>
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
