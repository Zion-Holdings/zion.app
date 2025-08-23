import React from 'react';
import Layout from '../components/layout/Layout';
import { BookOpen, FileText, MessageCircle, HelpCircle, GraduationCap, Star, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Resources() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                Knowledge & Support
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Access comprehensive knowledge, documentation, and support resources to help you 
                maximize the value of Zion Tech Group's revolutionary technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Documentation */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Documentation</h3>
                <p className="text-gray-400 mb-6">
                  Comprehensive technical documentation, API references, and implementation guides for all our services.
                </p>
                <div className="space-y-3">
                  <Link href="/docs" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Technical Docs</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/api-docs" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">API Reference</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/implementation-guides" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Implementation Guides</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Blog & News */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Blog & News</h3>
                <p className="text-gray-400 mb-6">
                  Latest insights, industry trends, and updates on revolutionary technology developments.
                </p>
                <div className="space-y-3">
                  <Link href="/blog" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Latest Articles</span>
                    <ExternalLink className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/news" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Company News</span>
                    <ExternalLink className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/industry-insights" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Industry Insights</span>
                    <ExternalLink className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Support Center */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Support Center</h3>
                <p className="text-gray-400 mb-6">
                  Get help and support for all our services with comprehensive troubleshooting and assistance.
                </p>
                <div className="space-y-3">
                  <Link href="/support" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Help & Support</span>
                    <ExternalLink className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/faq" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">FAQ</span>
                    <ExternalLink className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/troubleshooting" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Troubleshooting</span>
                    <ExternalLink className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Training */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Training</h3>
                <p className="text-gray-400 mb-6">
                  Comprehensive training programs and certification courses to master our technology solutions.
                </p>
                <div className="space-y-3">
                  <Link href="/training" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Training Programs</span>
                    <ExternalLink className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/certifications" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Certifications</span>
                    <ExternalLink className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/webinars" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Webinars</span>
                    <ExternalLink className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Case Studies */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Case Studies</h3>
                <p className="text-gray-400 mb-6">
                  Real-world success stories and examples of how our solutions transform businesses.
                </p>
                <div className="space-y-3">
                  <Link href="/case-studies" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Success Stories</span>
                    <ExternalLink className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/customer-stories" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Customer Stories</span>
                    <ExternalLink className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/implementation-examples" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Implementation Examples</span>
                    <ExternalLink className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Downloads */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Downloads</h3>
                <p className="text-gray-400 mb-6">
                  Free resources, whitepapers, and tools to help you get started with our solutions.
                </p>
                <div className="space-y-3">
                  <Link href="/whitepapers" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Whitepapers</span>
                    <ExternalLink className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/tools" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Free Tools</span>
                    <ExternalLink className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/templates" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Templates</span>
                    <ExternalLink className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Access to Popular Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get started quickly with our most popular and frequently accessed resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Getting Started Guide", href: "/getting-started", description: "Quick start guide for new users" },
                { name: "API Documentation", href: "/api-docs", description: "Complete API reference and examples" },
                { name: "Security Best Practices", href: "/security-guide", description: "Security guidelines and recommendations" },
                { name: "Performance Optimization", href: "/performance-guide", description: "Tips for optimal performance" },
                { name: "Integration Examples", href: "/integration-examples", description: "Code samples and integration guides" },
                { name: "Troubleshooting Guide", href: "/troubleshooting", description: "Common issues and solutions" },
                { name: "Release Notes", href: "/release-notes", description: "Latest updates and changes" },
                { name: "Community Forum", href: "/community", description: "Connect with other users" }
              ].map((resource, index) => (
                <Link
                  key={index}
                  href={resource.href}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10 group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help Finding Resources?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Can't find what you're looking for? Our team is here to help you navigate 
              our resources and get the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
              </Link>
              <Link href="/search">
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Search Resources
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}