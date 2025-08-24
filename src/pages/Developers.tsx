import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Webhook, Key, BookOpen, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Developers() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-zion-cyan" />,
      title: "RESTful API",
      description: "Comprehensive REST API with JSON responses, rate limiting, and authentication.",
      badge: "Production Ready"
    },
    {
      icon: <Database className="h-8 w-8 text-zion-purple" />,
      title: "Real-time Data",
      description: "Access to live marketplace data including jobs, talent, and services.",
      badge: "Live Data"
    },
    {
      icon: <Webhook className="h-8 w-8 text-zion-purple-light" />,
      title: "Webhooks",
      description: "Receive real-time notifications when data changes in the marketplace.",
      badge: "Real-time"
    },
    {
      icon: <Key className="h-8 w-8 text-zion-cyan" />,
      title: "API Keys",
      description: "Secure authentication with API keys and role-based access control.",
      badge: "Secure"
    }
  ];

  const quickStartSteps = [
    {
      step: "1",
      title: "Get API Key",
      description: "Sign up and generate your API key from the dashboard."
    },
    {
      step: "2",
      title: "Read Documentation",
      description: "Explore our comprehensive API documentation and examples."
    },
    {
      step: "3",
      title: "Make First Request",
      description: "Start with simple GET requests to explore the data."
    },
    {
      step: "4",
      title: "Build & Scale",
      description: "Integrate our API into your applications and scale as needed."
    }
  ];

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/v1/jobs",
      description: "Retrieve job listings with filtering and pagination"
    },
    {
      method: "GET",
      endpoint: "/v1/talent",
      description: "Access talent profiles and skills information"
    },
    {
      method: "GET",
      endpoint: "/v1/services",
      description: "Browse available services and categories"
    },
    {
      method: "POST",
      endpoint: "/v1/quotes",
      description: "Submit quote requests for services"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Developer API - Zion Tech Group" 
        description="Access Zion's comprehensive API for jobs, talent, and services. Build powerful integrations with our marketplace data."
        keywords="API, developers, integration, marketplace API, jobs API, talent API"
        canonical="https://ziontechgroup.com/developers"
      />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading className="text-4xl md:text-6xl mb-6">
              Developer API
            </GradientHeading>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Build powerful integrations with Zion's marketplace data. Access jobs, talent, services, and more through our comprehensive REST API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                <Link to="/dashboard/developers/api-keys">Get API Key</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                <Link to="/dashboard/developers/documentation">View Documentation</Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    {feature.icon}
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Start Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartSteps.map((step, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-zion-cyan font-bold text-xl">{step.step}</span>
                    </div>
                    <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* API Endpoints Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Popular API Endpoints</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {apiEndpoints.map((endpoint, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          endpoint.method === 'GET' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-zion-cyan font-mono text-sm">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-zion-slate-light">{endpoint.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-zion-purple/40">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                  Join thousands of developers building on Zion's platform. Get your API key today and start integrating with the world's leading AI and tech marketplace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                    <Link to="/dashboard/developers/api-keys">Get Started Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                    <Link to="/dashboard/developers/documentation">Browse Documentation</Link>
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