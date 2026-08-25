import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Hybrid + Multi-Cloud Networking - Zion Tech Group",
  description: "Zero-trust networking across on-prem/edge/cloud: cloud-router fabric connects VPCs across AWS/GCP/Azure, on-prem data-centre via WireGuard or IPSec, global anycast front-door with WAF.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-hybrid-multicloud-networking`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/cloud-hybrid-multicloud-networking`} title="Hybrid + Multi-Cloud Networking" />
        <h1 className="text-4xl font-bold mb-6">♿ Hybrid + Multi-Cloud Networking</h1>
        <p className="text-lg text-gray-300 mb-8">Zero-trust networking across on-prem/edge/cloud: cloud-router fabric connects VPCs across AWS/GCP/Azure, on-prem data-centre via WireGuard or IPSec, global anycast front-door with WAF.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud-router fabric — single control-plane connects up to 40 VPCs/accounts</li>
            <li>Site-to-cloud connectivity via WireGuard tunnel or IPSec with automated failover</li>
            <li>Global anycast front-door with WAF + geo-ip routing per user</li>
            <li>Zero-trust per-connection IAM authorization beyond the network boundary</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with hybrid + multi-cloud networking</li>
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
              <p className="text-2xl font-bold mb-2">$$349/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$1,299/mo/month</p>
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
