import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Building, Users, Zap, ArrowRight, CheckCircle, Star, Globe, Lock, Rocket, Cpu, Database } from 'lucide-react';
import { SEO } from '@/components/SEO';

const enterpriseServices = [
  {
    title: "Enterprise Security Solutions",
    description: "Comprehensive security frameworks including threat detection, compliance management, and data protection.",
    icon: Shield,
    features: ["Zero Trust Architecture", "Compliance Automation", "Threat Intelligence", "Incident Response"],
    price: "From $15,000/month",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end business modernization with AI, cloud, and process automation.",
    icon: Building,
    features: ["Process Optimization", "Legacy Modernization", "Change Management", "ROI Tracking"],
    price: "From $25,000/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Enterprise AI Integration",
    description: "Seamlessly integrate AI capabilities across your entire organization.",
    icon: Cpu,
    features: ["AI Strategy Planning", "Data Infrastructure", "Model Deployment", "Training Programs"],
    price: "From $20,000/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Enterprise Data Management",
    description: "Comprehensive data governance, analytics, and business intelligence solutions.",
    icon: Database,
    features: ["Data Governance", "Analytics Platform", "Business Intelligence", "Data Quality"],
    price: "From $18,000/month",
    color: "from-green-500 to-emerald-500"
  }
];

const benefits = [
  {
    title: "Enhanced Security",
    description: "Protect your enterprise with industry-leading security solutions",
    icon: Shield,
    color: "text-zion-cyan"
  },
  {
    title: "Operational Efficiency",
    description: "Streamline processes and reduce costs through digital transformation",
    icon: Zap,
    color: "text-zion-purple"
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead with cutting-edge technology and AI capabilities",
    icon: Globe,
    color: "text-green-400"
  },
  {
    title: "Scalable Growth",
    description: "Build infrastructure that grows with your business needs",
    icon: Building,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's enterprise security solution helped us achieve SOC2 compliance in record time while significantly improving our threat detection capabilities.",
    name: "Jennifer Williams",
    role: "CISO, Fortune 500 Company",
    rating: 5
  },
  {
    content: "Their digital transformation program modernized our entire IT infrastructure, resulting in 60% cost savings and improved employee productivity.",
    name: "Michael Chang",
    role: "CTO, Global Manufacturing Corp",
    rating: 5
  },
  {
    content: "The enterprise AI integration they implemented has given us insights that were previously impossible to obtain, driving millions in new revenue.",
    name: "Sarah Rodriguez",
    role: "VP of Innovation, Tech Enterprise",
    rating: 5
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Transform your enterprise with comprehensive security, digital transformation, and AI integration solutions."
        keywords="enterprise solutions, digital transformation, enterprise security, AI integration, data management"
        canonical="https://ziontechgroup.com/enterprise-solutions"
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
              Enterprise
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your enterprise with comprehensive security, digital transformation, and AI integration solutions. 
              Built for scale, security, and success.
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
            Our Enterprise Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive enterprise solutions designed to address the complex challenges of modern organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enterpriseServices.map((service, index) => {
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
            Why Choose Our Enterprise Solutions?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine enterprise-grade technology with proven methodologies to deliver solutions that drive real business value.
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
            What Our Enterprise Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what enterprise leaders have to say about our solutions.
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join leading enterprises that have already revolutionized their operations with our comprehensive solutions.
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