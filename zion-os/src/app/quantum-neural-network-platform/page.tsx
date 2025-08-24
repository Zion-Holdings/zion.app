import Link from "next/link";

export const metadata = {
  title: "Quantum Neural Network Platform - Zion Tech Group",
  description: "Harness the power of quantum computing with our advanced neural network platform. Solve complex problems with quantum-enhanced AI that outperforms classical computing.",
  keywords: "quantum neural networks, quantum computing, quantum AI, quantum machine learning, Zion Tech Group",
};

export default function QuantumNeuralNetworkPlatformPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Quantum Neural Network Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize AI with quantum-enhanced neural networks that solve previously intractable problems and unlock new computational frontiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Access
            </Link>
              <Link href="/quantum-services" className="btn-secondary text-lg px-8 py-4">
                Explore Quantum Services
              </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quantum-Powered AI Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum neural network platform combines the best of quantum computing and artificial intelligence to deliver unprecedented computational power
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Processing Units */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Processing Units</h3>
              <p className="text-gray-400">
                Advanced QPUs that leverage quantum superposition and entanglement for exponential computational speedup.
              </p>
            </div>

            {/* Hybrid Quantum-Classical */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hybrid Architecture</h3>
              <p className="text-gray-400">
                Seamless integration between quantum and classical computing resources for optimal performance.
              </p>
            </div>

            {/* Quantum Error Correction */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Error Correction</h3>
              <p className="text-gray-400">
                Advanced quantum error correction algorithms that maintain coherence and accuracy in quantum computations.
              </p>
            </div>

            {/* Neural Network Optimization */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Neural Optimization</h3>
              <p className="text-gray-400">
                Quantum-enhanced training algorithms that optimize neural network architectures and parameters.
              </p>
            </div>

            {/* Quantum Algorithms */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Algorithms</h3>
              <p className="text-gray-400">
                Library of quantum algorithms including Grover's, Shor's, and quantum machine learning variants.
              </p>
            </div>

            {/* Scalable Infrastructure */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-400">
                Cloud-based quantum computing infrastructure that scales from research to enterprise applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum neural networks are transforming industries and solving previously impossible problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Drug Discovery */}
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">Drug Discovery & Development</h3>
              <p className="text-gray-300 mb-6">
                Accelerate pharmaceutical research with quantum-enhanced molecular modeling and protein folding simulations.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Molecular dynamics simulation</li>
                <li>• Protein structure prediction</li>
                <li>• Drug-target interaction modeling</li>
                <li>• Quantum chemistry calculations</li>
              </ul>
            </div>

            {/* Financial Modeling */}
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">Financial Modeling & Risk</h3>
              <p className="text-gray-300 mb-6">
                Revolutionize financial analysis with quantum-powered risk assessment and portfolio optimization.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Portfolio optimization</li>
                <li>• Risk assessment models</li>
                <li>• Monte Carlo simulations</li>
                <li>• Market prediction algorithms</li>
              </ul>
            </div>

            {/* Climate Modeling */}
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-2xl font-bold mb-4">Climate & Weather Prediction</h3>
              <p className="text-gray-300 mb-6">
                Advanced climate modeling with quantum-enhanced atmospheric simulations and weather forecasting.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Atmospheric modeling</li>
                <li>• Ocean circulation patterns</li>
                <li>• Extreme weather prediction</li>
                <li>• Climate change impact analysis</li>
              </ul>
            </div>

            {/* AI Training */}
            <div className="card bg-gradient-to-r from-yellow-600/20 to-red-600/20 border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4">AI Model Training</h3>
              <p className="text-gray-300 mb-6">
                Train complex AI models faster and more efficiently with quantum-enhanced optimization algorithms.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Neural network optimization</li>
                <li>• Hyperparameter tuning</li>
                <li>• Feature selection</li>
                <li>• Model compression</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge quantum technology and designed for maximum performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">100+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qubits</h3>
              <p className="text-gray-400">High-fidelity quantum bits for complex computations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">99.9%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fidelity</h3>
              <p className="text-gray-400">Quantum gate fidelity ensuring accurate results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">1000x</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Speedup</h3>
              <p className="text-gray-400">Performance improvement over classical methods</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Availability</h3>
              <p className="text-gray-400">Continuous platform availability and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock computational power that was previously impossible. 
              Our platform is ready to transform your research and business applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Platform Access
              </Link>
              <Link href="/quantum-services" className="btn-secondary text-lg px-8 py-4">
                Explore All Quantum Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}