import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI-Driven Manufacturing Scrap Reduction and Material Yield Optimization System | Zion Tech Group - Zion Tech Group",
  description: "Process optimization platform that reduces manufacturing waste using machine learning models trained on sensor data, process parameters, and quality inspection results. Identifies root causes of scrap, recommends process adjustments, and optimizes raw material usage to maximize yield across producti",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-driven-manufacturing-scrap-reduction-and-material-yield-optimization-system-790611d7`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-driven-manufacturing-scrap-reduction-and-material-yield-optimization-system-790611d7`} title="AI-Driven Manufacturing Scrap Reduction and Material Yield Optimization System | Zion Tech Group" />
        <h1 className="text-4xl font-bold mb-6">🏭 AI-Driven Manufacturing Scrap Reduction and Material Yield Optimization System | Zion Tech Group</h1>
        <p className="text-lg text-gray-300 mb-8">Process optimization platform that reduces manufacturing waste using machine learning models trained on sensor data, process parameters, and quality inspection results. Identifies root causes of scrap, recommends process adjustments, and optimizes raw material usage to maximize yield across producti</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Scrap root cause identification</li>
            <li>Real-time process parameter tuning</li>
            <li>Material usage optimization</li>
            <li>Quality yield prediction</li>
            <li>Defect pattern clustering</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce scrap rates by 30%</li>
            <li>Increase overall yield by 12%</li>
            <li>Lower raw material costs</li>
            <li>Automated process adjustments</li>
            <li>Faster quality issue resolution</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$298/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$748/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2248/month</p>
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
