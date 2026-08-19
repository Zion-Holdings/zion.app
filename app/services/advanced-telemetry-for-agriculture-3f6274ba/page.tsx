import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Advanced Telemetry for Agriculture - Zion Tech Group",
  description: "Unlock unprecedented growth with Advanced Telemetry for Agriculture. This autonomous system provides sensor data processing with zero manual intervention needed",
  alternates: {
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/{service_id}`} title="Advanced Telemetry for Agriculture" />
        <h1 className="text-4xl font-bold mb-6">Advanced Telemetry for Agriculture</h1>
        <p className="text-lg text-gray-300 mb-8">Unlock unprecedented growth with Advanced Telemetry for Agriculture. This autonomous system provides sensor data processing with zero manual intervention needed</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data encryption at rest and in transit</li>
            <li>Performance dashboards with real-time metrics</li>
            <li>Multi-region deployment with automatic failover</li>
            <li>Network optimization for constrained devices</li>
            <li>Edge AI for local decision making</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>99.9% uptime guarantee with redundant architecture</li>
            <li>Dynamic resource allocation based on demand patterns</li>
            <li>Real-time insights and alerts for proactive management</li>
            <li>Seamless integration with existing systems and workflows</li>
            <li>Zero manual intervention required for routine tasks</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Basic</h3><p className="text-2xl">$199</p></div>
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Pro</h3><p className="text-2xl">$499</p></div>
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Enterprise</h3><p className="text-2xl">$1499</p></div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
