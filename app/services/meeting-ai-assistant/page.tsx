import { } from 'next/navigation';

export const metadata = {
  title: "Meeting AI Assistant (Record, Transcribe, Summarize) - Zion Tech Group",
  description: "Automatic meeting assistant that records, transcribes with speaker ID, generates action items, decisions, and summaries; integrates with Zoom, Teams, Google Mee",
  alternates: {
    canonical: `https://ziontechgroup.com/services/meeting-ai-assistant`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Meeting AI Assistant (Record, Transcribe, Summarize)</h1>
        <p className="text-lg text-gray-300 mb-8">Automatic meeting assistant that records, transcribes with speaker ID, generates action items, decisions, and summaries; integrates with Zoom, Teams, Google Meet.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud recording &amp; real-time transcription</li>
            <li>Speaker identification &amp; diarization</li>
            <li>Action item extraction with assignees</li>
            <li>Decision log &amp; key quote highlights</li>
            <li>Sync to Notion/Confluence/ClickUp</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Never miss an action item again</li>
            <li>Reduce meeting follow-up time by 80%</li>
            <li>Search across all past meeting transcripts</li>
            <li>Onboard new team members with context</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$0</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$99</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$399</p>
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
