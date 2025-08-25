import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Users, 
  Search, 
  Brain, 
  Target, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  FileText,
  Video,
  MessageSquare,
  CheckCircle,
  BarChart3,
  Award
} from 'lucide-react';

export default function AIHRRecruitment() {
  const features = [
    {
      title: "AI-Powered Candidate Screening",
      description: "Intelligent resume parsing and candidate matching using advanced NLP and ML algorithms",
      icon: Search,
      benefits: ["90% faster screening", "Bias-free evaluation", "Skills-based matching", "Cultural fit analysis"]
    },
    {
      title: "Predictive Hiring Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions",
      icon: Brain,
      benefits: ["Success probability scoring", "Retention prediction", "Performance forecasting", "Risk assessment"]
    },
    {
      title: "Automated Interview Scheduling",
      description: "Smart scheduling system that coordinates interviews across multiple stakeholders",
      icon: Clock,
      benefits: ["Automated coordination", "Calendar integration", "Reminder system", "Rescheduling handling"]
    },
    {
      title: "Video Interview Analysis",
      description: "AI-powered video interview assessment with facial expression and sentiment analysis",
      icon: Video,
      benefits: ["Emotional intelligence scoring", "Communication skills assessment", "Cultural fit evaluation", "Bias detection"]
    },
    {
      title: "Talent Pipeline Management",
      description: "Intelligent candidate relationship management with automated follow-ups and engagement",
      icon: Users,
      benefits: ["Automated nurturing", "Engagement scoring", "Pipeline analytics", "Talent rediscovery"]
    },
    {
      title: "Compliance & Diversity Monitoring",
      description: "Ensure fair hiring practices and regulatory compliance with AI-powered monitoring",
      icon: Shield,
      benefits: ["Bias detection", "Compliance reporting", "Diversity analytics", "Audit trails"]
    }
  ];

  const recruitmentStages = [
    {
      stage: "Sourcing & Attraction",
      description: "AI-powered job posting optimization and candidate attraction",
      tools: ["Smart job descriptions", "Targeted advertising", "Passive candidate outreach", "Employer branding"]
    },
    {
      stage: "Screening & Assessment",
      description: "Automated candidate evaluation and skills assessment",
      tools: ["Resume parsing", "Skills testing", "Cultural fit assessment", "Background verification"]
    },
    {
      stage: "Interview & Selection",
      description: "Intelligent interview process with AI-powered insights",
      tools: ["Video interviews", "Structured questions", "Performance scoring", "Decision support"]
    },
    {
      stage: "Onboarding & Retention",
      description: "Automated onboarding and employee retention monitoring",
      tools: ["Onboarding automation", "Performance tracking", "Engagement monitoring", "Retention analytics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses with basic hiring needs",
      features: [
        "Up to 25 job postings/month",
        "Basic candidate screening",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for growing companies with advanced recruitment needs",
      features: [
        "Up to 100 job postings/month",
        "Advanced AI screening",
        "Video interviews",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "API access",
        "Integration support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations requiring enterprise-grade HR solutions",
      features: [
        "Unlimited job postings",
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
      metric: "60%",
      description: "Faster time-to-hire",
      detail: "AI-powered screening and matching"
    },
    {
      metric: "45%",
      description: "Reduction in hiring costs",
      detail: "Automated processes and better matching"
    },
    {
      metric: "3.2x",
      description: "Better candidate quality",
      detail: "AI-powered assessment and prediction"
    },
    {
      metric: "85%",
      description: "Improved retention rates",
      detail: "Better cultural fit and performance prediction"
    }
  ];

  const industries = [
    {
      name: "Technology",
      description: "AI-powered technical assessment and skills matching",
      icon: Brain,
      benefits: ["Technical skills testing", "Code review automation", "Project portfolio analysis"]
    },
    {
      name: "Healthcare",
      description: "Compliance-focused hiring with credential verification",
      icon: Shield,
      benefits: ["License verification", "Compliance monitoring", "Clinical skills assessment"]
    },
    {
      name: "Finance",
      description: "Risk assessment and regulatory compliance monitoring",
      icon: BarChart3,
      benefits: ["Background screening", "Compliance checks", "Risk assessment"]
    },
    {
      name: "Manufacturing",
      description: "Skills-based hiring with safety compliance focus",
      icon: Award,
      benefits: ["Safety training verification", "Skills assessment", "Performance tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900 to-blue-900">
      <SEO 
        title="AI HR & Recruitment Platform - Zion Tech Group" 
        description="Revolutionize your hiring process with AI-powered recruitment. Faster hiring, better candidates, and improved retention."
        keywords="AI recruitment, HR automation, AI hiring, candidate screening, recruitment software, HR technology"
        canonical="https://ziontechgroup.com/services/ai-hr-recruitment"
      />

      {/* Hero Section with Futuristic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-600/20 to-cyan-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered HR & Recruitment
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI HR & Recruitment
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              Transform Hiring with Intelligent Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize your recruitment process with AI-powered tools that screen candidates, 
            predict success, and automate hiring workflows. Find the best talent faster while 
            reducing bias and improving retention.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-400 text-sm">Faster Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3.2x</div>
              <div className="text-gray-400 text-sm">Better Candidates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
              <div className="text-gray-400 text-sm">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Powered Recruitment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform covers every aspect of the recruitment process, 
              from sourcing to onboarding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Stages Section */}
      <section className="py-20 bg-green-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End Recruitment Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform streamlines every stage of the recruitment process for maximum efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recruitmentStages.map((stage, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stage.stage}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-center">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI recruitment solutions designed for the unique needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-green-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI recruitment platform delivers for businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.metric}</div>
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
              Choose the plan that fits your recruitment needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500/50 shadow-2xl shadow-green-500/25' 
                  : 'border-gray-700/50 hover:border-green-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-105'
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
      <section className="py-20 bg-gradient-to-r from-green-900/50 via-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already revolutionized their hiring process 
            with AI-powered recruitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise pricing? <a href="/contact" className="text-green-400 hover:text-green-300 underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}