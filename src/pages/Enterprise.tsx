import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Building, Users, Shield, Zap, Globe, BarChart3, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Enterprise() {
  const features = [
    {
      icon: <Building className="h-8 w-8 text-zion-cyan" />,
      title: "Enterprise Dashboard",
      description: "Centralized management console for all your marketplace activities and team members."
    },
    {
      icon: <Users className="h-8 w-8 text-zion-purple" />,
      title: "Team Management",
      description: "Manage user roles, permissions, and access controls for your organization."
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-purple-light" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with SSO, 2FA, and compliance certifications."
    },
    {
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      title: "API Access",
      description: "Full API access for custom integrations and automated workflows."
    },
    {
      icon: <Globe className="h-8 w-8 text-zion-purple" />,
      title: "Global Reach",
      description: "Access to talent and services from around the world with localized support."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-zion-purple-light" />,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into your marketplace usage and ROI metrics."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small teams getting started with AI and tech services.",
      features: [
        "Up to 10 team members",
        "Basic analytics dashboard",
        "Email support",
        "Standard API access",
        "Basic reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Ideal for growing organizations with advanced needs.",
      features: [
        "Up to 50 team members",
        "Advanced analytics",
        "Priority support",
        "Full API access",
        "Custom reporting",
        "SSO integration",
        "Advanced security features"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements.",
      features: [
        "Unlimited team members",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom SLA",
        "On-premise options",
        "Compliance certifications"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Reduce hiring costs by up to 60% with our marketplace model.",
      icon: <Check className="h-6 w-6 text-green-400" />
    },
    {
      title: "Faster Hiring",
      description: "Find and hire qualified talent in days, not months.",
      icon: <Check className="h-6 w-6 text-green-400" />
    },
    {
      title: "Quality Assurance",
      description: "Vetted professionals with proven track records.",
      icon: <Check className="h-6 w-6 text-green-400" />
    },
    {
      title: "Scalability",
      description: "Scale your team up or down based on project needs.",
      icon: <Check className="h-6 w-6 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Enterprise-grade solutions for organizations seeking AI talent, tech services, and marketplace management tools."
        keywords="enterprise, business solutions, team management, AI talent, tech services, marketplace"
        canonical="https://ziontechgroup.com/enterprise"
      />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading className="text-4xl md:text-6xl mb-6">
              Enterprise Solutions
            </GradientHeading>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Scale your organization with Zion's enterprise-grade marketplace platform. Access global AI talent, tech services, and powerful management tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                <Link to="/enterprise/plans">View Plans</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                <Link to="/contact">Contact Sales</Link>
              </Button>
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

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Enterprise?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  {benefit.icon}
                  <div>
                    <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card key={index} className={`bg-zion-blue-dark border-zion-purple/20 ${
                  plan.popular ? 'border-zion-purple/60 ring-2 ring-zion-purple/20' : ''
                }`}>
                  <CardHeader className="text-center">
                    {plan.popular && (
                      <Badge className="bg-zion-purple text-white mb-2 mx-auto">Most Popular</Badge>
                    )}
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-zion-cyan">{plan.price}</span>
                      <span className="text-zion-slate-light">{plan.period}</span>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-zion-purple hover:bg-zion-purple-light' 
                          : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                      }`}
                    >
                      <Link to={plan.name === 'Enterprise' ? '/contact' : '/enterprise/plans'}>
                        {plan.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-zion-purple/40">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Organization?</h3>
                <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                  Join leading enterprises that trust Zion for their AI talent and tech service needs. Our team is ready to help you get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                    <Link to="/contact">Schedule a Demo</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                    <Link to="/enterprise/plans">View All Plans</Link>
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