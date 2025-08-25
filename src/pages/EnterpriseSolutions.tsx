import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Building2, Users, Lock, Database, Globe, CheckCircle, Star, ArrowRight, TrendingUp, Zap, Cpu } from 'lucide-react';
import { SEO } from '@/components/SEO';

const enterpriseServices = [
  {
    title: "Enterprise Security",
    description: "Comprehensive security solutions including threat detection, data protection, and compliance management.",
    icon: Shield,
    features: ["Zero Trust Architecture", "Advanced Threat Detection", "Compliance Management", "Security Audits"],
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end business modernization strategies and implementation services.",
    icon: Building2,
    features: ["Strategy Development", "Process Optimization", "Technology Integration", "Change Management"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Enterprise Integration",
    description: "Seamless integration of legacy systems with modern cloud-native solutions.",
    icon: Cpu,
    features: ["API Development", "System Integration", "Data Migration", "Legacy Modernization"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Data Management",
    description: "Enterprise-grade data solutions for governance, analytics, and insights.",
    icon: Database,
    features: ["Data Governance", "Business Intelligence", "Data Analytics", "Master Data Management"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Compliance & Governance",
    description: "Regulatory compliance and governance frameworks for enterprise environments.",
    icon: Lock,
    features: ["Regulatory Compliance", "Risk Management", "Policy Development", "Audit Support"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Global Infrastructure",
    description: "Worldwide infrastructure solutions for multinational organizations.",
    icon: Globe,
    features: ["Multi-region Deployment", "Global CDN", "Compliance by Region", "Local Support"],
    color: "from-yellow-500 to-orange-500"
  }
];

const testimonials = [
  {
    content: "Zion's enterprise solutions transformed our entire IT infrastructure. We now have a scalable, secure, and compliant system that supports our global operations.",
    name: "Jennifer Martinez",
    role: "CIO, GlobalCorp International",
    rating: 5
  },
  {
    content: "The digital transformation project they led for us exceeded all expectations. Our operational efficiency improved by 60% within the first year.",
    name: "Robert Kim",
    role: "VP of Operations, TechEnterprise",
    rating: 5
  },
  {
    content: "Working with Zion gave us enterprise-grade security without the enterprise complexity. Their solutions are both powerful and user-friendly.",
    name: "Amanda Foster",
    role: "Security Director, SecureTech",
    rating: 5
  }
];

const stats = [
  { label: "Enterprise Clients", value: "100+", icon: Building2 },
  { label: "Security Certifications", value: "25+", icon: Shield },
  { label: "Global Presence", value: "50+ Countries", icon: Globe },
  { label: "Uptime SLA", value: "99.99%", icon: Zap }
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Technology",
  "Energy",
  "Government",
  "Education"
];

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Comprehensive business technology solutions including enterprise security, digital transformation, and compliance management."
        keywords="enterprise solutions, digital transformation, enterprise security, compliance, governance, business technology"
        canonical="https://ziontechgroup.com/enterprise-solutions"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Enterprise
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Comprehensive business technology solutions designed for enterprise environments. 
              From security to digital transformation, we deliver results that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Enterprise Assessment
              </motion.button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)]"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
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

      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our enterprise solutions are tailored for organizations across diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-xl p-4 text-center hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <span className="text-zion-slate-light font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Enterprise Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to meet the unique challenges of enterprise organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Zion for Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We understand the unique challenges of enterprise organizations and deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Scalability & Performance",
                description: "Solutions that grow with your business and handle enterprise-scale workloads with optimal performance.",
                icon: TrendingUp
              },
              {
                title: "Security & Compliance",
                description: "Enterprise-grade security with built-in compliance frameworks for regulated industries.",
                icon: Shield
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and dedicated account management for enterprise clients.",
                icon: Users
              },
              {
                title: "Proven Track Record",
                description: "Successfully delivered enterprise solutions for Fortune 500 companies and government agencies.",
                icon: CheckCircle
              }
            ].map((benefit, index) => {
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
                    <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Enterprise Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how we've helped enterprise organizations achieve their digital transformation goals.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Join leading organizations that trust Zion for their enterprise technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Enterprise Assessment
                </motion.button>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}