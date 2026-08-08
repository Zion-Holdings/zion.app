import { } from 'next/navigation';

export const metadata = {
  title: "Sustainable Supply Chain Radar - Zion Tech Group",
  description: "Supply-chain ESG tracking: carbon-intensity per supplier tier, green-alternative sourcing score, Scope 3 quantification, regulatory dashboard for CSRD and CBAM,",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-sustainable-supply-chain-radar`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sustainable Supply Chain Radar</h1>
        <p className="text-lg text-gray-300 mb-8">Supply-chain ESG tracking: carbon-intensity per supplier tier, green-alternative sourcing score, Scope 3 quantification, regulatory dashboard for CSRD and CBAM, and regulatory penalty simulator per scenario.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Supplier-scope carbon database from tier-1 to tier-n with Scope 3 quantification</li>
            <li>Green-alternative sourcing score with cost-impact tradeoff analysis</li>
            <li>CSRD and CBAM compliant auto-reports per quarter per jurisdiction</li>
            <li>Regulatory penalty simulator — cost-of-non-compliance per scenario</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Master Scope 3 emissions as a live dashboard, not a spreadsheet</li>
            <li>Find greener alternatives with cost-impact tradeoffs in 1 click</li>
            <li>80 percent reduction on regulatory report person-hours</li>
            <li>Show C-suite cost-of-inaction before sign-off</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$3999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$12999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$39999</p>
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
