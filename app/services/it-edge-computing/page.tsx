import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Edge Computing & IoT Infrastructure - Zion Tech Group",
  description: "Design and deploy edge computing infrastructure for low-latency applications. From IoT gateways to edge data centers, with centralized management and security.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-edge-computing`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-edge-computing`} title="IT Edge Computing & IoT Infrastructure" />
        <h1 className="text-4xl font-bold mb-6">📡 IT Edge Computing & IoT Infrastructure</h1>
        <p className="text-lg text-gray-300 mb-8">Design and deploy edge computing infrastructure for low-latency applications. From IoT gateways to edge data centers, with centralized management and security.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Edge architecture design and deployment</li>
            <li>IoT device management and monitoring</li>
            <li>Edge-to-cloud data synchronization</li>
            <li>Low-latency application hosting</li>
            <li>Edge security and access control</li>
            <li>Centralized management dashboard</li>
            <li>Integration with AWS IoT, Azure IoT, GCP IoT</li>
            <li>Predictive maintenance for edge hardware</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce latency to under 10ms</li>
            <li>Process data locally for real-time decisions</li>
            <li>Reduce cloud bandwidth costs by 60%</li>
            <li>Enable offline operation for critical systems</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$4,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$10,000/mo/month</p>
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
