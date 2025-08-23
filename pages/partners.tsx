import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Handshake, Globe, Shield, TrendingUp, Building, Star } from 'lucide-react';

export default function Partners() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Partnership Opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Partners
                </span>
                <br />
                <span className="text-white">Building the Future Together</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join forces with Zion Tech Group to revolutionize technology and create 
                breakthrough solutions that transform industries and drive human progress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the various ways you can partner with Zion Tech Group to accelerate 
                innovation and create mutual value in the technology ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Handshake className="w-12 h-12" />,
                  title: "Strategic Partnerships",
                  description: "Long-term collaborations to develop and market innovative technology solutions.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Building className="w-12 h-12" />,
                  title: "Technology Partners",
                  description: "Integration partnerships to enhance our technology stack and capabilities.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Global Distribution",
                  description: "Partnerships to expand our reach and deliver solutions worldwide.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Security Partners",
                  description: "Collaborations to enhance cybersecurity and data protection capabilities.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI Research Partners",
                  description: "Academic and research partnerships to advance AI consciousness technology.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: "Growth Partners",
                  description: "Partnerships to accelerate business growth and market expansion.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((partnership, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${partnership.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {partnership.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{partnership.title}</h3>
                  <p className="text-gray-400">{partnership.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group and how we can 
                help you achieve your technology and business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Cutting-Edge Technology",
                  description: "Access to revolutionary AI consciousness and quantum computing solutions.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Market Leadership",
                  description: "Partner with a company at the forefront of technological innovation.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Mutual Growth",
                  description: "Collaborative opportunities that drive success for both partners.",
                  color: "from-green-500 to-emerald-500"
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

        {/* Current Partners */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Current Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're proud to work with leading organizations that share our vision 
                of advancing technology for the benefit of humanity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "AI Research Labs",
                  description: "Leading artificial intelligence research institutions",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  name: "Quantum Computing",
                  description: "Advanced quantum computing technology providers",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Cybersecurity",
                  description: "Enterprise security and threat protection experts",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  name: "Cloud Infrastructure",
                  description: "Scalable cloud computing and infrastructure solutions",
                  color: "from-orange-500 to-red-500"
                }
              ].map((partner, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${partner.color} p-4 mx-auto mb-4`}>
                    <Building className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-400">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the revolution in technology and create breakthrough solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Start Partnership Today
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}