import { } from 'next/navigation';

export const metadata = {
  title: "AI Podcast Producer & Content Repurposing - Zion Tech Group",
  description: "AI-powered podcast production that edits audio, removes filler words, generates show notes, creates clips for social media, and repurposes episodes into blog po",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-podcast-producer`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Podcast Producer &amp; Content Repurposing</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered podcast production that edits audio, removes filler words, generates show notes, creates clips for social media, and repurposes episodes into blog posts and newsletters.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI audio editing (remove ums, ahs, long pauses)</li>
            <li>Automatic transcription with speaker detection</li>
            <li>AI show notes and summary generation</li>
            <li>Social media clip extraction and captioning</li>
            <li>Blog post and newsletter generation from episodes</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Produce podcasts 5x faster</li>
            <li>Repurpose every episode into 10+ content pieces</li>
            <li>Reach global audiences with AI translation</li>
            <li>Grow audience with optimized social clips</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$39/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$99/mo/month</p>
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
