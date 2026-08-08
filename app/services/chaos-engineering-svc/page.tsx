import { } from 'next/navigation';

export const metadata = {
  title: "Chaos Engineering & Resilience Testing - Zion Tech Group",
  description: "Proactive chaos experiments: inject failures (latency, pod kill, DB disconnect) on non-production to validate recovery paths. Auto-generate incident response pl",
  alternates: {
    canonical: `https://ziontechgroup.com/services/chaos-engineering-svc`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Chaos Engineering &amp; Resilience Testing</h1>
        <p className="text-lg text-gray-300 mb-8">Proactive chaos experiments: inject failures (latency, pod kill, DB disconnect) on non-production to validate recovery paths. Auto-generate incident response playbooks from results.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated chaos experiment runner (Litmus/Chaos Monkey)</li>
            <li>Failure scenario library: network, pod, DB, region</li>
            <li>Auto-generated recovery playbook</li>
            <li>Blast-radius analysis + dependency mapping</li>
            <li>Resilience scorecard + monthly score trend</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Prevent outages before they hit production</li>
            <li>Prove recovery SLAs against reality</li>
            <li>Build team muscle memory for incident response</li>
            <li>Attain 99.99%+ uptime confidence</li>
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
              <p className="text-2xl font-bold mb-2">$749</p>
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
