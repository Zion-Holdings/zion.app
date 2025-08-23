import React from 'react';
import Link from 'next/link';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, Users, Award, TrendingUp, Brain, Shield, Rocket,
  Globe, Cpu, Cloud, CheckCircle, ArrowUpRight
} from 'lucide-react';

const Homepage2037: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featuredServices = [
    {
      icon: '🧠⚛️',
      title: 'Quantum AI Brain',
      description: 'Superintelligent AI powered by quantum computing',
      price: '$5,999/month',
      features: ['Quantum-enhanced neural networks', 'Superintelligent reasoning', 'Multi-modal learning'],
      color: 'from-purple-600 to-indigo-700',
      href: '/services#quantum-ai-brain'
    },
    {
      icon: '🔐⚛️',
      title: 'Quantum Cybersecurity',
      description: 'Unbreakable security with quantum cryptography',
      price: '$3,499/month',
      features: ['Quantum key distribution', 'Post-quantum cryptography', 'AI-powered threat detection'],
      color: 'from-red-600 to-orange-500',
      href: '/services#quantum-cybersecurity'
    },
    {
      icon: '🌐✨',
      title: 'Holographic Metaverse',
      description: 'Create immersive 3D holographic experiences',
      price: '$1,799/month',
      features: ['3D holographic content creation', 'Real-time collaboration', 'AI-powered generation'],
      color: 'from-cyan-500 to-blue-600',
      href: '/services#holographic-metaverse'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Global Clients' },
    { icon: Rocket, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
    { icon: Shield, value: '100%', label: 'Security Compliance' }
  ];

  const technologies = [
    { icon: Brain, name: 'Artificial Intelligence', description: 'Advanced AI/ML solutions' },
    { icon: Cpu, name: 'Quantum Computing', description: 'Quantum-enhanced processing' },
    { icon: Cloud, name: 'Cloud Infrastructure', description: 'Scalable cloud solutions' },
    { icon: Shield, name: 'Cybersecurity', description: 'Next-gen security protocols' },
    { icon: Rocket, name: 'Space Technology', description: 'Space exploration solutions' },
    { icon: Globe, name: 'Metaverse & AR/VR', description: 'Immersive experiences' }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <motion.div 
            className="text-center max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h1 
                id="hero-heading"
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
              >
                Zion Tech Group
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={fadeInUp}
            >
              <Link
                href="/enhanced-market-pricing-2037"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 text-lg"
              >
                Explore Services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg"
              >
                <Play className="w-6 h-6" />
                Get Started
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-lg"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-cyan-400" />
                <span>500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-400" />
                <span>Industry Leader 2027</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <span>99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <stat.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Featured Services 2037
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the cutting-edge technology that's shaping the future of business and innovation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 rounded-3xl h-full relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-200 mb-4">{service.description}</p>
                      <div className="text-3xl font-bold text-white mb-6">{service.price}</div>
                      
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-200">
                            <CheckCircle className="w-5 h-5 text-cyan-300" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-cyan-300 transition-colors group-hover:gap-3"
                      >
                        Learn More
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive technology portfolio spans the most advanced and innovative solutions available
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black/40 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <tech.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group's cutting-edge services. 
                Get started today and experience unprecedented innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/enhanced-market-pricing-2037"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2037;