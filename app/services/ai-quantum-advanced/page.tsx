import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advanced Quantum AI | Zion Tech Group',
  description: 'Cutting-edge quantum artificial intelligence solutions for complex optimization, machine learning, and computational problems. Leverage our advanced quantum AI expertise for enterprise transformation.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ai-quantum-advanced/',
  },
};

export default function QuantumAdvancedPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">Advanced Quantum AI Solutions</h1>
        
        <div className="mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Push the boundaries of what's possible with our advanced quantum artificial intelligence platform. 
            We combine cutting-edge quantum computing with sophisticated AI algorithms to solve problems that 
            were previously unsolvable.
          </p>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Advanced Quantum AI Technologies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-cyan-400 mb-2">Quantum Neural Networks</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• Hybrid quantum-classical neural architectures</li>
                  <li>• Quantum-enhanced pattern recognition</li>
                  <li>• Superposition-based parallel learning</li>
                  <li>• Quantum gradient descent optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-400 mb-2">Quantum Machine Learning</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• Quantum kernel methods for classification</li>
                  <li>• Quantum support vector machines</li>
                  <li>• Variational quantum classifiers</li>
                  <li>• Quantum feature embedding techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Enterprise Quantum AI Applications</h2>
          <div className="space-y-4">
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400">Drug Discovery & Molecular Design</h3>
              <p className="text-slate-300 mt-2">
                Use quantum AI to simulate molecular interactions at unprecedented accuracy, accelerating 
                drug discovery timelines by years. Our quantum-enhanced molecular dynamics identify 
                promising compounds faster than classical methods.
              </p>
            </div>
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-400">Financial Portfolio Optimization</h3>
              <p className="text-slate-300 mt-2">
                Quantum AI algorithms explore exponentially more portfolio combinations to find optimal 
                risk-adjusted returns. Our quantum risk assessment models identify hidden correlations 
                and optimize across thousands of assets simultaneously.
              </p>
            </div>
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400">Climate & Energy Modeling</h3>
              <p className="text-slate-300 mt-2">
                Quantum AI tackles complex climate models and energy grid optimization with quantum 
                parallelism. Our solutions optimize renewable energy distribution and predict climate 
                patterns with quantum-enhanced precision.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Why Choose Our Advanced Quantum AI?</h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Access to next-generation quantum hardware via our cloud partnerships</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Proprietary quantum AI algorithms developed by our research team</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Hybrid quantum-classical deployment for near-term business value</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>End-to-end quantum AI lifecycle management from research to production</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Continuous quantum algorithm improvement and optimization</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="https://calendly.com/kleber-ziontechgroup" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
            Schedule a Quantum AI Consultation
          </Link>
          <p className="mt-4 text-slate-400">Free tools and AI services available at <Link href="https://ziontechgroup.com" className="text-purple-400 hover:underline">ziontechgroup.com</Link></p>
        </div>
      </div>
    </main>
  );
}