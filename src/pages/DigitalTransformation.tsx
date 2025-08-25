import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Globe, Lock, CheckCircle, Star, Cpu, Database, Building2, Network, Server, Monitor, Rocket, Code, Settings, RefreshCw } from 'lucide-react';
import { SEO } from '@/components/SEO';

const DigitalTransformation = () => {
  const services = [
    {
      title: "Process Optimization",
      description: "Streamline and automate business processes for maximum efficiency and productivity.",
      icon: RefreshCw,
      features: ["Workflow automation", "Process mapping", "Efficiency analysis", "Performance metrics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technology Assessment",
      description: "Evaluate current technology stack and identify modernization opportunities.",
      icon: Monitor,
      features: ["Technology audit", "Gap analysis", "Modernization roadmap", "ROI assessment"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Change Management",
      description: "Guide organizations through digital transformation with proven change management strategies.",
      icon: Users,
      features: ["Stakeholder engagement", "Training programs", "Communication strategies", "Success metrics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies aligned with business objectives.",
      icon: Rocket,
      features: ["Digital roadmap", "Technology selection", "Implementation planning", "Success measurement"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Legacy Modernization",
      description: "Transform legacy systems into modern, scalable digital solutions.",
      icon: Code,
      features: ["System analysis", "Modernization planning", "Data migration", "Integration strategies"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Digital Culture",
      description: "Foster a digital-first culture and mindset across the organization.",
      icon: Building2,
      features: ["Culture assessment", "Training programs", "Leadership development", "Change champions"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Streamline operations and improve productivity across the organization",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs through digital optimization and automation",
      icon: Zap,
      color: "text-blue-400"
    },
    {
      title: "Better Customer Experience",
      description: "Enhance customer interactions with digital-first solutions",
      icon: Users,
      color: "text-yellow-400"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with modern digital capabilities and innovation",
      icon: Rocket,
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group's digital transformation project completely revolutionized our business operations. We're now 40% more efficient.",
      name: "Maria Gonzalez",
      role: "CEO, Digital Innovations Corp",
      rating: 5
    },
    {
      content: "The change management approach was exceptional. Our team embraced the new digital tools with enthusiasm.",
      name: "Thomas Anderson",
      role: "COO, TechForward Solutions",
      rating: 5
    },
    {
      content: "Our legacy system modernization exceeded expectations. The new platform is faster, more reliable, and user-friendly.",
      name: "Rachel Kim",
      role: "CTO, LegacyTech Industries",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Digital Transformation Services | Zion Tech Group"
        description="End-to-end business modernization and digital transformation consulting to drive innovation and growth."
        keywords="digital transformation, business modernization, process optimization, change management, legacy modernization"
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
                <Rocket className="w-4 h-4 mr-2" />
                Digital Transformation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business for
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  the Digital Age
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Navigate the digital landscape with confidence through our comprehensive transformation 
                services that modernize processes, technology, and culture.
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
                Comprehensive Transformation Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From process optimization to cultural change, we provide end-to-end digital transformation 
                services that drive measurable business results.
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
                Why Choose Digital Transformation?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover the transformative benefits of embracing digital transformation in your organization.
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
                What Our Transformation Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Hear from organizations that have successfully transformed their business with our services.
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our digital transformation services can drive innovation and growth in your organization.
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

export default DigitalTransformation;