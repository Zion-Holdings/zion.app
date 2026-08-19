import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Sales Lead Scoring Engine - Zion Tech Group",
  description: "Intelligent lead prioritization system that scores and ranks prospects based on engagement, fit, and conversion probability. Increases sales team efficiency by ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-sales-lead-scoring-engine-67211882`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/{service_id}`} title="AI Sales Lead Scoring Engine" />
        <h1 className="text-4xl font-bold mb-6">AI Sales Lead Scoring Engine</h1>
        <p className="text-lg text-gray-300 mb-8">Intelligent lead prioritization system that scores and ranks prospects based on engagement, fit, and conversion probability. Increases sales team efficiency by </p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time lead scoring</li>
            <li>Behavioral tracking integration</li>
            <li>Predictive conversion modeling</li>
            <li>Automated lead nurturing</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>40% increase in conversion rates</li>
            <li>Higher sales team productivity</li>
            <li>Reduced time-to-close</li>
            <li>Better lead qualification</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Basic</h3><p className="text-2xl">$199</p></div>
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Pro</h3><p className="text-2xl">$449</p></div>
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Enterprise</h3><p className="text-2xl">$1299</p></div>
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