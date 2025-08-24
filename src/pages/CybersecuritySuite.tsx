import React from 'react';
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Zap, FileText, Globe, Users, Lock, Clock, Star, AlertTriangle, Eye, Server } from "lucide-react";
import { Link } from "react-router-dom";

export default function CybersecuritySuite() {
  const features = [
    "24/7 threat monitoring and detection",
    "Real-time security incident response",
    "Advanced threat intelligence feeds",
    "Automated vulnerability scanning",
    "Penetration testing and security audits",
    "Compliance reporting (GDPR, HIPAA, SOC2)",
    "Security awareness training platform",
    "Endpoint detection and response (EDR)",
    "Network traffic analysis",
    "Cloud security monitoring",
    "Incident response automation",
    "Security metrics and dashboards"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat monitoring",
        "Vulnerability scanning (monthly)",
        "Security awareness training",
        "Basic incident response",
        "Email support",
        "Security dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced threat monitoring",
        "Real-time vulnerability scanning",
        "Penetration testing (quarterly)",
        "Automated incident response",
        "Priority support",
        "Advanced analytics",
        "Compliance reporting",
        "Security team training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with advanced security needs",
      features: [
        "Full-spectrum threat monitoring",
        "Continuous vulnerability assessment",
        "Advanced penetration testing",
        "Custom incident response playbooks",
        "24/7 phone support",
        "Custom security integrations",
        "Dedicated security analyst",
        "Advanced compliance frameworks",
        "Custom security training",
        "API access & integrations"
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: "Threat Detection & Response",
      description: "Advanced AI-powered threat detection with automated response capabilities to neutralize threats in real-time.",
      icon: <Eye className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Vulnerability Management",
      description: "Continuous vulnerability assessment and prioritization with automated remediation workflows.",
      icon: <AlertTriangle className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Security Compliance",
      description: "Automated compliance monitoring and reporting for major frameworks including GDPR, HIPAA, and SOC2.",
      icon: <Shield className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Incident Response",
      description: "Rapid incident response with automated playbooks and expert security team support.",
      icon: <Shield className="h-8 w-8 text-zion-purple" />
    }
  ];

  const complianceFrameworks = [
    "GDPR (General Data Protection Regulation)",
    "HIPAA (Health Insurance Portability and Accountability Act)",
    "SOC 2 (System and Organization Controls)",
    "ISO 27001 (Information Security Management)",
    "PCI DSS (Payment Card Industry Data Security Standard)",
    "NIST Cybersecurity Framework",
    "CIS Controls",
    "FedRAMP (Federal Risk and Authorization Management Program)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-slate to-background">
      <SEO 
        title="Cybersecurity Suite - Zion Tech Group" 
        description="Comprehensive security monitoring, threat detection, and incident response for businesses of all sizes. Starting at $199/month."
        keywords="cybersecurity, threat detection, security monitoring, incident response, compliance, security audit"
        canonical="https://ziontechgroup.com/cybersecurity-suite"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 border-red-500/30 px-4 py-2 text-lg">
              Enterprise-Grade Security
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Cybersecurity Suite
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Protect your business with comprehensive cybersecurity solutions that detect, prevent, and respond to threats in real-time. 
            Our AI-powered security platform provides enterprise-grade protection at an accessible price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg">
              Start Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 text-lg">
              <Shield className="h-5 w-5 mr-2" />
              Security Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity suite covers every aspect of modern security needs, from threat detection to compliance management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityServices.map((service, index) => (
              <Card key={index} className="bg-zion-slate/50 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Advanced Security Features
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with expert security knowledge to deliver unmatched protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-slate/50 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 bg-zion-slate/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Industry Compliance & Standards
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our platform helps you meet and maintain compliance with major industry standards and regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="bg-zion-slate/50 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Check className="h-5 w-5 text-red-400 mx-auto mb-2" />
                  <span className="text-sm text-zion-slate-light">{framework}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Security Plans for Every Business
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Choose the security level that matches your business needs and budget. All plans include our core security features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-red-500 border-2 scale-105' : 'border-red-500/20'} bg-zion-slate/50 hover:border-red-500/40 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-red-500 hover:bg-red-600'}`}>
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-zion-slate/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already protected by our comprehensive cybersecurity suite. 
            Get started with a free security assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg">
              Free Security Assessment
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 text-lg">
                Contact Security Team
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Security questions? Call us at <a href="tel:+13024640950" className="text-red-400 hover:underline">+1 302 464 0950</a></p>
            <p>Or email our security team at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:underline">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}