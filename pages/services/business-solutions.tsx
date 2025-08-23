import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Target, Users, Brain, Zap, Shield, Rocket, Cloud, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, BarChart, TrendingUp
} from 'lucide-react';

const BusinessSolutionsServices: React.FC = () => {
  const services = [
    {
      title: 'AI Autonomous Business Intelligence 2045',
      description: 'Self-aware business intelligence systems that operate autonomously',
      href: '/ai-autonomous-business-intelligence-2045',
      icon: Brain,
      features: ['Autonomous Operations', 'Business Insights', 'Predictive Analytics', 'Strategic Planning']
    },
    {
      title: 'Autonomous Customer Success 2045',
      description: 'AI-powered customer success and relationship management',
      href: '/autonomous-customer-success-2045',
      icon: Users,
      features: ['Customer Success', 'Relationship Management', 'AI Automation', 'Proactive Support']
    },
    {
      title: 'Innovative Business Solutions 2045',
      description: 'Cutting-edge business transformation and optimization solutions',
      href: '/innovative-business-solutions',
      icon: Target,
      features: ['Business Transformation', 'Process Optimization', 'Innovation Strategy', 'Digital Transformation']
    },
    {
      title: 'AI Autonomous Business Process Automation 2045',
      description: 'Intelligent automation of complex business processes',
      href: '/ai-autonomous-business-process-automation',
      icon: Zap,
      features: ['Process Automation', 'AI Intelligence', 'Workflow Optimization', 'Efficiency Gains']
    },
    {
      title: 'Financial Solutions 2045',
      description: 'Advanced financial technology and automation solutions',
      href: '/financial-solutions',
      icon: BarChart,
      features: ['Financial Technology', 'Automation', 'Risk Management', 'Compliance']
    },
    {
      title: 'Healthcare AI Solutions 2045',
      description: 'Revolutionary AI-powered healthcare technology solutions',
      href: '/healthcare-ai-solutions',
      icon: Shield,
      features: ['Healthcare AI', 'Medical Technology', 'Patient Care', 'Diagnostic Support']
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Business Solutions Services 2045 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary business transformation solutions powered by AI and automation. Transform your business with Zion Tech Group's cutting-edge solutions." />
        <meta name="keywords" content="business solutions, business transformation, AI automation, customer success, process automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/business-solutions" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Business Solutions Services 2045</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Business Transformation Revolution
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our revolutionary AI-powered solutions. From autonomous intelligence 
                to customer success automation, we're redefining how businesses operate in the digital age.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                >
                  <span>Transform Your Business</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center space-x-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Business Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of business transformation solutions designed to revolutionize your operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href} className="block">
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 h-full hover:border-green-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-green-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our business solutions can revolutionize your operations
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSolutionsServices;