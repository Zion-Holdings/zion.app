import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  Shield, 
  BarChart3, 
  Mail, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  DollarSign, 
  TrendingUp 
} from "lucide-react";

export function FeatureCTAs() {
  const microSaasServices = [
    {
      title: "AI Content Optimizer Pro",
      description: "Advanced AI-powered content optimization tool that analyzes, improves, and optimizes your content for SEO, readability, and engagement.",
      icon: <Sparkles className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-cyan-100 text-purple-700" />,
      link: "/micro-saas-services",
      badge: "New",
      price: "$29/month",
      category: "AI & ML",
      details: "Improve SEO rankings by 40%, increase content engagement by 60%, and save 5+ hours per content piece."
    },
    {
      title: "Cyber Threat Monitor",
      description: "Real-time cybersecurity threat detection and monitoring system with AI-powered analysis and automated response capabilities.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/micro-saas-services",
      badge: "Popular",
      price: "$99/month",
      category: "Security",
      details: "Detect threats 3x faster, reduce false positives by 70%, and provide 24/7 automated monitoring."
    },
    {
      title: "Data Visualization Studio",
      description: "Interactive data visualization platform that transforms complex data into actionable insights with customizable dashboards.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/micro-saas-services",
      badge: "Featured",
      price: "$49/month",
      category: "Analytics",
      details: "Create stunning visualizations in minutes, support 50+ data sources, and export to multiple formats."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Micro SAAS Services Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-zion-cyan" />
              <h2 className="text-3xl font-bold tracking-tight text-white">Micro SAAS Solutions</h2>
              <Sparkles className="h-8 w-8 text-zion-cyan" />
            </div>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Transform your business with our curated collection of intelligent, innovative, and cost-effective micro SAAS services. 
              From AI-powered tools to enterprise security solutions.
            </p>
            <div className="mt-6">
              <Badge className="bg-zion-purple/20 text-zion-purple-light border-zion-purple-light px-4 py-2 text-sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                12 Categories • 4.8★ Rating • 24/7 Support
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:border-zion-cyan/50 bg-zion-slate-dark border-zion-blue-light group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    {service.icon}
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple-light">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                    <span>•</span>
                    <span>{service.category}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-zion-slate-light mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-zion-cyan-light">
                      {service.details}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                    <Link to={service.link}>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white font-semibold px-8 py-3">
              <Link to="/micro-saas-services">
                <Sparkles className="h-5 w-5 mr-2" />
                View All Micro SAAS Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}