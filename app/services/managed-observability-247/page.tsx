import { } from 'next/navigation';

export const metadata = {
  title: "Managed Observability 24/7 - Zion Tech Group",
  description: "Continuous logs, metrics, and tracing for apps and infrastructure with alerting and on-call rotation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/managed-observability-247`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Managed Observability 24/7</h1>
        <p className="text-lg text-gray-300 mb-8">Continuous logs, metrics, and tracing for apps and infrastructure with alerting and on-call rotation. Proactive detection before customers notice outages.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Metrics, logs, and distributed tracing</li>
            <li>PagerDuty/OpsGenie integration</li>
            <li>SLO-based alerting</li>
            <li>On-call rotation and runbooks</li>
            <li>Postmortem and trend reporting</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect issues before customers complain</li>
            <li>Faster root-cause analysis</li>
            <li>Clear SLO ownership</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$349/mo</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$899/mo</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2,499/mo</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/contact" className="btn-primary text-lg px-10 py-4">Get a Free Proposal →</a>
        </div>
      </div>
    </main>
  );
}
