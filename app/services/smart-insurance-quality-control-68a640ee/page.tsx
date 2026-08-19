import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Smart Insurance Quality Control - Zion Tech Group",
  description: "Computer vision system that provides automated automated inspection, defect detection, and quality assurance for manufacturing production lines.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/smart-insurance-quality-control-68a640ee`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/{service_id}`} title="Smart Insurance Quality Control" />
        <h1 className="text-4xl font-bold mb-6">Smart Insurance Quality Control</h1>
        <p className="text-lg text-gray-300 mb-8">Computer vision system that provides automated automated inspection, defect detection, and quality assurance for manufacturing production lines.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Visual inspection</li>
            <li>Defect classification</li>
            <li>Root cause analysis</li>
            <li>Real-time alerts</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Zero defects</li>
            <li>Faster throughput</li>
            <li>Reduced waste</li>
            <li>Consistent quality</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Basic</h3><p className="text-2xl">$258</p></div>
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Pro</h3><p className="text-2xl">$648</p></div>
            <div className="border border-gray-700 rounded-lg p-4"><h3 className="font-semibold">Enterprise</h3><p className="text-2xl">$1948</p></div>
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