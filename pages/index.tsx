import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Mail, MessageCircle, Kanban, Headphones, ChevronRight, Play, BookOpen, Code, Server, Shield as ShieldIcon, Zap as ZapIcon2, Globe as GlobeIcon, Users as UsersIcon, Brain, Atom, ShieldCheck, Network, Database as DatabaseIcon, Cpu as CpuIcon, Zap as ZapIcon3, Globe as GlobeIcon2, Shield as ShieldIcon2, Cpu as CpuIcon2 } from 'lucide-react';
import Button from '../components/ui/Button';
import FuturisticHero from '../components/sections/FuturisticHero';
import FuturisticCard from '../components/ui/FuturisticCard';
import { realMicroSaasServices, getPopularServices } from '../data/real-micro-saas-services';

export default function HomePage() {
  const popularServices = getPopularServices();

  const stats = [
    { number: '35+', label: 'Innovative Micro SaaS Services', icon: Rocket },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '14 Days', label: 'Free Trial', icon: Clock },
    { number: '24/7', label: 'Expert Support', icon: Users }
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
      color: 'from-purple-500 to-pink-600',
      iconComponent: Brain
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable infrastructure and automation',
      icon: '☁️',
      count: 8,
      color: 'from-blue-500 to-cyan-600',
      iconComponent: Cloud
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced threat protection and intelligence',
      icon: '🛡️',
      count: 6,
      color: 'from-red-500 to-orange-600',
      iconComponent: ShieldCheck
    },
    {
      name: 'Blockchain & DeFi',
      description: 'Next-generation financial technology',
      icon: '🔗',
      count: 4,
      color: 'from-green-500 to-emerald-600',
      iconComponent: Network
    },
    {
      name: 'IoT & Smart Cities',
      description: 'Connected infrastructure solutions',
      icon: '🏙️',
      count: 3,
      color: 'from-teal-500 to-blue-600',
      iconComponent: DatabaseIcon
    },
    {
      name: 'Biotech & Research',
      description: 'Laboratory automation and research tools',
      icon: '🧬',
      count: 2,
      color: 'from-emerald-500 to-green-600',
      iconComponent: Atom
    }
  ];

  const features = [
    {
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that continuously improve and adapt to your needs',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 Type II compliance and 24/7 threat monitoring',
      icon: ShieldCheck,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Global Scalability',
      description: 'Built on cloud-native architecture that scales from startup to enterprise',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and reporting with actionable recommendations',
      icon: ChartBar,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Future of Micro SaaS Services</title>
        <meta name="description" content="Discover 35+ innovative micro SaaS services that solve actual business problems with AI-powered intelligence. Get started with a 14-day free trial." />
        <meta name="keywords" content="micro SaaS, AI services, business automation, cloud optimization, content generation, sales automation, cybersecurity, blockchain, DeFi, IoT, biotech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Future of Micro SaaS Services" />
        <meta property="og:description" content="Discover 35+ innovative micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Future of Micro SaaS Services" />
        <meta name="twitter:description" content="Discover 35+ innovative micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Futuristic Hero Section */}
      <FuturisticHero />

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${stat.icon === Rocket ? 'from-purple-500 to-pink-600' : stat.icon === Shield ? 'from-red-500 to-orange-600' : stat.icon === Clock ? 'from-blue-500 to-cyan-600' : 'from-green-500 to-emerald-600'}`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-blue">Featured</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative micro SaaS solutions that are transforming industries worldwide
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
                  className="h-full hover:scale-105 transition-transform duration-300"
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

      {/* Enhanced Categories Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore by <span className="neon-text-purple">Category</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect solution for your specific business needs across cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="text-center h-full cursor-pointer hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-4xl mr-3">{category.icon}</div>
                    {category.iconComponent && (
                      <category.iconComponent className="h-8 w-8 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="text-neon-purple font-semibold">{category.count} services</div>
                </FuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 data-stream-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="neon-text-green">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology combined with enterprise-grade reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FuturisticCard
                  variant="glass"
                  glowColor="green"
                  className="h-full"
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color} mr-4 flex-shrink-0`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
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
              Real feedback from businesses using our innovative micro SaaS services
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
            Join thousands of businesses already using our innovative micro SaaS services to grow faster and smarter.
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

      {/* Enhanced Contact Information */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in <span className="neon-text-blue">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to revolutionize your business? Our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-gray-400">Ready to get started? Reach out to our team.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-neon-blue text-lg font-semibold">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-neon-blue text-lg font-semibold">kleber@ziontechgroup.com</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
              <p className="text-gray-300 text-lg">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
