import Link from "next/link";

export const metadata = {
  title: "Services - Zion Tech Group | AI, Quantum Computing, Cybersecurity & Enterprise Solutions",
  description: "Comprehensive technology services including AI solutions, quantum computing, cybersecurity, enterprise IT, and space technology. Transform your business with Zion Tech Group.",
  keywords: "AI services, quantum computing, cybersecurity, enterprise IT, space technology, technology solutions, Zion Tech Group",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business 
            and accelerate your digital transformation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Services */}
            <div className="card group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Harness the power of artificial intelligence to automate operations, 
                enhance decision-making, and create intelligent business processes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Autonomous Business Operations
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Business Intelligence & Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Content Generation & Marketing
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Research & Development
                </li>
              </ul>
              <Link href="/ai-services" className="btn-primary">
                Explore AI Services
              </Link>
            </div>

            {/* Quantum Services */}
            <div className="card group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leverage next-generation quantum computing to solve complex problems 
                and gain competitive advantages in finance, logistics, and research.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quantum Cloud Infrastructure
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Financial Trading Algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Optimization Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Research & Development
                </li>
              </ul>
              <Link href="/quantum-services" className="btn-primary">
                Explore Quantum Services
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="card group">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Protect your digital assets with advanced threat detection, 
                compliance automation, and enterprise-grade security solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SOC2 Compliance Automation
                </li>
                <li className="flex items-center text-gray-400 mr-3">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Threat Detection
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Security Audits & Assessments
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Incident Response
                </li>
              </ul>
              <Link href="/cybersecurity" className="btn-primary">
                Explore Security Services
              </Link>
            </div>

            {/* Enterprise IT */}
            <div className="card group">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise IT</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Build scalable, resilient infrastructure with cloud migration, 
                digital transformation consulting, and managed IT services.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cloud Migration & Strategy
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Infrastructure Design
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Digital Transformation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Managed Services
                </li>
              </ul>
              <Link href="/enterprise-it" className="btn-primary">
                Explore IT Services
              </Link>
            </div>

            {/* Space Technology */}
            <div className="card group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Space Technology</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneer the future with satellite systems, space infrastructure, 
                and advanced aerospace solutions for commercial and research applications.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Satellite Systems
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Space Infrastructure
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Aerospace Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Research & Development
                </li>
              </ul>
              <Link href="/space-tech" className="btn-primary">
                Explore Space Tech
              </Link>
            </div>

            {/* Zion OS Platform */}
            <div className="card group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Zion OS Platform</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Launch sovereign AI-powered digital economies with our unified 
                deployment protocol and comprehensive ecosystem management.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  One-Click Deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Marketplace & Governance
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Token Economics
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Identity & KYC
                </li>
              </ul>
              <Link href="/zion-os" className="btn-primary">
                Explore Zion OS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can help transform your business 
              with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Us
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