import { } from 'next/navigation';

export const metadata = {
  title: "AI Legal Document Redlining & Review - Zion Tech Group",
  description: "Automated contract review against playbooks: flag risky clauses, missing obligations, fee anomalies, and unfavorable T&Cs. Generates redlines + executive summary per document type (MSA, SOW, NDA, EULA",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-legal-redline`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Legal Document Redlining &amp; Review</h1>
        <p className="text-lg text-gray-300 mb-8">Automated contract review against playbooks: flag risky clauses, missing obligations, fee anomalies, and unfavorable T&amp;Cs. Generates redlines + executive summary per document type (MSA, SOW, NDA, EULA).</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Clause risk scoring vs your playbook</li>
            <li>Missing obligation auto-detection</li>
            <li>Fee/price anomaly flagging</li>
            <li>Redline stub generation per clause</li>
            <li>Executive summary + risk digest</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce contract review time 80%</li>
            <li>Catch hidden risk clauses before signature</li>
            <li>Standardize playbook adherence across contracts</li>
            <li>Free senior counsel bandwidth for high-value deals</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$299</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$799</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2499</p>
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
