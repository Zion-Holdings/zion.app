import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Handshake, Users, Globe, Zap, Cpu, CheckCircle, Star, Heart, Rocket, Target } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-green-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <Handshake className="w-4 h-4" />
                Partnership Opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Partner with Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join forces with us to revolutionize technology and create breakthrough solutions that transform humanity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 rounded-2xl hover:bg-emerald-500/10 transition-all duration-300">
                  View Partnership Types
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Access to revolutionary technology and collaborative opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Rocket className="w-8 h-8 text-emerald-400" />,
                  title: "Cutting-Edge Technology",
                  description: "Access to AI consciousness, quantum computing, and space technology"
                },
                {
                  icon: <Globe className="w-8 h-8 text-green-400" />,
                  title: "Global Reach",
                  description: "Expand your market presence worldwide with our technology"
                },
                {
                  icon: <Zap className="w-8 h-8 text-blue-400" />,
                  title: "Innovation Acceleration",
                  description: "Speed up your development with our breakthrough solutions"
                },
                {
                  icon: <Users className="w-8 h-8 text-cyan-400" />,
                  title: "Expert Collaboration",
                  description: "Work with leading minds in AI and quantum computing"
                },
                {
                  icon: <Star className="w-8 h-8 text-purple-400" />,
                  title: "Market Leadership",
                  description: "Position yourself as a technology leader in your industry"
                },
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Shared Mission",
                  description: "Join us in creating technology that benefits humanity"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the partnership model that best fits your organization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Technology Integration",
                  description: "Integrate our AI consciousness and quantum computing solutions into your products",
                  icon: <Cpu className="w-12 h-12 text-emerald-400" />
                },
                {
                  title: "Joint Development",
                  description: "Collaborate on research and development of breakthrough technologies",
                  icon: <Rocket className="w-12 h-12 text-green-400" />
                },
                {
                  title: "Distribution Partnership",
                  description: "Distribute our revolutionary solutions to your customer base",
                  icon: <Globe className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Strategic Alliance",
                  description: "Form strategic alliances for market expansion and innovation",
                  icon: <Target className="w-12 h-12 text-cyan-400" />
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{type.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-400 text-lg">{type.description}</p>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300">
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
                Ready to Partner?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us in revolutionizing technology and creating a better future
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partners;