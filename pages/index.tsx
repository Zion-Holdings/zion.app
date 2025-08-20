import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Mail, MessageCircle, Kanban, Headphones, ChevronRight, Play, BookOpen, Code, Server, Shield as ShieldIcon, Zap as ZapIcon2, Globe as GlobeIcon, Users as UsersIcon, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import FuturisticHero from '../components/sections/FuturisticHero';
import FuturisticCard from '../components/ui/FuturisticCard';
import { realMicroSaasServices, getPopularServices, getAllCategories } from '../data/real-micro-saas-services';

export default function HomePage() {
  const popularServices = getPopularServices();
  const allCategories = getAllCategories();

  const stats = [
    { number: '35+', label: 'Real Micro SaaS Services' },
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
      count: 12,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable infrastructure and automation',
      icon: '☁️',
      count: 8,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Business & Productivity',
      description: 'Tools to streamline operations',
      icon: '💼',
      count: 10,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Marketing & Sales',
      description: 'Drive growth and conversions',
      icon: '📈',
      count: 7,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Healthcare & Wellness',
      description: 'AI-powered health solutions',
      icon: '🏥',
      count: 3,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Education & Learning',
      description: 'Personalized learning experiences',
      icon: '🎓',
      count: 2,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Finance & Investment',
      description: 'Intelligent financial planning',
      icon: '💰',
      count: 2,
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Cybersecurity & IT',
      description: 'Advanced security solutions',
      icon: '🛡️',
      count: 3,
      color: 'from-gray-500 to-slate-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Future of Micro SaaS Services | 35+ AI-Powered Solutions</title>
        <meta name="description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence. From AI content generation to cybersecurity, get started with a 14-day free trial." />
        <meta name="keywords" content="micro SaaS, AI services, business automation, cloud optimization, content generation, sales automation, cybersecurity, data analytics, health monitoring, education platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Future of Micro SaaS Services | 35+ AI-Powered Solutions" />
        <meta property="og:description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Future of Micro SaaS Services | 35+ AI-Powered Solutions" />
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
                <FuturisticCard
                  variant="cyber"
                  glowColor="purple"
                  className="text-center h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="text-neon-purple font-semibold">{category.count} services</div>
                </FuturisticCard>
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
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The future of <span className="neon-text-cyan">micro SaaS</span> is here. 
            Discover <span className="neon-text-green">35+ real services</span> that solve 
            actual business problems with <span className="neon-text-pink">AI-powered intelligence</span>.
            From content creation to cybersecurity, we've got you covered.
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
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="neon-text-cyan">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Contact our team of experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-neon-blue/20 to-cyan-500/20 mb-4">
                <Phone className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-neon-blue text-lg font-mono">+1 302 464 0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-neon-purple/20 to-pink-500/20 mb-4">
                <Mail className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-neon-purple text-lg font-mono">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-neon-green/20 to-emerald-500/20 mb-4">
                <MapPin className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-neon-green text-lg font-mono">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button
              href="/contact"
              className="btn-futuristic text-lg px-8 py-4 text-white font-semibold"
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="neon-text-blue">Zion</span>
                <span className="text-white">Tech</span>
                <span className="neon-text-purple">Group</span>
              </h3>
              <p className="text-gray-400">The future of micro SaaS is here</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="/micro-saas" className="text-gray-400 hover:text-neon-blue transition-colors">
                Services
              </a>
              <a href="/pricing" className="text-gray-400 hover:text-neon-blue transition-colors">
                Pricing
              </a>
              <a href="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">
                Contact
              </a>
              <a href="/about" className="text-gray-400 hover:text-neon-blue transition-colors">
                About
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors ml-2">
                Privacy Policy
              </a> | 
              <a href="/terms" className="text-gray-400 hover:text-neon-blue transition-colors ml-2">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
