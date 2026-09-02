import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Network Security & Firewall Management - Zion Tech Group",
  description: "Comprehensive network security with next-gen firewall management, intrusion detection/prevention, and network access control. 24/7 monitoring and management.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-network-security`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-network-security`} title="IT Network Security & Firewall Management" />
        <h1 className="text-4xl font-bold mb-6">🔥 IT Network Security & Firewall Management</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive network security with next-gen firewall management, intrusion detection/prevention, and network access control. 24/7 monitoring and management.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Next-gen firewall deployment and management</li>
            <li>IDS/IPS configuration and tuning</li>
            <li>Network access control (NAC)</li>
            <li>DNS security and content filtering</li>
            <li>VPN and remote access management</li>
            <li>24/7 network security monitoring</li>
            <li>Integration with Cisco, Palo Alto, Fortinet</li>
            <li>Security incident response for network threats</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Block advanced threats with AI-powered firewalls</li>
            <li>Detect intrusions in real-time</li>
            <li>Secure remote access for all employees</li>
            <li>Reduce network security costs with managed services</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$2,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$5,000/mo/month</p>
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
