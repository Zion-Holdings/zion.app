import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Shield, 
  TrendingUp, 
  Code, 
  Database, 
  Cloud, 
  Zap, 
  ArrowRight,
  Star,
  Users,
  Globe
} from "lucide-react";
import { getFeaturedServices } from "@/data/microSaasServices";

export function MicroSaasShowcase() {
  const featuredServices = getFeaturedServices().slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Services":
        return <Bot className="w-8 h-8" />;
      case "IT Services":
        return <Shield className="w-8 h-8" />;
      case "Micro SAAS":
        return <TrendingUp className="w-8 h-8" />;
      case "Development":
        return <Code className="w-8 h-8" />;
      case "Analytics":
        return <Database className="w-8 h-8" />;
      case "Security":
        return <Shield className="w-8 h-8" />;
      case "Cloud":
        return <Cloud className="w-8 h-8" />;
      case "Automation":
        return <Zap className="w-8 h-8" />;
      default:
        return <TrendingUp className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Services":
        return "from-purple-500 to-indigo-600";
      case "IT Services":
        return "from-blue-500 to-cyan-600";
      case "Micro SAAS":
        return "from-green-500 to-emerald-600";
      case "Development":
        return "from-orange-500 to-red-600";
      case "Analytics":
        return "from-cyan-500 to-blue-600";
      case "Security":
        return "from-red-500 to-pink-600";
      case "Cloud":
        return "from-blue-500 to-purple-600";
      case "Automation":
        return "from-yellow-500 to-orange-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-purple/10 via-transparent to-zion-cyan/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Micro SAAS & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover innovative solutions that transform businesses. From AI-powered chatbots to comprehensive IT consulting, 
            we offer cutting-edge services at competitive prices.
          </p>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-2">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                </div>
                <span className="text-zion-slate-light text-sm">Website</span>
                <span className="text-white font-semibold">ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-zion-purple" />
                </div>
                <span className="text-zion-slate-light text-sm">Phone</span>
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-zion-cyan" />
                </div>
                <span className="text-zion-slate-light text-sm">Email</span>
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge className="bg-zion-cyan text-zion-blue-dark">
                      {service.pricingModel === 'monthly' ? 'Monthly' : 
                       service.pricingModel === 'yearly' ? 'Yearly' :
                       service.pricingModel === 'one-time' ? 'One-time' :
                       service.pricingModel === 'hourly' ? 'Hourly' : 'Custom'}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {service.currency}{service.price}
                      <span className="text-sm text-zion-slate-light ml-1">
                        {service.pricingModel === 'monthly' ? '/mo' : 
                         service.pricingModel === 'yearly' ? '/yr' :
                         service.pricingModel === 'hourly' ? '/hr' : ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                    </div>
                  </div>
                  
                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">AI Score:</span>
                    <Badge className="bg-zion-purple text-white">
                      {service.aiScore}/100
                    </Badge>
                  </div>
                  
                  {/* Key Benefits */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Market Price */}
                  <div className="bg-zion-blue-dark/50 rounded-lg p-3">
                    <p className="text-sm text-zion-slate-light mb-1">Market Price:</p>
                    <p className="text-white text-sm">{service.marketPrice}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution. 
              Get in touch today for a free consultation and competitive quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
                asChild
              >
                <Link to="/micro-saas-services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Business Consultation Request`)}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}