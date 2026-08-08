import { } from 'next/navigation';

export const metadata = {
  title: "Chaos Engineering as a Service - Zion Tech Group",
  description: "Hosted chaos experiment platform: inject latency, packet loss, CPU or memory spikes, or database failover per Kubernetes namespace or instance, blast-radius boundary, auto-generated results report per",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-chaos-engineering-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Chaos Engineering as a Service</h1>
        <p className="text-lg text-gray-300 mb-8">Hosted chaos experiment platform: inject latency, packet loss, CPU or memory spikes, or database failover per Kubernetes namespace or instance, blast-radius boundary, auto-generated results report per scenario, and CI integration.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>50-plus experiment recipes — latency injection, packet loss, CPU, OOM, and DB failover</li>
            <li>Blast-radius boundary per namespace and region</li>
            <li>CI integration — run the chaos suite post-deploy per pull request</li>
            <li>Auto-generated results report per scenario per run with evidence screenshots</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Break before the requester breaks — find weak region connectors before release</li>
            <li>Run chaos suites in CI — no release merged without a passing chaos check</li>
            <li>Blast-radius limits mean experiments never take production down</li>
            <li>Regress dashboards keep the team honest on SLO targets during incidents</li>
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
              <p className="text-2xl font-bold mb-2">$5999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$17999</p>
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
