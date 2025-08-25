import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Cpu,
  Database,
  PieChart,
  LineChart,
  Activity,
  CheckCircle
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting for sales, market trends, and customer behavior",
      icon: TrendingUp,
      benefits: ["30% improvement in forecast accuracy", "Real-time trend analysis", "Automated insights generation"]
    },
    {
      title: "Real-time Dashboards",
      description: "Interactive business intelligence dashboards with live data streaming",
      icon: BarChart3,
      benefits: ["Live data updates", "Customizable widgets", "Mobile-responsive design"]
    },
    {
      title: "Natural Language Querying",
      description: "Ask business questions in plain English and get instant answers",
      icon: Brain,
      benefits: ["No SQL knowledge required", "Voice command support", "Context-aware responses"]
    },
    {
      title: "Automated Reporting",
      description: "Intelligent report generation with AI-powered insights and recommendations",
      icon: PieChart,
      benefits: ["Scheduled delivery", "Custom templates", "Actionable insights"]
    },
    {
      title: "Data Integration Hub",
      description: "Connect all your data sources into one unified analytics platform",
      icon: Database,
      benefits: ["100+ data connectors", "Real-time sync", "Data quality monitoring"]
    },
    {
      title: "Advanced Visualizations",
      description: "Interactive charts, graphs, and maps for better data understanding",
      icon: LineChart,
      benefits: ["3D visualizations", "Interactive filters", "Export capabilities"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses getting started with BI",
      features: [
        "Up to 5 users",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "Data connectors (10)",
        "Monthly data refresh"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for growing companies with advanced analytics needs",
      features: [
        "Up to 25 users",
        "Advanced dashboards",
        "Predictive analytics",
        "Priority support",
        "Data connectors (50)",
        "Real-time data sync",
        "Custom branding",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations requiring enterprise-grade BI solutions",
      features: [
        "Unlimited users",
        "Custom dashboards",
        "Advanced AI models",
        "24/7 dedicated support",
        "All data connectors",
        "Real-time streaming",
        "White-label solution",
        "Custom integrations",
        "On-premise option",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Retail & E-commerce",
      description: "Customer behavior analysis, inventory optimization, and sales forecasting",
      metrics: ["25% increase in conversion rates", "30% reduction in inventory costs", "40% improvement in customer retention"]
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, resource optimization, and operational efficiency",
      metrics: ["20% improvement in patient outcomes", "35% reduction in wait times", "50% increase in resource utilization"]
    },
    {
      industry: "Financial Services",
      description: "Risk assessment, fraud detection, and portfolio optimization",
      metrics: ["90% fraud detection accuracy", "25% reduction in risk exposure", "40% improvement in portfolio returns"]
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      metrics: ["30% reduction in downtime", "25% improvement in quality", "40% reduction in supply chain costs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="AI Business Intelligence Platform - Zion Tech Group" 
        description="Transform your business with AI-powered business intelligence. Get real-time insights, predictive analytics, and automated reporting."
        keywords="AI business intelligence, predictive analytics, business analytics, data visualization, real-time dashboards"
        canonical="https://ziontechgroup.com/services/ai-business-intelligence"
      />

      {/* Hero Section with Futuristic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Business Intelligence
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Business Intelligence
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              Transform Data into Actionable Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leverage the power of artificial intelligence to unlock hidden insights in your data. 
            Our AI BI platform provides real-time analytics, predictive modeling, and automated 
            reporting that drives better business decisions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-400 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-400 text-sm">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features for Modern Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design 
              to deliver insights that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
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
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/25' 
                  : 'border-gray-700/50 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries leverage our AI BI platform to achieve remarkable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already revolutionized their data analytics 
            with our AI-powered platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise pricing? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}