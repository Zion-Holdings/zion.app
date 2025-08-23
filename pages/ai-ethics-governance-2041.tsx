import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Shield, Scale, Gavel, TrendingUp, Lock, Eye } from 'lucide-react';

export default function AIEthicsGovernance2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  AI Ethics & Governance
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of responsible AI with revolutionary ethics and governance frameworks that ensure 
                AI systems operate safely, fairly, and transparently while maintaining the highest standards of accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                  Implement AI Ethics
                </button>
                <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Ethics & Governance Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI ethics and governance platform represents the pinnacle of responsible artificial intelligence, 
                combining advanced governance frameworks with sophisticated monitoring and compliance capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Ethical AI Framework",
                  description: "Comprehensive framework ensuring AI systems operate within ethical boundaries and human values.",
                  color: "from-amber-500 to-yellow-500"
                },
                {
                  icon: <Scale className="w-8 h-8" />,
                  title: "Fairness & Bias Detection",
                  description: "Advanced algorithms that detect and mitigate bias in AI decision-making processes.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Transparency & Explainability",
                  description: "Clear visibility into AI decision-making processes for accountability and trust.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Gavel className="w-8 h-8" />,
                  title: "Compliance Monitoring",
                  description: "Real-time monitoring of AI systems to ensure regulatory and ethical compliance.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Privacy Protection",
                  description: "Advanced privacy safeguards ensuring AI systems respect user data and confidentiality.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Consciousness Validation",
                  description: "Validation of AI consciousness and ethical decision-making capabilities.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-500/5 to-yellow-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Ethics & Governance?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Build trust and ensure compliance with AI systems that operate ethically and responsibly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Regulatory Compliance",
                  description: "Ensure your AI systems meet all regulatory requirements and industry standards.",
                  color: "from-amber-500 to-yellow-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Risk Mitigation",
                  description: "Identify and mitigate potential risks associated with AI deployment and operation.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Trust Building",
                  description: "Build customer and stakeholder trust through transparent and ethical AI practices.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.color} p-5 mx-auto mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Implement AI Ethics?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of responsible AI and ensure your systems operate with the highest ethical standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                Start Ethical AI Today
              </button>
              <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}