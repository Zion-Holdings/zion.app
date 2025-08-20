import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Mail, MessageCircle, Kanban, Headphones, ChevronRight, Play, BookOpen, Code, Server, Shield as ShieldIcon, Zap as ZapIcon2, Globe as GlobeIcon, Users as UsersIcon } from 'lucide-react';
import Button from '../components/ui/Button';

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get started in minutes with our streamlined onboarding process',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and 99.9% uptime',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert support for all your business needs',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide CDN distribution for optimal performance',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Content Generator',
      description: 'Create high-quality, SEO-optimized content at scale',
      price: '$49/month',
      icon: '📝',
      category: 'Content & Marketing',
      popular: true
    },
    {
      name: 'Cloud Cost Optimizer',
      description: 'Reduce cloud spending by 30% with intelligent optimization',
      price: '$99/month',
      icon: '☁️',
      category: 'Development & DevOps',
      popular: true
    },
    {
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns that convert',
      price: '$79/month',
      icon: '📧',
      category: 'Content & Marketing',
      popular: false
    },
    {
      name: 'AI Project Management',
      description: 'Smart project planning and team collaboration',
      price: '$89/month',
      icon: '📋',
      category: 'Productivity & Collaboration',
      popular: false
    },
    {
      name: 'AI Customer Support',
      description: '24/7 intelligent customer service platform',
      price: '$69/month',
      icon: '🎧',
      category: 'Customer Service',
      popular: false
    },
    {
      name: 'AI Sales Assistant',
      description: 'Boost sales with intelligent automation',
      price: '$89/month',
      icon: '💼',
      category: 'Sales & CRM',
      popular: false
    }
  ];

  const stats = [
    { number: '28+', label: 'Real Micro SaaS Services' },
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
      content: 'Cloud Cost Optimizer saved us $15,000 in the first quarter. The automated recommendations are spot-on.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Customer Success Manager',
      company: 'GrowthHub',
      content: 'AI Customer Support reduced our response time by 60% and improved customer satisfaction scores significantly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Zion Tech Group - Real Micro SaaS Services for Modern Businesses</title>
        <meta name="description" content="Discover 28+ real, fully functional micro SaaS services built with modern technology. AI-powered tools for content, marketing, development, and business automation." />
        <meta name="keywords" content="micro SaaS, AI services, business automation, content generation, cloud optimization, project management, customer support" />
        <meta property="og:title" content="Zion Tech Group - Real Micro SaaS Services" />
        <meta property="og:description" content="28+ real micro SaaS services with AI-powered automation, modern tech stack, and enterprise-grade reliability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              28+ Real Micro SaaS Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Real Micro SaaS Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Built for Real Businesses
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover 28+ fully functional micro SaaS tools built with modern technology. 
            No mockups, no demos - just real services that solve real business problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>Real Implementations</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>Modern Tech Stack</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>14-Day Free Trials</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>99.9% Uptime</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/micro-saas"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              href="https://ziontechgroup.com"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Visit Platform
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've built real services that deliver immediate value, not just demos or mockups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service is fully implemented with real functionality, modern technology, and enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>

                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 mb-4">
                      {service.category}
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      href={`/micro-saas#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/micro-saas"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              View All 28 Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses using our micro SaaS services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are built on cutting-edge technology for performance, scalability, and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">React & Next.js</h3>
              <p className="text-gray-400 text-sm">Modern frontend framework</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Node.js</h3>
              <p className="text-gray-400 text-sm">Scalable backend runtime</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">PostgreSQL</h3>
              <p className="text-gray-400 text-sm">Enterprise database</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShieldIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Enterprise Security</h3>
              <p className="text-gray-400 text-sm">SOC 2 compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our real micro SaaS services to automate, 
            optimize, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://ziontechgroup.com"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Contact Sales
              <MessageSquare className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
