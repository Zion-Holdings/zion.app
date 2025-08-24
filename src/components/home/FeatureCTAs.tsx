import React from 'react';
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain,
  Shield,
  BarChart3,
  Bot,
  Globe,
  Sparkles,
  Star,
  TrendingUp,
  Building,
  Settings,
  Code
} from "lucide-react";

export function FeatureCTAs() {
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
      title: "AI Chatbot Builder",
      description: "No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard for customer support automation.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/all-services?category=AI Services",
      badge: "Featured",
      details: "Reduce customer support costs by 60% with AI-powered chatbots available 24/7 across web, WhatsApp, and Facebook platforms."
    },
    {
      title: "Cloud Migration Expert",
      description: "Professional cloud migration services with AWS, Azure, and Google Cloud expertise. Includes cost optimization, security implementation, and performance tuning.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/all-services?category=IT Services",
      badge: "Premium",
      details: "Reduce infrastructure costs by 40% with expert cloud migration, security setup, and ongoing optimization support."
    },
    {
      title: "Cybersecurity Audit",
      description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security roadmap development.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/all-services?category=IT Services",
      badge: "Enterprise",
      details: "Comprehensive security audits with compliance review (GDPR, HIPAA, SOC2), penetration testing, and security roadmap development."
    },
    {
      title: "Project Management Suite",
      description: "All-in-one project management platform with AI-powered task prioritization, team collaboration, time tracking, and resource management.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/all-services?category=Micro SAAS",
      badge: "New",
      details: "Increase team productivity by 30% with AI-powered task prioritization, real-time collaboration, and comprehensive project analytics."
    },
    {
      title: "Smart Invoicing & Billing",
      description: "Automated invoicing system with AI-powered expense categorization, payment tracking, tax calculations, and financial reporting.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/all-services?category=Micro SAAS",
      badge: "Popular",
      details: "Automate 80% of your invoicing tasks with AI-powered expense categorization, payment tracking, and comprehensive financial reporting."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-zion-blue/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Featured Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              {" "}Innovative Solutions
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            From AI-powered content generation to enterprise cybersecurity, explore our comprehensive suite of 
            cutting-edge services designed to transform your business operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 border border-zion-purple/30 rounded-2xl p-6 backdrop-blur-md hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-purple/0 via-zion-cyan/20 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Badge */}
              <div className="relative z-10 mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  feature.badge === 'New' ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30' :
                  feature.badge === 'Featured' ? 'bg-zion-purple/20 text-zion-purple-light border border-zion-purple/30' :
                  feature.badge === 'Popular' ? 'bg-zion-blue/20 text-zion-blue-light border border-zion-blue/30' :
                  feature.badge === 'Premium' ? 'bg-emerald/20 text-emerald-400 border border-emerald/30' :
                  'bg-zion-slate/20 text-zion-slate-light border border-zion-slate/30'
                }`}>
                  {feature.badge === 'New' && <Sparkles className="h-3 w-3 mr-1" />}
                  {feature.badge === 'Featured' && <Star className="h-3 w-3 mr-1" />}
                  {feature.badge === 'Popular' && <TrendingUp className="h-3 w-3 mr-1" />}
                  {feature.badge === 'Premium' && <Star className="h-3 w-3 mr-1" />}
                  {feature.badge === 'Enterprise' && <Shield className="h-3 w-3 mr-1" />}
                  {feature.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 group-hover:border-zion-cyan/50 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-zion-slate-light text-sm mb-6 leading-relaxed">
                  {feature.details}
                </p>
                
                {/* CTA Button */}
                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 group-hover:shadow-zion-cyan/40"
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Explore our complete service catalog and discover how our innovative solutions can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            <Link
              to="/all-services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30"
            >
              <Sparkles className="h-5 w-5" />
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
