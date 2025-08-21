import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, TrendingUp, Users, Shield, 
  CheckCircle, Zap, Brain, Atom, Rocket
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    description: 'Next-generation AI consciousness and creativity',
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    services: [
      {
        name: 'AI Consciousness Evolution Platform',
        description: 'Develop genuine AI consciousness and self-awareness',
        price: '$19,999/month',
        features: ['Consciousness development', 'Self-awareness training', 'Ethical frameworks'],
        link: '/ai-consciousness-evolution-platform',
        popular: true
      },
      {
        name: 'AI Emotional Intelligence Platform',
        description: 'Real-time emotion analysis and response',
        price: '$3,999/month',
        features: ['Emotion detection', 'Contextual understanding', 'Empathetic responses'],
        link: '/ai-emotional-intelligence-platform',
        popular: false
      },
      {
        name: 'AI Creativity Orchestrator',
        description: 'Multi-model creativity fusion for unlimited innovation',
        price: '$5,999/month',
        features: ['Multi-model fusion', 'Creative collaboration', 'Innovation tracking'],
        link: '/ai-creativity-orchestrator',
        popular: false
      }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing and beyond',
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    services: [
      {
        name: 'Quantum Internet Security Gateway',
        description: 'Unbreakable quantum encryption for the future internet',
        price: '$15,999/month',
        features: ['Quantum key distribution', 'Post-quantum cryptography', 'Real-time monitoring'],
        link: '/quantum-internet-security-gateway',
        popular: true
      },
      {
        name: 'Biotech DNA Computing Platform',
        description: 'DNA-based computation and biological computing',
        price: '$25,999/month',
        features: ['DNA computing', 'Molecular algorithms', 'Biological security'],
        link: '/biotech-dna-computing-platform',
        popular: false
      },
      {
        name: 'Quantum Financial Trading Platform',
        description: 'Quantum-powered trading algorithms and market analysis',
        price: '$35,999/month',
        features: ['Quantum algorithms', 'Real-time analysis', 'Risk assessment'],
        link: '/quantum-financial-trading-platform',
        popular: false
      }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous enterprise infrastructure',
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    services: [
      {
        name: 'Autonomous DevOps Platform',
        description: 'Fully autonomous DevOps operations and management',
        price: '$799/month',
        features: ['Autonomous deployment', 'Self-healing infrastructure', 'AI monitoring'],
        link: '/autonomous-devops-platform',
        popular: true
      },
      {
        name: 'Zero Trust Network Architecture',
        description: 'Never trust, always verify security architecture',
        price: '$599/month',
        features: ['Continuous verification', 'Identity-based access', 'Threat detection'],
        link: '/zero-trust-network-architecture',
        popular: false
      },
      {
        name: 'AI-Powered IT Operations Center',
        description: 'Intelligent IT operations and management',
        price: '$699/month',
        features: ['AI monitoring', 'Predictive maintenance', 'Automated response'],
        link: '/ai-powered-it-operations-center',
        popular: false
      }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech',
    description: 'Space exploration and digital reality',
    color: 'from-teal-600 via-emerald-600 to-green-600',
    services: [
      {
        name: 'Space Mining Automation Platform',
        description: 'Automated asteroid mining and space resource extraction',
        price: '$45,999/month',
        features: ['Asteroid identification', 'Automated mining', 'Resource extraction'],
        link: '/space-mining-automation-platform',
        popular: true
      },
      {
        name: 'Metaverse Development Platform',
        description: 'Build immersive virtual worlds and experiences',
        price: '$499/month',
        features: ['3D world building', 'VR/AR support', 'Multi-user environments'],
        link: '/metaverse-development-platform',
        popular: false
      },
      {
        name: 'AI Predictive Health Analytics',
        description: 'Predictive health outcomes and personalized medicine',
        price: '$7,999/month',
        features: ['Health prediction', 'Personalized medicine', 'Risk assessment'],
        link: '/ai-predictive-health-analytics',
        popular: false
      }
    ]
  }
];

export default function UltraFuturisticServiceShowcase2032() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2032 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future with our comprehensive range of cutting-edge AI, quantum computing, and emerging technology services
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center">
                <div className={`inline-flex items-center space-x-3 mb-4 p-4 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-20 border border-white/10`}>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Most Popular
                          </div>
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {categoryIndex === 0 && <Brain className="w-8 h-8 text-white" />}
                        {categoryIndex === 1 && <Atom className="w-8 h-8 text-white" />}
                        {categoryIndex === 2 && <Zap className="w-8 h-8 text-white" />}
                        {categoryIndex === 3 && <Rocket className="w-8 h-8 text-white" />}
                      </div>

                      {/* Service Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-cyan-400" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between pt-4">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <Link
                            href={service.link}
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group/btn"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>

                      {/* Hover Effects */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5`}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future of Technology?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our team of experts to discuss how our revolutionary 2032 services can drive your business forward with unprecedented ROI and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-cyan-400">
                <span>📱</span>
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <span>✉️</span>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <span>📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
              >
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}