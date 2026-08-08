import { } from 'next/navigation';

export const metadata = {
  title: "Managed EDR + SIEM SOC Service - Zion Tech Group",
  description: "24/7 managed detection: EDR (CrowdStrike/SentinelOne) + SIEM (Splunk/QRadar/Sentinel), managed SOC tier 1/2 triage, kill-chain containment, executive monthly th",
  alternates: {
    canonical: `https://ziontechgroup.com/services/managed-edr-siem`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Managed EDR + SIEM SOC Service</h1>
        <p className="text-lg text-gray-300 mb-8">24/7 managed detection: EDR (CrowdStrike/SentinelOne) + SIEM (Splunk/QRadar/Sentinel), managed SOC tier 1/2 triage, kill-chain containment, executive monthly threat report.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>EDR deployment + 24/7 managed tuning</li>
            <li>SIEM log aggregation + correlation rules</li>
            <li>SOC Tier-1/2 triage with analyst SLA</li>
            <li>Automated kill-chain containment</li>
            <li>Monthly executive threat report + KPI dashboard</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 SOC coverage without hiring 24/7</li>
            <li>Containment time under 15 minutes</li>
            <li>Monthly threat report readable by execs</li>
            <li>Reduce false positives with AI-assisted triage</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$3999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$13999</p>
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
