import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dynamic Pricing lifted revenue 19% without margin erosion - Case Study | Zion Tech Group',
  description: 'See how Coastal Retail Group achieved $6.8M annual savings with 19% Revenue Lift using Zion Tech Group.',
  alternates: { canonical: 'https://ziontechgroup.com/case-studies/retail-dynamic-pricing-lifted-revenue-19-without-margin-erosion' },
};

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="text-sm uppercase tracking-widest text-purple-400">Case Study</span>
          <h1 className="text-4xl font-bold mt-2">Dynamic Pricing lifted revenue 19% without margin erosion</h1>
          <p className="text-gray-400 mt-2">Retail · Enterprise client</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-400">$6.8M</p>
            <p className="text-gray-400 mt-2">Annual savings</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-400">19%</p>
            <p className="text-gray-400 mt-2">Revenue Lift</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-400"><8 months</p>
            <p className="text-gray-400 mt-2">Time to value</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
          <p className="text-gray-300">
            Coastal Retail Group was constrained by fragmented operations, manual handoffs, and rising operational costs.
            Legacy tooling slowed decision cycles and limited the ability to scale.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="text-gray-300">
            Zion Tech Group deployed an integrated AI operating model with automation, analytics,
            and governance controls tailored to retail workflows. The solution replaced brittle
            point integrations with a unified intelligence layer.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Markdowns reduced 24%</li>
            <li>Inventory turns improved 18%</li>
            <li>Customer satisfaction up 12%</li>
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
