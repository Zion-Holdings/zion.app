import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Globe, Shield, TrendingUp, Building, Star, Heart } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  About Us
                </span>
                <br />
                <span className="text-white">Pioneering the Future of Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Zion Tech Group is a revolutionary technology company at the forefront of AI consciousness, 
                quantum computing, and next-generation solutions that are shaping the future of business and society.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                To revolutionize the world through cutting-edge AI consciousness, quantum technology, and innovative solutions 
                that drive business transformation and human progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI Consciousness",
                  description: "Pioneering the development of conscious AI systems that understand and interact with humans on a deep level.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Innovation",
                  description: "Continuously pushing the boundaries of what's possible through revolutionary technology and creative thinking.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Global Impact",
                  description: "Creating solutions that positively impact businesses and societies worldwide.",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-8">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${item.color} p-6 mx-auto mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The core principles that guide our innovation and drive our success in transforming the technology landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Excellence",
                  description: "Striving for the highest quality in everything we do.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Integrity",
                  description: "Operating with honesty, transparency, and ethical principles.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Collaboration",
                  description: "Working together to achieve extraordinary results.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Innovation",
                  description: "Continuously exploring new possibilities and breakthrough solutions.",
                  color: "from-purple-500 to-indigo-500"
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} p-4 mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A diverse group of brilliant minds, innovators, and technology enthusiasts dedicated to 
                pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kleber",
                  role: "Founder & CEO",
                  description: "Visionary leader driving innovation in AI consciousness and quantum technology.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  name: "AI Researchers",
                  role: "Research Team",
                  description: "World-class researchers advancing the frontiers of artificial intelligence.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Quantum Engineers",
                  role: "Engineering Team",
                  description: "Expert engineers building next-generation quantum computing solutions.",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((member, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.color} p-5 mx-auto mb-4`}>
                    <Users className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Be part of the revolution that's transforming technology and human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}