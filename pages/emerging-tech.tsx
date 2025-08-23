import React from 'react';
import Layout from '../components/layout/Layout';
import { Zap, Sparkles, Brain, Atom, Rocket, Target, Users, Award, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function EmergingTechnology() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Cutting-Edge Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Emerging Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Explore the frontiers of human innovation with our cutting-edge emerging technology 
                solutions that are shaping the future of humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Explore Technologies
                </button>
                <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Space Technology */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Space Technology</h3>
                <p className="text-gray-400 mb-6">
                  Revolutionary space exploration and resource mining technologies for the next frontier.
                </p>
                <div className="space-y-3">
                  <Link href="/space-resource-intelligence-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Space Resource Intelligence</span>
                    <CheckCircle className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/space-resource-mining-platform" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Resource Mining Platform</span>
                    <CheckCircle className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/space-technology" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Space Technology Solutions</span>
                    <CheckCircle className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Brain-Computer Interface */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Brain-Computer Interface</h3>
                <p className="text-gray-400 mb-6">
                  Direct neural interface technology for seamless human-AI communication and control.
                </p>
                <div className="space-y-3">
                  <Link href="/brain-computer-interface-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">BCI Platform 2040</span>
                    <CheckCircle className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/quantum-ai-brain-computer-interface" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum AI BCI</span>
                    <CheckCircle className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/neural-interface-technology" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Neural Interface Tech</span>
                    <CheckCircle className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Autonomous Vehicles */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Autonomous Vehicles</h3>
                <p className="text-gray-400 mb-6">
                  Next-generation autonomous transportation with consciousness-based AI systems.
                </p>
                <div className="space-y-3">
                  <Link href="/autonomous-vehicle-ai-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Autonomous Vehicle AI</span>
                    <CheckCircle className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/self-driving-technology" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Self-Driving Technology</span>
                    <CheckCircle className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/autonomous-transportation" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Autonomous Transportation</span>
                    <CheckCircle className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Quantum Materials */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Atom className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Quantum Materials</h3>
                <p className="text-gray-400 mb-6">
                  Revolutionary materials science using quantum computing and AI discovery.
                </p>
                <div className="space-y-3">
                  <Link href="/quantum-materials-discovery-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Materials Discovery</span>
                    <CheckCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/quantum-materials-discovery-platform" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Discovery Platform</span>
                    <CheckCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/advanced-materials-science" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Advanced Materials</span>
                    <CheckCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Quantum Financial Intelligence */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Quantum Financial Intelligence</h3>
                <p className="text-gray-400 mb-6">
                  Quantum-powered financial analysis and trading systems for market advantage.
                </p>
                <div className="space-y-3">
                  <Link href="/quantum-financial-intelligence-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Financial Intelligence</span>
                    <CheckCircle className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/quantum-financial-trading-platform" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Trading Platform</span>
                    <CheckCircle className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/quantum-financial-trading" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum Trading</span>
                    <CheckCircle className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Metaverse & Virtual Reality */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Metaverse & VR</h3>
                <p className="text-gray-400 mb-6">
                  Immersive virtual reality and metaverse platforms for the digital future.
                </p>
                <div className="space-y-3">
                  <Link href="/metaverse-ai-development-platform" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Metaverse AI Platform</span>
                    <CheckCircle className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/quantum-metaverse" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum Metaverse</span>
                    <CheckCircle className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/virtual-reality-platforms" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">VR Platforms</span>
                    <CheckCircle className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Benefits */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Emerging Technology?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay ahead of the competition with cutting-edge technologies that provide 
                unprecedented advantages and capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "First-Mover Advantage",
                  description: "Be among the first to adopt revolutionary technologies and gain competitive edge."
                },
                {
                  icon: <Award className="w-8 h-8 text-orange-400" />,
                  title: "Innovation Leadership",
                  description: "Position your organization as a technology leader and innovator."
                },
                {
                  icon: <Clock className="w-8 h-8 text-red-400" />,
                  title: "Future-Proof Solutions",
                  description: "Invest in technologies that will define the future of your industry."
                },
                {
                  icon: <Target className="w-8 h-8 text-green-400" />,
                  title: "Unprecedented Capabilities",
                  description: "Access capabilities that were previously impossible or impractical."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Enhanced User Experience",
                  description: "Provide cutting-edge experiences that delight and engage users."
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "Intelligent Automation",
                  description: "Leverage AI and consciousness for intelligent automation and decision-making."
                }
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-start space-x-4">
                    {benefit.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Embrace the Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the revolution in emerging technology and discover how our cutting-edge 
              solutions can transform your business and shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Explore Technologies Today
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}