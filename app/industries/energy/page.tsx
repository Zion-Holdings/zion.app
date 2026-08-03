import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Solutions for Energy | Zion Tech Group",
  description: "Explore energy-focused AI solutions with measurable ROI, faster workflows, and enterprise-grade implementation support.",
  alternates: {
    canonical: `https://ziontechgroup.com/industries/energy`,
  },
};

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">AI Solutions for Energy</h1>
        <p className="text-lg text-gray-300 mb-8">
          Purpose-built AI capabilities for energy teams.
          Improve throughput, reduce cost, and scale operations with proven enterprise patterns.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-3xl font-bold text-purple-400">40-60%</p>
            <p className="text-gray-400 mt-2">Efficiency improvement</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-3xl font-bold text-purple-400">3-6 mo</p>
            <p className="text-gray-400 mt-2">Typical deployment</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-3xl font-bold text-purple-400">99.9%</p>
            <p className="text-gray-400 mt-2">Uptime SLA target</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Core capabilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li key="1">Grid load forecasting</li>
            <li key="2">Asset monitoring</li>
            <li key="3"> outage prediction</li>
            <li key="4">Energy procurement AI</li>
            <li key="5">Emissions tracking</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book an industry consultation
          </a>
        </div>
      </div>
    </main>
  );
}
