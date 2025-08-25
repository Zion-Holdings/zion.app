import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Workflow, 
  BarChart3, 
  Users, 
  Shield, 
  Globe, 
  TrendingUp, 
  Cpu, 
  Target,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertTriangle,
  FileText,
  Building
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your existing workflows for optimization",
      icon: Brain,
      benefits: ["Process visibility", "Bottleneck identification", "Automation opportunities"]
    },
    {
      title: "Smart Workflow Design",
      description: "AI-powered workflow builder with drag-and-drop interface and intelligent suggestions",
      icon: Workflow,
      benefits: ["Visual workflow builder", "AI suggestions", "Best practice templates"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning algorithms predict workflow performance and suggest improvements",
      icon: BarChart3,
      benefits: ["Performance forecasting", "Optimization insights", "Risk prediction"]
    },
    {
      title: "Automated Decision Making",
      description: "AI makes intelligent decisions based on business rules and historical data",
      icon: Cpu,
      benefits: ["Rule-based automation", "Data-driven decisions", "Consistent outcomes"]
    },
    {
      title: "Real-time Monitoring",
      description: "Live dashboard with real-time workflow status and performance metrics",
      icon: Monitor,
      benefits: ["Live status updates", "Performance tracking", "Instant alerts"]
    },
    {
      title: "Integration Hub",
      description: "Seamlessly connect with 500+ business applications and systems",
      icon: Globe,
      benefits: ["Wide compatibility", "Easy setup", "Unified workflow"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 299,
      period: "month",
      description: "Perfect for small teams getting started with workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI suggestions",
        "5 integrations",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: 799,
      period: "month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI insights",
        "25 integrations",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 1999,
      period: "month",
      description: "For large organizations requiring enterprise-grade automation",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "Unlimited integrations",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security",
        "Multi-tenant support",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      examples: [
        "Patient appointment scheduling",
        "Medical record processing",
        "Insurance claim automation",
        "Prescription management"
      ],
      roi: "40-60% efficiency improvement"
    },
    {
      industry: "Finance",
      examples: [
        "Loan application processing",
        "KYC verification workflows",
        "Fraud detection automation",
        "Compliance reporting"
      ],
      roi: "50-70% cost reduction"
    },
    {
      industry: "Manufacturing",
      examples: [
        "Quality control processes",
        "Supply chain management",
        "Maintenance scheduling",
        "Inventory optimization"
      ],
      roi: "30-50% productivity increase"
    },
    {
      industry: "Retail",
      examples: [
        "Order fulfillment",
        "Customer service routing",
        "Inventory management",
        "Marketing campaign automation"
      ],
      roi: "35-55% operational efficiency"
    }
  ];

  const benefits = [
    {
      metric: "80%",
      description: "Faster process completion",
      icon: Zap
    },
    {
      metric: "65%",
      description: "Reduced manual errors",
      icon: CheckCircle
    },
    {
      metric: "45%",
      description: "Cost savings",
      icon: DollarSign
    },
    {
      metric: "90%",
      description: "Improved accuracy",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business processes with AI-powered workflow automation. Reduce costs, improve efficiency, and eliminate manual errors with intelligent process management."
        keywords="AI workflow automation, business process automation, workflow optimization, intelligent automation, process management"
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan mr-4">
              <span className="text-zion-cyan font-semibold">AI-Powered</span>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
              <span className="text-zion-purple font-semibold">Workflow Automation</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Workflow Automation
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Your Business Processes
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Leverage artificial intelligence to automate complex workflows, eliminate manual processes, 
            and achieve unprecedented efficiency gains across your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transform Your Business with AI Automation
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience dramatic improvements in efficiency, accuracy, and cost savings with our 
              AI-powered workflow automation platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
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
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with intuitive design to deliver 
              the most advanced workflow automation solution available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
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
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                plan.popular 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-zion-slate mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-zion-cyan">
                    ${plan.price}
                    <span className="text-lg text-zion-slate font-normal">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI workflow automation platform is designed to meet the unique needs of various industries, 
              delivering measurable ROI and operational improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-3 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2 mb-4">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-zion-slate flex items-start">
                      <ArrowRight className="w-3 h-3 text-zion-cyan mr-2 mt-1 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-sm font-semibold text-zion-cyan">
                    {useCase.roi}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI workflow automation platform stands out from the competition with advanced features, 
              superior performance, and exceptional support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-light rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Advanced AI Technology
                  </h3>
                  <p className="text-zion-slate text-sm">
                    State-of-the-art machine learning algorithms that continuously improve and adapt to your business needs.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Bank-level security with SOC 2 compliance, encryption, and advanced access controls.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    24/7 Expert Support
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Dedicated support team with deep expertise in workflow automation and AI technology.
                  </p>
                </div>
              </div>
            </div>
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
            Join thousands of businesses that have transformed their operations with AI-powered workflow automation. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}