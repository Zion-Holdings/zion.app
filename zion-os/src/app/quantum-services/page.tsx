import Link from "next/link";

export const metadata = {
  title: "Quantum Computing Services - Zion Tech Group | Advanced Quantum Solutions",
  description: "Transform your business with Zion Tech Group's cutting-edge quantum computing services. From algorithm optimization to quantum machine learning, unlock unprecedented computational power.",
  keywords: "quantum computing, quantum algorithms, quantum machine learning, quantum optimization, Zion Tech Group, quantum services",
};

export default function QuantumServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Quantum Computing Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum mechanics to solve complex problems that 
            are impossible for classical computers. Transform your business with 
            next-generation computational capabilities.
          </p>
        </div>
      </section>

      {/* Quantum Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Future of Computing is Quantum
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Quantum computing represents a paradigm shift in computational power. 
                  By leveraging quantum mechanical phenomena like superposition and 
                  entanglement, we can process information in ways that classical 
                  computers simply cannot match.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Exponential speedup for specific problems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Revolutionary optimization capabilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Breakthrough machine learning algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Unprecedented simulation accuracy</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">
                  Explore Quantum Solutions
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Quantum Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Quantum Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive quantum computing solutions designed for enterprise applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Algorithm Development */}
            <div className="card group hover:bg-purple-500/10 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Algorithm Development</h3>
              <p className="text-gray-400 mb-4">
                Custom quantum algorithms designed for your specific business problems, 
                from optimization challenges to complex simulations.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Custom algorithm design</li>
                <li>• Problem-specific optimization</li>
                <li>• Hybrid classical-quantum approaches</li>
                <li>• Performance benchmarking</li>
              </ul>
              <Link href="/quantum-services/algorithm-development" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Machine Learning */}
            <div className="card group hover:bg-blue-500/10 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Machine Learning</h3>
              <p className="text-gray-400 mb-4">
                Quantum-enhanced machine learning models that leverage quantum 
                superposition for faster training and better pattern recognition.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Quantum neural networks</li>
                <li>• Quantum feature mapping</li>
                <li>• Quantum kernel methods</li>
                <li>• Hybrid ML pipelines</li>
              </ul>
              <Link href="/quantum-services/quantum-ml" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Optimization */}
            <div className="card group hover:bg-green-500/10 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Optimization</h3>
              <p className="text-gray-400 mb-4">
                Solve complex optimization problems with quantum algorithms that 
                can find global minima in exponentially large search spaces.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Quantum annealing</li>
                <li>• Variational quantum algorithms</li>
                <li>• Combinatorial optimization</li>
                <li>• Supply chain optimization</li>
              </ul>
              <Link href="/quantum-services/quantum-optimization" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Simulation */}
            <div className="card group hover:bg-indigo-500/10 transition-colors">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Simulation</h3>
              <p className="text-gray-400 mb-4">
                Accurate simulation of quantum systems for materials science, 
                chemistry, and physics research applications.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Molecular dynamics</li>
                <li>• Chemical reaction modeling</li>
                <li>• Material property prediction</li>
                <li>• Quantum chemistry</li>
              </ul>
              <Link href="/quantum-services/quantum-simulation" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Error Correction */}
            <div className="card group hover:bg-red-500/10 transition-colors">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Error Correction</h3>
              <p className="text-gray-400 mb-4">
                Advanced error correction techniques to maintain quantum coherence 
                and ensure reliable quantum computations.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Surface code implementation</li>
                <li>• Fault-tolerant quantum computing</li>
                <li>• Quantum memory protection</li>
                <li>• Noise mitigation strategies</li>
              </ul>
              <Link href="/quantum-services/error-correction" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Consulting */}
            <div className="card group hover:bg-yellow-500/10 transition-colors">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Strategy Consulting</h3>
              <p className="text-gray-400 mb-4">
                Strategic guidance on quantum computing adoption, roadmap development, 
                and integration with existing IT infrastructure.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Quantum readiness assessment</li>
                <li>• Implementation roadmap</li>
                <li>• Talent development</li>
                <li>• ROI analysis</li>
              </ul>
              <Link href="/quantum-services/consulting" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-400 mb-4">
                Portfolio optimization, risk assessment, and option pricing with 
                quantum algorithms that process complex financial models in seconds.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Risk modeling, algorithmic trading, fraud detection
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare & Pharma</h3>
              <p className="text-gray-400 mb-4">
                Drug discovery, protein folding, and personalized medicine through 
                quantum simulations that model molecular interactions with unprecedented accuracy.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Drug discovery, genomics, medical imaging
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing & Logistics</h3>
              <p className="text-gray-400 mb-4">
                Supply chain optimization, production scheduling, and quality control 
                using quantum algorithms that solve complex logistical challenges.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Supply chain optimization, production planning
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy & Utilities</h3>
              <p className="text-gray-400 mb-4">
                Grid optimization, renewable energy forecasting, and materials science 
                for next-generation energy storage and transmission systems.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Grid optimization, battery design, climate modeling
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-400 mb-4">
                Post-quantum cryptography, threat detection, and secure communication 
                protocols that remain secure against quantum attacks.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Post-quantum cryptography, threat detection
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research & Development</h3>
              <p className="text-gray-400 mb-4">
                Academic research, scientific discovery, and breakthrough innovations 
                across physics, chemistry, and materials science.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Use Cases:</strong> Scientific research, breakthrough innovations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quantum Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              State-of-the-art quantum computing infrastructure and tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Quantum Hardware</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Superconducting qubits</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Trapped ion systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Photonic quantum computers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Quantum annealers</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Quantum Software</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Qiskit framework</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Cirq (Google)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">PennyLane</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Custom quantum algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quantum Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world results from our quantum computing implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Financial Portfolio Optimization</h3>
              <p className="text-gray-400 mb-4">
                A major investment firm achieved 40% better portfolio performance 
                using our quantum optimization algorithms for asset allocation.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Result:</strong> 40% improvement in portfolio performance
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Drug Discovery Acceleration</h3>
              <p className="text-gray-400 mb-4">
                Pharmaceutical company reduced drug discovery time from years to 
                months using quantum molecular simulation.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Result:</strong> 10x faster drug discovery process
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with the power of quantum computing. 
              Let's explore how quantum solutions can solve your most complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Quantum Journey
              </Link>
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}