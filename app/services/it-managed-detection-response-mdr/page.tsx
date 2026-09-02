import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Managed Detection & Response (MDR) - Zion Tech Group",
  description: "24/7 managed security operations with advanced threat detection, investigation, and response.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-managed-detection-response-mdr`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-managed-detection-response-mdr`} title="IT Managed Detection & Response (MDR)" />
        <h1 className="text-4xl font-bold mb-6">🔐 IT Managed Detection & Response (MDR)</h1>
        <p className="text-lg text-gray-300 mb-8">24/7 managed security operations with advanced threat detection, investigation, and response.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 SOC with dedicated analysts</li>
            <li>Endpoint Detection & Response (EDR)</li>
            <li>Network Detection & Response (NDR)</li>
            <li>Threat intelligence feeds</li>
            <li>Automated incident response playbooks</li>
            <li>Digital forensics</li>
            <li>Compliance reporting (SOC 2, HIPAA, PCI)</li>
            <li>Monthly security assessments</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect and respond in under 15 minutes</li>
            <li>Reduce breach risk by 95%</li>
            <li>Eliminate need for in-house SOC</li>
            <li>Meet compliance continuously</li>
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
