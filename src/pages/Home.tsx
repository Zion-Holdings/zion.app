
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Globe, Zap, Brain, Shield, Cloud, Code, TrendingUp, Phone, Mail, ExternalLink, MapPin } from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

export function Home() {
  // Get featured services from different categories
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => 
    ['ai-strategy-consulting', 'cybersecurity-audit', 'cloud-migration', 'web-app-development'].includes(service.id)
  );

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Star, value: '1000+', label: 'Projects Completed' },
    { icon: Zap, value: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations.',
      color: 'from-zion-cyan to-blue-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade cybersecurity solutions protecting your digital assets and ensuring compliance.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Excellence',
      description: 'Scalable cloud architecture and migration services for modern business needs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored web, mobile, and software solutions built with the latest technologies.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-black text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              {/* Hero Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 bg-zion-blue-light/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3"
                  >
                    <stat.icon className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">{stat.value} {stat.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="tel:+13024640950"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan/10 hover:border-zion-cyan transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-zion-blue-light/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-xl text-white flex-shrink-0`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zion-blue-light/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover our most popular solutions that are transforming businesses across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-zion-cyan mb-2">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-zion-slate-light capitalize mb-4">
                      {service.pricingModel.replace('-', ' ')}
                    </div>
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/20 text-zion-purple rounded-lg hover:bg-zion-purple/30 transition-colors duration-300 text-sm font-medium"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
              >
                <span className="font-semibold">View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Feature Highlights Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-blue-light/5 via-zion-purple/5 to-zion-cyan/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
                We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value and position you ahead of the competition.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI-Powered Solutions',
                  description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations.',
                  color: 'from-zion-cyan to-blue-500',
                  benefits: ['AI Strategy', 'Custom Models', 'Content Generation'],
                  price: 'Starting at $2,500/month',
                  category: 'AI & Machine Learning'
                },
                {
                  icon: Shield,
                  title: 'Advanced Cybersecurity',
                  description: 'Next-generation security solutions with AI-powered threat detection and zero-trust architecture.',
                  color: 'from-green-500 to-emerald-500',
                  benefits: ['AI Threat Detection', 'Zero Trust', '24/7 Monitoring'],
                  price: 'Starting at $1,800/month',
                  category: 'Cybersecurity'
                },
                {
                  icon: Cloud,
                  title: 'Cloud & DevOps Excellence',
                  description: 'Enterprise-grade cloud solutions with Kubernetes orchestration and serverless architecture.',
                  color: 'from-purple-500 to-pink-500',
                  benefits: ['Kubernetes', 'Serverless', 'Auto-scaling'],
                  price: 'Starting at $1,200/month',
                  category: 'Cloud Computing'
                },
                {
                  icon: Code,
                  title: 'Modern Development',
                  description: 'Progressive web apps, AI-powered mobile applications, and cutting-edge web solutions.',
                  color: 'from-orange-500 to-red-500',
                  benefits: ['PWA Development', 'AI Mobile Apps', 'Modern Web'],
                  price: 'Starting at $150/hour',
                  category: 'Web & Mobile'
                },
                {
                  icon: Zap,
                  title: 'Workflow Automation',
                  description: 'Intelligent business process automation that reduces manual tasks by 80%.',
                  color: 'from-yellow-500 to-orange-500',
                  benefits: ['Process Automation', 'Integration', 'Productivity'],
                  price: 'Starting at $1,200/month',
                  category: 'Digital Transformation'
                },
                {
                  icon: Globe,
                  title: 'Emerging Technologies',
                  description: 'Quantum computing, edge computing, and digital twin solutions for future-ready businesses.',
                  color: 'from-blue-500 to-cyan-500',
                  benefits: ['Quantum Computing', 'Edge Computing', 'Digital Twins'],
                  price: 'Starting at $3,800/month',
                  category: 'Innovation'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                                           <div className="text-center mb-4">
                         <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                           <feature.icon className="w-8 h-8 text-white" />
                         </div>
                         <h3 className="text-xl font-bold text-white mb-1">
                           {feature.title}
                         </h3>
                         <p className="text-zion-cyan text-sm font-medium mb-3">
                           {feature.category}
                         </p>
                       </div>
                    
                    <div className="space-y-4">
                      <p className="text-zion-slate-light text-center">
                        {feature.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-zion-cyan text-sm">Key Benefits:</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {feature.benefits.map((benefit) => (
                            <span key={benefit} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded text-xs border border-zion-cyan/30">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zion-cyan/20">
                        <div className="text-center">
                          <p className="text-zion-purple font-semibold text-sm">
                            {feature.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Showcase */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
                From AI and machine learning to blockchain and emerging technologies, we offer 33+ specialized services across 12 categories to meet every business need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "AI & Machine Learning", icon: "🤖", count: "6 Services", color: "from-purple-500 to-indigo-600" },
                { name: "Cybersecurity", icon: "🔒", count: "4 Services", color: "from-red-500 to-pink-600" },
                { name: "Cloud Computing", icon: "☁️", count: "5 Services", color: "from-blue-500 to-cyan-600" },
                { name: "Data Analytics", icon: "📊", count: "4 Services", color: "from-green-500 to-emerald-600" },
                { name: "Digital Transformation", icon: "🚀", count: "3 Services", color: "from-orange-500 to-red-600" },
                { name: "Web Development", icon: "💻", count: "3 Services", color: "from-indigo-500 to-purple-600" },
                { name: "Mobile Development", icon: "📱", count: "3 Services", color: "from-teal-500 to-blue-600" },
                { name: "Blockchain", icon: "⛓️", count: "2 Services", color: "from-yellow-500 to-amber-600" },
                { name: "IoT Solutions", icon: "🌐", count: "2 Services", color: "from-green-500 to-emerald-600" },
                { name: "Digital Marketing", icon: "📈", count: "2 Services", color: "from-purple-500 to-indigo-600" },
                { name: "IT Consulting", icon: "👔", count: "2 Services", color: "from-gray-500 to-slate-600" },
                { name: "Software Testing", icon: "⚙️", count: "1 Service", color: "from-yellow-500 to-amber-600" }
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                    <div className="text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 text-3xl`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-zion-cyan text-sm font-medium mb-3">
                        {category.count}
                      </p>
                      <div className="w-full bg-zion-cyan/20 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${Math.min(100, (parseInt(category.count) / 6) * 100)}%` }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
              >
                <span className="font-semibold">Explore All 33+ Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-blue-light/5 to-zion-purple/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Join hundreds of companies worldwide who trust Zion Tech Group to deliver innovative solutions that drive growth and success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'TechCorp',
                  logo: '🚀',
                  industry: 'Technology',
                  testimonial: 'Zion Tech Group transformed our AI infrastructure completely.'
                },
                {
                  name: 'SecureBank',
                  logo: '🏦',
                  industry: 'Finance',
                  testimonial: 'Their cybersecurity solutions are unmatched in the industry.'
                },
                {
                  name: 'CloudFlow',
                  logo: '☁️',
                  industry: 'Cloud Services',
                  testimonial: 'Seamless cloud migration with zero downtime.'
                },
                {
                  name: 'DataVault',
                  logo: '💾',
                  industry: 'Data Analytics',
                  testimonial: 'Revolutionary insights through their AI-powered analytics.'
                },
                {
                  name: 'InnovateLab',
                  logo: '🔬',
                  industry: 'Research',
                  testimonial: 'Cutting-edge solutions that push the boundaries of possibility.'
                },
                {
                  name: 'GlobalTech',
                  logo: '🌍',
                  industry: 'International',
                  testimonial: 'World-class service with local expertise worldwide.'
                }
              ].map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{company.logo}</div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {company.name}
                      </h3>
                      <p className="text-zion-cyan text-sm font-medium">
                        {company.industry}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-zion-slate-light italic">
                        "{company.testimonial}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                  <div className="text-zion-slate-light">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
                  <div className="text-zion-slate-light">Expert Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">ISO 27001</div>
                  <div className="text-zion-slate-light">Security Certified</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-purple mb-2">100%</div>
                  <div className="text-zion-slate-light">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10 backdrop-blur-sm border border-zion-cyan/20 rounded-3xl p-16 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-zion-cyan rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-zion-purple rounded-full blur-3xl"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent relative z-10">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-zion-slate-light mb-10 max-w-3xl mx-auto leading-relaxed relative z-10">
                  Let's discuss how our 33+ innovative technology solutions can drive your success, optimize operations, and position you ahead of the competition in the digital age.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center justify-center gap-3 p-6 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-xl hover:border-zion-cyan/50 transition-all duration-300">
                    <div className="p-3 bg-zion-cyan/20 rounded-lg">
                      <Phone className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-zion-slate-light mb-1">Call Us 24/7</div>
                      <div className="font-semibold text-white text-lg">+1 302 464 0950</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 p-6 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-xl hover:border-zion-cyan/50 transition-all duration-300">
                    <div className="p-3 bg-zion-cyan/20 rounded-lg">
                      <Mail className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-zion-slate-light mb-1">Email Us</div>
                      <div className="font-semibold text-white text-lg">kleber@ziontechgroup.com</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-6 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-xl hover:border-zion-cyan/50 transition-all duration-300">
                    <div className="p-3 bg-zion-cyan/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-zion-slate-light mb-1">Visit Us</div>
                      <div className="font-semibold text-white text-lg">Middletown, DE</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25 hover:scale-105 transform"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="font-semibold text-lg">Start Free Consultation</span>
                    <ArrowRight className="w-6 h-6" />
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan hover:scale-105 transform transition-all duration-300"
                  >
                    <span className="font-semibold text-lg">Send Message</span>
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
