import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Building, Briefcase, Microscope, 
  Cpu, Shield, Cloud, Database, Globe, Zap, Target,
  CheckCircle, ArrowRight, Star, TrendingUp, Users
} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/ui/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import Button from '../components/ui/Button';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: '🤖 AI & Machine Learning',
      icon: Brain,
      color: 'from-violet-600 to-purple-600',
      description: 'Cutting-edge AI solutions that transform business operations',
      services: [
        { name: 'AI Consciousness Evolution', description: 'Develop genuine AI consciousness and self-awareness', price: '$24,999/month', href: '/ai-consciousness-evolution-2029' },
        { name: 'AI Code Generation & Review', description: 'Automated code generation and optimization', price: '$199/month', href: '/ai-code-generation-review' },
        { name: 'AI Business Intelligence Suite', description: 'Advanced analytics and decision support', price: '$2,999/month', href: '/ai-business-intelligence-suite-2029' },
        { name: 'AI Marketing Automation', description: 'Intelligent marketing campaign optimization', price: '$1,499/month', href: '/ai-marketing-automation-2030' }
      ]
    },
    {
      title: '⚛️ Quantum Computing',
      icon: Atom,
      color: 'from-indigo-600 to-blue-600',
      description: 'Revolutionary quantum computing and communication',
      services: [
        { name: 'Quantum Internet Protocol', description: 'Faster-than-light quantum communication', price: '$29,999/month', href: '/quantum-internet-protocol-2029' },
        { name: 'Quantum Financial Trading', description: 'Quantum-powered algorithmic trading', price: '$39,999/month', href: '/quantum-financial-trading-platform-2029' },
        { name: 'Quantum Cybersecurity', description: 'Unbreakable quantum encryption', price: '$18,999/month', href: '/quantum-cybersecurity-firewall-2029' },
        { name: 'Quantum Machine Learning', description: 'Quantum computing for ML acceleration', price: '$22,999/month', href: '/quantum-machine-learning-platform-2029' }
      ]
    },
    {
      title: '🌌 Space Technology',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      description: 'Space mining, exploration, and autonomous systems',
      services: [
        { name: 'Space Mining Platform', description: 'Autonomous asteroid and space mining', price: '$49,999/month', href: '/space-mining-autonomous-platform-2029' },
        { name: 'Space Exploration AI', description: 'AI-powered space mission planning', price: '$34,999/month', href: '/space-exploration-ai-platform' },
        { name: 'Satellite Communication', description: 'Advanced satellite networking', price: '$19,999/month', href: '/satellite-communication-platform' },
        { name: 'Space Tourism Platform', description: 'Commercial space travel management', price: '$99,999/month', href: '/space-tourism-platform' }
      ]
    },
    {
      title: '🏢 Enterprise IT',
      icon: Building,
      color: 'from-emerald-600 to-teal-600',
      description: 'Advanced enterprise security and automation',
      services: [
        { name: 'Zero Trust Security', description: 'Continuous verification security', price: '$21,999/month', href: '/zero-trust-network-architecture-2029' },
        { name: 'Cloud Automation', description: 'Multi-cloud DevOps automation', price: '$14,999/month', href: '/cloud-native-automation-platform-2029' },
        { name: 'AI Service Desk', description: 'Intelligent IT support automation', price: '$9,999/month', href: '/ai-powered-it-service-desk-2029' },
        { name: 'Data Governance', description: 'Automated compliance and quality', price: '$19,999/month', href: '/data-governance-automation-platform-2029' }
      ]
    },
    {
      title: '💼 Business Solutions',
      icon: Briefcase,
      color: 'from-orange-600 to-red-600',
      description: 'Real-world business AI automation',
      services: [
        { name: 'E-commerce Optimization', description: 'AI-powered sales optimization', price: '$7,999/month', href: '/ai-powered-ecommerce-optimization-2029' },
        { name: 'Financial Advisory', description: 'Intelligent investment planning', price: '$11,999/month', href: '/ai-financial-advisory-platform-2029' },
        { name: 'HR Recruitment', description: 'Automated talent acquisition', price: '$6,999/month', href: '/ai-hr-recruitment-automation-2029' },
        { name: 'Supply Chain AI', description: 'Intelligent logistics optimization', price: '$13,999/month', href: '/ai-supply-chain-optimization-2029' }
      ]
    },
    {
      title: '🔬 Research & Development',
      icon: Microscope,
      color: 'from-pink-600 to-rose-600',
      description: 'Cutting-edge research and innovation',
      services: [
        { name: 'AI Research Platform', description: 'Global AI research network', price: '$34,999/month', href: '/ai-research-collaboration-2029' },
        { name: 'Quantum Research Lab', description: 'Virtual quantum research environment', price: '$44,999/month', href: '/quantum-research-laboratory-2029' },
        { name: 'Biotech Innovation Hub', description: 'AI-powered biotech research', price: '$39,999/month', href: '/biotech-innovation-hub-2029' },
        { name: 'Space Research Platform', description: 'Advanced space research tools', price: '$54,999/month', href: '/space-technology-research-2029' }
      ]
    }
  ];

  const stats = [
    { value: '500+', label: 'Technology Services', icon: <Cpu className="w-6 h-6" />, color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" />, color: 'text-fuchsia-400' },
    { value: '30+', label: 'Day Free Trials', icon: <Star className="w-6 h-6" />, color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', icon: <Brain className="w-6 h-6" />, color: 'text-green-400' },
    { value: '$100B+', label: 'Combined Market Value', icon: <TrendingUp className="w-6 h-6" />, color: 'text-yellow-400' },
    { value: '1200%+', label: 'Average ROI', icon: <Target className="w-6 h-6" />, color: 'text-purple-400' }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | Revolutionary AI, Quantum Computing & Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive portfolio of 500+ revolutionary technology services including AI, quantum computing, space technology, and enterprise solutions. Transform your business today." />
        <meta name="keywords" content="AI services, quantum computing, space technology, enterprise IT, business solutions, research development, Zion Tech Group services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Services - Zion Tech Group | Revolutionary Technology Solutions" />
        <meta property="og:description" content="500+ revolutionary technology services including AI, quantum computing, space technology, and enterprise solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
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
                Revolutionary Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our comprehensive portfolio of 500+ cutting-edge technology solutions that are reshaping industries 
                and driving the future of business innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="#services"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section id="services" className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI consciousness to quantum computing, space technology to enterprise solutions - 
                we offer the most comprehensive range of revolutionary technology services available.
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8"
                >
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 group-hover:scale-105">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h4>
                            <div className="text-cyan-400 font-bold text-lg">
                              {service.price}
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <Button
                              href={service.href}
                              variant="outline"
                              size="sm"
                              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                            >
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button
                              href="/contact"
                              size="sm"
                              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the most advanced technologies and frameworks to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'AI & ML', icon: '🤖', description: 'TensorFlow, PyTorch, OpenAI, Custom Models' },
                { name: 'Quantum Computing', icon: '⚛️', description: 'IBM Qiskit, Google Cirq, Custom Quantum Algorithms' },
                { name: 'Cloud Infrastructure', icon: '☁️', description: 'AWS, Azure, GCP, Kubernetes, Docker' },
                { name: 'Blockchain', icon: '🔗', description: 'Ethereum, Solana, Custom Smart Contracts' },
                { name: 'Space Tech', icon: '🚀', description: 'Satellite Systems, Robotics, AI Navigation' },
                { name: 'Cybersecurity', icon: '🔒', description: 'Zero Trust, AI Security, Quantum Encryption' },
                { name: 'Data Science', icon: '📊', description: 'Big Data, Analytics, Predictive Modeling' },
                { name: 'IoT & Edge', icon: '🌐', description: 'Edge Computing, IoT Networks, 5G Integration' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
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

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
                  <p className="text-gray-400">Get expert advice on your technology needs</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-400">World-class engineers and scientists</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-gray-400">Quick implementation and results</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </>
  );
}
