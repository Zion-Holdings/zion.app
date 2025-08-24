import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Mission() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Mission - Zion Tech Group" 
        description="Discover Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and innovative solutions"
        keywords="mission, vision, technology, AI, quantum computing, Zion Tech Group"
        canonical="https://ziontechgroup.com/mission"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To pioneer the future of technology by creating revolutionary AI systems, 
            quantum computing infrastructure, and autonomous solutions that transform 
            businesses and industries worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 mb-16 border border-cyan-500/20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Mission Statement</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "We are committed to pushing the boundaries of what's possible in technology. 
              Through cutting-edge AI, quantum computing, and autonomous systems, we empower 
              organizations to achieve unprecedented levels of efficiency, innovation, and growth. 
              Our mission is to democratize advanced technology and make it accessible to businesses 
              of all sizes, driving the next industrial revolution."
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in next-generation technology solutions, creating a world 
              where AI and quantum computing seamlessly integrate into every aspect of business 
              and society, driving unprecedented progress and innovation.
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Innovation at the forefront</li>
              <li>• Excellence in execution</li>
              <li>• Customer-centric approach</li>
              <li>• Ethical AI development</li>
              <li>• Global collaboration</li>
            </ul>
          </div>
        </div>

        {/* Key Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Advancement</h3>
              <p className="text-gray-300">
                Develop cutting-edge AI systems that operate autonomously and deliver 
                unprecedented business value across all industries.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Innovation</h3>
              <p className="text-gray-300">
                Pioneer quantum computing solutions that solve previously impossible 
                problems and unlock new possibilities in computing.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0-9c-2.485 0-4.5 2.015-4.5 4.5S9.515 9 12 9s4.5 2.015 4.5 4.5S14.485 18 12 18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-gray-300">
                Transform businesses worldwide by making advanced technology accessible 
                and driving sustainable growth across all sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the technological revolution. Discover how our innovative solutions 
            can transform your business and position you at the forefront of advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}