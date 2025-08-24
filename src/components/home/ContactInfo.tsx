import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FuturisticCard, NeonText } from "@/components/ui/FuturisticBackground";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  ExternalLink
} from "lucide-react";

export function ContactInfo() {
  const contactMethods = [
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Phone className="h-8 w-8 text-zion-cyan" />,
      value: "+1 302 464 0950",
      action: "tel:+13024640950",
      badge: "24/7 Available",
      color: "#00ffff"
    },
    {
      title: "Email Support",
      description: "Get detailed responses to your inquiries",
      icon: <Mail className="h-8 w-8 text-zion-purple" />,
      value: "kleber@ziontechgroup.com",
      action: "mailto:kleber@ziontechgroup.com",
      badge: "Response < 2hrs",
      color: "#8c15e9"
    },
    {
      title: "Office Location",
      description: "Visit our headquarters for in-person meetings",
      icon: <MapPin className="h-8 w-8 text-zion-cyan" />,
      value: "364 E Main St STE 1008, Middletown DE 19709",
      action: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      badge: "Open Mon-Fri",
      color: "#00ffff"
    },
    {
      title: "Main Website",
      description: "Explore our complete company portfolio",
      icon: <Globe className="h-8 w-8 text-zion-purple" />,
      value: "ziontechgroup.com",
      action: "https://ziontechgroup.com",
      badge: "Official Site",
      color: "#8c15e9"
    }
  ];

  const companyStats = [
    {
      label: "Years Experience",
      value: "10+",
      icon: <Clock className="h-6 w-6 text-zion-cyan" />
    },
    {
      label: "Team Members",
      value: "50+",
      icon: <Users className="h-6 w-6 text-zion-purple" />
    },
    {
      label: "Projects Completed",
      value: "500+",
      icon: <Shield className="h-6 w-6 text-zion-cyan" />
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: <Zap className="h-6 w-6 text-zion-purple" />
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-blue-dark/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <NeonText color="#00ffff" glowIntensity="high">
              Get In Touch
            </NeonText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Our team of experts is here to help you succeed with cutting-edge technology solutions.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <FuturisticCard 
              key={index} 
              glowColor={method.color}
              intensity="medium"
              className="group hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm">
                    {method.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {method.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-4 bg-black/20 rounded-lg border border-zion-cyan/20">
                  <p className="text-lg font-mono text-zion-cyan break-all">
                    {method.value}
                  </p>
                </div>
                
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <a href={method.action} target="_blank" rel="noopener noreferrer">
                    <span>Contact via {method.title.split(' ')[0]}</span>
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </FuturisticCard>
          ))}
        </div>

        {/* Company Statistics */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            <NeonText color="#ff00ff" glowIntensity="medium">
              Why Choose Zion Tech Group?
            </NeonText>
          </h3>
          <p className="text-muted-foreground">
            Proven track record of delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-lg bg-black/20 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a quick consultation or want to discuss a major project, 
              our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/request-quote">
                  Request Free Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
            
            {/* Additional contact options */}
            <div className="mt-6 pt-6 border-t border-zion-purple/20">
              <p className="text-sm text-muted-foreground mb-3">
                Prefer to call? We're available 24/7 for urgent matters
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center justify-center gap-2 text-zion-purple hover:text-zion-purple-light transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}