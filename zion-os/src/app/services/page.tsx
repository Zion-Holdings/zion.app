import Link from "next/link";

export const metadata = {
  title: "Services - Zion Tech Group - AI, Quantum Computing & Enterprise Solutions",
  description: "Comprehensive technology services including AI automation, quantum computing, cybersecurity, enterprise IT, and space technology solutions.",
  keywords: "services, AI automation, quantum computing, cybersecurity, enterprise IT, space technology, Zion Tech Group",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions that drive digital transformation and unlock new possibilities 
            for businesses across all industries.
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Automation */}
            <div className="card group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI & Automation</h3>
              <p className="text-gray-400 mb-6">
                Transform your business operations with intelligent automation solutions that learn, adapt, and scale with your needs.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Process Automation
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Document Processing
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer Service AI
                </div>
              </div>
              <Link href="/ai-automation-services" className="btn-primary w-full">
                Learn More
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="card group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
              <p className="text-gray-400 mb-6">
                Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Neural Network Platform
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Financial Modeling
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Drug Discovery
                </div>
              </div>
              <Link href="/quantum-services" className="btn-primary w-full">
                Learn More
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="card group">
              <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-400 mb-6">
                Advanced security solutions to protect your digital assets and ensure compliance with industry standards.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Threat Detection
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SOC2 Compliance
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-Powered Security
                </div>
              </div>
              <Link href="/cybersecurity" className="btn-primary w-full">
                Learn More
              </Link>
            </div>

            {/* Enterprise IT */}
            <div className="card group">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise IT</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive IT infrastructure solutions designed for modern enterprise needs and scalability.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Infrastructure Design
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  DevOps Automation
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cloud Migration
                </div>
              </div>
              <Link href="/enterprise-it" className="btn-primary w-full">
                Learn More
              </Link>
            </div>

            {/* AI Consciousness */}
            <div className="card group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Consciousness</h3>
              <p className="text-gray-400 mb-6">
                Explore the frontier of artificial consciousness with systems that exhibit emergent intelligence and self-awareness.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consciousness Evolution
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Self-Modifying AI
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ethical AI Development
                </div>
              </div>
              <Link href="/ai-consciousness-evolution" className="btn-primary w-full">
                Learn More
              </Link>
            </div>

            {/* Space Technology */}
            <div className="card group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Space Technology</h3>
              <p className="text-gray-400 mb-6">
                Cutting-edge space technology solutions for satellite operations and space exploration missions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Satellite Operations
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Space Exploration
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mission Control Systems
                </div>
              </div>
              <Link href="/space-tech" className="btn-primary w-full">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Solutions */}
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive artificial intelligence solutions that drive innovation and efficiency across your organization.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Link href="/ai-automation-services" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  → AI Automation
                </Link>
                <Link href="/ai-business-intelligence" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  → Business Intelligence
                </Link>
                <Link href="/ai-content-generation" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  → Content Generation
                </Link>
                <Link href="/ai-agents" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  → AI Agents
                </Link>
                <Link href="/ai-consciousness-evolution" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  → Consciousness Evolution
                </Link>
                <Link href="/ai-blockchain-analytics" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  → Blockchain Analytics
                </Link>
              </div>
              <Link href="/ai-solutions" className="btn-primary">
                Explore AI Solutions
              </Link>
            </div>

            {/* Infrastructure Services */}
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-2xl font-bold mb-4">Infrastructure Services</h3>
              <p className="text-gray-300 mb-6">
                Robust and scalable infrastructure solutions that form the foundation of your digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Link href="/enterprise-it" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  → Enterprise IT
                </Link>
                <Link href="/cybersecurity" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  → Cybersecurity
                </Link>
                <Link href="/quantum-services" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  → Quantum Services
                </Link>
                <Link href="/space-tech" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  → Space Technology
                </Link>
                <Link href="/cloud-infrastructure" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  → Cloud Infrastructure
                </Link>
                <Link href="/devops-automation" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  → DevOps Automation
                </Link>
              </div>
              <Link href="/infrastructure-services" className="btn-primary">
                Explore Infrastructure
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Innovation First</h4>
              <p className="text-sm text-gray-400">Cutting-edge technology and research-driven solutions</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Ethical AI</h4>
              <p className="text-sm text-gray-400">Responsible development with built-in safety measures</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Global Expertise</h4>
              <p className="text-sm text-gray-400">Worldwide team with diverse industry experience</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-400">Round-the-clock technical support and monitoring</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your technology goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}