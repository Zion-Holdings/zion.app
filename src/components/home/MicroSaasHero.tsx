import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Monitor, 
  Link as LinkIcon, 
  PenTool,
  ArrowRight,
  Play,
  Star,
  Users,
  Globe,
  TrendingUp
} from 'lucide-react';
import { getFeaturedServices } from '@/data/microSaasServices';

export function MicroSaasHero() {
  const featuredServices = getFeaturedServices();

  const serviceHighlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for your business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Military-grade cybersecurity protection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Optimization",
      description: "Reduce costs and improve performance",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-zion-blue/10 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-zion-cyan/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0 px-4 py-2 text-sm mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                New Micro SAAS Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">With AI & Tech</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                Discover our comprehensive suite of micro SAAS services designed to revolutionize 
                your business operations with cutting-edge technology solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">10+</div>
                <div className="text-sm text-zion-slate-light">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">99.9%</div>
                <div className="text-sm text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-blue mb-2">24/7</div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-zion-slate-light">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full border-2 border-zion-blue-dark"></div>
                  <div className="w-6 h-6 bg-zion-purple rounded-full border-2 border-zion-blue-dark"></div>
                  <div className="w-6 h-6 bg-zion-blue rounded-full border-2 border-zion-blue-dark"></div>
                </div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Services */}
          <div className="space-y-4">
            {featuredServices.slice(0, 3).map((service, index) => (
              <div
                key={service.id}
                className="group bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-purple/50 hover:bg-zion-blue-dark/70 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${getServiceColor(service.category)} text-white group-hover:scale-110 transition-transform duration-200`}>
                    {getServiceIcon(service.category)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <Badge className={`${getStatusColor(service.status)} text-white text-xs`}>
                        {service.status}
                      </Badge>
                    </div>
                    <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-white">{service.rating}</span>
                        </div>
                        <span className="text-zion-slate-light">
                          {service.reviewCount} reviews
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-zion-cyan">
                          ${service.pricing.monthly}
                          <span className="text-sm text-zion-slate-light">/mo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* View All Services CTA */}
            <div className="text-center">
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium group"
              >
                <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                View All {featuredServices.length} Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our micro SAAS solutions are designed to scale with your business, 
              providing enterprise-grade features at startup-friendly prices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-blue-light/20 hover:border-zion-purple/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${highlight.color} text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getServiceIcon(category: string) {
  const iconMap: Record<string, React.ReactNode> = {
    "AI & Chatbots": <Brain className="w-5 h-5" />,
    "Data & Analytics": <Database className="w-5 h-5" />,
    "Cybersecurity": <Shield className="w-5 h-5" />,
    "Cloud Management": <Cloud className="w-5 h-5" />,
    "DevOps & Automation": <Code className="w-5 h-5" />,
    "Content Creation": <PenTool className="w-5 h-5" />,
    "API Management": <LinkIcon className="w-5 h-5" />,
    "IoT & Edge Computing": <Monitor className="w-5 h-5" />,
    "Blockchain & Web3": <LinkIcon className="w-5 h-5" />,
    "Quantum Computing": <Zap className="w-5 h-5" />
  };
  return iconMap[category] || <Sparkles className="w-5 h-5" />;
}

function getServiceColor(category: string) {
  const colorMap: Record<string, string> = {
    "AI & Chatbots": "from-purple-500 to-pink-500",
    "Data & Analytics": "from-indigo-500 to-purple-500",
    "Cybersecurity": "from-red-500 to-orange-500",
    "Cloud Management": "from-blue-500 to-cyan-500",
    "DevOps & Automation": "from-green-500 to-emerald-500",
    "Content Creation": "from-yellow-500 to-orange-500",
    "API Management": "from-blue-500 to-indigo-500",
    "IoT & Edge Computing": "from-yellow-500 to-orange-500",
    "Blockchain & Web3": "from-purple-500 to-blue-500",
    "Quantum Computing": "from-cyan-500 to-blue-500"
  };
  return colorMap[category] || "from-zion-purple to-zion-cyan";
}

function getStatusColor(status: string) {
  const statusColors: Record<string, string> = {
    'live': 'bg-green-500',
    'beta': 'bg-yellow-500',
    'coming-soon': 'bg-blue-500'
  };
  return statusColors[status] || 'bg-zion-purple';
}