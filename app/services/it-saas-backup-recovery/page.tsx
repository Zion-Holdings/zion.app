import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT SaaS Backup & Disaster Recovery - Zion Tech Group",
  description: "Protect your SaaS data with automated backups and one-click recovery for Microsoft 365, Google Workspace, Salesforce, and 50+ SaaS applications. RPO under 1 hour.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-saas-backup-recovery`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-saas-backup-recovery`} title="IT SaaS Backup & Disaster Recovery" />
        <h1 className="text-4xl font-bold mb-6">💾 IT SaaS Backup & Disaster Recovery</h1>
        <p className="text-lg text-gray-300 mb-8">Protect your SaaS data with automated backups and one-click recovery for Microsoft 365, Google Workspace, Salesforce, and 50+ SaaS applications. RPO under 1 hour.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated daily backups for 50+ SaaS apps</li>
            <li>One-click granular recovery (files, emails, records)</li>
            <li>Point-in-time recovery with unlimited retention</li>
            <li>Cross-account and cross-region backup copies</li>
            <li>Ransomware detection and alerting</li>
            <li>Compliance reporting and audit logs</li>
            <li>Self-service recovery portal for end users</li>
            <li>24/7 monitoring and support</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Protect against SaaS data loss and ransomware</li>
            <li>Meet compliance backup requirements</li>
            <li>Recover data in minutes, not days</li>
            <li>Eliminate manual backup processes</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$500/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,500/mo/month</p>
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
