import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Asset Disposal and Recycling - Zion Tech Group",
  description: "Secure IT asset disposal: data destruction, environmental compliance, asset recovery. Certified and auditable.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-it-asset-disposal`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-it-asset-disposal`} title="IT Asset Disposal and Recycling" />
        <h1 className="text-4xl font-bold mb-6">♻️ IT Asset Disposal and Recycling</h1>
        <p className="text-lg text-gray-300 mb-8">Secure IT asset disposal: data destruction, environmental compliance, asset recovery. Certified and auditable.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Secure data destruction (NIST 800-88)</li>
            <li>Environmental compliance (R2</li>
            <li>e-Stewards)</li>
            <li>Asset recovery and resale</li>
            <li>Chain of custody documentation</li>
            <li>Certificate of destruction</li>
            <li>On-site and off-site destruction options</li>
            <li>Integration with asset management systems</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Certified data destruction for compliance</li>
            <li>Environmental compliance prevents fines</li>
            <li>Asset recovery returns value</li>
            <li>Chain of custody for audit</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$99/asset/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$199/asset/month</p>
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
