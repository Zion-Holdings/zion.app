import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization Platform',
  description: 'AI-driven cloud cost management solution that analyzes usage patterns, identifies waste, and provides automated recommendations for cost reduction.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/cloud-cost-optimization-platform-9325e7ee',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cloud Cost Optimization Platform
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            AI-driven cloud cost management solution that analyzes usage patterns, identifies waste, and provides automated recommendations for cost reduction.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm">
            <span className="mr-2">💡</span>
            <span>Cloud</span>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
                      <li className="text-gray-300">Usage analysis</li>
          <li className="text-gray-300">Waste detection</li>
          <li className="text-gray-300">Rightsizing recommendations</li>
          <li className="text-gray-300">Budget alerts</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <ul className="space-y-3">
                      <li className="text-purple-300">30% cost reduction</li>
          <li className="text-purple-300">95% waste elimination</li>
          <li className="text-purple-300">Automated savings</li>
          </ul>
        </section>

        
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold mb-4">Basic</h3>
          <p className="text-3xl font-bold text-purple-400 mb-4">$599</p>
          <ul className="space-y-2 mb-4">
            <li className="text-gray-400 text-sm">Core features</li>
          </ul>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 border border-purple-400">
          <h3 className="text-xl font-bold mb-4">Pro</h3>
          <p className="text-3xl font-bold text-purple-300 mb-4">$1999</p>
          <ul className="space-y-2 mb-4">
            <li className="text-gray-400 text-sm">Advanced features</li>
          </ul>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
            Upgrade
          </button>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 border border-purple-400">
          <h3 className="text-xl font-bold mb-4">Enterprise</h3>
          <p className="text-3xl font-bold text-purple-300 mb-4">$5999</p>
          <ul className="space-y-2 mb-4">
            <li className="text-gray-400 text-sm">Custom solutions</li>
          </ul>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
            Contact Sales
          </button>
        </div>
      </div>

        <section className="mt-16 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Get Started</h2>
          <p className="text-gray-400 mb-6">Ready to transform your cloud operations?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
              Contact Us
            </a>
            <a href="/contact" className="px-6 py-3 border border-purple-500 hover:bg-purple-900/20 rounded-lg transition-colors">
              Book a Demo
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
