import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Diagnostics Platform reduced missed conditions by 41% - Case Study | Zion Tech Group',
  description: 'See how MedCore Health Systems achieved $18.4M annual savings with 41% Missed Conditions Reduced using Zion Tech Group.',
  alternates: { canonical: 'https://ziontechgroup.com/case-studies/healthcare-ai-diagnostics-platform-reduced-missed-conditions-by-41' },
};

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="text-sm uppercase tracking-widest text-purple-400">Case Study</span>
          <h1 className="text-4xl font-bold mt-2">AI Diagnostics Platform reduced missed conditions by 41%</h1>
          <p className="text-gray-400 mt-2">Healthcare · Enterprise client</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-400">$18.4M</p>
            <p className="text-gray-400 mt-2">Annual savings</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-400">41%</p>
            <p className="text-gray-400 mt-2">Missed Conditions Reduced</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-400"><18 months</p>
            <p className="text-gray-400 mt-2">Time to value</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
          <p className="text-gray-300">
            MedCore Health Systems was constrained by fragmented operations, manual handoffs, and rising operational costs.
            Legacy tooling slowed decision cycles and limited the ability to scale.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="text-gray-300">
            Zion Tech Group deployed an integrated AI operating model with automation, analytics,
            and governance controls tailored to healthcare workflows. The solution replaced brittle
            point integrations with a unified intelligence layer.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Diagnostic accuracy improved from 89% to 97%</li>
            <li>Average time-to-diagnosis dropped 34%</li>
            <li>Patient outcomes improved across 12 facilities</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Get a similar outcome for your business
          </a>
        </div>
      </div>
    </main>
  );
}
