import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Generative Design | Zion Tech Group',
  description: 'Transform your product design with AI-powered generative design solutions. Create optimized products, architectures, and experiences faster than ever before.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ai-generative-design/',
  },
};

export default function GenerativeDesignPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">AI-Powered Generative Design</h1>
        
        <div className="mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Unleash the power of AI to generate innovative designs, optimize structures, 
            and create solutions that were previously impossible. Our generative AI 
            design platform accelerates innovation across industries.
          </p>
          
          <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-pink-400">Generative Design Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-rose-400 mb-2">Architectural Design</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• AI-generated building layouts optimized for function</li>
                  <li>• Structural optimization with generative algorithms</li>
                  <li>• Sustainable design pattern generation</li>
                  <li>• Urban planning with AI simulation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-fuchsia-400 mb-2">Product Design</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• Generative product forms for aesthetics and function</li>
                  <li>• Lightweight structure optimization</li>
                  <li>• Ergonomic design generation</li>
                  <li>• Manufacturing constraint-aware design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Industries We Serve</h2>
          <div className="space-y-4">
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Architecture & Construction</h3>
              <p className="text-slate-300 mt-2">
                Generate building designs optimized for energy efficiency, structural integrity, 
                and aesthetic appeal. Our AI explores millions of design variations to find 
                the perfect balance of form and function.
              </p>
            </div>
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Automotive & Transportation</h3>
              <p className="text-slate-300 mt-2">
                AI-driven vehicle aerodynamics, interior layouts, and component design. 
                Our generative systems create vehicles that are lighter, faster, and more 
                efficient than human-designed alternatives.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Why Our Generative Design AI?</h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Generate thousands of design variations in minutes</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Multi-objective optimization for competing constraints</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Real-time design iteration and refinement</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Integration with CAD, BIM, and engineering tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Constraint-aware generation for manufacturability</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="https://calendly.com/kleber-ziontechgroup" className="inline-block bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
            Schedule a Generative Design Consultation
          </Link>
          <p className="mt-4 text-slate-400">Explore free AI tools and services at <Link href="https://ziontechgroup.com/free-tools" className="text-pink-400 hover:underline">ziontechgroup.com/free-tools</Link></p>
        </div>
      </div>
    </main>
  );
}