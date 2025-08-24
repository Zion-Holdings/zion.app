import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small teams getting started with AI tools",
      features: [
        "AI Content Generation (100 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (5 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=starter"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (500 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (20 hours/month)",
        "AI Translation (10 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (1000 calls/month)",
        "Team Collaboration Tools"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/signup?plan=professional"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (2000 credits/month)",
        "AI Code Assistant (Advanced)",
        "AI Data Analytics Platform",
        "AI Threat Detection",
        "Multi-Cloud Management",
        "AI-Powered CRM",
        "Business Process Automation",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Support",
        "Custom Integrations",
        "API Access (10000 calls/month)",
        "Advanced Security Features"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=business"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Business",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Zero Trust Security Suite",
        "Edge Computing Solutions",
        "AI Market Research Platform",
        "AI Legal Document Review",
        "AI Financial Advisor",
        "AI Healthcare Assistant",
        "Dedicated Account Manager",
        "Custom Development",
        "On-Premise Deployment",
        "SLA Guarantees",
        "Compliance Certifications"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      services: [
        { name: "AI Content Generator Pro", price: "$29/month", features: ["Unlimited content generation", "50+ content types", "API access", "Advanced AI models"] },
        { name: "AI Image & Video Editor", price: "$19/month", features: ["Background removal", "Quality enhancement", "Style transfer", "Batch processing"] },
        { name: "AI Code Assistant", price: "$39/month", features: ["50+ languages", "IDE integrations", "Code review", "Debugging assistance"] },
        { name: "AI Data Analytics", price: "$199/month", features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "Automated reporting"] }
      ]
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      services: [
        { name: "AI Threat Detection", price: "$99/month", features: ["24/7 monitoring", "Instant alerts", "Automated response", "Threat intelligence"] },
        { name: "Zero Trust Security", price: "$499/month", features: ["Identity verification", "Network segmentation", "Continuous monitoring", "Compliance tools"] },
        { name: "Penetration Testing", price: "$299/month", features: ["Monthly assessments", "Detailed reports", "Remediation guidance", "Compliance support"] }
      ]
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      services: [
        { name: "Multi-Cloud Management", price: "$79/month", features: ["Unified dashboard", "Cost optimization", "Security compliance", "Performance monitoring"] },
        { name: "DevOps Automation", price: "$49/month", features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Deployment automation"] },
        { name: "Edge Computing", price: "$149/month", features: ["Global edge network", "IoT integration", "Real-time processing", "Low latency"] }
      ]
    },
    {
      name: "Business Intelligence",
      icon: <Users className="h-8 w-8 text-zion-green" />,
      services: [
        { name: "AI-Powered CRM", price: "$39/user/month", features: ["Lead scoring", "Sales forecasting", "Automated follow-ups", "Predictive analytics"] },
        { name: "Business Automation", price: "$29/month", features: ["Workflow automation", "100+ integrations", "Document processing", "Process optimization"] },
        { name: "AI Market Research", price: "$199/month", features: ["Competitor analysis", "Trend prediction", "Real-time monitoring", "Market insights"] }
      ]
    },
    {
      name: "Communication & Collaboration",
      icon: <MessageCircle className="h-8 w-8 text-zion-orange" />,
      services: [
        { name: "AI Meeting Assistant", price: "$19/month", features: ["Real-time transcription", "Smart summaries", "Action tracking", "Automated follow-ups"] },
        { name: "Virtual Event Platform", price: "$99/month", features: ["Interactive features", "AI engagement", "Event analytics", "1000 attendees"] },
        { name: "AI Translation", price: "$29/month", features: ["100+ languages", "Cultural adaptation", "Real-time translation", "API access"] }
      ]
    },
    {
      name: "Specialized Tools",
      icon: <FileText className="h-8 w-8 text-zion-red" />,
      services: [
        { name: "AI Legal Review", price: "$149/month", features: ["Contract analysis", "Risk assessment", "Compliance monitoring", "Legal insights"] },
        { name: "AI Financial Advisor", price: "$39/month", features: ["Portfolio optimization", "Risk assessment", "Financial planning", "Investment advice"] },
        { name: "AI Healthcare Assistant", price: "$29/month", features: ["Health monitoring", "Symptom analysis", "Wellness coaching", "HIPAA compliant"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple-dark">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Transparent Pricing for Every Business
          </h1>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include a 14-day free trial, 
            no credit card required. Scale up or down anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              <Zap className="h-5 w-5 mr-2" />
              14-Day Free Trial
            </Badge>
            <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 px-4 py-2 text-lg">
              <Shield className="h-5 w-5 mr-2" />
              Enterprise Security
            </Badge>
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              <Brain className="h-5 w-5 mr-2" />
              AI-Powered Tools
            </Badge>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-zion-purple shadow-2xl shadow-zion-purple/25 bg-gradient-to-br from-zion-purple/10 to-zion-purple/5' 
                    : 'border-zion-blue-light/30 hover:border-zion-purple/50 hover:shadow-xl hover:shadow-zion-purple/20'
                } bg-zion-slate-dark/80 backdrop-blur-sm`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-2" />
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${tier.popular ? 'pt-12' : 'pt-6'}`}>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                    <span className="text-zion-cyan/70">{tier.period}</span>
                  </div>
                  <CardDescription className="text-zion-cyan/80">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-cyan/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple' 
                        : 'bg-gradient-to-r from-zion-blue to-zion-blue-dark hover:from-zion-cyan hover:to-zion-blue'
                    } text-white border-0 shadow-lg`}
                  >
                    <Link to={tier.link}>
                      {tier.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-lg text-zion-cyan/80 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered micro SAAS solutions, 
              each designed to address specific business needs and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-2 border-zion-purple/50 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-zion-cyan">{service.name}</h4>
                        <span className="text-zion-purple font-bold">{service.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-zion-cyan/70 flex items-center gap-2">
                            <Check className="h-3 w-3 text-zion-purple" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 backdrop-blur-sm border-zion-purple/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-white mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-lg text-zion-cyan/80">
                Join thousands of businesses already using Zion's AI-powered solutions to accelerate growth, 
                improve efficiency, and stay ahead of the competition.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">14 Days</div>
                  <div className="text-zion-cyan/70">Free Trial</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-cyan/70">Expert Support</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">99.9%</div>
                  <div className="text-zion-cyan/70">Uptime SLA</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white border-0 shadow-lg shadow-zion-purple/25">
                <Link to="/signup">
                  Start Free Trial
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Sales
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">What's included in the free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  All plans include a 14-day free trial with full access to all features. 
                  No credit card required. You can upgrade, downgrade, or cancel anytime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">Can I change my plan later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing adjustments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">Do you offer enterprise discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  Yes, we offer volume discounts for enterprise customers. Contact our sales team 
                  for custom pricing and dedicated support options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">What support options are available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  All plans include email support. Professional and Business plans include priority support, 
                  while Enterprise plans include 24/7 dedicated support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}