import { } from 'next/navigation';

export const metadata = {
  title: "Threat Intelligence Platform - Zion Tech Group",
  description: "Curated IOC/IOA feed, TI graph, MITRE ATT&CK mapping, automated SIEM rule generation, and TI alert enrichment pipeline.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-threat-intelligence-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Threat Intelligence Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Curated IOC/IOA feed, TI graph, MITRE ATT&amp;CK mapping, automated SIEM rule generation, and TI alert enrichment pipeline.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>5000+ IOC feed (IP/Domain/URL/Hash)</li>
            <li>MITRE ATT&amp;CK technique coverage matrix</li>
            <li>Auto-generate SIEM rule per new IOC</li>
            <li>TI enrichment API for alert enrichment pipeline</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Context-rich alerts without manual TI lookup</li>
            <li>Map every alert to MITRE technique for hunt</li>
            <li>Feed freshness = actionable TI</li>
            <li>Zero false-positive noise from curated IOC</li>
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
