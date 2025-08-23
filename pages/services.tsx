import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Grid, Star } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover our comprehensive portfolio of cutting-edge services designed to transform your business
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                <Grid className="w-5 h-5" />
                <span>200+ Services</span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                <Star className="w-5 h-5" />
                <span>Industry Leading</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our services span across multiple cutting-edge technology domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI & Consciousness",
                  description: "Revolutionary AI consciousness and emotional intelligence services",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Quantum Computing",
                  description: "Advanced quantum computing and quantum technologies",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Space Technology",
                  description: "Innovative space exploration and colonization services",
                  color: "from-pink-500 to-red-500"
                },
                {
                  title: "Enterprise IT",
                  description: "Comprehensive enterprise solutions and infrastructure",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  title: "Micro SaaS",
                  description: "Scalable micro SaaS solutions for modern businesses",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  title: "Emerging Tech",
                  description: "Cutting-edge technologies and breakthrough innovations",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-700 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6 flex items-center justify-center`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Business</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading businesses that trust Zion Tech Group for their digital transformation. 
                Our expert team is ready to guide you through your technology journey.
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
              >
                <span>Get Started Today</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;