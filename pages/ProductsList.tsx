import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Star, CheckCircle } from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/ui/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import Button from '../components/ui/Button';

export default function ProductsList() {
  const products = [
    {
      name: 'AI Consciousness Evolution Platform',
      description: 'Revolutionary AI that develops genuine consciousness and self-awareness',
      price: '$24,999/month',
      category: 'AI & Machine Learning',
      features: ['Emotional Intelligence', 'Self-Awareness', 'Ethical Decision Making', 'Continuous Learning'],
      rating: 5.0,
      popular: true
    },
    {
      name: 'Quantum Financial Trading Platform',
      description: 'Quantum-powered algorithmic trading with unprecedented speed and accuracy',
      price: '$39,999/month',
      category: 'Quantum Computing',
      features: ['Quantum Algorithms', 'Real-time Trading', 'Risk Management', 'Portfolio Optimization'],
      rating: 4.9,
      popular: false
    },
    {
      name: 'Space Mining Autonomous Platform',
      description: 'Autonomous asteroid and space mining with advanced robotics',
      price: '$49,999/month',
      category: 'Space Technology',
      features: ['Autonomous Navigation', 'Resource Detection', 'Mining Operations', 'Safety Protocols'],
      rating: 4.8,
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Products - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive portfolio of revolutionary technology products including AI, quantum computing, and space technology solutions." />
        <meta name="keywords" content="AI products, quantum computing, space technology, Zion Tech Group products" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/products" />
      </Head>

      <UltraFuturisticBackground2029 />
      <UltraFuturisticNavigation2029 />

      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Revolutionary Technology Products
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our cutting-edge technology products that are reshaping industries and driving the future of innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-400/30">
                        {product.category}
                      </span>
                      {product.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    <div className="text-4xl mb-4">🚀</div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-cyan-400 font-bold text-lg mb-4">
                      {product.price}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        href="/services"
                        variant="outline"
                        size="sm"
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology products.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <Button
                  href="tel:+13024640950"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-10 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Call Us Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </>
  );
}
