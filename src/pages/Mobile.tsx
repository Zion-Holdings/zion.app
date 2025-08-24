import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Zap, Shield, Globe, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Mobile() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-zion-cyan" />,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with intuitive touch controls and responsive layouts."
    },
    {
      icon: <Zap className="h-8 w-8 text-zion-purple" />,
      title: "Lightning Fast",
      description: "Optimized performance with offline capabilities and instant loading times."
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-purple-light" />,
      title: "Secure & Private",
      description: "End-to-end encryption and secure authentication to protect your data."
    },
    {
      icon: <Globe className="h-8 w-8 text-zion-cyan" />,
      title: "Global Access",
      description: "Access the marketplace from anywhere in the world with localized content."
    },
    {
      icon: <Users className="h-8 w-8 text-zion-purple" />,
      title: "Real-time Chat",
      description: "Instant messaging with clients, talent, and team members on the go."
    },
    {
      icon: <Star className="h-8 w-8 text-zion-purple-light" />,
      title: "Smart Notifications",
      description: "Intelligent alerts for important updates, messages, and opportunities."
    }
  ];

  const appHighlights = [
    {
      title: "Browse Marketplace",
      description: "Discover AI talent, services, and equipment with advanced search and filtering."
    },
    {
      title: "Manage Projects",
      description: "Track project progress, manage timelines, and collaborate with team members."
    },
    {
      title: "Secure Payments",
      description: "Handle transactions securely with multiple payment options and escrow protection."
    },
    {
      title: "AI-Powered Matching",
      description: "Get intelligent recommendations for talent and services based on your needs."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      content: "The Zion mobile app has revolutionized how we hire AI talent. It's like having the entire marketplace in my pocket.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance AI Developer",
      content: "I can respond to job opportunities instantly and manage my projects on the go. The mobile experience is seamless.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Research Lead",
      content: "The mobile app makes it easy to stay connected with clients and manage multiple service requests efficiently.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Mobile App - Zion Tech Group" 
        description="Download the Zion mobile app for iOS and Android. Access the AI and tech marketplace on the go with our powerful mobile application."
        keywords="mobile app, iOS app, Android app, marketplace app, AI marketplace mobile"
        canonical="https://ziontechgroup.com/mobile"
      />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading className="text-4xl md:text-6xl mb-6">
              Zion Mobile App
            </GradientHeading>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Take the Zion marketplace with you everywhere. Access AI talent, tech services, and manage projects on the go with our powerful mobile application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                <Link to="/mobile-launch">Download Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                <Link to="/mobile-launch">Learn More</Link>
              </Button>
            </div>
            
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-black/20 rounded-lg px-4 py-2">
                <Download className="h-5 w-5 text-zion-cyan" />
                <span className="text-white text-sm">Available on iOS & Android</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                <CardHeader className="pb-3">
                  {feature.icon}
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* App Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What You Can Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appHighlights.map((highlight, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-zion-slate-light">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-zion-purple/40">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Mobile?</h3>
                <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                  Download the Zion mobile app today and take the AI marketplace with you everywhere. Available for iOS and Android devices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                    <Link to="/mobile-launch">
                      Download App
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                    <Link to="/mobile-launch">View Features</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}