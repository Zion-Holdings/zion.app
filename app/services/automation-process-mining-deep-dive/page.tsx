import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Process Mining Deep Dive - Zion Tech Group",
  description: "Deep-dive process analytics: auto-discover process maps from ERP, CRM, and BPM event logs; conformance checking per transaction; bottleneck and rework hotspot analysis with cycle-time and handover waste; RPA opportunity scoring per step; executive KPI dashboard.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/automation-process-mining-deep-dive`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/automation-process-mining-deep-dive`} title="Process Mining Deep Dive" />
        <h1 className="text-4xl font-bold mb-6">♿ Process Mining Deep Dive</h1>
        <p className="text-lg text-gray-300 mb-8">Deep-dive process analytics: auto-discover process maps from ERP, CRM, and BPM event logs; conformance checking per transaction; bottleneck and rework hotspot analysis with cycle-time and handover waste; RPA opportunity scoring per step; executive KPI dashboard.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-discover process maps from ERP, CRM, and BPM event logs including SAP, Oracle, Salesforce, Jira, and ServiceNow</li>
            <li>Conformance checking — compare actual behaviour against the ideal process path with deviation scoring per transaction</li>
            <li>Bottleneck, rework, and hotspot analysis — queue time, cycle time, and handover waste per step</li>
            <li>RPA opportunity score per step — suggests which steps to auto-route with effort estimate</li>
            <li>Executive dashboard with process KPIs, SLA drift, and cost-per-transaction trend</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with process mining deep dive</li>
            <li>Improve operational efficiency</li>
            <li>Scale without complexity</li>
            <li>Enterprise-grade reliability</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$999/mo/month</p>
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
