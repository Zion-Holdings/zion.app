import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI-Powered Quantum Optimization | Zion Tech Group',
  description: 'Leverage quantum computing algorithms with AI optimization for complex problems in logistics, finance, drug discovery, and more. Our quantum optimization services deliver exponential speedups for NP-hard problems.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ai-quantum-optimization/',
  },
};

export default function QuantumOptimizationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">AI-Powered Quantum Optimization</h1>
        
        <div className="mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Harness the power of quantum computing combined with AI optimization algorithms to solve complex problems 
            that are intractable for classical computers.
          </p>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Key Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Supply Chain & Logistics</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• Route optimization for delivery fleets</li>
                  <li>• Inventory optimization with demand forecasting</li>
                  <li>• Facility location planning</li>
                  <li>• Manufacturing scheduling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-400 mb-2">Finance & Trading</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• Portfolio optimization</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Algorithmic trading strategies</li>
                  <li>• Fraud detection pattern recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Our Quantum Optimization Services</h2>
          <div className="space-y-4">
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400">Quantum Annealing Solutions</h3>
              <p className="text-slate-300 mt-2">
                We leverage D-Wave quantum annealers to solve optimization problems with binary and quadratic unconstrained 
                binary optimization (QUBO) formulations. Perfect for scheduling, routing, and resource allocation problems.
              </p>
            </div>
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-400">Variational Quantum Eigensolver (VQE)</h3>
              <p className="text-slate-300 mt-2">
                Use VQE algorithms for molecular simulation and optimization in drug discovery, materials science, 
                and chemical process optimization.
              </p>
            </div>
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400">Quantum Approximate Optimization Algorithm (QAOA)</h3>
              <p className="text-slate-300 mt-2">
                Apply QAOA for combinatorial optimization problems in network design, machine learning model 
                selection, and financial portfolio optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Why Choose Our Quantum Optimization?</h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Access to quantum hardware without massive infrastructure investment</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Hybrid classical-quantum algorithms for near-term advantage</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Expertise in problem mapping to quantum algorithms</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Continuous monitoring and optimization of quantum circuits</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Integration with existing enterprise systems</span>
            </li>
          </ul>
        </div>

        <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-400">Ready to Explore Quantum Advantage?</h2>
          <p className="text-slate-500 mb-6">
            Schedule a consultation to discover how quantum optimization can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://calendly.com/kleber-ziontechgroup" 
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-500 transition-colors"
            >
              Book a Consultation
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-slate-300 font-semibold rounded-xl hover:bg-slate-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}