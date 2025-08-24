
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, BarChart3, Bot, Globe, Sparkles, Star, TrendingUp, Building, Settings, Code } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/all-services?category=AI Services",
      badge: "New",
      details: "GPT-4 powered content generation with SEO optimization, multi-language support, and brand voice customization. Save 70% on content creation costs."
    },
    {
      title: "AI Chatbot Builder Suite",
      description: "No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/all-services?category=AI Services",
      badge: "Featured",
      details: "Reduce customer support costs by 60% and handle 80% of inquiries automatically with our intelligent chatbot solutions."
    },
    {
      title: "AI-Powered Business Analytics",
      description: "Machine learning-driven business intelligence platform with predictive analytics and automated insights.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/all-services?category=AI Services",
      badge: "Premium",
      details: "Improve decision-making accuracy by 40% and identify trends before competitors with our advanced analytics platform."
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Complete cloud migration solution for AWS, Azure, or Google Cloud with minimal downtime and cost optimization.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/all-services?category=IT Services",
      badge: "Popular",
      details: "Reduce infrastructure costs by 25-40% and improve scalability with our expert cloud migration services."
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit including penetration testing, vulnerability assessment, and compliance review.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/all-services?category=Security",
      badge: "Essential",
      details: "Protect your business with enterprise-grade security assessments and compliance solutions."
    },
    {
      title: "Business Process Automation",
      description: "End-to-end automation solutions that streamline operations and reduce manual tasks by up to 80%.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/all-services?category=Automation",
      badge: "Efficient",
      details: "Transform your business operations with intelligent automation that scales with your growth."
    }
  ];

  const stats = [
    { label: "Services Available", value: "12+", icon: Star },
    { label: "Happy Clients", value: "50+", icon: Building },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Support Hours", value: "24/7", icon: Code }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Innovation at Your Fingertips</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed">
            Discover our comprehensive suite of AI services, IT solutions, and micro SAAS platforms 
            designed to accelerate your business growth and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/all-services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30 transform"
            >
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-cyan/25">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Our Featured Services
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From AI-powered content generation to enterprise cybersecurity, we have solutions 
              for every business need and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:border-zion-cyan/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        feature.badge === 'New' ? 'bg-green-100 text-green-800' :
                        feature.badge === 'Featured' ? 'bg-blue-100 text-blue-800' :
                        feature.badge === 'Popular' ? 'bg-purple-100 text-purple-800' :
                        feature.badge === 'Premium' ? 'bg-yellow-100 text-yellow-800' :
                        feature.badge === 'Essential' ? 'bg-red-100 text-red-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {feature.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-8 leading-relaxed">
                    {feature.details}
                  </p>
                  
                  <Link
                    to={feature.link}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-dark font-medium transition-colors group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/all-services"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30 text-lg"
            >
              <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              View All Services
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-t border-zion-purple/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Let's discuss how our innovative solutions can drive growth, efficiency, 
            and competitive advantage for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30 text-lg"
            >
              <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Get Started Today
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="tel:+13024640950"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-105 text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="mt-12 text-slate-700 dark:text-slate-300 space-y-2">
            <p className="text-lg">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="text-lg">✉️ kleber@ziontechgroup.com</p>
            <p className="text-lg">🌐 <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline font-medium">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
