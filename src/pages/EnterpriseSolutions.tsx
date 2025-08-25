import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Database, Building2, Network, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const EnterpriseSolutions: React.FC = () => {
  const services = [
    {
      title: "Enterprise Security",
      description: "Comprehensive security solutions including threat detection, data protection, and compliance management.",
      icon: Shield,
      features: ["Threat detection", "Data encryption", "Compliance management", "Security audits"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business modernization and digital transformation consulting.",
      icon: Rocket,
      features: ["Process optimization", "Technology assessment", "Change management", "ROI optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Architecture",
      description: "Design and implement scalable enterprise technology architectures.",
      icon: Building2,
      features: ["System design", "Integration planning", "Scalability planning", "Performance optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Management",
      description: "Enterprise data strategy, governance, and analytics solutions.",
      icon: Database,
      features: ["Data strategy", "Governance frameworks", "Analytics platforms", "Data quality"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Network Infrastructure",
      description: "Robust network design and management for enterprise environments.",
      icon: Network,
      features: ["Network design", "Security implementation", "Performance monitoring", "Disaster recovery"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Enterprise Consulting",
      description: "Strategic technology consulting for large organizations.",
      icon: Users,
      features: ["Technology strategy", "Vendor selection", "Implementation planning", "Team training"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Protect your business with enterprise-grade security solutions",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Operational Efficiency",
      description: "Streamline processes and improve productivity across the organization",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs while improving system performance and reliability",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with modern enterprise technology solutions",
      icon: Rocket,
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group's enterprise solutions transformed our entire IT infrastructure. We've seen a 60% improvement in operational efficiency.",
      name: "Robert Thompson",
      role: "CIO, Global Enterprises Inc",
      rating: 5
    },
    {
      content: "Their security implementation is world-class. We feel confident that our data and systems are fully protected.",
      name: "Jennifer Martinez",
      role: "CISO, SecureCorp International",
      rating: 5
    },
    {
      content: "The digital transformation project exceeded our expectations. Our team productivity increased dramatically.",
      name: "Alexander Chen",
      role: "CTO, Innovation Labs",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Enterprise Solutions | Zion Tech Group"
        description="Comprehensive business technology solutions including enterprise security, digital transformation, and infrastructure management."
        keywords="enterprise solutions, digital transformation, enterprise security, enterprise architecture, data management"
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
                <Building2 className="w-4 h-4 mr-2" />
                Enterprise Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Enterprise-Grade
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your enterprise with comprehensive technology solutions designed for scale, 
                security, and performance in today's digital landscape.
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
                Enterprise Technology Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From security to digital transformation, we provide end-to-end enterprise solutions 
                that drive business growth and operational excellence.
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
                Why Choose Enterprise Solutions?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover the transformative benefits of implementing enterprise-grade technology solutions.
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
                What Our Enterprise Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Hear from enterprise leaders who have transformed their organizations with our solutions.
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
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our enterprise solutions can drive innovation and growth in your organization.
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

export default EnterpriseSolutions;