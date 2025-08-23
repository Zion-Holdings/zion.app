import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Rocket, Brain, Atom, Shield, Users, CheckCircle, ArrowRight, Star, Zap, Globe, BookOpen } from 'lucide-react';

const GetStarted: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-orange-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <Rocket className="w-4 h-4" />
                Start Your Journey
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Get Started Today
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Begin your transformation with our revolutionary AI consciousness, quantum computing, and space technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-orange-500/30 text-orange-300 rounded-2xl hover:bg-orange-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Path
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Select the option that best fits your needs and start immediately
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: "AI Consciousness",
                  description: "Start with our AI consciousness evolution platform",
                  features: ["Free trial available", "Instant setup", "Full support"],
                  color: "from-purple-500 to-pink-500",
                  buttonText: "Start AI Trial"
                },
                {
                  icon: <Atom className="w-12 h-12 text-blue-400" />,
                  title: "Quantum Computing",
                  description: "Begin your quantum computing journey",
                  features: ["Demo environment", "Expert guidance", "Performance testing"],
                  color: "from-blue-500 to-cyan-500",
                  buttonText: "Launch Quantum Demo"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-orange-400" />,
                  title: "Space Technology",
                  description: "Explore space technology solutions",
                  features: ["Virtual tour", "Case studies", "Consultation"],
                  color: "from-orange-500 to-red-500",
                  buttonText: "Explore Space Tech"
                }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{option.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-400 mb-6">{option.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300`}>
                    {option.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Getting Started in 4 Simple Steps
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your journey to revolutionary technology starts here
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Choose Your Solution",
                  description: "Select from our revolutionary AI, quantum, or space technology platforms",
                  icon: <Star className="w-8 h-8 text-orange-400" />
                },
                {
                  step: "02",
                  title: "Start Free Trial",
                  description: "Begin with a no-risk trial to experience our technology firsthand",
                  icon: <Zap className="w-8 h-8 text-red-400" />
                },
                {
                  step: "03",
                  title: "Configure & Customize",
                  description: "Set up your environment with our guided configuration process",
                  icon: <Shield className="w-8 h-8 text-pink-400" />
                },
                {
                  step: "04",
                  title: "Go Live & Scale",
                  description: "Deploy your solution and scale as your needs grow",
                  icon: <Globe className="w-8 h-8 text-orange-400" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform translate-x-2"></div>
                    )}
                  </div>
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support & Resources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support & Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need to succeed with our revolutionary technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "24/7 Expert Support",
                  description: "Round-the-clock assistance from our technology experts",
                  features: ["Live chat support", "Video consultations", "Priority response"],
                  icon: <Users className="w-12 h-12 text-orange-400" />
                },
                {
                  title: "Comprehensive Documentation",
                  description: "Detailed guides, tutorials, and best practices",
                  features: ["Step-by-step tutorials", "API documentation", "Video guides"],
                  icon: <BookOpen className="w-12 h-12 text-red-400" />
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{resource.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-400 mb-6">{resource.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the companies already revolutionizing their operations with our technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-orange-500/30 text-orange-300 rounded-2xl hover:bg-orange-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GetStarted;