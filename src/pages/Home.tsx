
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SimpleFuturisticBackground } from "@/components/ui/FuturisticBackground";
import { ENHANCED_SERVICES, getPopularServices, getNewServices } from "@/data/enhancedServices";
import { Zap, Star, ArrowRight, Phone, Mail, MapPin, Brain, Cloud, Code, Shield, TrendingUp, Users, CheckCircle, Clock, DollarSign, Rocket, Cpu, Database, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const popularServices = getPopularServices();
  const newServices = getNewServices();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow Inc',
      company: 'TechFlow Inc',
      content: 'Zion Tech Group transformed our entire tech infrastructure. Their AI solutions are game-changing.',
      rating: 5,
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Founder at StartupXYZ',
      company: 'StartupXYZ',
      content: 'The AI solutions they implemented saved us 40% on operational costs. Highly recommended!',
      rating: 5,
      avatar: '/avatars/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director at GlobalCorp',
      company: 'GlobalCorp',
      content: 'Outstanding cybersecurity implementation. We feel completely secure with their solutions.',
      rating: 5,
      avatar: '/avatars/emily.jpg'
    }
  ];

  const performanceMetrics = [
    { metric: '99.99%', label: 'Uptime', description: 'Guaranteed reliability' },
    { metric: '<100ms', label: 'Response Time', description: 'Lightning fast performance' },
    { metric: '24/7', label: 'Support', description: 'Always available' },
    { metric: '21 Days', label: 'Free Trial', description: 'Risk-free testing' }
  ];

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️', description: 'Modern web development' },
    { name: 'Node.js & Python', icon: '🐍', description: 'Backend & AI development' },
    { name: 'AWS & Azure', icon: '☁️', description: 'Cloud infrastructure' },
    { name: 'Docker & Kubernetes', icon: '🐳', description: 'Container orchestration' },
    { name: 'TensorFlow & PyTorch', icon: '🤖', description: 'Machine learning' },
    { name: 'Blockchain & Web3', icon: '⛓️', description: 'Decentralized solutions' }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Revolutionary Technology Solutions" 
        description="Transform your business with Zion Tech Group's cutting-edge AI, micro SaaS, cloud infrastructure, and cybersecurity solutions. Start your free trial today."
        keywords="AI, technology, micro SaaS, cloud infrastructure, cybersecurity, machine learning, business automation"
        canonical="https://ziontechgroup.com"
      />
      <SimpleFuturisticBackground className="min-h-screen">
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="container mx-auto px-4 pt-24 pb-20">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm font-medium text-zion-cyan">Innovation at Your Fingertips</span>
              </div>
              <GradientHeading className="mb-6">
                Revolutionary Technology Solutions
              </GradientHeading>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI-powered automation, micro SaaS solutions, 
                and enterprise-grade infrastructure. Join the future of technology today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link to="/enhanced-services">
                  <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                    <Zap className="h-4 w-4" />
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    <Phone className="h-4 w-4" />
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-sm text-zion-slate-light">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">99.99%</div>
                  <div className="text-sm text-zion-slate-light">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-sm text-zion-slate-light">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">21 Days</div>
                  <div className="text-sm text-zion-slate-light">Free Trial</div>
                </div>
              </div>
            </div>

            {/* Core Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="bg-zion-blue-dark/50 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">AI & Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    Cutting-edge artificial intelligence solutions including machine learning, 
                    natural language processing, and predictive analytics tailored to your business needs.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue-dark/50 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">Micro SaaS Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    Scalable, focused software solutions for specific business needs with custom development, 
                    API integration, and cloud deployment.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue-dark/50 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">Cybersecurity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    Advanced security solutions including threat detection, penetration testing, 
                    compliance auditing, and incident response.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Technologies Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Cutting-Edge Technologies</h2>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  We leverage the latest technologies to deliver exceptional results
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {technologies.map((tech, index) => (
                  <div key={tech.name} className="text-center">
                    <div className="text-4xl mb-3" aria-hidden="true">{tech.icon}</div>
                    <div className="text-white font-medium text-sm">{tech.name}</div>
                    <div className="text-zion-slate-light text-xs">{tech.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Performance Metrics</h2>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  Our commitment to excellence is reflected in these key performance indicators
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {performanceMetrics.map((item, index) => (
                  <div key={item.label} className="text-center bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 p-6 rounded-xl border border-zion-purple/30">
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{item.metric}</div>
                    <div className="text-zion-purple font-semibold mb-1">{item.label}</div>
                    <div className="text-zion-slate-light text-sm">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Services Showcase */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Popular Services</h2>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  Discover our most requested AI, IT, and SAAS solutions that are transforming businesses worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularServices.slice(0, 6).map((service) => (
                  <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                          {service.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zion-slate-light">{service.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-white text-lg group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-zion-cyan">
                          ${service.price.min.toLocaleString()}-${service.price.max.toLocaleString()}
                        </span>
                        <Link to="/enhanced-services">
                          <Button variant="outline" size="sm" className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  Don&apos;t just take our word for it - hear from the businesses we&apos;ve transformed
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={testimonial.name} className="bg-zion-blue-dark/50 border-zion-purple/30 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <CardDescription className="text-zion-slate-light italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{testimonial.name}</div>
                          <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                          <div className="text-zion-slate-light text-xs">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 mb-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  Get in touch with our experts to discuss your specific needs and discover how our services 
                  can drive innovation and growth for your organization.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-6 w-6 text-zion-cyan" />
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                  <div className="text-zion-slate-light text-sm">Call us anytime</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-6 w-6 text-zion-cyan" />
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                  <div className="text-zion-slate-light text-sm">Email us today</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-6 w-6 text-zion-cyan" />
                  <div className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                  <div className="text-zion-slate-light text-sm">Visit our office</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our expertise to drive innovation and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Us Today
                  </Button>
                </Link>
                <Link to="/enhanced-services">
                  <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    <Zap className="h-4 w-4" />
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SimpleFuturisticBackground>
    </>
  );
}
