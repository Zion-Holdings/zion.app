import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Network Detection & Response (NDR) - Zion Tech Group",
  description: "Network-level threat detection: traffic analysis, lateral movement detection, encrypted traffic inspection, and beacon detection. See what EDR misses.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-network-detection`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-network-detection`} title="Network Detection & Response (NDR)" />
        <h1 className="text-4xl font-bold mb-6">🌐 Network Detection & Response (NDR)</h1>
        <p className="text-lg text-gray-300 mb-8">Network-level threat detection: traffic analysis, lateral movement detection, encrypted traffic inspection, and beacon detection. See what EDR misses.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full network traffic analysis</li>
            <li>Lateral movement and C2 detection</li>
            <li>Encrypted traffic inspection (JA3/JA3S)</li>
            <li>Beacon and exfiltration pattern detection</li>
            <li>Network forensics and PCAP storage</li>
            <li>SOAR integration for automated response</li>
            <li>Integration with Zeek, Suricata, Darktrace</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect threats EDR and SIEM miss</li>
            <li>See lateral movement across the network</li>
            <li>Encrypted traffic inspection without MITM</li>
            <li>Forensics data for incident investigation</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$799/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$2,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$7,999/mo/month</p>
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
