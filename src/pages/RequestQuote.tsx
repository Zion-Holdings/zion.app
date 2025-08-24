
import React from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

export default function RequestQuote() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="Request a Quote | Zion Tech Group"
        description="Get customized quotes for AI services, IT solutions, talent hiring, and equipment. Fast, reliable, and tailored to your needs."
        keywords="request quote, AI services, IT solutions, talent hiring, equipment quotes"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Whether you need AI services, IT solutions, top talent, or specialized equipment, 
              we'll provide you with a detailed, competitive quote tailored to your specific requirements.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <CardTitle className="text-lg">Fast Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Get your quote within 24 hours
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <CardTitle className="text-lg">Customized</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Tailored to your specific needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <CardTitle className="text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Reviewed by industry experts
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <CardTitle className="text-lg">No Obligation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Free quotes with no commitment
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What We Can Quote For You
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">AI & Machine Learning</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Custom AI solutions, model development, and ML infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Custom AI model development</li>
                    <li>• Machine learning consulting</li>
                    <li>• AI infrastructure setup</li>
                    <li>• Data science services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">IT Services</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Onsite IT support, infrastructure, and digital transformation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Onsite IT support</li>
                    <li>• Infrastructure setup</li>
                    <li>• Cloud migration</li>
                    <li>• Cybersecurity services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Talent & Hiring</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    AI-powered talent matching and recruitment services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• AI talent matching</li>
                    <li>• Recruitment services</li>
                    <li>• Team building</li>
                    <li>• Skill assessment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Equipment & Hardware</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    High-tech equipment, servers, and specialized hardware
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• AI/ML hardware</li>
                    <li>• Server infrastructure</li>
                    <li>• Networking equipment</li>
                    <li>• Green IT solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Consulting</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Strategic technology consulting and digital transformation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Technology strategy</li>
                    <li>• Digital transformation</li>
                    <li>• Process optimization</li>
                    <li>• Innovation consulting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Custom Solutions</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Tailored solutions for unique business requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Custom software development</li>
                    <li>• Integration services</li>
                    <li>• API development</li>
                    <li>• Legacy system modernization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Request Your Quote
              </h2>
              <p className="text-zion-slate-light text-lg">
                Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
              </p>
            </div>
            
            <QuoteRequestForm />
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h3>
            <p className="text-zion-slate-light mb-6">
              For urgent requests or to speak with our team directly, contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:commercial@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-colors"
              >
                Contact Page
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
