import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Personalized Learning Pathways',
  description: 'Adaptive learning platform that creates personalized educational paths for each student using cognitive assessment, learning style analysis, and real-time perfo',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ai-powered-personalized-learning-pathways-1719f7a2',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Personalized Learning Pathways
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Adaptive learning platform that creates personalized educational paths for each student using cognitive assessment, learning style analysis, and real-time performance tracking.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm">
            <span className="mr-2">💡</span>
            <span>EdTech</span>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
                      <li className="text-gray-300">Cognitive assessment</li>
          <li className="text-gray-300">Learning style analysis</li>
          <li className="text-gray-300">Adaptive content delivery</li>
          <li className="text-gray-300">Progress tracking</li>
          <li className="text-gray-300">Intervention recommendations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <ul className="space-y-3">
                      <li className="text-purple-300">40% faster learning</li>
          <li className="text-purple-300">90% completion rates</li>
          <li className="text-purple-300">Personalized experience</li>
          <li className="text-purple-300">Improved outcomes</li>
          </ul>
        </section>

        
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold mb-4">Basic</h3>
          <p className="text-3xl font-bold text-purple-400 mb-4">$299</p>
          <ul className="space-y-2 mb-4">
            <li className="text-gray-400 text-sm">Core features</li>
          </ul>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 border border-purple-400">
          <h3 className="text-xl font-bold mb-4">Pro</h3>
          <p className="text-3xl font-bold text-purple-300 mb-4">$299</p>
          <ul className="space-y-2 mb-4">
            <li className="text-gray-400 text-sm">Advanced features</li>
          </ul>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
            Upgrade
          </button>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 border border-purple-400">
          <h3 className="text-xl font-bold mb-4">Enterprise</h3>
          <p className="text-3xl font-bold text-purple-300 mb-4">$999</p>
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
          <p className="text-gray-400 mb-6">Ready to transform your edtech operations?</p>
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
