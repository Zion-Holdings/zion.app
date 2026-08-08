import { } from 'next/navigation';

export const metadata = {
  title: "Cross-Lingual Meeting Bridge - Zion Tech Group",
  description: "Multi-language meeting platform: real-time simultaneous interpretation across 40+ languages and dialects, live bilingual captions, cultural-adaptation annotatio",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-cross-lingual-meeting-bridge`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cross-Lingual Meeting Bridge</h1>
        <p className="text-lg text-gray-300 mb-8">Multi-language meeting platform: real-time simultaneous interpretation across 40+ languages and dialects, live bilingual captions, cultural-adaptation annotations, silent-watch spectator mode, executive summary auto-generation.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Simultaneous interpretation across 40+ languages and dialects per meeting</li>
            <li>Live bilingual captions with per-speaker timestamped transcript</li>
            <li>Cultural-adaptation annotations including politeness norms and idiom equivalents</li>
            <li>Silent-watch spectator mode and executive summary auto-generated after each call</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Run one meeting and serve every team without interpreter coordination delays</li>
            <li>Full mixed-language participation without manual channel switching</li>
            <li>Cultural nuance layer reduces post-meeting misalignment across regions</li>
            <li>Transcripts indexed in the knowledge base — searchable forever</li>
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
              <p className="text-2xl font-bold mb-2">$5999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$17999</p>
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
