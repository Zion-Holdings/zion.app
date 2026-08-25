import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Cloud Automation & IaC Factory - Zion Tech Group",
  description: "Infrastructure automation factory: reusable Terraform modules, CI/CD pipelines, drift detection, and policy-as-code. Ship infrastructure like application code.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-cloud-automation-iac`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-cloud-automation-iac`} title="Cloud Automation & IaC Factory" />
        <h1 className="text-4xl font-bold mb-6">⚙️ Cloud Automation & IaC Factory</h1>
        <p className="text-lg text-gray-300 mb-8">Infrastructure automation factory: reusable Terraform modules, CI/CD pipelines, drift detection, and policy-as-code. Ship infrastructure like application code.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reusable Terraform and Pulumi modules</li>
            <li>CI/CD pipelines for infrastructure</li>
            <li>Drift detection and auto-remediation</li>
            <li>Policy-as-code (OPA/Sentinel/Checkov)</li>
            <li>Cost estimation in PR (Infracost)</li>
            <li>Module registry and versioning</li>
            <li>Multi-cloud support (AWS, Azure, GCP)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ship infrastructure with the same rigor as code</li>
            <li>Drift detection prevents configuration rot</li>
            <li>Policy-as-code ensures compliance</li>
            <li>Cost estimation before infrastructure changes</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,799/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$5,999/mo/month</p>
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
