import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Code, 
  Globe, 
  Heart, 
  DollarSign, 
  GraduationCap, 
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Clock,
  MessageSquare
} from "lucide-react";

const serviceHighlights = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI Process Automation",
    description: "Reduce manual work by 80% with intelligent workflow automation",
    benefits: ["Workflow Design", "RPA Integration", "Decision Making", "Process Optimization"],
    price: "From $2,999",
    category: "AI Automation",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "AI Threat Detection",
    description: "99.5% accuracy in detecting and preventing cyber threats",
    benefits: ["Real-time Monitoring", "Behavioral Analysis", "Automated Response", "90% False Positive Reduction"],
    price: "From $3,999",
    category: "Cybersecurity",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Multi-Cloud Orchestration",
    description: "Reduce cloud costs by 25-40% with intelligent management",
    benefits: ["Cost Optimization", "Automated Scaling", "Centralized Monitoring", "Multi-Platform Support"],
    price: "From $1,999",
    category: "Cloud Management",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Real-Time Analytics Engine",
    description: "Process millions of events per second with streaming analytics",
    benefits: ["Apache Kafka Integration", "Real-time Dashboards", "Predictive Analytics", "High Performance"],
    price: "From $3,499",
    category: "Real-Time Analytics",
    color: "from-green-500 to-blue-600"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "AI Code Review Assistant",
    description: "Improve code quality by 60% with intelligent analysis",
    benefits: ["Security Scanning", "Best Practices", "GitHub Integration", "Automated Reviews"],
    price: "From $599",
    category: "Development Tools",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Enterprise IoT Platform",
    description: "Support for 100,000+ devices with edge computing",
    benefits: ["Device Management", "Edge AI Processing", "Real-time Monitoring", "Predictive Maintenance"],
    price: "From $4,999",
    category: "IoT",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Healthcare AI Platform",
    description: "HIPAA-compliant AI solutions for healthcare",
    benefits: ["Diagnostic Assistance", "Patient Monitoring", "Medical Imaging", "Predictive Analytics"],
    price: "From $12,999",
    category: "Healthcare Tech",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "AI Trading Platform",
    description: "Algorithmic trading with machine learning models",
    benefits: ["Risk Management", "Backtesting", "Real-time Data", "Market Analysis"],
    price: "From $8,999",
    category: "FinTech",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Adaptive Learning Platform",
    description: "Personalized education based on learning styles",
    benefits: ["Adaptive Content", "Progress Tracking", "Performance Analytics", "Student Engagement"],
    price: "From $3,999",
    category: "EdTech",
    color: "from-purple-500 to-blue-600"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Smart Building Management",
    description: "AI-powered building automation and optimization",
    benefits: ["Energy Optimization", "Security Monitoring", "Occupant Comfort", "Predictive Maintenance"],
    price: "From $7,999",
    category: "Smart Buildings",
    color: "from-indigo-500 to-purple-600"
  }
];

const stats = [
  { label: "Services Available", value: "25+", icon: <Zap className="h-6 w-6" /> },
  { label: "AI Score Average", value: "94.5", icon: <Star className="h-6 w-6" /> },
  { label: "Customer Satisfaction", value: "98%", icon: <CheckCircle className="h-6 w-6" /> },
  { label: "Cost Reduction", value: "25-80%", icon: <TrendingUp className="h-6 w-6" /> },
  { label: "Global Coverage", value: "150+", icon: <Globe className="h-6 w-6" /> },
  { label: "Response Time", value: "<2hrs", icon: <Clock className="h-6 w-6" /> }
];

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-zion-slate">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
            Comprehensive Tech & AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative micro SAAS solutions designed to transform your business operations, 
            enhance security, and drive growth through cutting-edge technology
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <div className="p-3 rounded-full bg-zion-blue-light text-zion-cyan">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-zion-blue">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceHighlights.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <Badge variant="outline" className="border-zion-blue text-zion-blue">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-blue mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-2xl font-bold text-zion-blue mb-4">
                  {service.price}
                </div>
              </CardContent>
              
              <CardContent className="pt-0">
                <Link to="/comprehensive-services">
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our innovative solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/comprehensive-services">
                <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
                  <Users className="h-5 w-5 mr-2" />
                  Explore All Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}