import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Backup & Disaster Recovery as a Service - Zion Tech Group",
  description: "Cloud-native backup and disaster recovery for VMs, databases, and SaaS applications with instant recovery and automated testing.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-backup-recovery-service`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-backup-recovery-service`} title="IT Backup & Disaster Recovery as a Service" />
        <h1 className="text-4xl font-bold mb-6">💾 IT Backup & Disaster Recovery as a Service</h1>
        <p className="text-lg text-gray-300 mb-8">Cloud-native backup and disaster recovery for VMs, databases, and SaaS applications with instant recovery and automated testing.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Agentless VM and database backup</li>
            <li>Instant recovery with sub-minute RTO</li>
            <li>Automated backup testing and validation</li>
            <li>Immutable backups for ransomware protection</li>
            <li>Cross-region replication</li>
            <li>Integration with AWS, Azure, GCP, VMware</li>
            <li>Compliance-ready reporting</li>
            <li>24/7 monitoring and alerting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieve near-zero RPO and RTO</li>
            <li>Protect against ransomware</li>
            <li>Automate DR testing</li>
            <li>Reduce backup costs by 40%</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
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
