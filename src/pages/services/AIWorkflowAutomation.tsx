import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Workflow, 
  Bot, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3,
  Users,
  Cpu,
  Database,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
      title: "Intelligent Process Mapping",
      description: "AI-powered analysis of existing workflows to identify optimization opportunities and automation potential",
      icon: Workflow,
      benefits: ["Process discovery", "Efficiency analysis", "Bottleneck identification", "ROI calculation"]
    },
    {
      title: "Smart Document Processing",
      description: "Advanced OCR and NLP for automated document classification, extraction, and routing",
      icon: Bot,
      benefits: ["Multi-format support", "Accuracy >95%", "Custom extraction rules", "Real-time processing"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models that predict workflow outcomes and suggest proactive interventions",
      icon: TrendingUp,
      benefits: ["Risk assessment", "Performance forecasting", "Anomaly detection", "Trend analysis"]
    },
    {
      title: "Intelligent Routing",
      description: "AI-driven decision making for optimal task assignment and workflow routing",
      icon: Cpu,
      benefits: ["Skill-based routing", "Load balancing", "Priority optimization", "Dynamic adjustment"]
    },
    {
      title: "Real-time Monitoring",
      description: "Live dashboards with AI-powered insights and automated alerting systems",
      icon: BarChart3,
      benefits: ["Live metrics", "Smart alerts", "Performance tracking", "Custom KPIs"]
    },
    {
      title: "Integration Hub",
      description: "Seamless connectivity with 200+ enterprise systems and custom API development",
      icon: Database,
      benefits: ["Pre-built connectors", "Custom APIs", "Webhook support", "Real-time sync"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small teams getting started with workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI processing",
        "5 user licenses",
        "Email support",
        "Standard integrations",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI models",
        "25 user licenses",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Workflow templates",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "/month",
      description: "Full-scale automation platform for large organizations",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "Unlimited users",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      title: "Patient Care Coordination",
      description: "Automated patient intake, appointment scheduling, and follow-up care workflows",
      roi: "40% reduction in administrative overhead",
      icon: Users
    },
    {
      industry: "Finance",
      title: "Loan Processing",
      description: "Intelligent document review, risk assessment, and approval workflows",
      roi: "60% faster loan processing",
      icon: Shield
    },
    {
      industry: "Manufacturing",
      title: "Quality Control",
      description: "Automated inspection workflows with AI-powered defect detection",
      roi: "35% improvement in quality metrics",
      icon: CheckCircle
    },
    {
      industry: "Retail",
      title: "Inventory Management",
      description: "Smart demand forecasting and automated reorder workflows",
      roi: "25% reduction in stockouts",
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      title: "80% Time Savings",
      description: "Automate repetitive tasks and focus on strategic work",
      icon: Clock,
      metric: "80%"
    },
    {
      title: "95% Accuracy",
      description: "AI-powered processing reduces human errors significantly",
      icon: CheckCircle,
      metric: "95%"
    },
    {
      title: "3x Faster",
      description: "Streamlined workflows accelerate business processes",
      icon: Zap,
      metric: "3x"
    },
    {
      title: "24/7 Operation",
      description: "Automated systems work around the clock without breaks",
      icon: Globe,
      metric: "24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business with intelligent workflow automation powered by AI. Reduce manual work by 80% and increase efficiency by 3x."
        keywords="AI workflow automation, business process automation, intelligent automation, workflow optimization, AI-powered workflows"
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-zion-cyan mr-3 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              AI Workflow Automation
            </h1>
          </div>
          <p className="text-2xl text-zion-cyan mb-4 font-semibold">
            Transform Manual Processes into Intelligent Workflows
          </p>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Leverage the power of artificial intelligence to automate complex business processes, 
            reduce manual work by 80%, and increase operational efficiency by 3x. Our AI-powered 
            workflow automation platform adapts and learns from your business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-sm">✓ 14-day free trial • ✓ No credit card required • ✓ Instant setup</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI workflow automation platform delivers measurable results that transform 
              business operations and drive significant ROI.
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

      {/* Features Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive automation capabilities that adapt to your business needs and 
              continuously improve through machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that fits your automation needs. All plans include our 
              core AI capabilities and 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl ${
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
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-zion-slate mb-4">
              Need a custom solution? Contact our enterprise team for tailored pricing.
            </p>
            <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center justify-center mx-auto">
              Contact Enterprise Sales
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how AI workflow automation transforms operations across different industries 
              with proven ROI and measurable results.
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
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have transformed their operations with AI-powered 
            workflow automation. Start your free trial today and see results in 14 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
          <div className="text-zion-slate-light text-sm">
            <p>✓ No setup fees • ✓ 14-day free trial • ✓ Instant access • ✓ 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  );
}