
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Brain, 
  Shield, 
  Code, 
  Database, 
  BarChart3, 
  Link as LinkIcon, 
  UserCheck,
  ArrowRight,
  Zap,
  Star
} from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";

const featuredServices = [
  {
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation with SEO optimization and brand voice customization.",
    category: "AI Services",
    icon: <Brain className="w-8 h-8" />,
    link: "/micro-saas-services?category=AI",
    color: "from-purple-500 to-pink-500",
    rating: 4.8,
    price: "From $99/month"
  },
  {
    title: "Cybersecurity Monitoring",
    description: "24/7 threat detection with AI-powered analysis and automated response systems.",
    category: "Security",
    icon: <Shield className="w-8 h-8" />,
    link: "/micro-saas-services?category=Security",
    color: "from-red-500 to-pink-500",
    rating: 4.9,
    price: "From $399/month"
  },
  {
    title: "Cloud Migration Suite",
    description: "Comprehensive cloud migration with automated tools and cost optimization.",
    category: "IT Solutions",
    icon: <Database className="w-8 h-8" />,
    link: "/micro-saas-services?category=IT",
    color: "from-blue-500 to-cyan-500",
    rating: 4.6,
    price: "From $299/month"
  },
  {
    title: "Workflow Automation",
    description: "Intelligent business process automation with AI-powered decision making.",
    category: "Automation",
    icon: <Workflow className="w-8 h-8" />,
    link: "/micro-saas-services?category=Automation",
    color: "from-indigo-500 to-purple-500",
    rating: 4.8,
    price: "From $179/month"
  }
];

export function FeatureCTAs() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 mb-6 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Solutions
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of micro SAAS services designed to scale your business operations, 
            enhance security, and drive innovation through cutting-edge AI and automation technologies.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-zion-blue-dark/80 border-zion-blue-light hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                    {service.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Rating and Price */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-zion-cyan">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {service.rating}
                  </div>
                  <span className="text-zion-purple-light font-medium">
                    {service.price}
                  </span>
                </div>
                
                {/* CTA Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all duration-300"
                >
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Explore our complete suite of micro SAAS services and find the perfect solution for your business needs. 
              Get in touch with our experts for personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg"
              >
                <Link to="/micro-saas-services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore All Services
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg"
              >
                <Link to="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
