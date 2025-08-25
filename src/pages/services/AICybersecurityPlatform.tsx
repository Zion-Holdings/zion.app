import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Zap, 
  Eye, 
  Brain, 
  TrendingUp, 
  Lock, 
  Clock, 
  BarChart3,
  Users,
  Database,
  Globe,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Star,
  Network,
  Target,
  Rocket,
  Bug,
  Key,
  Monitor,
  Server,
  Cloud
} from 'lucide-react';

export default function AICybersecurityPlatform() {
  const features = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time with 99.9% accuracy",
      icon: Brain,
      benefits: ["Behavioral analysis", "Anomaly detection", "Predictive threat modeling", "Zero-day protection"]
    },
    {
      title: "Intelligent Incident Response",
      description: "Automated response systems that neutralize threats within seconds of detection",
      icon: Zap,
      benefits: ["Instant threat neutralization", "Automated containment", "Response orchestration", "Recovery automation"]
    },
    {
      title: "Advanced Endpoint Protection",
      description: "Next-generation antivirus with AI-powered malware detection and prevention",
      icon: Shield,
      benefits: ["Real-time scanning", "Behavioral blocking", "Ransomware protection", "Device control"]
    },
    {
      title: "Network Security Monitoring",
      description: "24/7 network traffic analysis with AI-driven threat intelligence",
      icon: Network,
      benefits: ["Traffic analysis", "Threat correlation", "Network segmentation", "Intrusion prevention"]
    },
    {
      title: "Cloud Security Management",
      description: "Comprehensive cloud security for AWS, Azure, and Google Cloud platforms",
      icon: Cloud,
      benefits: ["Multi-cloud support", "Compliance monitoring", "Access control", "Data protection"]
    },
    {
      title: "Security Analytics Dashboard",
      description: "Real-time security insights with predictive analytics and threat intelligence",
      icon: BarChart3,
      benefits: ["Live monitoring", "Threat intelligence", "Risk scoring", "Compliance reporting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Security Essentials",
      price: "$3,500",
      period: "/month",
      description: "Perfect for small businesses starting their cybersecurity journey",
      features: [
        "AI threat detection",
        "Basic endpoint protection",
        "Email security",
        "5 user licenses",
        "Email support",
        "Basic reporting",
        "24/7 monitoring"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Security Professional",
      price: "$8,500",
      period: "/month",
      description: "Comprehensive security platform for growing businesses",
      features: [
        "Advanced AI detection",
        "Full endpoint protection",
        "Network security",
        "25 user licenses",
        "Priority support",
        "Advanced analytics",
        "Compliance tools",
        "Incident response"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Security Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Enterprise-grade security platform for large organizations",
      features: [
        "Custom AI models",
        "Unlimited protection",
        "Unlimited users",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      title: "Fraud Prevention",
      description: "AI-powered fraud detection and prevention for banking and financial transactions",
      roi: "90% reduction in fraud losses",
      icon: Shield
    },
    {
      industry: "Healthcare",
      title: "Patient Data Protection",
      description: "HIPAA-compliant security for patient records and medical systems",
      roi: "100% compliance achievement",
      icon: Users
    },
    {
      industry: "E-commerce",
      title: "Payment Security",
      description: "PCI DSS compliant payment processing with AI fraud detection",
      roi: "95% reduction in chargebacks",
      icon: Lock
    },
    {
      industry: "Manufacturing",
      title: "Industrial Security",
      description: "OT/IT security for manufacturing systems and industrial control",
      roi: "Zero production downtime",
      icon: Server
    }
  ];

  const benefits = [
    {
      title: "99.9% Detection",
      description: "AI-powered threat detection with industry-leading accuracy",
      icon: Eye,
      metric: "99.9%"
    },
    {
      title: "Real-time Response",
      description: "Instant threat neutralization within seconds",
      icon: Zap,
      metric: "<5s"
    },
    {
      title: "24/7 Protection",
      description: "Continuous monitoring and protection around the clock",
      icon: Clock,
      metric: "24/7"
    },
    {
      title: "Zero False Positives",
      description: "Advanced AI reduces false alarms by 95%",
      icon: CheckCircle,
      metric: "95%"
    }
  ];

  const securityFeatures = [
    {
      title: "Behavioral Analysis",
      description: "AI learns normal user behavior and detects anomalies in real-time",
      icon: Brain
    },
    {
      title: "Threat Intelligence",
      description: "Global threat intelligence network with real-time updates",
      icon: Globe
    },
    {
      title: "Automated Response",
      description: "Instant threat containment and neutralization",
      icon: Zap
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance for GDPR, HIPAA, PCI DSS, and SOC 2",
      icon: CheckCircle
    }
  ];

  const complianceStandards = [
    "GDPR Compliance",
    "HIPAA Compliance", 
    "PCI DSS Level 1",
    "SOC 2 Type II",
    "ISO 27001",
    "NIST Cybersecurity Framework",
    "FedRAMP",
    "CCPA Compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI-Powered Cybersecurity Platform - Zion Tech Group" 
        description="Protect your business with AI-powered cybersecurity that detects threats in real-time with 99.9% accuracy. 24/7 protection with automated response."
        keywords="AI cybersecurity, threat detection, endpoint protection, network security, cloud security, compliance, SOC 2, HIPAA"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity-platform"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-zion-cyan mr-3 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              AI-Powered Cybersecurity Platform
            </h1>
          </div>
          <p className="text-2xl text-zion-cyan mb-4 font-semibold">
            Protect Your Business with Intelligent Security
            </p>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Experience next-generation cybersecurity powered by artificial intelligence. Our platform 
            detects threats in real-time with 99.9% accuracy, responds automatically within seconds, 
            and provides 24/7 protection for your digital assets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Security Assessment
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-sm">✓ 30-day free trial • ✓ No setup fees • ✓ Instant protection • ✓ 24/7 security monitoring</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Unmatched Security Performance
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform delivers industry-leading protection with 
              measurable results that keep your business secure.
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

      {/* Security Features */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive cybersecurity features designed to protect your business from 
              evolving threats with intelligent automation and real-time response.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zion-slate">
                  {feature.description}
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
              Comprehensive Security Platform
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              End-to-end cybersecurity protection that covers all aspects of your digital 
              infrastructure with AI-powered intelligence and automation.
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

      {/* Compliance Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry Compliance & Standards
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Built-in compliance for major industry standards and regulations, ensuring 
              your business meets all security and privacy requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <p className="text-sm font-semibold text-zion-blue-dark">
                  {standard}
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
              Cybersecurity Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the security plan that fits your business needs. All plans include our 
              core AI protection and 30-day free trial.
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
              Need custom security solutions? Contact our cybersecurity experts for tailored pricing.
            </p>
            <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center justify-center mx-auto">
              Contact Security Experts
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
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored cybersecurity solutions designed for the unique requirements and 
              compliance needs of different industries.
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
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of businesses that trust our AI-powered cybersecurity platform 
            to protect their digital assets. Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-all">
              Security Assessment
            </button>
          </div>
          <div className="text-zion-slate-light text-sm">
            <p>✓ No setup fees • ✓ 30-day free trial • ✓ Instant protection • ✓ 24/7 security monitoring</p>
          </div>
        </div>
      </section>
    </div>
  );
}