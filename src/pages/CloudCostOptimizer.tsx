import React from 'react';
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Cloud, Zap, TrendingDown, BarChart3, Globe, Users, DollarSign, Clock, Star, PieChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function CloudCostOptimizer() {
  const features = [
    "AI-driven cost optimization algorithms",
    "Multi-cloud support (AWS, Azure, GCP)",
    "Real-time cost monitoring and alerts",
    "Automated resource scaling",
    "Reserved instance recommendations",
    "Spot instance optimization",
    "Storage lifecycle management",
    "Cost allocation and tagging",
    "Budget forecasting and planning",
    "Performance vs. cost analysis",
    "Automated cost optimization actions",
    "Custom optimization policies"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small cloud deployments",
      features: [
        "Up to $5,000 monthly cloud spend",
        "Basic cost optimization",
        "Monthly cost reports",
        "Email support",
        "Basic cost alerts",
        "AWS cost optimization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to $50,000 monthly cloud spend",
        "Advanced AI optimization",
        "Real-time cost monitoring",
        "Multi-cloud support",
        "Priority support",
        "Advanced analytics",
        "Automated optimization",
        "Custom cost policies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large cloud deployments",
      features: [
        "Unlimited cloud spend",
        "Premium AI optimization",
        "24/7 cost monitoring",
        "Full multi-cloud support",
        "Phone & priority support",
        "Custom optimization policies",
        "API access & integrations",
        "Dedicated cost analyst",
        "Advanced forecasting",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const optimizationServices = [
    {
      title: "Cost Analysis & Monitoring",
      description: "Real-time visibility into your cloud spending with detailed breakdowns and trend analysis.",
      icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms that continuously optimize your cloud resources for maximum cost efficiency.",
      icon: <BarChart3 className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Multi-Cloud Management",
      description: "Unified cost optimization across AWS, Azure, and Google Cloud Platform.",
      icon: <Globe className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Automated Actions",
      description: "Automatically implement cost-saving measures with your approval and oversight.",
      icon: <Settings className="h-8 w-8 text-zion-purple" />
    }
  ];

  const supportedClouds = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Oracle Cloud",
    "IBM Cloud",
    "DigitalOcean",
    "Linode",
    "Vultr"
  ];

  const costSavings = [
    {
      metric: "Average Cost Reduction",
      value: "40%",
      description: "Typical savings achieved by our customers"
    },
    {
      metric: "ROI Timeline",
      value: "2-3 months",
      description: "Time to see positive return on investment"
    },
    {
      metric: "Resource Utilization",
      value: "85%",
      description: "Average improvement in resource efficiency"
    },
    {
      metric: "Cost Visibility",
      value: "100%",
      description: "Complete transparency into cloud spending"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-slate to-background">
      <SEO 
        title="Cloud Cost Optimizer - Zion Tech Group" 
        description="AI-driven cloud cost optimization and resource management across AWS, Azure, and Google Cloud. Reduce costs by up to 40%."
        keywords="cloud cost optimization, AWS cost management, Azure cost reduction, GCP optimization, cloud savings"
        canonical="https://ziontechgroup.com/cloud-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30 px-4 py-2 text-lg">
              AI-Powered Cloud Optimization
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Cloud Cost Optimizer
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Stop overpaying for cloud services. Our AI-powered platform analyzes your cloud usage and automatically 
            optimizes resources to reduce costs by up to 40% while maintaining performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg">
              Start Free Cost Analysis
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg">
              <Cloud className="h-5 w-5 mr-2" />
              Cost Calculator
            </Button>
          </div>
        </div>
      </section>

      {/* Cost Savings Metrics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Proven Cost Savings Results
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our customers consistently achieve significant cost reductions while improving cloud performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costSavings.map((saving, index) => (
              <Card key={index} className="bg-zion-slate/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{saving.value}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{saving.metric}</h3>
                  <p className="text-zion-slate-light text-sm">{saving.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Comprehensive Cloud Optimization
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our platform provides end-to-end cloud cost optimization across all major cloud providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {optimizationServices.map((service, index) => (
              <Card key={index} className="bg-zion-slate/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center">
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

      {/* Supported Cloud Providers */}
      <section className="py-16 px-4 bg-zion-slate/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Multi-Cloud Support
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Optimize costs across all major cloud providers from a single platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportedClouds.map((cloud, index) => (
              <Card key={index} className="bg-zion-slate/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Cloud className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-zion-slate-light">{cloud}</span>
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
              Advanced Optimization Features
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our AI-powered platform continuously monitors and optimizes your cloud infrastructure for maximum efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-slate/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{feature}</span>
                  </div>
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
              Choose the plan that fits your cloud spending. All plans include our core optimization features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2 scale-105' : 'border-blue-500/20'} bg-zion-slate/50 hover:border-blue-500/40 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-blue-500 hover:bg-blue-600'}`}>
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
            Ready to Optimize Your Cloud Costs?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already saving money with our cloud cost optimization platform. 
            Start with a free cost analysis today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg">
              Free Cost Analysis
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Questions about cloud optimization? Call us at <a href="tel:+13024640950" className="text-blue-400 hover:underline">+1 302 464 0950</a></p>
            <p>Or email us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}