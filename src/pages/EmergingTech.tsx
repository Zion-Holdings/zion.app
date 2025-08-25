import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Globe, Lock, CheckCircle, Star, Cpu, Database, Building2, Network, Server, Monitor, Rocket, Code, Settings, Atom, Eye, Brain, Cloud } from 'lucide-react';
import { SEO } from '@/components/SEO';

const EmergingTech = () => {
  const services = [
    {
      title: "Quantum Computing",
      description: "Explore the potential of quantum computing for complex problem-solving and optimization.",
      icon: Atom,
      features: ["Quantum algorithms", "Optimization problems", "Cryptography", "Research partnerships"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Extended Reality (XR)",
      description: "Immersive technologies including VR, AR, and MR for enhanced user experiences.",
      icon: Eye,
      features: ["VR/AR development", "3D modeling", "Interactive experiences", "Training simulations"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Edge Computing",
      description: "Distributed computing architecture for real-time data processing and reduced latency.",
      icon: Server,
      features: ["Edge infrastructure", "IoT integration", "Real-time processing", "Data optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized technologies for secure, transparent, and trustless applications.",
      icon: Shield,
      features: ["Smart contracts", "DeFi solutions", "NFT platforms", "DApp development"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Internet of Things (IoT)",
      description: "Connected devices and sensors for smart environments and data collection.",
      icon: Network,
      features: ["IoT platforms", "Sensor networks", "Data analytics", "Smart cities"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Advanced AI/ML",
      description: "Next-generation artificial intelligence and machine learning technologies.",
      icon: Brain,
      features: ["Deep learning", "Neural networks", "AI ethics", "Explainable AI"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the curve with cutting-edge technology solutions",
      icon: Rocket,
      color: "text-green-400"
    },
    {
      title: "Competitive Advantage",
      description: "Differentiate your business with emerging technology capabilities",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "Future-Proofing",
      description: "Prepare your organization for tomorrow's technology landscape",
      icon: Shield,
      color: "text-yellow-400"
    },
    {
      title: "New Opportunities",
      description: "Discover new business models and revenue streams",
      icon: Zap,
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group's emerging tech solutions put us at the forefront of innovation. Our customers are amazed by our new capabilities.",
      name: "Dr. Sarah Chen",
      role: "Head of Innovation, FutureTech Labs",
      rating: 5
    },
    {
      content: "The quantum computing research partnership opened up possibilities we never imagined. Incredible breakthrough technology.",
      name: "Michael Rodriguez",
      role: "CTO, Quantum Solutions Inc",
      rating: 5
    },
    {
      content: "Their XR development team created an immersive experience that transformed how we train our employees.",
      name: "Lisa Thompson",
      role: "Training Director, Global Industries",
      rating: 5
    }
  ];

  return (
    <>
            <SEO
        title="Emerging Technology Solutions | Zion Tech Group"
        description="Next-generation technology solutions including quantum computing, XR, blockchain, and IoT for forward-thinking organizations."
        tags={["emerging technology", "quantum computing", "XR", "blockchain", "IoT", "edge computing", "AI/ML"]}
        url="https://ziontechgroup.com/emerging-tech"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Emerging Technologies
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Shape the Future with
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Emerging Technologies
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Explore the cutting edge of technology with our emerging tech solutions that push boundaries 
                and create new possibilities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Next-Generation Technology Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From quantum computing to extended reality, we provide cutting-edge emerging technology 
                solutions that drive innovation and competitive advantage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Emerging Technologies?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover the transformative benefits of implementing cutting-edge emerging technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Emerging Tech Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Hear from organizations that have embraced the future with our emerging technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Embrace the Future?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our emerging technology solutions can position your organization for future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EmergingTech;