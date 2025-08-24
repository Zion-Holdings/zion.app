import Link from "next/link";

export const metadata = {
  title: "Documentation - Zion Tech Group",
  description: "Comprehensive documentation, API references, and technical resources for Zion Tech Group's AI, quantum computing, and technology solutions.",
  keywords: "documentation, API reference, technical docs, developer resources, Zion Tech Group",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technical documentation, API references, and developer resources 
            for Zion Tech Group's cutting-edge technology solutions.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Quick Start Guide</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Get up and running quickly with our technology platforms. Choose your area of interest 
                  and follow our step-by-step guides.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-green-400 font-semibold mr-3">1.</span>
                    <span className="text-gray-300">Choose your platform</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 font-semibold mr-3">2.</span>
                    <span className="text-gray-300">Follow setup instructions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 font-semibold mr-3">3.</span>
                    <span className="text-gray-300">Run your first example</span>
                  </div>
                </div>
                <Link href="/docs/quick-start" className="btn-primary">
                  Get Started
                </Link>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.523 19.246 19 17.5 19c-1.746 0-3.332-.477-4.5-1.253" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">Developer Resources</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Documentation Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="card group">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive guides for AI automation, business intelligence, and machine learning solutions.
              </p>
              <div className="space-y-2 mb-4">
                <Link href="/docs/ai-automation" className="text-sm text-gray-300 hover:text-green-400 block">
                  • AI Automation Services
                </Link>
                <Link href="/docs/ai-business-intelligence" className="text-sm text-gray-300 hover:text-green-400 block">
                  • Business Intelligence Platform
                </Link>
                <Link href="/docs/ai-agents" className="text-sm text-gray-300 hover:text-green-400 block">
                  • AI Agents Framework
                </Link>
                <Link href="/docs/ai-consciousness" className="text-sm text-gray-300 hover:text-green-400 block">
                  • Consciousness Evolution Research
                </Link>
              </div>
              <Link href="/docs/ai-machine-learning" className="text-green-400 hover:text-green-300 text-sm font-medium">
                View All AI Docs →
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="card group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Computing</h3>
              <p className="text-gray-400 mb-4">
                Documentation for quantum neural networks, quantum algorithms, and quantum computing platforms.
              </p>
              <div className="space-y-2 mb-4">
                <Link href="/docs/quantum-neural-networks" className="text-sm text-gray-300 hover:text-purple-400 block">
                  • Quantum Neural Network Platform
                </Link>
                <Link href="/docs/quantum-algorithms" className="text-sm text-gray-300 hover:text-purple-400 block">
                  • Quantum Algorithms Library
                </Link>
                <Link href="/docs/quantum-simulator" className="text-sm text-gray-300 hover:text-purple-400 block">
                  • Quantum Simulator API
                </Link>
                <Link href="/docs/quantum-hardware" className="text-sm text-gray-300 hover:text-purple-400 block">
                  • Real Quantum Hardware Integration
                </Link>
              </div>
              <Link href="/docs/quantum-computing" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View All Quantum Docs →
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="card group">
              <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-400 mb-4">
                Security documentation, threat detection APIs, and compliance frameworks.
              </p>
              <div className="space-y-2 mb-4">
                <Link href="/docs/cybersecurity" className="text-sm text-gray-300 hover:text-red-400 block">
                  • Cybersecurity Services
                </Link>
                <Link href="/docs/threat-detection" className="text-sm text-gray-300 hover:text-red-400 block">
                  • Threat Detection API
                </Link>
                <Link href="/docs/soc2-compliance" className="text-sm text-gray-300 hover:text-red-400 block">
                  • SOC2 Compliance Guide
                </Link>
                <Link href="/docs/zero-trust" className="text-sm text-gray-300 hover:text-red-400 block">
                  • Zero Trust Architecture
                </Link>
              </div>
              <Link href="/docs/cybersecurity" className="text-red-400 hover:text-red-300 text-sm font-medium">
                View All Security Docs →
              </Link>
            </div>

            {/* Enterprise IT */}
            <div className="card group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise IT</h3>
              <p className="text-gray-400 mb-4">
                Infrastructure documentation, cloud migration guides, and DevOps automation.
              </p>
              <div className="space-y-2 mb-4">
                <Link href="/docs/enterprise-it" className="text-sm text-gray-300 hover:text-blue-400 block">
                  • Enterprise IT Services
                </Link>
                <Link href="/docs/cloud-migration" className="text-sm text-gray-300 hover:text-blue-400 block">
                  • Cloud Migration Guide
                </Link>
                <Link href="/docs/devops-automation" className="text-sm text-gray-300 hover:text-blue-400 block">
                  • DevOps Automation
                </Link>
                <Link href="/docs/infrastructure" className="text-sm text-gray-300 hover:text-blue-400 block">
                  • Infrastructure as Code
                </Link>
              </div>
              <Link href="/docs/enterprise-it" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View All IT Docs →
              </Link>
            </div>

            {/* Space Technology */}
            <div className="card group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Technology</h3>
              <p className="text-gray-400 mb-4">
                Satellite systems, Earth observation, and space analytics documentation.
              </p>
              <div className="space-y-2 mb-4">
                <Link href="/docs/space-tech" className="text-sm text-gray-300 hover:text-indigo-400 block">
                  • Space Technology Services
                </Link>
                <Link href="/docs/satellite-systems" className="text-sm text-gray-300 hover:text-indigo-400 block">
                  • Satellite Systems API
                </Link>
                <Link href="/docs/earth-observation" className="text-sm text-gray-300 hover:text-indigo-400 block">
                  • Earth Observation Platform
                </Link>
                <Link href="/docs/space-analytics" className="text-sm text-gray-300 hover:text-indigo-400 block">
                  • Space Analytics Tools
                </Link>
              </div>
              <Link href="/docs/space-technology" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                View All Space Docs →
              </Link>
            </div>

            {/* API Reference */}
            <div className="card group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">API Reference</h3>
              <p className="text-gray-400 mb-4">
                Complete API documentation, SDKs, and integration guides for all platforms.
              </p>
              <div className="space-y-2 mb-4">
                <Link href="/docs/api-reference" className="text-sm text-gray-300 hover:text-yellow-400 block">
                  • REST API Reference
                </Link>
                <Link href="/docs/sdks" className="text-sm text-gray-300 hover:text-yellow-400 block">
                  • SDKs & Libraries
                </Link>
                <Link href="/docs/webhooks" className="text-sm text-gray-300 hover:text-yellow-400 block">
                  • Webhooks & Events
                </Link>
                <Link href="/docs/rate-limits" className="text-sm text-gray-300 hover:text-yellow-400 block">
                  • Rate Limits & Quotas
                </Link>
              </div>
              <Link href="/docs/api-reference" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                View API Docs →
              </Link>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.523 19.246 19 17.5 19c-1.746 0-3.332-.477-4.5-1.253" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">1. Read the Guide</h4>
              <p className="text-sm text-gray-400">Start with our comprehensive getting started guide</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">2. Set Up Your Environment</h4>
              <p className="text-sm text-gray-400">Install SDKs and configure your development environment</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">3. Run Examples</h4>
              <p className="text-sm text-gray-400">Execute sample code and tutorials to learn the basics</p>
            </div>
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">4. Build & Deploy</h4>
              <p className="text-sm text-gray-400">Create your own applications and deploy to production</p>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Authentication & Security</h3>
              <div className="space-y-3">
                <Link href="/docs/authentication" className="text-gray-300 hover:text-blue-400 block">
                  • API Authentication
                </Link>
                <Link href="/docs/security-best-practices" className="text-gray-300 hover:text-blue-400 block">
                  • Security Best Practices
                </Link>
                <Link href="/docs/oauth2" className="text-gray-300 hover:text-blue-400 block">
                  • OAuth 2.0 Implementation
                </Link>
                <Link href="/docs/api-keys" className="text-gray-300 hover:text-blue-400 block">
                  • API Key Management
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Integration Guides</h3>
              <div className="space-y-3">
                <Link href="/docs/webhook-integration" className="text-gray-300 hover:text-green-400 block">
                  • Webhook Integration
                </Link>
                <Link href="/docs/sdk-integration" className="text-gray-300 hover:text-green-400 block">
                  • SDK Integration
                </Link>
                <Link href="/docs/third-party-apis" className="text-gray-300 hover:text-green-400 block">
                  • Third-Party API Integration
                </Link>
                <Link href="/docs/webhook-security" className="text-gray-300 hover:text-green-400 block">
                  • Webhook Security
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Community */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our documentation team and community are here to help you succeed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-gray-300 mb-3">Comprehensive guides and tutorials</p>
                <Link href="/docs/search" className="text-green-400 hover:text-green-300 text-sm">
                  Search Docs →
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-300 mb-3">Connect with other developers</p>
                <Link href="/community" className="text-green-400 hover:text-green-300 text-sm">
                  Join Community →
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-gray-300 mb-3">Get help from our team</p>
                <Link href="/contact" className="text-green-400 hover:text-green-300 text-sm">
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our documentation and start building with Zion Tech Group's technology platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/quick-start" className="btn-primary">
                Start Building
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get Support
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}