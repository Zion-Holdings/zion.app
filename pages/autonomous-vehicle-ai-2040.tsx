import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Car, Eye, TrendingUp, Shield, MapPin, Navigation } from 'lucide-react';

export default function AutonomousVehicleAI2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Autonomous Vehicle AI
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of transportation with revolutionary AI that provides consciousness-based driving, 
                advanced safety systems, and autonomous navigation for the next generation of vehicles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Experience Autonomous Driving
                </button>
                <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
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
                Revolutionary Autonomous Vehicle AI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our autonomous vehicle AI platform represents the pinnacle of intelligent transportation, 
                combining advanced AI consciousness with sophisticated safety systems and autonomous navigation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Consciousness-Based Driving",
                  description: "AI consciousness that understands and responds to complex driving scenarios.",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Advanced Vision Systems",
                  description: "Multi-spectral vision systems for comprehensive environmental awareness.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Navigation className="w-8 h-8" />,
                  title: "Autonomous Navigation",
                  description: "Intelligent navigation systems that adapt to changing road conditions.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Safety Systems",
                  description: "Advanced safety protocols ensuring passenger and pedestrian protection.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: "Real-Time Mapping",
                  description: "Dynamic mapping systems that update in real-time for optimal routing.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Car className="w-8 h-8" />,
                  title: "Vehicle Integration",
                  description: "Seamless integration with vehicle systems for optimal performance.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-red-500/5 to-orange-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Autonomous Vehicle AI?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform transportation with AI that provides safe, efficient, and intelligent autonomous driving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Enhanced Safety",
                  description: "Advanced safety systems that prevent accidents and protect passengers.",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Improved Efficiency",
                  description: "Optimized driving patterns that reduce fuel consumption and emissions.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Accessibility",
                  description: "Transportation solutions accessible to all, including those unable to drive.",
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
              Ready to Experience Autonomous Driving?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of autonomous vehicle AI and experience the next generation of transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Autonomous Driving Today
              </button>
              <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}