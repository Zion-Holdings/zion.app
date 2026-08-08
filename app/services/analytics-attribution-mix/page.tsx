import { } from 'next/navigation';

export const metadata = {
  title: "Analytics Attribution & Marketing Mix Modeling - Zion Tech Group",
  description: "Multi-touch attribution (first/last/linear/time-decay/position-based) + marketing mix modeling. CAC, LTV, ROAS per channel, campaign, cohort. Recommended budget allocation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/analytics-attribution-mix`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Analytics Attribution &amp; Marketing Mix Modeling</h1>
        <p className="text-lg text-gray-300 mb-8">Multi-touch attribution (first/last/linear/time-decay/position-based) + marketing mix modeling. CAC, LTV, ROAS per channel, campaign, cohort. Recommended budget allocation.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-touch attribution per channel/campaign</li>
            <li>Marketing mix modeling per campaign period</li>
            <li>CAC/LTV/ROAS per campaign + cohort</li>
            <li>Channel optimal budget allocation rec</li>
            <li>Weekly executive report + monthly deep-dive</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Know true ROI per channel, not just last-click</li>
            <li>Identify highest-ROI channels before overspending</li>
            <li>Cut CPA by 20-40% by reallocating spend</li>
            <li>Board-level marketing metrics transparent attribution</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$699</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2299</p>
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
