import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including autonomous systems, cloud automation, and intelligent solutions." />
        <meta property="og:title" content="AI Services | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive AI services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive autonomous solutions that transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of autonomous AI to streamline operations and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Autonomous Cloud Systems */}
            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Cloud Systems</h3>
              <p className="text-gray-600 mb-6">
                Self-managing cloud infrastructure that automatically scales, optimizes, and maintains peak performance
              </p>
              <ul className="text-sm text-gray-500 space-y-2 text-left mb-6">
                <li>• Auto-scaling infrastructure</li>
                <li>• Self-healing deployments</li>
                <li>• Intelligent load balancing</li>
                <li>• Performance optimization</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full">
                Get Started
              </Link>
            </div>

            {/* AI-Powered Automation */}
            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Automation</h3>
              <p className="text-gray-600 mb-6">
                Intelligent automation that learns from your processes and continuously improves efficiency
              </p>
              <ul className="text-sm text-gray-500 space-y-2 text-left mb-6">
                <li>• Process automation</li>
                <li>• Machine learning workflows</li>
                <li>• Predictive analytics</li>
                <li>• Smart decision making</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full">
                Get Started
              </Link>
            </div>

            {/* Redundancy & Reliability */}
            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Redundancy & Reliability</h3>
              <p className="text-gray-600 mb-6">
                Multi-layer systems ensuring maximum uptime and continuous operation
              </p>
              <ul className="text-sm text-gray-500 space-y-2 text-left mb-6">
                <li>• Multi-region deployment</li>
                <li>• Automatic failover</li>
                <li>• Health monitoring</li>
                <li>• Self-repairing systems</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full">
                Get Started
              </Link>
            </div>

            {/* Advanced Monitoring */}
            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Real-time insights and predictive analytics for optimal performance
              </p>
              <ul className="text-sm text-gray-500 space-y-2 text-left mb-6">
                <li>• Performance metrics</li>
                <li>• Health checks</li>
                <li>• Failure prediction</li>
                <li>• AI-driven insights</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full">
                Get Started
              </Link>
            </div>

            {/* Security & Compliance */}
            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Enterprise-grade security with automated threat detection and response
              </p>
              <ul className="text-sm text-gray-500 space-y-2 text-left mb-6">
                <li>• Security scanning</li>
                <li>• Vulnerability assessment</li>
                <li>• Compliance monitoring</li>
                <li>• Zero-trust architecture</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full">
                Get Started
              </Link>
            </div>

            {/* Global Infrastructure */}
            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Worldwide deployment with edge computing and low-latency routing
              </p>
              <ul className="text-sm text-gray-500 space-y-2 text-left mb-6">
                <li>• Multi-region deployment</li>
                <li>• Edge computing</li>
                <li>• Global CDN</li>
                <li>• Geographic redundancy</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our autonomous AI systems handle the complexity while you focus on growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
              Start Your Project
            </Link>
            <Link href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}