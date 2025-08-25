import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Building, Users, ArrowRight, CheckCircle, Star, Globe, Lock, Brain, Cpu, Database } from 'lucide-react';
import { SEO } from '@/components/SEO';

const transformationServices = [
  {
    title: "Process Automation",
    description: "Streamline business operations with intelligent automation and workflow optimization.",
    icon: Zap,
    features: ["Workflow Automation", "RPA Implementation", "Process Mapping", "Efficiency Metrics"],
    price: "From $8,500/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Legacy System Modernization",
    description: "Transform outdated systems into modern, scalable, and efficient platforms.",
    icon: Building,
    features: ["System Assessment", "Migration Planning", "Modern Architecture", "Data Migration"],
    price: "From $15,000/month",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Change Management",
    description: "Guide your organization through digital transformation with proven change management strategies.",
    icon: Users,
    features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"],
    price: "From $6,500/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Technology Strategy",
    description: "Develop comprehensive technology roadmaps aligned with business objectives.",
    icon: Brain,
    features: ["Technology Assessment", "Roadmap Development", "Vendor Selection", "Implementation Planning"],
    price: "From $12,000/month",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and optimize workflows for maximum productivity",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs through digital optimization and automation",
    icon: Building,
    color: "text-zion-purple"
  },
  {
    title: "Improved Customer Experience",
    description: "Enhance customer interactions with modern digital touchpoints",
    icon: Users,
    color: "text-green-400"
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of the competition with cutting-edge digital capabilities",
    icon: Rocket,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's digital transformation program modernized our entire operation, resulting in 45% cost savings and 60% improvement in customer satisfaction.",
    name: "David Thompson",
    role: "CEO, Manufacturing Solutions Inc",
    rating: 5
  },
  {
    content: "Their process automation implementation eliminated manual errors and reduced processing time from days to hours.",
    name: "Lisa Chen",
    role: "COO, Financial Services Corp",
    rating: 5
  },
  {
    content: "The change management program they delivered ensured smooth adoption across all departments with minimal disruption.",
    name: "Robert Martinez",
    role: "VP of Operations, Retail Chain",
    rating: 5
  }
];

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Digital Transformation Services - Zion Tech Group" 
        description="Transform your business with comprehensive digital transformation services including process automation, legacy modernization, and change management."
        keywords="digital transformation, process automation, legacy modernization, change management, technology strategy"
        canonical="https://ziontechgroup.com/digital-transformation"
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
              Digital
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business operations with comprehensive digital transformation services. 
              From process automation to legacy modernization, we guide your journey to digital excellence.
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
            Our Digital Transformation Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive digital transformation solutions designed to modernize your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformationServices.map((service, index) => {
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
            Why Choose Our Digital Transformation Services?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine proven methodologies with cutting-edge technology to deliver transformation that drives real business value.
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
            Don't just take our word for it. Here's what business leaders have to say about our digital transformation services.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Transformation
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