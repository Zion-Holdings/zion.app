import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Handshake, Globe, Rocket, Brain, Atom, Shield, 
  Star, Award, TrendingUp, Zap, Target, Building, Code,
  Cloud, Lock, Database, Network, Server, Monitor
} from 'lucide-react';

export default function Partners() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Strategic Partnerships
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join forces with Zion Tech Group to revolutionize technology and create breakthrough solutions that shape the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300">Unlock new opportunities and accelerate growth through strategic collaboration</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Rocket className="w-12 h-12 text-cyan-400" />,
                  title: "Innovation Leadership",
                  description: "Access to cutting-edge AI, quantum computing, and space technology solutions that keep you ahead of the curve."
                },
                {
                  icon: <Globe className="w-12 h-12 text-blue-400" />,
                  title: "Global Reach",
                  description: "Expand your market presence with our worldwide network and technology expertise across multiple industries."
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-green-400" />,
                  title: "Revenue Growth",
                  description: "Increase your revenue streams through joint solutions, referrals, and collaborative go-to-market strategies."
                },
                {
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: "AI Expertise",
                  description: "Leverage our advanced AI capabilities to enhance your products and services with intelligent automation."
                },
                {
                  icon: <Shield className="w-12 h-12 text-yellow-400" />,
                  title: "Security & Compliance",
                  description: "Benefit from our enterprise-grade security solutions and compliance frameworks for your customers."
                },
                {
                  icon: <Users className="w-12 h-12 text-pink-400" />,
                  title: "Community Access",
                  description: "Join our ecosystem of innovators, developers, and technology leaders driving the future forward."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-300">Choose the partnership model that best fits your business objectives</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Technology Partners",
                  description: "Integrate our AI, quantum, and space technology solutions into your platforms and products.",
                  features: [
                    "API access to advanced AI services",
                    "Quantum computing integration support",
                    "Custom solution development",
                    "Technical training and certification",
                    "Joint go-to-market initiatives"
                  ],
                  icon: <Code className="w-16 h-16 text-cyan-400" />
                },
                {
                  title: "Channel Partners",
                  description: "Resell and implement our solutions to your customers with competitive margins and support.",
                  features: [
                    "Exclusive territory rights",
                    "Marketing and sales support",
                    "Technical implementation services",
                    "Revenue sharing programs",
                    "Customer success collaboration"
                  ],
                  icon: <Handshake className="w-16 h-16 text-blue-400" />
                },
                {
                  title: "Strategic Partners",
                  description: "Deep collaboration on joint ventures, research projects, and market expansion initiatives.",
                  features: [
                    "Joint research and development",
                    "Co-innovation programs",
                    "Market expansion support",
                    "Investment opportunities",
                    "Board-level collaboration"
                  ],
                  icon: <Star className="w-16 h-16 text-purple-400" />
                },
                {
                  title: "Ecosystem Partners",
                  description: "Join our technology ecosystem to create complementary solutions and shared value.",
                  features: [
                    "Platform integration support",
                    "Developer community access",
                    "Solution marketplace presence",
                    "Cross-promotion opportunities",
                    "Innovation workshops"
                  ],
                  icon: <Globe className="w-16 h-16 text-green-400" />
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
              <p className="text-xl text-gray-300">Leading organizations trust us to deliver innovative technology solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Tech Innovators", category: "Technology", logo: "🚀" },
                { name: "Quantum Labs", category: "Research", logo: "⚛️" },
                { name: "Space Ventures", category: "Aerospace", logo: "🛸" },
                { name: "AI Consortium", category: "AI Research", logo: "🧠" },
                { name: "Cloud Providers", category: "Infrastructure", logo: "☁️" },
                { name: "Security Firms", category: "Cybersecurity", logo: "🔒" },
                { name: "Healthcare Tech", category: "Healthcare", logo: "🏥" },
                { name: "Financial Tech", category: "FinTech", logo: "💳" }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-xl text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-cyan-400">{partner.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Partnership Process</h2>
              <p className="text-xl text-gray-300">Simple steps to start your partnership journey with Zion Tech Group</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Discussion",
                  description: "Schedule a call to discuss your business goals and explore partnership opportunities."
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Our team works with you to design custom solutions that align with your objectives."
                },
                {
                  step: "03",
                  title: "Partnership Agreement",
                  description: "Finalize terms, sign agreements, and begin the onboarding process."
                },
                {
                  step: "04",
                  title: "Launch & Growth",
                  description: "Go to market together and scale your partnership for mutual success."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can create breakthrough solutions together and shape the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership Discussion
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}