import React from 'react';
import Head from 'next/head';
import { 
  Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, 
  Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, 
  Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, 
  Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, 
  Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, 
  Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2,
  ChevronRight, Play, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon,
  Sparkles as SparklesIcon, Zap as ZapIcon, Rocket as RocketIcon, Brain as BrainIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { realMicroSaasServices } from '../data/real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '25+', label: 'Real AI Services', color: 'text-cyan-400', icon: <BrainIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-6 h-6" /> },
    { value: '$50B+', label: 'Market Value', color: 'text-yellow-400', icon: <DollarSign className="w-6 h-6" /> },
    { value: '300%+', label: 'Average ROI', color: 'text-purple-400', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredServices = realMicroSaasServices.filter(service => service.popular).slice(0, 6);

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Revolutionary AI solutions with unprecedented capabilities',
      icon: <BrainIcon className="w-8 h-8" />,
      count: realMicroSaasServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Business Intelligence',
      description: 'Transform data into actionable business insights',
      icon: <BarChart3 className="w-8 h-8" />,
      count: realMicroSaasServices.filter(s => s.category.includes('Business Intelligence') || s.category.includes('Data')).length,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Creative & Media',
      description: 'AI-powered creative tools and media automation',
      icon: <Palette className="w-8 h-8" />,
      count: realMicroSaasServices.filter(s => s.category.includes('Creative') || s.category.includes('Media')).length,
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Development & DevOps',
      description: 'Streamline development workflows with AI automation',
      icon: <Code className="w-8 h-8" />,
      count: realMicroSaasServices.filter(s => s.category.includes('Development') || s.category.includes('DevOps')).length,
      color: 'from-slate-500 to-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group - Revolutionary AI-Powered Micro SAAS Services</title>
        <meta name="description" content="Discover 25+ real AI-powered micro SAAS services that transform businesses. From AI legal documents to quantum computing, we deliver cutting-edge solutions with proven ROI." />
        <meta name="keywords" content="AI services, micro SAAS, business automation, legal tech, customer service AI, SEO automation, video editing AI, data analytics, quantum computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI-Powered Micro SAAS Services" />
        <meta property="og:description" content="Transform your business with 25+ real AI-powered micro SAAS services. Proven ROI, 21-day free trials, 24/7 support." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section with Ultra Futuristic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <UltraFuturisticBackground intensity="high" variant="quantum" className="min-h-screen">
          <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-pulse">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-4xl font-light text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary <span className="text-cyan-400 font-semibold">AI-Powered Micro SAAS Services</span> 
                <br />That Transform Businesses
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Discover 25+ real, innovative micro SAAS solutions powered by artificial intelligence. 
                From legal document automation to quantum computing, we deliver cutting-edge technology 
                with proven ROI and 21-day free trials.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="group"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="group"
              >
                Get Started
                <SparklesIcon className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-16 p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2 text-fuchsia-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2 text-fuchsia-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2 text-fuchsia-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </UltraFuturisticBackground>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 relative">
        <UltraFuturisticBackground intensity="medium" variant="holographic" className="py-20">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most popular AI-powered micro SAAS services that are transforming businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <QuantumHolographicCard key={service.id} className="group hover:scale-105 transition-transform duration-500">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          <span>{service.roi}</span>
                        </div>
                      </div>
                      <Button 
                        href={service.link} 
                        variant="primary" 
                        size="sm"
                        className="group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </QuantumHolographicCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg"
                className="group"
              >
                View All Services
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </UltraFuturisticBackground>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Categories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105`}>
                  <div className="text-cyan-400 mb-4 group-hover:text-fuchsia-400 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count} services</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 relative">
        <UltraFuturisticBackground intensity="medium" variant="neural" className="py-20">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Zion Tech Group</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We deliver real, innovative solutions with proven results and exceptional support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RocketIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">First-to-Market Solutions</h3>
                <p className="text-gray-400">We pioneer cutting-edge AI technology that gives you a competitive advantage in your industry.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ZapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-400">Our customers see an average of 300% ROI within 6-18 months of implementation.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-400">Bank-level security with SOC 2 compliance and 99.99% uptime guarantee.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Expert Support</h3>
                <p className="text-gray-400">Dedicated AI specialists and technical support available around the clock.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
                <p className="text-gray-400">Get up and running in as little as 15 minutes with our streamlined onboarding process.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-gray-400">Multi-language support and global compliance for international businesses.</p>
              </div>
            </div>
          </div>
        </UltraFuturisticBackground>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered solutions to increase efficiency, 
            reduce costs, and drive growth. Start your 21-day free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg"
              className="group"
            >
              Start Free Trial
              <Play className="ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button 
              href="/services" 
              variant="secondary" 
              size="lg"
              className="group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Our AI Experts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-fuchsia-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-fuchsia-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-fuchsia-400" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
