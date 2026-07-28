import { } from 'next/navigation';

export const metadata = {
  title: "Fintech Fraud Graph - Zion Tech Group",
  description: "Real-time fraud detection as a knowledge graph: entity resolution across accounts/IP/device/card fingerprints; ML scoring per transaction in <15ms; SAR report a",
  alternates: {
    canonical: `https://ziontechgroup.com/services/fintech-fraud-graph-09e63f42`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Fintech Fraud Graph</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time fraud detection as a knowledge graph: entity resolution across accounts/IP/device/card fingerprints; ML scoring per transaction in &lt;15ms; SAR report auto-drafting.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Entity resolution graph (accounts, IPs, devices, cards, emails)</li>
            <li>Real-time ML scoring per transaction &lt;15ms — ops_team alert threshold auto-tuned</li>
            <li>SAR / CTR auto-draft for regulators with supporting evidence chain</li>
            <li>Global rule engine — jurisdictions, card schemes, instant-payment schemes</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect synthetic-identity fraud 30–60 days earlier than rule-only systems</li>
            <li>Reduce false positives 40%+ with graph-based entity relationships</li>
            <li>Auto-generated SAR reports cut compliance team review time 80%</li>
            <li>Edge scoring &lt;15ms means no user-facing checkout delay</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$4999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$14999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$49999/month</p>
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
