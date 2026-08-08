import { } from 'next/navigation';

export const metadata = {
  title: "Disaster Recovery Orchestration - Zion Tech Group",
  description: "Zero-downtime DR orchestration across regions: continuous async replication, warm-standby spin-up automation in 30 seconds, failover runbook executor with per-step human-halt, DR test runner, and RPO ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-disaster-recovery-orchestration`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Disaster Recovery Orchestration</h1>
        <p className="text-lg text-gray-300 mb-8">Zero-downtime DR orchestration across regions: continuous async replication, warm-standby spin-up automation in 30 seconds, failover runbook executor with per-step human-halt, DR test runner, and RPO and RTO dashboard with graded SLA.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Asynchronous cross-region replication — zero-downtime writes at primary region</li>
            <li>Warm-standby spin-up from snapshot in 30 seconds with no manual scripts</li>
            <li>Failover runbook executor: 47-step runbook with per-step human halt available</li>
            <li>DR test runner schedules quarterly drills and auto-reports pass or fail to management</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>RPO as low as 5 seconds and RTO of 30 seconds for most workloads with no code changes</li>
            <li>DR tested quarterly — no more paper-based DR plans gathering dust in binders</li>
            <li>One-click failover with no incident commander typing commands at 3am</li>
            <li>RTO and RTO dashboard with graded SLA means you know your posture 24-7</li>
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
