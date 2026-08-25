import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT SIEM & Security Information Event Management - Zion Tech Group",
  description: "SIEM deployment, management, and tuning. Collect, correlate, and analyze security events from across your infrastructure. 24/7 monitoring with threat detection.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-siem-security`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-siem-security`} title="IT SIEM & Security Information Event Management" />
        <h1 className="text-4xl font-bold mb-6">🔍 IT SIEM & Security Information Event Management</h1>
        <p className="text-lg text-gray-300 mb-8">SIEM deployment, management, and tuning. Collect, correlate, and analyze security events from across your infrastructure. 24/7 monitoring with threat detection.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>SIEM platform selection and deployment</li>
            <li>Log collection from all infrastructure sources</li>
            <li>Custom correlation rules and dashboards</li>
            <li>Threat detection and alert tuning</li>
            <li>Integration with firewalls, EDR, cloud platforms</li>
            <li>Compliance reporting (SOC 2, HIPAA, PCI)</li>
            <li>Incident investigation and forensics</li>
            <li>24/7 monitoring and management</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect threats across all infrastructure</li>
            <li>Reduce false positives by 70% with tuning</li>
            <li>Meet compliance log management requirements</li>
            <li>24/7 expert monitoring and response</li>
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
              <p className="text-2xl font-bold mb-2">$$7,500/mo/month</p>
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
