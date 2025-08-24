import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of AI automation, quantum computing, cybersecurity, and enterprise IT solutions. 
              Transform your business with cutting-edge technology that drives innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI automation to quantum computing, we provide end-to-end solutions that drive digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Automation */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI & Automation</h3>
              <p className="text-gray-400 mb-4">
                Intelligent automation solutions that streamline operations and enhance productivity across your organization.
              </p>
              <div className="space-y-2 text-sm">
                <Link href="/ai-automation-services" className="block text-blue-400 hover:text-blue-300 transition-colors">→ AI Automation Services</Link>
                <Link href="/ai-business-intelligence" className="block text-blue-400 hover:text-blue-300 transition-colors">→ Business Intelligence</Link>
                <Link href="/ai-content-generation" className="block text-blue-400 hover:text-blue-300 transition-colors">→ Content Generation</Link>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
              <p className="text-gray-400 mb-4">
                Next-generation quantum solutions for complex computational challenges and advanced analytics.
              </p>
              <div className="space-y-2 text-sm">
                <Link href="/quantum-neural-network-platform" className="block text-purple-400 hover:text-purple-300 transition-colors">→ Neural Network Platform</Link>
                <Link href="/quantum-cloud-infrastructure" className="block text-purple-400 hover:text-purple-300 transition-colors">→ Cloud Infrastructure</Link>
                <Link href="/quantum-financial-trading" className="block text-purple-400 hover:text-purple-300 transition-colors">→ Financial Trading</Link>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-400 mb-4">
                Advanced security solutions to protect your digital assets and ensure compliance with industry standards.
              </p>
              <div className="space-y-2 text-sm">
                <Link href="/cybersecurity" className="block text-red-400 hover:text-red-300 transition-colors">→ Security Solutions</Link>
                <Link href="/soc2-compliance-automation" className="block text-red-400 hover:text-red-300 transition-colors">→ SOC2 Compliance</Link>
                <Link href="/ai-powered-enterprise-security" className="block text-red-400 hover:text-red-300 transition-colors">→ AI-Powered Security</Link>
              </div>
            </div>

            {/* Enterprise IT */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise IT</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive IT infrastructure solutions designed for modern enterprise needs and scalability.
              </p>
              <div className="space-y-2 text-sm">
                <Link href="/enterprise-it" className="block text-green-400 hover:text-green-300 transition-colors">→ IT Infrastructure</Link>
                <Link href="/advanced-it-infrastructure-services" className="block text-green-400 hover:text-green-300 transition-colors">→ Advanced Services</Link>
                <Link href="/autonomous-devops-platform" className="block text-green-400 hover:text-green-300 transition-colors">→ DevOps Platform</Link>
              </div>
            </div>

            {/* AI Agents */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Agents</h3>
              <p className="text-gray-400 mb-4">
                Specialized AI agents that handle complex tasks and provide intelligent assistance across domains.
              </p>
              <div className="space-y-2 text-sm">
                <Link href="/ai-agents" className="block text-yellow-400 hover:text-yellow-300 transition-colors">→ AI Agents Platform</Link>
                <Link href="/ai-autonomous-research" className="block text-yellow-400 hover:text-yellow-300 transition-colors">→ Research Assistant</Link>
                <Link href="/ai-autonomous-business-manager" className="block text-yellow-400 hover:text-yellow-300 transition-colors">→ Business Manager</Link>
              </div>
            </div>

            {/* Space Tech */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Space Technology</h3>
              <p className="text-gray-400 mb-4">
                Cutting-edge space technology solutions for satellite operations and space exploration.
              </p>
              <div className="space-y-2 text-sm">
                <Link href="/space-tech" className="block text-indigo-400 hover:text-indigo-300 transition-colors">→ Space Solutions</Link>
                <Link href="/satellite-operations" className="block text-indigo-400 hover:text-indigo-300 transition-colors">→ Satellite Operations</Link>
                <Link href="/space-exploration" className="block text-indigo-400 hover:text-indigo-300 transition-colors">→ Exploration Tech</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most innovative and transformative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Consciousness Evolution */}
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">AI Consciousness Evolution</h3>
              <p className="text-gray-300 mb-6">
                Explore the frontier of artificial consciousness with our advanced AI systems that simulate and evolve cognitive processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ai-consciousness-evolution" className="btn-primary">
                  Learn More
                </Link>
                <Link href="/ai-consciousness-evolution-2029" className="btn-secondary">
                  Future Vision 2029
                </Link>
              </div>
            </div>

            {/* Quantum Neural Networks */}
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">Quantum Neural Networks</h3>
              <p className="text-gray-300 mb-6">
                Harness the power of quantum computing to create neural networks that solve previously intractable problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quantum-neural-network-platform" className="btn-primary">
                  Explore Platform
                </Link>
                <Link href="/quantum-services" className="btn-secondary">
                  All Quantum Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group. 
              Our cutting-edge solutions are designed to drive innovation and accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </Link>
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}