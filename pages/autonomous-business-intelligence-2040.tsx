import React from 'react';
import Layout from '../components/layout/Layout';
import { BarChart3, Brain, Zap, Target, Users, Award, Clock, CheckCircle, TrendingUp, Shield } from 'lucide-react';

export default function AutonomousBusinessIntelligence2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <BarChart3 className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Autonomous Business Intelligence
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of business intelligence with our revolutionary autonomous AI platform, 
                providing real-time insights and automated decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                  Experience Intelligence
                </button>
                <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300">
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
                Revolutionary Business Intelligence Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our autonomous business intelligence platform represents the pinnacle of AI-driven business analytics, 
                providing unprecedented insights and automated decision-making capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Autonomous Decision Making",
                  description: "AI systems that autonomously analyze data and make business decisions in real-time.",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Predictive Analytics",
                  description: "Advanced forecasting models that predict market trends and business outcomes.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Intelligence",
                  description: "Instant insights and analysis from live data streams across all business systems.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Strategic Planning",
                  description: "AI-powered strategic planning and optimization for business growth.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Performance Optimization",
                  description: "Continuous optimization of business processes and performance metrics.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Risk Management",
                  description: "Advanced risk assessment and mitigation strategies using AI analysis.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Business Intelligence Technology
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on the most advanced AI and analytics technologies available in 2040, ensuring unparalleled business insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "AI-Powered Analytics Engines",
                "Real-time Data Processing",
                "Predictive Modeling Systems",
                "Autonomous Decision Frameworks",
                "Business Process Automation",
                "Advanced Visualization Tools",
                "Natural Language Processing",
                "Machine Learning Algorithms"
              ].map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/30 border border-gray-700/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Business Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our autonomous business intelligence platform enables breakthrough applications across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Services",
                  description: "Real-time market analysis, risk assessment, and automated trading decisions.",
                  icon: "💰"
                },
                {
                  title: "Healthcare",
                  description: "Patient outcome prediction, resource optimization, and treatment planning.",
                  icon: "🏥"
                },
                {
                  title: "Manufacturing",
                  description: "Predictive maintenance, quality control, and supply chain optimization.",
                  icon: "🏭"
                },
                {
                  title: "Retail",
                  description: "Customer behavior analysis, inventory management, and pricing optimization.",
                  icon: "🛍️"
                },
                {
                  title: "Transportation",
                  description: "Route optimization, demand forecasting, and fleet management.",
                  icon: "🚚"
                },
                {
                  title: "Energy",
                  description: "Grid optimization, demand forecasting, and renewable energy integration.",
                  icon: "⚡"
                }
              ].map((useCase, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-emerald-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Autonomous Business Intelligence?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in the business intelligence revolution and experience the future of automated decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}