import { } from 'next/navigation';

export const metadata = {
  title: "Warehouse Automation Orchestrator - Zion Tech Group",
  description: "Orchestrate AS/RS, conveyors, AMRs, and pick-to-light systems with AI. Real-time slotting, wave optimization, and labor allocation for maximum throughput.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/warehouse-automation-orchestrator-25382a00`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Warehouse Automation Orchestrator</h1>
        <p className="text-lg text-gray-300 mb-8">Orchestrate AS/RS, conveyors, AMRs, and pick-to-light systems with AI. Real-time slotting, wave optimization, and labor allocation for maximum throughput.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-system orchestration</li>
            <li>Real-time slotting AI</li>
            <li>Wave optimization</li>
            <li>Labor allocation</li>
            <li>WMS/ERP integration</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase throughput 50%</li>
            <li>Reduce labor costs 30%</li>
            <li>Optimize space utilization</li>
            <li>Real-time visibility</li>
            <li>Peak season readiness</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$9999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$29999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$custom/month</p>
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