
export const metadata = {
  title: "Voice-First CRM & Sales Assistant - Zion Tech Group",
  description: "Voice-first CRM for field sales and inside sales teams: automatic call transcription, real-time deal coaching via live prompt injection, pipeline update via voi",
  alternates: {
    canonical: `https://ziontechgroup.com/services/voice-first-crm--sales-assistant-fa0771d5`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Voice-First CRM &amp; Sales Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">Voice-first CRM for field sales and inside sales teams: automatic call transcription, real-time deal coaching via live prompt injection, pipeline update via voice command, contact enrichment, and post-call auto-summary + next-step action items.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time call transcription with speaker separation across phone, Zoom, Teams</li>
            <li>Live deal coaching: sales rep hears contextual prompts mid-call via earpiece or screen pop-up</li>
            <li>Voice command CRM update: update stage, log notes, create task — all hands-free</li>
            <li>Auto-contact enrichment via Clearbit, ZoomInfo, LinkedIn — contact record complete in 3 seconds</li>
            <li>Post-call: auto-summary, action items, next-step suggestions delivered to Slack/CRM within 30 seconds</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Sales reps spend 70% less time on CRM data entry — voice commands do it automatically</li>
            <li>Live coaching during calls closes 15-25% more deals according to Gong and Chorus benchmark data</li>
            <li>Get full-deal visibility in real time: pipeline dashboard updated by voice, not by end-of-week data entry</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$49/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$149/month</p>
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
