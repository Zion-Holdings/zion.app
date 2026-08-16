
export const metadata = {
  title: "Predictive Maintenance Advisor - Zion Tech Group",
  description: "Asset failure prediction via sensor fusion + LLM explainability: when to replace, cost model, vendor recommendation, HSE risk assessment — all in plain language",
  alternates: {
    canonical: `https://ziontechgroup.com/services/predictive-maintenance-advisor-65713c8b`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Predictive Maintenance Advisor</h1>
        <p className="text-lg text-gray-300 mb-8">Asset failure prediction via sensor fusion + LLM explainability: when to replace, cost model, vendor recommendation, HSE risk assessment — all in plain language for maintenance managers.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multimodal sensor fusion (vibration, thermal, acoustic, current)</li>
            <li>Remaining-Useful-Life (RUL) distribution + 3-level severity flag per asset</li>
            <li>Plain-English root-cause narration with specific part + vendor suggestion</li>
            <li>HSE risk layer — safety impact assessed before maintenance is scheduled</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predict failures 14–90 days out with 85%+ accuracy</li>
            <li>No more premature or surprise downtime interruptions</li>
            <li>Root-cause narrative translates ML output for maintenance crews</li>
            <li>HSE layer ensures maintenance decisions don&#39;t create safety incidents</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$8999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$29999/month</p>
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
