import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Scale, 
  FileText, 
  Search, 
  Brain, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  Globe,
  BookOpen,
  CheckCircle,
  BarChart3,
  Zap,
  Target,
  Building,
  Home,
  Lightbulb
} from 'lucide-react';

export default function AILegalTech() {
  const features = [
    {
      title: "AI Contract Analysis",
      description: "Intelligent contract review and analysis using advanced NLP and legal AI",
      icon: FileText,
      benefits: ["90% faster review", "Risk identification", "Compliance checking", "Automated summaries"]
    },
    {
      title: "Legal Research Automation",
      description: "AI-powered legal research that finds relevant cases, statutes, and precedents",
      icon: Search,
      benefits: ["Instant case law search", "Precedent analysis", "Citation tracking", "Research summaries"]
    },
    {
      title: "Document Generation",
      description: "Automated legal document creation with customizable templates and AI assistance",
      icon: BookOpen,
      benefits: ["Template library", "Custom clauses", "Legal compliance", "Version control"]
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time regulatory compliance monitoring and automated reporting",
      icon: Shield,
      benefits: ["Regulatory updates", "Compliance alerts", "Automated reporting", "Risk assessment"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered case outcome prediction and litigation risk assessment",
      icon: Brain,
      benefits: ["Case outcome prediction", "Risk scoring", "Settlement recommendations", "Cost forecasting"]
    },
    {
      title: "Client Portal & Communication",
      description: "Secure client communication and document sharing platform",
      icon: Users,
      benefits: ["Secure messaging", "Document sharing", "Progress tracking", "Client collaboration"]
    }
  ];

  const practiceAreas = [
    {
      name: "Corporate Law",
      description: "AI-powered contract management and corporate compliance",
      icon: Building,
      tools: ["Contract analysis", "M&A due diligence", "Corporate governance", "Regulatory compliance"]
    },
    {
      name: "Litigation",
      description: "AI-assisted case preparation and outcome prediction",
      icon: Scale,
      tools: ["Case research", "Evidence analysis", "Outcome prediction", "Cost forecasting"]
    },
    {
      name: "Real Estate",
      description: "Automated real estate transaction management and compliance",
      icon: Home,
      tools: ["Title research", "Contract review", "Compliance checking", "Transaction management"]
    },
    {
      name: "Intellectual Property",
      description: "AI-powered IP research and patent analysis",
      icon: Lightbulb,
      tools: ["Patent search", "Trademark analysis", "IP monitoring", "Infringement detection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Solo Practitioner",
      price: "$199/month",
      description: "Perfect for individual lawyers and small practices",
      features: [
        "Up to 100 documents/month",
        "Basic contract analysis",
        "Legal research tools",
        "Email support",
        "Standard templates",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Law Firm",
      price: "$599/month",
      description: "Ideal for growing law firms with multiple attorneys",
      features: [
        "Up to 1,000 documents/month",
        "Advanced AI analysis",
        "Team collaboration",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "API access",
        "Integration support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,599/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited documents",
        "Full AI suite",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced reporting",
        "On-premise option",
        "SLA guarantees",
        "Compliance consulting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: "90%",
      description: "Faster document review",
      detail: "AI-powered analysis and automation"
    },
    {
      metric: "75%",
      description: "Reduction in research time",
      detail: "Intelligent legal research tools"
    },
    {
      metric: "60%",
      description: "Lower operational costs",
      detail: "Automated workflows and processes"
    },
    {
      metric: "95%",
      description: "Compliance accuracy",
      detail: "AI-powered compliance monitoring"
    }
  ];

  const useCases = [
    {
      scenario: "Contract Review",
      description: "Automated contract analysis with risk identification and compliance checking",
      benefits: ["Faster review process", "Risk mitigation", "Compliance assurance", "Cost savings"]
    },
    {
      scenario: "Legal Research",
      description: "AI-powered case law research with precedent analysis and citation tracking",
      benefits: ["Instant results", "Comprehensive coverage", "Precedent analysis", "Time savings"]
    },
    {
      scenario: "Compliance Monitoring",
      description: "Real-time regulatory updates and automated compliance reporting",
      benefits: ["Proactive compliance", "Risk reduction", "Automated reporting", "Regulatory awareness"]
    },
    {
      scenario: "Document Generation",
      description: "Automated legal document creation with customizable templates",
      benefits: ["Consistent quality", "Time savings", "Template library", "Customization options"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900">
      <SEO 
        title="AI Legal Tech Platform - Zion Tech Group" 
        description="Revolutionize your legal practice with AI-powered tools. Faster research, automated analysis, and intelligent compliance monitoring."
        keywords="AI legal tech, legal automation, contract analysis, legal research, compliance monitoring, legal software"
        canonical="https://ziontechgroup.com/services/ai-legal-tech"
      />

      {/* Hero Section with Futuristic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-600/20 to-blue-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-indigo-400 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Legal Tech
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              Transform Legal Practice with Intelligent Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize your legal practice with AI-powered tools that automate research, 
            analyze contracts, and ensure compliance. Work smarter, not harder, with 
            intelligent legal technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">90%</div>
              <div className="text-gray-400 text-sm">Faster Review</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
              <div className="text-gray-400 text-sm">Research Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-400 text-sm">Compliance Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Powered Legal Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform covers every aspect of legal practice, 
              from research to compliance monitoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-indigo-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Practice Area Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI tools designed for different legal practice areas and specialties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI legal tech platform solves real challenges in legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.scenario}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-indigo-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI legal tech platform delivers for law firms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-indigo-400 mb-2">{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.description}</div>
                <div className="text-gray-400 text-sm">{metric.detail}</div>
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
              Choose the plan that fits your legal practice needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/25' 
                  : 'border-gray-700/50 hover:border-indigo-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of legal professionals who have already revolutionized their practice 
            with AI-powered legal technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise pricing? <a href="/contact" className="text-indigo-400 hover:text-indigo-300 underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}