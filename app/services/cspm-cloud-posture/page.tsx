import { } from 'next/navigation';

export const metadata = {
  title: "Cloud Security Posture Management (CSPM) - Zion Tech Group",
  description: "Continuous cloud posture: IAM overprivilege, misconfigured S3, exposed RDS, public subnets. Drift detection + auto-remediation via Terraform per AWS/GCP/Azure.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cspm-cloud-posture`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cloud Security Posture Management (CSPM)</h1>
        <p className="text-lg text-gray-300 mb-8">Continuous cloud posture: IAM overprivilege, misconfigured S3, exposed RDS, public subnets. Drift detection + auto-remediation via Terraform per AWS/GCP/Azure.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-cloud IAM + resource posture scanner</li>
            <li>Misconfiguration auto-remediation (Terraform)</li>
            <li>Drift detection from desired baseline</li>
            <li>Compliance report (SOC 2/ISO 27001/PCI DSS)</li>
            <li>Risk scoring per resource + alert on threshold</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Fix cloud misconfig in minutes not manually</li>
            <li>Prevent data breach from open S3 buckets</li>
            <li>Continuous compliance no manual audit report</li>
            <li>Drift auto-remediated before attacker leverages</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$149</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$399</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1299</p>
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
