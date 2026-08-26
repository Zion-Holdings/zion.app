import { } from 'next/navigation';

export const metadata = {
  title: "AI Supply Chain Risk Intelligence Platform - Zion Tech Group",
  description: "Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predi",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-supply-chain-risk-intelligence`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Supply Chain Risk Intelligence Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predicts disruptions 30-90 days in advance.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-tier supplier risk scoring and monitoring</li>
            <li>Geopolitical and regulatory change impact analysis</li>
            <li>Weather and natural disaster disruption forecasting</li>
            <li>Logistics bottleneck prediction with alternative routing</li>
            <li>Supplier financial health monitoring and early warning</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predict supply chain disruptions 30-90 days ahead</li>
            <li>Reduce stockouts by 45% with demand sensing</li>
            <li>Diversify supplier base with data-driven insights</li>
            <li>Meet ESG reporting requirements across supply chain</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2,999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$6,999/mo/month</p>
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
