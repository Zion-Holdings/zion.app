import { } from 'next/navigation';

export const metadata = {
  title: "Multi-Channel Campaign Orchestrator - Zion Tech Group",
  description: "Orchestrate campaigns across email, SMS, WhatsApp, Telegram, and LinkedIn with sequence branching, per-channel A/B testing, delay per touchpoint, re-engagement windows, engaged versus unengaged segmen",
  alternates: {
    canonical: `https://ziontechgroup.com/services/automation-multi-channel-campaign-orchestrator`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Multi-Channel Campaign Orchestrator</h1>
        <p className="text-lg text-gray-300 mb-8">Orchestrate campaigns across email, SMS, WhatsApp, Telegram, and LinkedIn with sequence branching, per-channel A/B testing, delay per touchpoint, re-engagement windows, engaged versus unengaged segment filter, and unified inbound conversation inbox.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Sequence builder with channel-branch logic, A/B test per touch, and configurable delay steps</li>
            <li>Unified send and reply inbox — all channels in one conversation thread without context switching</li>
            <li>Re-engagement window auto-switches channel per non-engaged status per subscriber</li>
            <li>Campaign analytics per channel with path dropout funnel visualisation and MQL revenue tracking</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Unified inbox halves the time spent managing five channels as one conversation</li>
            <li>A/B test within sequence means optimising subject lines on 20 percent sample before full blast</li>
            <li>Campaign analytics link revenue back to campaign last-touch to prove MQL ROI</li>
            <li>Segment save and reuse means no manual re-filtering before each quarterly campaign launch</li>
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
