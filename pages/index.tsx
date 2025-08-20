import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Mail, MessageCircle, Kanban, Headphones, ChevronRight, Play, BookOpen, Code, Server, Shield as ShieldIcon, Zap as ZapIcon2, Globe as GlobeIcon, Users as UsersIcon, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import FuturisticHero from '../components/sections/FuturisticHero';
import FuturisticCard from '../components/ui/FuturisticCard';
import { realMicroSaasServices, getPopularServices } from '../data/real-micro-saas-services';

export default function HomePage() {
  const popularServices = getPopularServices();

  const stats = [
    { number: '50+', label: 'Real Micro SaaS Services' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '14 Days', label: 'Free Trial' },
    { number: '24/7', label: 'Expert Support' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      content: 'The AI Content Generator has transformed our content marketing. We\'re producing 3x more content with better quality.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps Engineer',
      company: 'CloudScale Solutions',
      content: 'Cloud Cost Optimizer saved us $15,000 monthly. The automated optimization is incredible.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Sales Manager',
      company: 'Growth Dynamics',
      content: 'Our conversion rates increased by 40% with the AI Sales Assistant. Game changer!',
      rating: 5
    }
  ];

  const categories = [
    {
      name: 'AI & Machine Learning',
      description: 'Intelligent solutions that learn and adapt',
      icon: '🤖',
      count: 15,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable infrastructure and automation',
      icon: '☁️',
      count: 10,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Business & Productivity',
      description: 'Tools to streamline operations',
      icon: '💼',
      count: 12,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Marketing & Sales',
      description: 'Drive growth and conversions',
      icon: '📈',
      count: 8,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Cutting-Edge Innovation',
      description: 'Future technology solutions',
      icon: '🚀',
      count: 15,
      color: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Future of Micro SaaS Services</title>
        <meta name="description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence. Get started with a 14-day free trial." />
        <meta name="keywords" content="micro SaaS, AI services, business automation, cloud optimization, content generation, sales automation, cybersecurity, data backup, business intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Future of Micro SaaS Services" />
        <meta property="og:description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Future of Micro SaaS Services" />
        <meta name="twitter:description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Futuristic Hero Section */}
      <FuturisticHero />

      {/* Popular Services Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-blue">Popular</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most loved micro SaaS solutions that are transforming businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FuturisticCard
                  variant="glass"
                  glowColor="blue"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>

                    <div className="text-2xl font-bold text-white mb-2">
                      ${service.price.monthly}
                      <span className="text-gray-400 text-sm font-normal">/month</span>
                    </div>

                    <div className="text-gray-300 text-sm mb-6">
                      {service.customers.toLocaleString()}+ customers
                    </div>

                    <Button
                      href={service.link}
                      className="w-full btn-futuristic"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </FuturisticCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/micro-saas"
              variant="outline"
              className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-8 py-3 font-semibold transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cutting-Edge Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Cutting-Edge Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of technology with our most advanced and innovative services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Quantum Computing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="text-6xl mb-6">⚛️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
                <p className="text-gray-300 mb-6">
                  Access to real quantum hardware and simulators for solving complex optimization problems
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Drug discovery & molecular modeling
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Financial portfolio optimization
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Logistics & supply chain optimization
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">$499</div>
                <div className="text-sm text-gray-400 mb-4">per month</div>
                <Button
                  href="https://ziontechgroup.com/quantum-optimization-suite"
                  className="w-full btn-futuristic"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Neuromorphic Computing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 h-full">
                <div className="text-6xl mb-6">🧠</div>
                <h3 className="text-2xl font-bold text-white mb-4">Neuromorphic Computing</h3>
                <p className="text-gray-300 mb-6">
                  Brain-inspired computing for ultra-efficient AI processing at the edge
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    1000x more energy efficient
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    Real-time learning capabilities
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    Edge AI applications
                  </div>
                </div>
                <div className="text-3xl font-bold text-pink-400 mb-2">$799</div>
                <div className="text-sm text-gray-400 mb-4">per month</div>
                <Button
                  href="https://ziontechgroup.com/neuromorphic-computing-platform"
                  className="w-full btn-futuristic"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Metaverse Platform */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-violet-500/50 transition-all duration-300 h-full">
                <div className="text-6xl mb-6">🥽</div>
                <h3 className="text-2xl font-bold text-white mb-4">Metaverse Platform</h3>
                <p className="text-gray-300 mb-6">
                  Create immersive 3D virtual worlds and VR experiences
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    3D world builder
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    VR/AR support
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    Multi-user environments
                  </div>
                </div>
                <div className="text-3xl font-bold text-violet-400 mb-2">$299</div>
                <div className="text-sm text-gray-400 mb-4">per month</div>
                <Button
                  href="https://ziontechgroup.com/metaverse-platform-builder"
                  className="w-full btn-futuristic"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              These cutting-edge services represent the future of technology. Each service is designed to solve real-world problems 
              and provide measurable ROI for your business.
            </p>
            <Button
              href="/services"
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 font-semibold transition-all duration-300"
            >
              Explore All Innovation Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore by <span className="neon-text-purple">Category</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect solution for your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="text-neon-blue font-semibold">{category.count} Services</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 data-stream-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="neon-text-green">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses using our micro SaaS services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FuturisticCard
                  variant="glass"
                  glowColor="green"
                  className="h-full"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-neon-green text-sm">{testimonial.company}</div>
                  </div>
                </FuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="neon-text-cyan">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses already using our micro SaaS services to grow faster and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/micro-saas"
              className="btn-futuristic text-lg px-8 py-4 text-white font-semibold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black text-lg px-8 py-4 font-semibold transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="neon-text-green">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Contact our team of experts today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border border-neon-blue/20 rounded-2xl p-6 backdrop-blur-sm">
                <Phone className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-neon-blue font-semibold text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7 for urgent support</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-green/10 to-neon-green/5 border border-neon-green/20 rounded-2xl p-6 backdrop-blur-sm">
                <Mail className="h-12 w-12 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-neon-green font-semibold text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border border-neon-purple/20 rounded-2xl p-6 backdrop-blur-sm">
                <MapPin className="h-12 w-12 text-neon-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-neon-purple font-semibold text-sm leading-tight">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
                <p className="text-gray-400 text-sm mt-2">Headquarters location</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button
              href="/contact"
              className="btn-futuristic px-8 py-3 text-lg font-semibold"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
