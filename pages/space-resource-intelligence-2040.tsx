import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Rocket, Satellite, Globe, Target, Users, Award, Clock, CheckCircle, Zap, Brain } from 'lucide-react';

export default function SpaceResourceIntelligence2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-6">
                <Rocket className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Space Resource Intelligence
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionize space exploration and resource management with our AI-powered space intelligence platform, 
                enabling sustainable space colonization and resource extraction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Explore Space Intelligence
                </button>
                <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300">
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
                Revolutionary Space Intelligence Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our space resource intelligence platform combines cutting-edge AI with advanced space technology, 
                creating unprecedented capabilities for space exploration and resource management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Autonomous Space Exploration",
                  description: "AI-driven spacecraft and probes that autonomously explore and map celestial bodies.",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Satellite className="w-8 h-8" />,
                  title: "Resource Mapping & Analysis",
                  description: "Advanced scanning and analysis of space resources for optimal extraction planning.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Resource Optimization",
                  description: "Intelligent algorithms for maximizing resource extraction efficiency and sustainability.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Space Colony Planning",
                  description: "Comprehensive planning and management systems for sustainable space colonization.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Monitoring",
                  description: "Continuous monitoring and control of space operations and resource extraction.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Precision Resource Extraction",
                  description: "Advanced robotics and AI systems for precise and safe resource extraction.",
                  color: "from-teal-500 to-blue-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
                Advanced Space Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on the most advanced space technologies available in 2040, ensuring reliable and efficient space operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Quantum Space Communications",
                "AI-Powered Navigation Systems",
                "Advanced Propulsion Technology",
                "Resource Detection Sensors",
                "Autonomous Robotics Systems",
                "Space Weather Monitoring",
                "Sustainable Life Support",
                "Resource Processing Units"
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
                Revolutionary Space Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our space resource intelligence platform enables breakthrough applications across space exploration and colonization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Asteroid Mining",
                  description: "Intelligent extraction of valuable minerals and resources from near-Earth asteroids.",
                  icon: "☄️"
                },
                {
                  title: "Lunar Colonization",
                  description: "Comprehensive planning and management of sustainable lunar settlements.",
                  icon: "🌙"
                },
                {
                  title: "Mars Exploration",
                  description: "Advanced AI systems for Mars resource mapping and colony planning.",
                  icon: "🔴"
                },
                {
                  title: "Space Manufacturing",
                  description: "In-space production facilities using local resources and AI optimization.",
                  icon: "🏭"
                },
                {
                  title: "Resource Transportation",
                  description: "Efficient logistics systems for moving resources between space locations.",
                  icon: "🚀"
                },
                {
                  title: "Space Tourism",
                  description: "AI-enhanced experiences for space tourism and exploration missions.",
                  icon: "👨‍🚀"
                }
              ].map((useCase, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-indigo-500/50 transition-all duration-300">
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
              Ready to Explore Space Intelligence?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in the space exploration revolution and experience the future of space resource management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}