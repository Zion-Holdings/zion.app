import Link from "next/link";

export const metadata = {
  title: "Quantum Neural Network Platform - Zion Tech Group",
  description: "Revolutionary quantum neural network platform that combines quantum computing with artificial intelligence to solve previously intractable problems.",
  keywords: "quantum neural networks, quantum computing, AI, machine learning, quantum machine learning, Zion Tech Group",
};

export default function QuantumNeuralNetworkPlatformPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Quantum Neural Network Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The future of artificial intelligence meets quantum computing. Our platform enables unprecedented computational power 
            for solving complex problems that were previously impossible.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quantum Advantage in AI</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our Quantum Neural Network Platform represents a paradigm shift in computational capabilities. 
                By harnessing quantum superposition and entanglement, we can process exponentially more information 
                than classical computers.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                This platform is designed for researchers, enterprises, and innovators who need to tackle problems 
                in drug discovery, financial modeling, climate prediction, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Access
                </Link>
                <Link href="/quantum-services" className="btn-secondary">
                  Explore All Quantum Services
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Quantum Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Exponential speedup for optimization problems
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Quantum advantage in machine learning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Advanced quantum algorithms
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Hybrid quantum-classical computing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Circuit Designer */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Circuit Designer</h3>
              <p className="text-gray-400 mb-4">
                Visual drag-and-drop interface for designing quantum circuits with real-time simulation and validation.
              </p>
            </div>

            {/* Neural Network Training */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Neural Network Training</h3>
              <p className="text-gray-400 mb-4">
                Train quantum neural networks using our advanced optimization algorithms and quantum backpropagation.
              </p>
            </div>

            {/* Quantum Simulator */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Simulator</h3>
              <p className="text-gray-400 mb-4">
                High-performance quantum simulator supporting up to 100+ qubits with noise modeling and error correction.
              </p>
            </div>

            {/* API Integration */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">API Integration</h3>
              <p className="text-gray-400 mb-4">
                RESTful APIs and SDKs for seamless integration with existing applications and workflows.
              </p>
            </div>

            {/* Real Quantum Hardware */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Quantum Hardware</h3>
              <p className="text-gray-400 mb-4">
                Access to real quantum computers from leading providers including IBM, Google, and our own quantum systems.
              </p>
            </div>

            {/* Advanced Analytics */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive analytics dashboard with performance metrics, optimization insights, and result visualization.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Applications & Use Cases</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Drug Discovery */}
            <div className="card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">Drug Discovery</h3>
              <p className="text-gray-300 mb-4">
                Accelerate pharmaceutical research by simulating molecular interactions and predicting drug efficacy 
                with quantum precision.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Molecular dynamics simulation</li>
                <li>• Protein folding prediction</li>
                <li>• Drug-target interaction modeling</li>
                <li>• Toxicity prediction</li>
              </ul>
            </div>

            {/* Financial Modeling */}
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">Financial Modeling</h3>
              <p className="text-gray-300 mb-4">
                Revolutionize risk assessment, portfolio optimization, and market prediction with quantum-enhanced 
                financial algorithms.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Risk assessment and management</li>
                <li>• Portfolio optimization</li>
                <li>• Market prediction models</li>
                <li>• Fraud detection</li>
              </ul>
            </div>

            {/* Climate Prediction */}
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-2xl font-bold mb-4">Climate Prediction</h3>
              <p className="text-gray-300 mb-4">
                Model complex climate systems and predict weather patterns with unprecedented accuracy using 
                quantum computational power.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Weather pattern modeling</li>
                <li>• Climate change prediction</li>
                <li>• Atmospheric dynamics</li>
                <li>• Ocean current modeling</li>
              </ul>
            </div>

            {/* Logistics Optimization */}
            <div className="card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4">Logistics Optimization</h3>
              <p className="text-gray-300 mb-4">
                Solve complex routing and scheduling problems in real-time with quantum optimization algorithms 
                that scale to enterprise levels.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Route optimization</li>
                <li>• Supply chain management</li>
                <li>• Resource allocation</li>
                <li>• Demand forecasting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Quantum Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Quantum Gates</h4>
              <p className="text-sm text-gray-400">Universal set of quantum operations</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Quantum Circuits</h4>
              <p className="text-sm text-gray-400">Composable quantum operations</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Quantum Algorithms</h4>
              <p className="text-sm text-gray-400">Optimization and machine learning</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Error Correction</h4>
              <p className="text-sm text-gray-400">Quantum error correction codes</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Access Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="card border border-gray-600">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-400 mb-4">Perfect for researchers and students</p>
                <div className="text-3xl font-bold mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-left space-y-2 text-sm text-gray-300 mb-6">
                  <li>• 10 qubit simulator access</li>
                  <li>• Basic quantum circuits</li>
                  <li>• Community support</li>
                  <li>• 100 API calls/month</li>
                </ul>
                <Link href="/contact" className="btn-primary w-full">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Professional */}
            <div className="card border border-purple-500 bg-gradient-to-b from-purple-600/10 to-transparent">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-gray-400 mb-4">For businesses and research teams</p>
                <div className="text-3xl font-bold mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-left space-y-2 text-sm text-gray-300 mb-6">
                  <li>• 50 qubit simulator access</li>
                  <li>• Advanced quantum algorithms</li>
                  <li>• Priority support</li>
                  <li>• 1000 API calls/month</li>
                  <li>• Real quantum hardware access</li>
                </ul>
                <Link href="/contact" className="btn-primary w-full">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="card border border-blue-500">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-4">Custom solutions for large organizations</p>
                <div className="text-3xl font-bold mb-6">Custom</div>
                <ul className="text-left space-y-2 text-sm text-gray-300 mb-6">
                  <li>• Unlimited qubit access</li>
                  <li>• Custom quantum algorithms</li>
                  <li>• Dedicated support team</li>
                  <li>• Unlimited API access</li>
                  <li>• On-premise deployment</li>
                  <li>• Custom integrations</li>
                </ul>
                <Link href="/contact" className="btn-primary w-full">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Quantum Advantage?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock computational power that was previously impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Platform Access
              </Link>
              <Link href="/quantum-services" className="btn-secondary">
                Explore All Quantum Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}