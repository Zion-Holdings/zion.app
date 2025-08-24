import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Zap, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

// Mock data for services
const SERVICES = [
  {
    id: "ai-1",
    title: "AI-Powered Chatbot Development",
    description: "Custom AI chatbots for customer service, sales, and support with natural language processing capabilities",
    category: "AI Services",
    price: 2999,
    rating: 4.8,
    features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard", "24/7 availability"]
  },
  {
    id: "ai-2",
    title: "Machine Learning Model Development",
    description: "Custom ML models for predictive analytics, pattern recognition, and data-driven decision making",
    category: "AI Services",
    price: 5999,
    rating: 4.9,
    features: ["Custom algorithm development", "Data preprocessing", "Model training", "Performance optimization", "Deployment support"]
  },
  {
    id: "micro-1",
    title: "Project Management Platform",
    description: "Comprehensive project management solution with task tracking, team collaboration, and reporting",
    category: "Micro SAAS",
    price: 199,
    rating: 4.7,
    features: ["Task management", "Team collaboration", "Time tracking", "Reporting", "Mobile app"]
  }
];

export function ServicesShowcase() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return <Zap className="h-5 w-5" />;
      case 'Security': return <Shield className="h-5 w-5" />;
      case 'Analytics': return <TrendingUp className="h-5 w-5" />;
      case 'Development': return <Users className="h-5 w-5" />;
      default: return <Star className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services': return 'from-purple-500 to-pink-500';
      case 'Security': return 'from-red-500 to-orange-500';
      case 'Analytics': return 'from-blue-500 to-cyan-500';
      case 'Development': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our cutting-edge solutions designed to transform your business with AI, security, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-700/50 border-zinc-600/30 hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <Badge variant="outline" className="border-zinc-500 text-zinc-300">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-zinc-300">{service.rating}</span>
                  </div>
                  <div className="text-2xl font-bold text-zion-cyan">
                    ${service.price}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zinc-300">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-zinc-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}