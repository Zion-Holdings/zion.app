import { } from 'next/navigation';

export const metadata = {
  title: "Process Mining Intelligence - Zion Tech Group",
  description: "Event-log based process discovery: take event-logs from ERP, CRM, BPM systems, discover actual vs. intended process maps, identify bottleneck and deviation, qua",
  alternates: {
    canonical: `https://ziontechgroup.com/services/process-mining-intelligence-356f4f2f`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Process Mining Intelligence</h1>
        <p className="text-lg text-gray-300 mb-8">Event-log based process discovery: take event-logs from ERP, CRM, BPM systems, discover actual vs. intended process maps, identify bottleneck and deviation, quantify handoff wait time, change-impact simulation.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Event-log ingestion from ERP, CRM, and BPM — 10+ standard connectors</li>
            <li>Process discovery — actual vs. intended step map with frequency breakdown</li>
            <li>Bottleneck identification — highlight choke points on process with deviation rate</li>
            <li>Change-impact simulation — predict how a new step or rule change affects total cost and lead time</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find the 20% of process steps that consume 80% of cycle time</li>
            <li>Run change simulation before deploying to production — score change risk before approval</li>
            <li>Compliance audit trail — every generation and run timestamped schema-ready</li>
            <li>Process mining means DRI returns to business unit with insights they trust without translator</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$2999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$9999/month</p>
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
