import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Award,
  Rocket,
  Atom,
  Link,
  Eye,
  Leaf,
  Wifi,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergingTech = () => {
  const services = [
    {
      icon: Atom,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing applications for cryptography, optimization, and scientific research.",
      features: ["Quantum algorithms", "Cryptography", "Optimization", "Scientific simulation"],
      price: "From $200,000",
      innovationLevel: "Cutting-edge",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Link,
      title: "Blockchain & DeFi Platforms",
      description: "Advanced blockchain solutions for decentralized finance, smart contracts, and digital assets.",
      features: ["Smart contracts", "DeFi protocols", "NFT platforms", "Cross-chain solutions"],
      price: "From $120,000",
      innovationLevel: "Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "IoT & Edge Computing",
      description: "Internet of Things solutions with edge computing for real-time data processing and analytics.",
      features: ["IoT sensors", "Edge processing", "Real-time analytics", "Device management"],
      price: "From $85,000",
      innovationLevel: "Advanced",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Extended Reality (AR/VR)",
      description: "Immersive technology solutions for training, entertainment, and business applications.",
      features: ["AR applications", "VR experiences", "Mixed reality", "3D visualization"],
      price: "From $95,000",
      innovationLevel: "Innovative",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Wifi,
      title: "5G & Advanced Networks",
      description: "Next-generation network infrastructure and applications for ultra-fast connectivity.",
      features: ["5G infrastructure", "Network optimization", "Low latency apps", "IoT connectivity"],
      price: "From $150,000",
      innovationLevel: "Cutting-edge",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Leaf,
      title: "Green Technology Solutions",
      description: "Sustainable technology solutions for environmental monitoring and renewable energy.",
      features: ["Environmental monitoring", "Renewable energy", "Carbon tracking", "Sustainability analytics"],
      price: "From $75,000",
      innovationLevel: "Innovative",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "First-Mover Advantage",
      description: "Stay ahead of the competition by adopting cutting-edge technologies early."
    },
    {
      icon: Award,
      title: "Innovation Leadership",
      description: "Establish your company as a technology leader in your industry."
    },
    {
      icon: Globe,
      title: "Future-Proof Solutions",
      description: "Build solutions that will remain relevant and competitive in the future."
    },
    {
      icon: Shield,
      title: "Competitive Edge",
      description: "Gain significant advantages over competitors using traditional technologies."
    }
  ];

  const stats = [
    { label: "Emerging Tech Projects", value: "60+", icon: Zap },
    { label: "Innovation Patents", value: "25+", icon: Brain },
    { label: "Technology Firsts", value: "15+", icon: Award },
    { label: "Client Innovation", value: "4.5x", icon: Star }
  ];

  const technologies = [
    { name: "Quantum Computing", icon: "⚛️", description: "Quantum algorithms and cryptography solutions" },
    { name: "Blockchain", icon: "🔗", description: "Distributed ledger and smart contract platforms" },
    { name: "IoT & Edge", icon: "🌐", description: "Internet of Things and edge computing solutions" },
    { name: "AR/VR", icon: "🥽", description: "Augmented and virtual reality applications" },
    { name: "5G Networks", icon: "📡", description: "Next-generation network infrastructure" },
    { name: "Green Tech", icon: "🌱", description: "Sustainable and environmental technology" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Emerging Technology Services - Zion Tech Group"
        description="Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, and green technology for forward-thinking businesses."
        keywords="emerging technology, quantum computing, blockchain, IoT, AR/VR, 5G, green technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/emerging-tech"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-pink opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-pink opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-purple opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-pink via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Emerging
              </span>
              <br />
              <span className="text-white">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, 
              and green technology for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-pink to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-pink/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-pink/30 text-zion-pink font-semibold rounded-xl hover:bg-zion-pink hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-pink to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Emerging Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge solutions that push the boundaries of what's possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-pink/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      service.innovationLevel === 'Cutting-edge' ? 'bg-purple-500/20 text-purple-400' :
                      service.innovationLevel === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-pink mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-pink mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-pink mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-pink to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-pink/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expert-level proficiency in cutting-edge and emerging technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-pink/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Emerging Technology Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of cutting-edge technology and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-pink to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-pink to-zion-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Embrace the Future?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our emerging technology solutions can give you a competitive edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmergingTech;