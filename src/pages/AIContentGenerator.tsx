import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { 
  PenTool, 
  FileText, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Type,
  Image,
  Video,
  Mic,
  Palette,
  ShoppingBag,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AIContentGenerator() {
  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns",
      icon: <PenTool className="h-6 w-6 text-zion-cyan" />
    },
    {
      title: "Multi-Format Support",
      description: "Create content in various formats: text, images, videos, and audio",
      icon: <FileText className="h-6 w-6 text-zion-purple" />
    },
    {
      title: "Brand Voice Consistency",
      description: "Maintain your brand's unique voice across all content pieces",
      icon: <Type className="h-6 w-6 text-zion-blue" />
    },
    {
      title: "SEO Optimization",
      description: "AI-powered SEO suggestions to improve content visibility and ranking",
      icon: <Target className="h-6 w-6 text-zion-cyan" />
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "Long-form articles and blog content",
      icon: <FileText className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Social Media",
      description: "Posts for all major social platforms",
      icon: <Users className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Marketing Copy",
      description: "Ads, landing pages, and promotional content",
      icon: <Target className="h-8 w-8 text-zion-blue" />
    },
    {
      title: "Product Descriptions",
      description: "Compelling product and service descriptions",
      icon: <ShoppingBag className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Email Campaigns",
      description: "Newsletters and email marketing content",
      icon: <Mail className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Video Scripts",
      description: "Scripts for video content and presentations",
      icon: <Video className="h-8 w-8 text-zion-blue" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 50 content pieces/month",
        "Basic AI writing tools",
        "Standard templates",
        "Email support",
        "Basic SEO suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Advanced content creation for growing businesses",
      features: [
        "Up to 200 content pieces/month",
        "Advanced AI writing tools",
        "Custom templates",
        "Priority support",
        "Advanced SEO optimization",
        "Brand voice training",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "Full-scale content creation for large organizations",
      features: [
        "Unlimited content pieces",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director, GrowthBrand",
      content: "Zion's AI Content Generator increased our content output by 300% while maintaining quality. Game-changer!",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Content Creator, TechBlog",
      content: "The AI writing assistant is incredibly intuitive. It understands context and generates engaging content.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "CEO, StartupXYZ",
      content: "We've saved countless hours on content creation. The ROI is immediate and substantial.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-purple-dark to-zion-slate-dark">
      <SEO 
        title="AI Content Generator - Zion Tech Group" 
        description="Create engaging, high-quality content with AI-powered writing tools. Generate blogs, social media posts, and marketing copy instantly."
        keywords="AI content generator, content creation, AI writing, marketing copy, Zion Tech Group"
        canonical="https://ziontechgroup.com/ai-content-generator"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            ✍️ AI-Powered Content Creation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            AI Content Generator
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your content creation with AI-powered writing tools. Generate engaging blogs, social media posts, 
            marketing copy, and more in seconds. Maintain your brand voice while scaling your content production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Try Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Content Creation Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI platform combines natural language processing with creative intelligence to deliver content that resonates with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From blog posts to social media content, our AI handles all your content creation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-20 h-20 flex items-center justify-center">
                    {type.icon}
                  </div>
                  <CardTitle className="text-white">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI writing features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-zion-purple scale-105' : 'border-zion-slate-light'} bg-zion-slate-dark/50 transition-all duration-300 hover:shadow-2xl`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Content Creators
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what our customers say about the transformative power of AI content generation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of creators already using AI to scale their content production and engage their audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}