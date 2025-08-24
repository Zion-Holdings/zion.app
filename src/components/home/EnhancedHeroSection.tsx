import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp,
  Globe,
  Brain,
  Cloud,
  Eye,
  Lightbulb,
  CheckCircle,
  ChevronDown
} from 'lucide-react';

export function EnhancedHeroSection() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for your business needs"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern applications"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security for your digital assets"
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Transform data into actionable business insights"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const stats = [
    { number: "500+", label: "Expert Talents", icon: Users },
    { number: "1000+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Technology Partners", icon: Globe },
    { number: "99.9%", label: "Uptime SLA", icon: Zap }
  ];

  const CurrentFeatureIcon = features[currentFeature].icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-zion-cyan/15 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-sm font-medium">
              <Star className="h-3 w-3 mr-2" />
              Leading AI & Tech Marketplace
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">
                  With Cutting-Edge
                </span>
                <br />
                <span className="bg-gradient-to-r from-zion-purple-light via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>
              
              <p className="text-xl text-zion-slate-light leading-relaxed max-w-lg">
                Connect with world-class AI experts, cutting-edge technology services, and innovative solutions that drive your business forward.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-6 text-lg font-semibold group">
                <Link to="/marketplace">
                  Explore Marketplace
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-6 text-lg font-semibold group">
                <Link to="/contact">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>500+ Verified Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Feature Display */}
            <div className="relative bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mb-4">
                  <CurrentFeatureIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {features[currentFeature].title}
                </h3>
                <p className="text-zion-slate-light">
                  {features[currentFeature].description}
                </p>
              </div>
              
              {/* Feature Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentFeature 
                        ? 'bg-zion-cyan w-6' 
                        : 'bg-zion-slate-light/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan">AI-Powered</div>
                <div className="text-xs text-zion-slate-light">Matching</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple">Global</div>
                <div className="text-xs text-zion-slate-light">Network</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105">
                <stat.icon className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2 text-zion-slate-light">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zion-blue-dark via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}