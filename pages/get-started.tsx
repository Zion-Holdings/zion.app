import React from 'react';
import Layout from '../components/layout/Layout';
import { Rocket, Sparkles, CheckCircle, ArrowRight, Users, Shield, Zap, Target } from 'lucide-react';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <Rocket className="w-4 h-4" />
                Start Your Journey
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Get Started
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Begin your transformation with Zion Tech Group's revolutionary technology solutions. 
                Get up and running quickly with our comprehensive onboarding process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Now
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple 4-Step Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our streamlined onboarding process gets you up and running with revolutionary 
                technology in just four simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Planning",
                  description: "We'll assess your current technology landscape and create a customized implementation plan.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  step: "02",
                  title: "Setup & Configuration",
                  description: "Our team will set up and configure your chosen solutions according to your requirements.",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Training & Onboarding",
                  description: "Comprehensive training for your team to ensure successful adoption and utilization.",
                  icon: <Users className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description: "Go live with full support and ongoing optimization to maximize your success.",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-orange-500 to-red-500"
                }
              ].map((step, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} p-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Starting Point
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Select from our revolutionary technology categories to begin your transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Consciousness */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI & Consciousness</h3>
                <p className="text-gray-400 mb-6">
                  Revolutionary AI consciousness platforms with emotional intelligence and autonomous capabilities.
                </p>
                <div className="space-y-3">
                  <Link href="/ai-consciousness-evolution-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">AI Consciousness Evolution</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/ai-emotional-intelligence-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Emotional Intelligence AI</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/ai-autonomous-research-2041" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Autonomous Research AI</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Quantum Technology */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Quantum Technology</h3>
                <p className="text-gray-400 mb-6">
                  Quantum computing solutions for cybersecurity, neural networks, and advanced computing.
                </p>
                <div className="space-y-3">
                  <Link href="/quantum-neural-ecosystem-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum Neural Ecosystem</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/quantum-cybersecurity-future-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum Cybersecurity</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/quantum-internet-security-2041" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Quantum Internet Security</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Enterprise Solutions */}
              <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Solutions</h3>
                <p className="text-gray-400 mb-6">
                  Advanced enterprise infrastructure and security solutions for large organizations.
                </p>
                <div className="space-y-3">
                  <Link href="/zero-trust-network-architecture" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Zero Trust Security</span>
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/autonomous-business-intelligence-2040" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Business Intelligence</span>
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/autonomous-cloud-infrastructure-manager" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">Cloud Infrastructure</span>
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Start with Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the advantages of working with a technology leader committed to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Expert Support",
                  description: "24/7 expert support and guidance throughout your implementation journey."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Customized Solutions",
                  description: "Tailored solutions designed specifically for your business needs and goals."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Proven Results",
                  description: "Track record of successful implementations with measurable business impact."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Future-Proof Technology",
                  description: "Cutting-edge solutions that will keep you ahead of the competition."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Comprehensive Training",
                  description: "Complete training and onboarding to ensure successful adoption."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Ongoing Optimization",
                  description: "Continuous support and optimization to maximize your technology investment."
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
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Begin your transformation journey today and discover how revolutionary technology 
              can accelerate your business growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}