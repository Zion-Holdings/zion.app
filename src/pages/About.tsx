
import React from 'react';
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Lightbulb, 
  Award, 
  Globe, 
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Heart
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group's mission to revolutionize the tech and AI marketplace, our team, and our commitment to innovation."
        keywords="Zion Tech Group, about us, tech marketplace, AI marketplace, company mission"
        canonical="https://ziontechgroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-zion-cyan">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Pioneering the future of technology through innovative marketplace solutions, 
            AI integration, and sustainable tech practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To democratize access to cutting-edge technology and AI solutions by creating 
                the world's most comprehensive and accessible marketplace for tech talent, 
                services, and equipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-zion-cyan w-5 h-5" />
                  <span className="text-zion-slate-light">Connect businesses with top tech talent</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-zion-cyan w-5 h-5" />
                  <span className="text-zion-slate-light">Accelerate AI adoption across industries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-zion-cyan w-5 h-5" />
                  <span className="text-zion-slate-light">Promote sustainable technology practices</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-16 h-16 text-zion-purple" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Vision 2030</h3>
              <p className="text-zion-slate-light">
                To become the global standard for technology marketplace excellence, 
                driving innovation and sustainability in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We constantly push boundaries and embrace emerging technologies to stay ahead of the curve.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  Our success is built on the strength and collaboration of our global tech community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Trust & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We prioritize the security and privacy of our users above all else.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We're committed to promoting green technology and reducing our environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We strive for excellence in everything we do, from product quality to customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We're building solutions that make technology accessible to everyone, everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Zion by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">10K+</div>
              <p className="text-zion-slate-light">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <p className="text-zion-slate-light">Tech Companies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <p className="text-zion-slate-light">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <p className="text-zion-slate-light">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">AI Talent Marketplace</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Connect businesses with top AI and tech professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Our AI-powered matching system helps companies find the perfect talent 
                  for their projects, from developers to data scientists.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Tech Services Hub</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Comprehensive tech services and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  From IT consulting to custom software development, we provide 
                  end-to-end technology solutions for businesses of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Equipment & Infrastructure</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  High-tech equipment and infrastructure solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Access to cutting-edge hardware, cloud infrastructure, and 
                  specialized equipment for tech projects and research.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Green IT Solutions</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Sustainable technology practices and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  We help businesses implement eco-friendly technology solutions 
                  that reduce environmental impact while improving efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Community & Learning</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Knowledge sharing and professional development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Our community platform fosters collaboration, learning, and 
                  innovation among tech professionals worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Enterprise Solutions</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Custom solutions for large organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Tailored technology solutions and consulting services designed 
                  specifically for enterprise-level organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the Future of Tech?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Whether you're looking for talent, services, or want to be part of our mission, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
