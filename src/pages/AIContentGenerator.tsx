import React from 'react';
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Brain, Zap, FileText, Globe, Users, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIContentGenerator() {
  const features = [
    "AI-powered content generation for any industry",
    "SEO-optimized content with keyword research",
    "Multiple content formats (blogs, social media, emails)",
    "Brand voice customization and consistency",
    "Plagiarism-free, original content",
    "Real-time content optimization",
    "Multi-language support (100+ languages)",
    "Content calendar and scheduling",
    "Performance analytics and insights",
    "Team collaboration tools",
    "API access for enterprise integration",
    "24/7 customer support"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "500 AI-generated content pieces/month",
        "Basic SEO optimization",
        "5 content templates",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "2,000 AI-generated content pieces/month",
        "Advanced SEO optimization",
        "25+ content templates",
        "Priority email support",
        "Advanced analytics & reporting",
        "Team collaboration (up to 5 users)",
        "Custom brand voice training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited AI-generated content",
        "Premium SEO optimization",
        "100+ premium templates",
        "Phone & priority support",
        "Advanced analytics & AI insights",
        "Unlimited team members",
        "Custom AI model training",
        "API access & integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Blog Content Creation",
      description: "Generate engaging blog posts, articles, and long-form content optimized for SEO and reader engagement.",
      icon: <FileText className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Social Media Marketing",
      description: "Create compelling social media posts, captions, and campaigns across all platforms.",
      icon: <Globe className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Email Marketing",
      description: "Generate personalized email campaigns, newsletters, and automated sequences.",
      icon: <Users className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Product Descriptions",
      description: "Create compelling product descriptions, features, and marketing copy.",
      icon: <Zap className="h-8 w-8 text-zion-purple" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-slate to-background">
      <SEO 
        title="AI Content Generator - Zion Tech Group" 
        description="Generate high-quality content, code, and documentation using advanced AI models. Starting at $29/month."
        keywords="AI content generator, content creation, AI writing, SEO content, marketing copy"
        canonical="https://ziontechgroup.com/ai-content-generator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              AI-Powered Content Creation
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            AI Content Generator
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your content creation with AI-powered writing that generates engaging, SEO-optimized content in seconds. 
            From blog posts to marketing copy, our AI understands your brand and delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8 py-4 text-lg">
              <Brain className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Powerful Features for Modern Content Creation
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our AI content generator combines cutting-edge technology with intuitive design to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-slate/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Perfect for Every Content Need
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Whether you're a marketer, business owner, or content creator, our AI content generator has you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-zion-slate/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-zion-slate-light text-sm">{useCase.description}</p>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-zion-purple border-2 scale-105' : 'border-zion-purple/20'} bg-zion-slate/50 hover:border-zion-purple/40 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-zion-cyan mt-1 flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-zion-purple to-zion-cyan' : 'bg-zion-purple hover:bg-zion-purple-dark'}`}>
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
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI content generator to create engaging, high-quality content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan text-white px-8 py-4 text-lg">
              Start Your Free Trial
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Questions? Call us at <a href="tel:+13024640950" className="text-zion-cyan hover:underline">+1 302 464 0950</a></p>
            <p>Or email us at <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}