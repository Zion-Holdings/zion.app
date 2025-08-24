import Link from "next/link";

export const metadata = {
  title: "Documentation - Zion Tech Group | Technical Guides & Resources",
  description: "Access comprehensive technical documentation, guides, and resources for Zion Tech Group's products and services. Find API docs, tutorials, and best practices.",
  keywords: "documentation, technical guides, API docs, tutorials, Zion Tech Group, developer resources, technical resources",
};

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technical documentation, guides, and resources to help you 
            get the most out of Zion Tech Group's products and services
          </p>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our step-by-step guides
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Zion OS Platform</h3>
                <p className="text-gray-300 mb-4">
                  Deploy your first digital economy in minutes
                </p>
                <Link href="/docs/zion-os/quickstart" className="btn-primary">
                  Get Started
                </Link>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Integrate AI capabilities into your applications
                </p>
                <Link href="/docs/ai-services/quickstart" className="btn-primary">
                  Get Started
                </Link>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                <p className="text-gray-300 mb-4">
                  Connect to our services via REST APIs
                </p>
                <Link href="/docs/api/quickstart" className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find the documentation you need organized by product and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zion OS Platform */}
            <div className="card group hover:bg-blue-500/10 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Zion OS Platform</h3>
              <p className="text-gray-400 mb-4">
                Complete documentation for the Zion OS digital economy platform
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Platform Overview</li>
                <li>• Installation & Setup</li>
                <li>• Configuration Guide</li>
                <li>• API Reference</li>
                <li>• Deployment Guide</li>
              </ul>
              <Link href="/docs/zion-os" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Documentation →
              </Link>
            </div>
            
            {/* AI Services */}
            <div className="card group hover:bg-purple-500/10 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Services</h3>
              <p className="text-gray-400 mb-4">
                Documentation for AI and machine learning services
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• AI Services Overview</li>
                <li>• Content Generation</li>
                <li>• Business Intelligence</li>
                <li>• Autonomous Operations</li>
                <li>• AI Governance</li>
              </ul>
              <Link href="/docs/ai-services" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View Documentation →
              </Link>
            </div>
            
            {/* Quantum Services */}
            <div className="card group hover:bg-indigo-500/10 transition-colors">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Services</h3>
              <p className="text-gray-400 mb-4">
                Guides for quantum computing and quantum algorithms
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Quantum Computing Basics</li>
                <li>• Algorithm Implementation</li>
                <li>• Quantum Error Correction</li>
                <li>• Performance Optimization</li>
                <li>• Use Case Examples</li>
              </ul>
              <Link href="/docs/quantum-services" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                View Documentation →
              </Link>
            </div>
            
            {/* Cybersecurity */}
            <div className="card group hover:bg-green-500/10 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-400 mb-4">
                Security implementation and best practices
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Security Framework</li>
                <li>• Threat Detection</li>
                <li>• Compliance Guidelines</li>
                <li>• Incident Response</li>
                <li>• Security Testing</li>
              </ul>
              <Link href="/docs/cybersecurity" className="text-green-400 hover:text-green-300 text-sm font-medium">
                View Documentation →
              </Link>
            </div>
            
            {/* Enterprise IT */}
            <div className="card group hover:bg-red-500/10 transition-colors">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise IT</h3>
              <p className="text-gray-400 mb-4">
                Infrastructure and enterprise solutions guides
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Infrastructure Setup</li>
                <li>• Cloud Migration</li>
                <li>• DevOps Practices</li>
                <li>• Monitoring & Alerting</li>
                <li>• Disaster Recovery</li>
              </ul>
              <Link href="/docs/enterprise-it" className="text-red-400 hover:text-red-300 text-sm font-medium">
                View Documentation →
              </Link>
            </div>
            
            {/* Space Technology */}
            <div className="card group hover:bg-yellow-500/10 transition-colors">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Technology</h3>
              <p className="text-gray-400 mb-4">
                Satellite and space technology documentation
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Satellite Systems</li>
                <li>• Ground Station Setup</li>
                <li>• Communication Protocols</li>
                <li>• Data Processing</li>
                <li>• System Maintenance</li>
              </ul>
              <Link href="/docs/space-technology" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                View Documentation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              API Documentation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive API references and integration guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">REST API Reference</h3>
              <p className="text-gray-400 mb-4">
                Complete REST API documentation with examples, authentication, 
                and error handling for all Zion Tech Group services.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-400">
                <div>• Authentication & Authorization</div>
                <div>• Request/Response Formats</div>
                <div>• Rate Limiting</div>
                <div>• Error Codes</div>
                <div>• SDK Examples</div>
              </div>
              <Link href="/docs/api/rest" className="btn-primary">
                View REST API Docs
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">GraphQL API</h3>
              <p className="text-gray-400 mb-4">
                GraphQL API documentation for flexible data querying and 
                real-time subscriptions across our services.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-400">
                <div>• Schema Documentation</div>
                <div>• Query Examples</div>
                <div>• Mutations & Subscriptions</div>
                <div>• Type Definitions</div>
                <div>• Playground Access</div>
              </div>
              <Link href="/docs/api/graphql" className="btn-primary">
                View GraphQL Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials & Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tutorials & Examples
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Step-by-step tutorials and practical examples to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Building Your First AI Chatbot</h3>
              <p className="text-gray-400 mb-4">
                Learn how to create an intelligent chatbot using our AI services 
                and integrate it into your application.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15 min read
              </div>
              <Link href="/docs/tutorials/ai-chatbot" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read Tutorial →
              </Link>
            </div>
            
            <div className="card group">
              <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Quantum Algorithm Implementation</h3>
              <p className="text-gray-400 mb-4">
                Step-by-step guide to implementing quantum algorithms using 
                our quantum computing services.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                25 min read
              </div>
              <Link href="/docs/tutorials/quantum-algorithm" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Read Tutorial →
              </Link>
            </div>
            
            <div className="card group">
              <div className="w-full h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Security Best Practices</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive guide to implementing security best practices 
                across your applications and infrastructure.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                20 min read
              </div>
              <Link href="/docs/tutorials/security-best-practices" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Read Tutorial →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Additional resources to help developers build with our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">SDKs & Libraries</h3>
              <p className="text-gray-400 text-sm mb-3">
                Official SDKs for popular programming languages
              </p>
              <Link href="/docs/sdks" className="text-blue-400 hover:text-blue-300 text-sm">
                View SDKs →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Code Samples</h3>
              <p className="text-gray-400 text-sm mb-3">
                Ready-to-use code examples and snippets
              </p>
              <Link href="/docs/code-samples" className="text-purple-400 hover:text-purple-300 text-sm">
                View Samples →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-gray-400 text-sm mb-3">
                Connect with other developers
              </p>
              <Link href="/docs/community" className="text-green-400 hover:text-green-300 text-sm">
                Join Community →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Status Page</h3>
              <p className="text-gray-400 text-sm mb-3">
                Service status and uptime information
              </p>
              <Link href="/status" className="text-red-400 hover:text-red-300 text-sm">
                Check Status →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Support
              </Link>
              <Link href="/docs/faq" className="btn-secondary text-lg px-8 py-4">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}