import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function HomePage() {
  const heroStats = [
    { value: '12+', label: 'Revolutionary Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: '12+ Revolutionary Micro SaaS Services',
      description: 'Cutting-edge portfolio of fully functional micro SaaS tools with AI, machine learning, and revolutionary technology. Starting from $49/month with 14-30 day free trials. All services are production-ready and deployed with enterprise-grade infrastructure.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Intelligent Solutions',
      description: 'Advanced AI content generation, customer service automation, sales automation, data analytics, legal contract analysis, and HR recruitment. Market-leading technology with 300-600% average ROI. First-to-market AI solutions.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise-Grade Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by businesses worldwide. SOC 2 compliant with enterprise-grade security and advanced encryption.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Average setup time: 2-12 hours depending on service complexity. Instant deployment available.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, advanced encryption, and automated security monitoring. Future-proof protection against threats. Military-grade security protocols with zero-trust architecture.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month. Volume discounts available for enterprise clients. ROI guarantee on all services.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡' },
    { name: 'React', category: 'Library', icon: '⚛️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Content Creation',
      description: 'Revolutionary AI systems that generate high-quality, SEO-optimized content at scale with brand voice customization.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud-Native Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications and AI workloads.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🔒',
      title: 'Advanced Security & Compliance',
      description: 'Future-proof security with advanced encryption and comprehensive threat protection for enterprise environments.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'AI Analytics & Insights',
      description: 'Intelligent data analysis and business intelligence powered by advanced AI algorithms and machine learning.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: '🚀',
      title: 'Automation & Efficiency',
      description: 'Cutting-edge automation platforms for sales, marketing, customer service, and business operations.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: '🧬',
      title: 'AI-Powered HR & Legal',
      description: 'Revolutionary HR recruitment and legal contract analysis using advanced AI and natural language processing.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const featuredServices = enhancedRealMicroSaasServices.slice(0, 6);

  return (
    <UltraFuturisticBackground variant="quantum-holographic-advanced" className="min-h-screen">
      <Head>
        <title>Zion Tech Group - Revolutionary AI-Powered Micro SaaS Services | Next-Generation Technology Solutions</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI-powered micro SaaS services. Transform your business with our advanced AI platforms for content creation, customer service, sales automation, and more." />
        <meta name="keywords" content="AI micro SaaS, AI content generation, AI customer service, AI sales automation, AI data analytics, AI legal tech, AI HR tech, Zion Tech Group, revolutionary technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI-Powered Micro SaaS Services" />
        <meta property="og:description" content="Experience the future of technology with AI-powered solutions" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary AI-Powered Micro SaaS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our cutting-edge AI-powered micro SaaS platforms featuring intelligent automation, machine learning, and revolutionary innovations that transform industries worldwide.
              </p>
            </motion.div>

            {/* Hero Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('/services', '_blank')}
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('/pricing', '_blank')}
              >
                View Pricing
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="text-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                {contactInfo.mobile} | 
                <Mail className="inline w-4 h-4 mx-2" />
                {contactInfo.email}
              </p>
              <p className="text-sm">
                <MapPin className="inline w-4 h-4 mr-2" />
                {contactInfo.address}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with enterprise-grade reliability to deliver unprecedented value to your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    variant="quantum-holographic-advanced"
                    className="h-full"
                  >
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mb-6`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                Featured AI-Powered Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our revolutionary micro SaaS services that leverage cutting-edge AI technology to transform your business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    variant={service.variant as any}
                    className="h-full cursor-pointer"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.tagline}
                      </p>
                      <div className="text-2xl font-bold text-cyan-400 mb-4">
                        {service.price}{service.period}
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">({service.rating})</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.customers.toLocaleString()} customers • {service.reviews} reviews
                      </div>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('/services', '_blank')}
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Built with Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are built on the most advanced and reliable technology stack available, ensuring scalability, security, and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    variant="quantum-advanced"
                    className="text-center p-4"
                  >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="text-sm font-semibold text-white">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.category}</div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Revolutionary Features & Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore the advanced features that make our AI-powered services the most innovative and effective solutions in the market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    variant="holographic-advanced"
                    className="h-full"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className={`text-xl font-bold ${feature.textColor} mb-4`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI-powered services to achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/services', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Contact Sales
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="mt-8 text-gray-400">
                <p className="mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  {contactInfo.mobile} | 
                  <Mail className="inline w-4 h-4 mx-2" />
                  {contactInfo.email}
                </p>
                <p className="text-sm">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  {contactInfo.address}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}
