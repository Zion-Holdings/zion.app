import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Zap, Brain, Shield, Cloud, Code, Database, Monitor, Link as LinkIcon, PenTool, ArrowRight, Play, Star, Users, Globe, TrendingUp, CheckCircle, Clock, Award } from 'lucide-react';
import { getFeaturedServices } from '@/data/microSaasServices';

export function MicroSaasHero() {
  const featuredServices = getFeaturedServices();
  
  const serviceHighlights = [
    {
      icon: Brain,
      title: "AI & Chatbots",
      description: "Intelligent automation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise protection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud Management",
      description: "Multi-cloud optimization",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Micro SAAS Services", icon: Sparkles },
    { number: "4.9", label: "Average Rating", icon: Star },
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const benefits = [
    "Instant deployment & setup",
    "Enterprise-grade security",
    "Scalable infrastructure",
    "Expert technical support"
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-zion-blue/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-zion-cyan/30 rounded-full animate-spin"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-zion-purple/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                New: Micro SAAS Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">With Micro SAAS</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed">
                Discover our comprehensive suite of intelligent, innovative, and cost-effective micro SAAS solutions. 
                From AI-powered chatbots to enterprise-grade cybersecurity, we have everything you need to scale.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-zion-cyan/25">
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-zion-slate-light text-sm">Trusted by 500+ companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-zion-cyan" />
                <span className="text-zion-slate-light text-sm">Enterprise-grade security</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Featured Services
            </h3>
            <div className="space-y-4">
              {featuredServices.slice(0, 3).map((service, index) => (
                <div 
                  key={service.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(getServiceIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors mb-2">
                        {service.title}
                      </h4>
                      <p className="text-zion-slate-light text-sm line-clamp-2 mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`}
                              />
                            ))}
                          </div>
                          <span className="text-zion-slate-light text-sm">
                            {service.rating}
                          </span>
                        </div>
                        <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                          ${service.pricing.monthly}/mo
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/micro-saas-services">
                <Button variant="outline" className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan/50">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SAAS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-zion-slate-light">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-blue-light/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper functions
function getServiceIcon(category: string) {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'AI & Chatbots': Brain,
    'Cybersecurity': Shield,
    'Cloud Management': Cloud,
    'DevOps & Automation': Code,
    'Data & Analytics': Database,
    'IoT & Edge Computing': Monitor,
    'Blockchain & Web3': LinkIcon,
    'Quantum Computing': Zap,
    'Content Creation': PenTool,
    'API Management': Globe
  };
  
  return iconMap[category] || Globe;
}

function getServiceColor(category: string) {
  const colorMap: Record<string, string> = {
    'AI & Chatbots': 'from-purple-500 to-pink-500',
    'Cybersecurity': 'from-red-500 to-orange-500',
    'Cloud Management': 'from-blue-500 to-cyan-500',
    'DevOps & Automation': 'from-green-500 to-emerald-500',
    'Data & Analytics': 'from-indigo-500 to-purple-500',
    'IoT & Edge Computing': 'from-yellow-500 to-orange-500',
    'Blockchain & Web3': 'from-purple-500 to-indigo-500',
    'Quantum Computing': 'from-cyan-500 to-blue-500',
    'Content Creation': 'from-pink-500 to-red-500',
    'API Management': 'from-blue-500 to-indigo-500'
  };
  
  return colorMap[category] || 'from-zion-cyan to-zion-purple';
}

function getStatusColor(status: string) {
  const statusColors: Record<string, string> = {
    'live': 'bg-green-500',
    'beta': 'bg-yellow-500',
    'coming-soon': 'bg-blue-500'
  };
  
  return statusColors[status] || 'bg-zion-blue-light';
}