import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Brain, Cpu, Shield, ArrowRight, CheckCircle, Star, Globe, Lock, Rocket, Database, Server } from 'lucide-react';
import { SEO } from '@/components/SEO';

const emergingTechServices = [
  {
    title: "Quantum Computing Solutions",
    description: "Explore the future of computing with quantum algorithms and quantum-safe cryptography.",
    icon: Cpu,
    features: ["Quantum Algorithm Development", "Quantum-Safe Cryptography", "Quantum Simulation", "Performance Optimization"],
    price: "From $25,000/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Edge AI & IoT",
    description: "Deploy intelligent AI systems at the edge for real-time processing and decision making.",
    icon: Brain,
    features: ["Edge AI Deployment", "IoT Integration", "Real-time Processing", "Local Intelligence"],
    price: "From $18,000/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Blockchain & Web3",
    description: "Build decentralized applications and blockchain solutions for the next generation of the web.",
    icon: Shield,
    features: ["Smart Contract Development", "DeFi Solutions", "NFT Platforms", "Blockchain Infrastructure"],
    price: "From $22,000/month",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Augmented & Virtual Reality",
    description: "Create immersive experiences with AR/VR solutions for enterprise and consumer applications.",
    icon: Globe,
    features: ["AR/VR Development", "3D Modeling", "Interactive Experiences", "Enterprise Solutions"],
    price: "From $20,000/month",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    title: "Future-Proof Technology",
    description: "Stay ahead with cutting-edge technologies that define the future",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Competitive Advantage",
    description: "Gain first-mover advantage in emerging technology markets",
    icon: Brain,
    color: "text-zion-purple"
  },
  {
    title: "Innovation Leadership",
    description: "Position your company as a technology innovation leader",
    icon: Rocket,
    color: "text-green-400"
  },
  {
    title: "Scalable Solutions",
    description: "Build solutions that scale with emerging technology adoption",
    icon: Server,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's quantum computing solutions helped us solve complex optimization problems that were previously impossible to tackle.",
    name: "Dr. Sarah Johnson",
    role: "Research Director, Quantum Labs",
    rating: 5
  },
  {
    content: "Their edge AI implementation reduced our response time by 90% and enabled real-time decision making in critical applications.",
    name: "Michael Chen",
    role: "CTO, Smart Manufacturing Inc",
    rating: 5
  },
  {
    content: "The blockchain platform they built for us has revolutionized our supply chain transparency and trust mechanisms.",
    name: "Jennifer Kim",
    role: "VP of Technology, Global Logistics Corp",
    rating: 5
  }
];

export default function EmergingTechServices() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Emerging Technology Services - Zion Tech Group" 
        description="Explore the future with our emerging technology services including quantum computing, edge AI, blockchain, and AR/VR solutions."
        keywords="emerging technology, quantum computing, edge AI, blockchain, Web3, AR/VR, future tech"
        canonical="https://ziontechgroup.com/emerging-tech"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Emerging
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore the future with our cutting-edge emerging technology services. 
              From quantum computing to edge AI, we help you stay ahead of the technology curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
                <CheckCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Emerging Technology Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Cutting-edge technology solutions that define the future of business and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {emergingTechServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Our Emerging Technology Services?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge research with practical implementation to deliver future-ready solutions.
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
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${benefit.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what technology leaders have to say about our emerging tech services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-zion-cyan text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Explore the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join pioneering companies that are already leveraging emerging technologies to transform their industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Journey
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}