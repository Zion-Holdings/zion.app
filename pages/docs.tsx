import React from 'react';
import Layout from '../components/layout/Layout';
import { FileText, Code, BookOpen, Download, ExternalLink, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Documentation() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <FileText className="w-4 h-4" />
                Technical Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive technical documentation, API references, and implementation guides 
                for all Zion Tech Group revolutionary technology solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Getting Started */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Getting Started</h3>
                <p className="text-gray-400 mb-6">
                  Quick start guides and tutorials to get you up and running with our services.
                </p>
                <div className="space-y-3">
                  <Link href="/docs/getting-started" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quick Start Guide</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/installation" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Installation Guide</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/first-steps" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">First Steps</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* API Reference */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">API Reference</h3>
                <p className="text-gray-400 mb-6">
                  Complete API documentation with examples, endpoints, and integration guides.
                </p>
                <div className="space-y-3">
                  <Link href="/docs/api/ai-services" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">AI Services API</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/api/quantum-services" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum Services API</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/api/enterprise" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Enterprise API</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* SDKs & Libraries */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">SDKs & Libraries</h3>
                <p className="text-gray-400 mb-6">
                  Client libraries and SDKs for easy integration with your applications.
                </p>
                <div className="space-y-3">
                  <Link href="/docs/sdks/python" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Python SDK</span>
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/sdks/javascript" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">JavaScript SDK</span>
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/sdks/go" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Go SDK</span>
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Implementation Guides */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Implementation Guides</h3>
                <p className="text-gray-400 mb-6">
                  Step-by-step guides for implementing our solutions in your environment.
                </p>
                <div className="space-y-3">
                  <Link href="/docs/guides/ai-consciousness" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">AI Consciousness</span>
                    <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/guides/quantum-cybersecurity" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum Cybersecurity</span>
                    <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/guides/space-technology" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Space Technology</span>
                    <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Best Practices */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Best Practices</h3>
                <p className="text-gray-400 mb-6">
                  Security, performance, and deployment best practices for optimal results.
                </p>
                <div className="space-y-3">
                  <Link href="/docs/best-practices/security" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Security Guidelines</span>
                    <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/best-practices/performance" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Performance Optimization</span>
                    <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/best-practices/deployment" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Deployment Guide</span>
                    <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Troubleshooting */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Troubleshooting</h3>
                <p className="text-gray-400 mb-6">
                  Common issues, error codes, and solutions to help you resolve problems quickly.
                </p>
                <div className="space-y-3">
                  <Link href="/docs/troubleshooting/common-issues" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Common Issues</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/troubleshooting/error-codes" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Error Codes</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/docs/troubleshooting/debugging" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Debugging Guide</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Reference
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Essential information and quick links for developers and system administrators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "API Endpoints", href: "/docs/api/endpoints", description: "Complete list of all API endpoints" },
                { name: "Authentication", href: "/docs/auth", description: "API authentication and authorization" },
                { name: "Rate Limits", href: "/docs/rate-limits", description: "API usage limits and quotas" },
                { name: "Webhooks", href: "/docs/webhooks", description: "Webhook configuration and events" },
                { name: "SDK Examples", href: "/docs/sdks/examples", description: "Code examples for all SDKs" },
                { name: "Error Handling", href: "/docs/errors", description: "Error handling best practices" },
                { name: "Testing", href: "/docs/testing", description: "Testing and debugging tools" },
                { name: "Changelog", href: "/docs/changelog", description: "API and SDK version history" }
              ].map((reference, index) => (
                <Link
                  key={index}
                  href={reference.href}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10 group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {reference.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{reference.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help with Documentation?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Can't find what you're looking for? Our technical team is here to help 
              you get the most out of our documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
              </Link>
              <Link href="/support">
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Visit Support Center
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}