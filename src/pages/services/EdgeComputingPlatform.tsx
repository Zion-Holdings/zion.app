import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Cpu, 
  Zap, 
  Globe, 
  Brain, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3,
  Users,
  Database,
  Network,
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Server,
  Target,
  Rocket,
  Wifi,
  Activity,
  Layers,
  HardDrive
} from 'lucide-react';

export default function EdgeComputingPlatform() {
  const features = [
    {
      title: "Global Edge Network",
      description: "Distributed edge nodes in 50+ countries providing ultra-low latency computing worldwide",
      icon: Globe,
      benefits: ["Global coverage", "Low latency", "High availability", "Geographic redundancy"]
    },
    {
      title: "Real-time Data Processing",
      description: "Process data at the edge with sub-10ms latency for IoT and real-time applications",
      icon: Zap,
      benefits: ["Sub-10ms latency", "Real-time analytics", "Stream processing", "Instant insights"]
    },
    {
      title: "AI Edge Inference",
      description: "Run AI models directly on edge devices for instant decision making",
      icon: Brain,
      benefits: ["Local AI processing", "Reduced bandwidth", "Privacy preservation", "Offline capability"]
    },
    {
      title: "Edge Security",
      description: "Built-in security with encryption, authentication, and threat detection at every edge node",
      icon: Shield,
      benefits: ["End-to-end encryption", "Identity management", "Threat detection", "Compliance ready"]
    },
    {
      title: "Edge Analytics",
      description: "Advanced analytics and machine learning capabilities at the edge",
      icon: BarChart3,
      benefits: ["Local analytics", "Predictive models", "Data visualization", "Custom dashboards"]
    },
    {
      title: "Edge Management Console",
      description: "Centralized management and monitoring of all edge nodes and applications",
      icon: Activity,
      benefits: ["Centralized control", "Real-time monitoring", "Automated scaling", "Performance optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$2,000",
      period: "/month",
      description: "Perfect for small IoT deployments and edge computing experiments",
      features: [
        "5 edge nodes",
        "100GB data processing/month",
        "Basic edge analytics",
        "5 user accounts",
        "Email support",
        "Standard security",
        "99.5% uptime SLA"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$8,000",
      period: "/month",
      description: "Ideal for production edge computing deployments",
      features: [
        "25 edge nodes",
        "1TB data processing/month",
        "Advanced edge analytics",
        "25 user accounts",
        "Priority support",
        "AI edge inference",
        "Custom edge applications",
        "99.9% uptime SLA"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Full-scale edge computing platform for large organizations",
      features: [
        "Unlimited edge nodes",
        "Unlimited data processing",
        "Custom AI models",
        "Unlimited users",
        "24/7 dedicated support",
        "White-label solutions",
        "On-premise edge",
        "99.99% uptime SLA"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      title: "Smart Factory",
      description: "Real-time monitoring and predictive maintenance for industrial equipment",
      roi: "30% reduction in downtime",
      icon: Cpu
    },
    {
      industry: "Healthcare",
      title: "Remote Patient Monitoring",
      description: "Edge computing for real-time health data processing and alerts",
      roi: "40% faster response times",
      icon: Users
    },
    {
      industry: "Retail",
      title: "Smart Retail",
      description: "Edge analytics for customer behavior and inventory optimization",
      roi: "25% increase in sales",
      icon: TrendingUp
    },
    {
      industry: "Transportation",
      title: "Connected Vehicles",
      description: "Edge processing for autonomous driving and traffic optimization",
      roi: "50% improvement in safety",
      icon: Rocket
    }
  ];

  const benefits = [
    {
      title: "10x Faster",
      description: "Ultra-low latency processing at the edge",
      icon: Zap,
      metric: "10x"
    },
    {
      title: "99.9% Uptime",
      description: "High availability with distributed edge nodes",
      icon: CheckCircle,
      metric: "99.9%"
    },
    {
      title: "Global Coverage",
      description: "Edge nodes in 50+ countries worldwide",
      icon: Globe,
      metric: "50+"
    },
    {
      title: "Real-time Processing",
      description: "Sub-10ms latency for instant insights",
      icon: Clock,
      metric: "<10ms"
    }
  ];

  const edgeAdvantages = [
    {
      title: "Reduced Latency",
      description: "Process data closer to the source for faster response times",
      icon: Zap
    },
    {
      title: "Bandwidth Optimization",
      description: "Reduce data transfer by processing at the edge",
      icon: Network
    },
    {
      title: "Privacy & Security",
      description: "Keep sensitive data local and secure at the edge",
      icon: Shield
    },
    {
      title: "Offline Operation",
      description: "Continue processing even when connectivity is limited",
      icon: Wifi
    }
  ];

  const edgeTechnologies = [
    "Kubernetes Edge",
    "Docker Edge",
    "WebAssembly",
    "Edge AI Frameworks",
    "5G Integration",
    "IoT Protocols",
    "Edge Databases",
    "Edge Security"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Edge Computing Platform - Zion Tech Group" 
        description="Deploy applications at the edge with our global edge computing platform. Ultra-low latency, real-time processing, and AI inference at the edge."
        keywords="edge computing, edge platform, IoT, real-time processing, edge analytics, edge AI, low latency computing"
        canonical="https://ziontechgroup.com/services/edge-computing-platform"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Cpu className="w-12 h-12 text-zion-cyan mr-3 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Edge Computing Platform
            </h1>
          </div>
          <p className="text-2xl text-zion-cyan mb-4 font-semibold">
            Compute at the Edge, Process in Real-Time
          </p>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Deploy applications at the edge with our global edge computing platform. Experience 
            ultra-low latency processing, real-time analytics, and AI inference capabilities 
            distributed across 50+ countries worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Edge Assessment
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-sm">✓ 30-day free trial • ✓ No setup fees • ✓ Global edge deployment • ✓ Real-time processing</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Edge Computing Advantages
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the power of distributed computing with measurable performance 
              improvements and global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-zion-cyan text-white text-sm font-bold px-3 py-1 rounded-full">
                    {benefit.metric}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Advantages */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Edge Computing?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understand the fundamental advantages of edge computing and how it transforms 
              the way we process data and deploy applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {edgeAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                      {advantage.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zion-slate">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced Edge Computing Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive edge computing capabilities designed for modern applications 
              that require real-time processing and global distribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Technologies */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Edge Computing Technologies
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Built on industry-standard technologies and frameworks for maximum 
              compatibility and performance at the edge.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {edgeTechnologies.map((technology, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <Server className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <p className="text-sm font-semibold text-zion-blue-dark">
                  {technology}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Edge Computing Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the edge computing plan that fits your deployment needs. All plans include 
              our core edge capabilities and 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-zion-blue-light rounded-xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light hover:border-zion-cyan'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate text-sm">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                    : 'bg-zion-blue hover:bg-zion-blue-dark text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-zion-slate mb-4">
              Need custom edge solutions? Contact our edge computing experts for tailored pricing.
            </p>
            <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center justify-center mx-auto">
              Contact Edge Experts
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover how edge computing is transforming industries with real-time processing, 
              reduced latency, and improved efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-zion-slate text-sm mb-2">
                      {useCase.industry}
                    </p>
                  </div>
                </div>
                <p className="text-zion-slate mb-4">
                  {useCase.description}
                </p>
                <div className="bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg p-4">
                  <p className="text-zion-cyan font-semibold text-center">
                    {useCase.roi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy at the Edge?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Experience the future of computing with our global edge computing platform. 
            Start your free trial today and deploy applications worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-all">
              Edge Assessment
            </button>
          </div>
          <div className="text-zion-slate-light text-sm">
            <p>✓ No setup fees • ✓ 30-day free trial • ✓ Global edge deployment • ✓ Real-time processing</p>
          </div>
        </div>
      </section>
    </div>
  );
}