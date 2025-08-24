
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, BarChart3, Bot, Globe, Sparkles, Star, TrendingUp, Building, Settings, Code, Users, Award, Zap, Cpu, Database, Lock, Palette, Eye, Leaf, CreditCard } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/services?category=AI Services",
      badge: "New",
      details: "GPT-4 powered content generation with SEO optimization, multi-language support, and brand voice customization. Save 70% on content creation costs."
    },
    {
      title: "AI Chatbot Builder Suite",
      description: "No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/services?category=AI Services",
      badge: "Featured",
      details: "Reduce customer support costs by 60% and handle 80% of inquiries automatically with our intelligent chatbot solutions."
    },
    {
      title: "AI-Powered Business Analytics",
      description: "Machine learning-driven business intelligence platform with predictive analytics and automated insights.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/services?category=AI Services",
      badge: "Premium",
      details: "Improve decision-making accuracy by 40% and identify trends before competitors with our advanced analytics platform."
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Complete cloud migration solution for AWS, Azure, or Google Cloud with minimal downtime and cost optimization.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services?category=IT Services",
      badge: "Popular",
      details: "Reduce infrastructure costs by 25-40% and improve scalability with our expert cloud migration services."
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit including penetration testing, vulnerability assessment, and compliance review.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/services?category=Security",
      badge: "Essential",
      details: "Protect your business with enterprise-grade security assessments and compliance solutions."
    },
    {
      title: "Business Process Automation",
      description: "End-to-end automation solutions that streamline operations and reduce manual tasks by up to 80%.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/services?category=Automation",
      badge: "Efficient",
      details: "Transform your business operations with intelligent automation that scales with your growth."
    }
  ];

  const stats = [
    { label: "Services Available", value: "50+", icon: Star },
    { label: "Happy Clients", value: "500+", icon: Building },
    { label: "Success Rate", value: "99.9%", icon: TrendingUp },
    { label: "Support Hours", value: "24/7", icon: Code }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge AI solutions for business automation",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      count: "15+ Services"
    },
    {
      name: "IT Infrastructure",
      description: "Robust IT solutions for modern businesses",
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      count: "12+ Services"
    },
    {
      name: "Micro SAAS Platforms",
      description: "Scalable software solutions for growth",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      count: "20+ Services"
    },
    {
      name: "Cybersecurity",
      description: "Enterprise-grade security solutions",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      count: "8+ Services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Innovation at Your Fingertips</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Discover our comprehensive suite of AI services, IT solutions, and micro SAAS platforms 
            designed to accelerate your business growth and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transform"
            >
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore Our Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered solutions to enterprise IT infrastructure, we cover every aspect of modern business technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <div className="text-cyan-400 font-medium">{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  {feature.icon}
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-medium rounded-full">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <p className="text-sm text-gray-500 mb-4">{feature.details}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="relative z-10 py-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-gray-300">
                <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  All Services
                </Link>
                <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
