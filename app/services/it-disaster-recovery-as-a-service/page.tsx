import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Disaster Recovery as a Service (DRaaS) - Zion Tech Group",
  description: "Enterprise disaster recovery solution with automated failover, continuous data replication, and sub-minute RTO/RPO. Includes runbook automation, regular DR testing, and compliance documentation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-disaster-recovery-as-a-service`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-disaster-recovery-as-a-service`} title="IT Disaster Recovery as a Service (DRaaS)" />
        <h1 className="text-4xl font-bold mb-6">🔄 IT Disaster Recovery as a Service (DRaaS)</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise disaster recovery solution with automated failover, continuous data replication, and sub-minute RTO/RPO. Includes runbook automation, regular DR testing, and compliance documentation.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Continuous data replication with sub-minute RPO</li>
            <li>Automated failover and failback orchestration</li>
            <li>DR runbook automation with one-click execution</li>
            <li>Regular DR testing without production impact</li>
            <li>Multi-region and multi-cloud DR topologies</li>
            <li>Compliance documentation (SOC 2, HIPAA, ISO 27001)</li>
            <li>Real-time DR health monitoring and alerting</li>
            <li>Dedicated DR environment with warm standby</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieve sub-minute RTO for critical applications</li>
            <li>Eliminate manual DR testing with automated runs</li>
            <li>Meet compliance requirements with documented DR</li>
            <li>Reduce DR costs by 60% vs. traditional hot sites</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$3,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$8,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
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
