import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Workflow, 
  Zap, 
  Brain, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Clock,
  CheckCircle,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const services = [
    {
      title: "Intelligent Process Automation",
      description: "AI-powered workflow automation that learns from your business processes and continuously optimizes operations.",
      icon: Workflow,
      features: ["Process mining & analysis", "Intelligent routing", "Predictive task assignment", "Performance optimization"],
      price: "$2,500/month",
      marketPrice: "$4,000/month",
      savings: "38% savings"
    },
    {
      title: "Smart Document Processing",
      description: "Automated document classification, extraction, and processing with 99.9% accuracy using advanced AI models.",
      icon: Brain,
      features: ["OCR & text extraction", "Intelligent classification", "Data validation", "Multi-format support"],
      price: "$1,800/month",
      marketPrice: "$3,200/month",
      savings: "44% savings"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Real-time predictive analytics that forecast business outcomes and recommend optimal actions.",
      icon: TrendingUp,
      features: ["Real-time forecasting", "Anomaly detection", "Trend analysis", "Actionable insights"],
      price: "$3,200/month",
      marketPrice: "$5,500/month",
      savings: "42% savings"
    },
    {
      title: "Intelligent Customer Service",
      description: "AI-powered customer service automation with natural language processing and sentiment analysis.",
      icon: Users,
      features: ["24/7 availability", "Multi-language support", "Sentiment analysis", "Escalation routing"],
      price: "$2,100/month",
      marketPrice: "$3,800/month",
      savings: "45% savings"
    },
    {
      title: "Supply Chain Optimization",
      description: "AI-driven supply chain management with demand forecasting, inventory optimization, and route planning.",
      icon: Globe,
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Risk assessment"],
      price: "$2,800/month",
      marketPrice: "$4,500/month",
      savings: "38% savings"
    },
    {
      title: "Financial Process Automation",
      description: "Automated financial workflows including invoice processing, expense management, and compliance monitoring.",
      icon: BarChart3,
      features: ["Invoice automation", "Expense tracking", "Compliance monitoring", "Real-time reporting"],
      price: "$2,300/month",
      marketPrice: "$3,900/month",
      savings: "41% savings"
    }
  ];

  const benefits = [
    {
      title: "80% Time Reduction",
      description: "Automate repetitive tasks and focus on strategic initiatives",
      icon: Clock,
      metric: "80%"
    },
    {
      title: "99.9% Accuracy",
      description: "AI-powered validation ensures near-perfect accuracy",
      icon: CheckCircle,
      metric: "99.9%"
    },
    {
      title: "24/7 Operation",
      description: "Continuous operation without human intervention",
      icon: Rocket,
      metric: "24/7"
    },
    {
      title: "60% Cost Savings",
      description: "Significant reduction in operational costs",
      icon: TrendingUp,
      metric: "60%"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Patient care automation, medical billing, and compliance management",
      icon: Building,
      useCases: ["Patient scheduling", "Medical billing", "Compliance monitoring"]
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, and regulatory compliance",
      icon: Building,
      useCases: ["Risk assessment", "Fraud detection", "Regulatory compliance"]
    },
    {
      name: "Manufacturing",
      description: "Production planning, quality control, and supply chain optimization",
      icon: Building,
      useCases: ["Production planning", "Quality control", "Supply chain optimization"]
    },
    {
      name: "Retail",
      description: "Inventory management, customer service, and demand forecasting",
      icon: Building,
      useCases: ["Inventory management", "Customer service", "Demand forecasting"]
    }
  ];

  const features = [
    {
      title: "Machine Learning Integration",
      description: "Advanced ML models that continuously learn and improve from your data",
      icon: Brain
    },
    {
      title: "Real-time Monitoring",
      description: "Live dashboards and alerts for immediate issue detection and resolution",
      icon: Target
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native design that scales with your business growth",
      icon: Cpu
    },
    {
      title: "Custom Workflows",
      description: "Tailored automation workflows designed for your specific business needs",
      icon: Workflow
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business operations with AI-powered workflow automation. Reduce costs by 60%, improve accuracy to 99.9%, and achieve 80% time savings."
        keywords="AI workflow automation, process automation, intelligent automation, business process optimization, AI-powered workflows"
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/80 to-blue-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
              <Workflow className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Workflow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Automation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business operations with intelligent automation that learns, adapts, and scales. 
            Achieve <span className="text-cyan-400 font-semibold">80% time reduction</span> and 
            <span className="text-purple-400 font-semibold"> 60% cost savings</span> with AI-powered workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <div className="text-sm text-gray-400">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI Automation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intelligent process automation to predictive analytics, we provide end-to-end AI workflow solutions 
              that transform your business operations and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform comes with enterprise-grade features designed to handle 
              complex business processes and scale with your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI workflow automation solutions designed for the unique requirements and compliance needs 
              of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-6 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{industry.name}</h3>
                <p className="text-sm text-gray-300 mb-4 text-center">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-cyan-400 flex items-center">
                      <Lightbulb className="w-3 h-3 mr-2" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have transformed their operations with AI-powered workflow automation. 
            Start your free trial today and see the difference intelligent automation can make.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}