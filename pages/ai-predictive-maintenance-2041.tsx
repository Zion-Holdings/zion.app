import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Wrench, Monitor, TrendingUp, Shield, AlertTriangle, Settings } from 'lucide-react';

export default function AIPredictiveMaintenance2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  AI Predictive Maintenance
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of maintenance with revolutionary AI that predicts equipment failures, 
                optimizes maintenance schedules, and prevents costly downtime through intelligent monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Predictive Maintenance
                </button>
                <button className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300">
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
                Revolutionary AI Predictive Maintenance Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI predictive maintenance platform represents the pinnacle of intelligent equipment monitoring, 
                combining advanced AI with sophisticated sensor technology and predictive analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Intelligent Failure Prediction",
                  description: "AI algorithms that predict equipment failures before they occur with high accuracy.",
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  icon: <Monitor className="w-8 h-8" />,
                  title: "Real-Time Monitoring",
                  description: "Continuous monitoring of equipment performance and health indicators.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Wrench className="w-8 h-8" />,
                  title: "Optimized Maintenance",
                  description: "AI-driven maintenance scheduling that maximizes equipment uptime and efficiency.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <AlertTriangle className="w-8 h-8" />,
                  title: "Early Warning Systems",
                  description: "Proactive alerts and notifications for potential equipment issues.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Performance Optimization",
                  description: "Continuous optimization of equipment performance and efficiency.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Safety & Compliance",
                  description: "Enhanced safety through predictive maintenance and compliance monitoring.",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-teal-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Predictive Maintenance?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your maintenance operations with AI that prevents failures and optimizes equipment performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Reduced Downtime",
                  description: "Minimize equipment downtime through predictive maintenance and early issue detection.",
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Cost Savings",
                  description: "Lower maintenance costs through optimized scheduling and preventive measures.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Improved Efficiency",
                  description: "Enhanced equipment performance and operational efficiency through AI optimization.",
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
              Ready to Transform Maintenance?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of AI-powered predictive maintenance and prevent costly equipment failures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Predictive Maintenance Today
              </button>
              <button className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}