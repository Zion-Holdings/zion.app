import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FuturisticCard, NeonText } from "@/components/ui/FuturisticBackground";
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Network, 
  Video, 
  Mic, 
  Eye, 
  Settings, 
  Monitor, 
  Server, 
  Key, 
  Globe, 
  Zap, 
  Layers,
  ArrowRight
} from "lucide-react";

export function ServicesShowcase() {
  const featuredServices = [
    {
      title: "AI Content Generator",
      description: "Generate high-quality content, code, and documentation using advanced AI models.",
      icon: <Brain className="h-12 w-12 text-zion-cyan" />,
      price: "$29/month",
      features: ["Blog posts", "Technical docs", "Marketing copy", "Code snippets"],
      category: "AI Services",
      badge: "Popular",
      link: "/ai-content-generator",
      glowColor: "#00ffff"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audits and vulnerability assessments for your digital infrastructure.",
      icon: <Shield className="h-12 w-12 text-red-400" />,
      price: "$299/month",
      features: ["Security audits", "Penetration testing", "Vulnerability scans", "Compliance reports"],
      category: "Security",
      badge: "Enterprise",
      link: "/cybersecurity-assessment",
      glowColor: "#ef4444"
    },
    {
      title: "Cloud Migration Service",
      description: "Seamless migration to cloud platforms with minimal downtime and optimized performance.",
      icon: <Cloud className="h-12 w-12 text-blue-400" />,
      price: "$499/month",
      features: ["AWS/Azure/GCP", "Zero downtime", "Performance optimization", "24/7 support"],
      category: "Cloud Services",
      badge: "Professional",
      link: "/cloud-migration",
      glowColor: "#3b82f6"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence and analytics to drive data-driven decision making.",
      icon: <BarChart3 className="h-12 w-12 text-green-400" />,
      price: "$99/month",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"],
      category: "Analytics",
      badge: "Business",
      link: "/data-analytics",
      glowColor: "#22c55e"
    },
    {
      title: "AI Model Training",
      description: "Custom AI model development and training for your specific business requirements.",
      icon: <Brain className="h-12 w-12 text-purple-400" />,
      price: "$1,999/month",
      features: ["Custom models", "Industry-specific", "Training pipelines", "Model deployment"],
      category: "AI Development",
      badge: "Advanced",
      link: "/ai-model-training",
      glowColor: "#a855f7"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure for optimal performance.",
      icon: <Network className="h-12 w-12 text-yellow-400" />,
      price: "$399/month",
      features: ["Network design", "24/7 monitoring", "Security implementation", "Performance tuning"],
      category: "Infrastructure",
      badge: "Professional",
      link: "/network-infrastructure",
      glowColor: "#eab308"
    }
  ];

  const emergingServices = [
    {
      title: "Quantum Computing API",
      description: "Access to quantum computing resources for complex calculations and simulations.",
      icon: <Zap className="h-10 w-10 text-pink-400" />,
      price: "$0.10/quantum-second",
      category: "Quantum Computing",
      link: "/quantum-computing-api"
    },
    {
      title: "Edge Computing Platform",
      description: "Distributed computing platform for low-latency applications and real-time processing.",
      icon: <Layers className="h-10 w-10 text-cyan-400" />,
      price: "$0.50/hour",
      category: "Edge Computing",
      link: "/edge-computing"
    },
    {
      title: "Blockchain Integration",
      description: "Integrate blockchain technology into your applications for enhanced security and transparency.",
      icon: <Key className="h-10 w-10 text-emerald-400" />,
      price: "$199/month",
      category: "Blockchain",
      link: "/blockchain-integration"
    },
    {
      title: "IoT Device Management",
      description: "Comprehensive IoT platform for device connectivity, monitoring, and data collection.",
      icon: <Network className="h-10 w-10 text-blue-400" />,
      price: "$0.50/device/month",
      category: "IoT Platform",
      link: "/iot-device-management"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <NeonText color="#00ffff" glowIntensity="high">
              Micro SAAS Services
            </NeonText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of micro SAAS solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredServices.map((service, index) => (
            <FuturisticCard 
              key={index} 
              glowColor={service.glowColor}
              intensity="medium"
              className="h-full group hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {service.category}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {service.price}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <div className="px-6 pb-6">
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Link to={service.link}>
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </FuturisticCard>
          ))}
        </div>

        {/* Emerging Technologies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            <NeonText color="#ff00ff" glowIntensity="medium">
              Emerging Technologies
            </NeonText>
          </h3>
          <p className="text-muted-foreground">
            Stay ahead of the curve with cutting-edge technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergingServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-lg bg-black/20">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-center group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-3">
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
                <div className="flex items-center justify-center">
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <div className="text-lg font-bold text-primary">
                  {service.price}
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link to={service.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our micro SAAS services to accelerate growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/services">
                  Explore All Services
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/request-quote">
                  Request Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}