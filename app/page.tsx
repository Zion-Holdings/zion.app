'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 px-4 py-2 rounded-full inline-block">
                🚀 Welcome to 2029
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform tomorrow&apos;s challenges into today&apos;s opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Explore Services
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Solutions */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence solutions for automation, data analysis, and intelligent decision-making systems.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More →
                </button>
              </div>

              {/* Quantum Computing */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum Computing</h3>
                <p className="text-gray-300 mb-6">
                  Next-generation quantum computing solutions for complex problem-solving and computational breakthroughs.
                </p>
                <button className="text-purple-400 hover:text-purple-300 font-semibold">
                  Learn More →
                </button>
              </div>

              {/* Blockchain & Web3 */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Blockchain & Web3</h3>
                <p className="text-gray-300 mb-6">
                  Decentralized solutions, smart contracts, and Web3 infrastructure for the future of digital interactions.
                </p>
                <button className="text-pink-400 hover:text-pink-300 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">John Doe</h4>
                    <p className="text-gray-400 text-sm">CTO, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  &ldquo;Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations.&rdquo;
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    JS
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Jane Smith</h4>
                    <p className="text-gray-400 text-sm">CEO, InnovateLab</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  &ldquo;Their quantum computing expertise helped us solve complex problems that seemed impossible before.&rdquo;
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    MJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Mike Johnson</h4>
                    <p className="text-gray-400 text-sm">Founder, FutureTech</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  &ldquo;The blockchain solutions they developed for us are cutting-edge and have given us a competitive advantage.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
                          <p className="text-xl mb-8 text-gray-200">
                Join the future of technology with Zion Tech Group. Let&apos;s build something amazing together.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}