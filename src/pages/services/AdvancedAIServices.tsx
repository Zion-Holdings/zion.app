import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Bot, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  BarChart3,
  Target,
  Award,
  Lock,
  Eye,
  MessageSquare,
  FileText,
  Video,
  Image,
  Code,
  Database,
  Network
} from 'lucide-react';

export default function AdvancedAIServices() {
  const aiServices = [
    {
      title: "AI Autonomous Agents",
      description: "Intelligent autonomous agents that can perform complex tasks, make decisions, and learn from interactions without human intervention.",
      icon: Bot,
      price: "$2,500",
      pricingModel: "monthly",
      features: [
        "Multi-agent coordination systems",
        "Autonomous decision making",
        "Continuous learning capabilities",
        "Natural language understanding",
        "Task automation and optimization",
        "Real-time adaptation"
      ],
      benefits: [
        "Reduce operational costs by 40-60%",
        "24/7 autonomous operation",
        "Scalable AI workforce",
        "Improved efficiency and accuracy",
        "Reduced human error",
        "Faster response times"
      ],
      marketPrice: "$2,500 - $15,000/month",
      roi: "300-500% within 12 months",
      innovationLevel: "Cutting-edge autonomous AI technology"
    },
    {
      title: "AI-Powered Business Intelligence",
      description: "Advanced business intelligence platform that uses AI to analyze data, predict trends, and provide actionable insights for strategic decision-making.",
      icon: BarChart3,
      price: "$1,800",
      pricingModel: "monthly",
      features: [
        "Predictive analytics engine",
        "Real-time data processing",
        "Natural language querying",
        "Automated reporting",
        "Trend forecasting",
        "Custom dashboard creation"
      ],
      benefits: [
        "Improve decision accuracy by 45%",
        "Reduce analysis time by 70%",
        "Identify hidden opportunities",
        "Predict market trends",
        "Optimize resource allocation",
        "Competitive advantage"
      ],
      marketPrice: "$1,800 - $8,000/month",
      roi: "250-400% within 9 months",
      innovationLevel: "Advanced AI-driven business intelligence"
    },
    {
      title: "AI Content Generation & Optimization",
      description: "Comprehensive AI platform for creating, optimizing, and distributing high-quality content across multiple channels with SEO optimization.",
      icon: FileText,
      price: "$899",
      pricingModel: "monthly",
      features: [
        "Multi-format content creation",
        "SEO optimization with AI",
        "Content performance analytics",
        "Brand voice consistency",
        "Multi-language support",
        "Automated distribution"
      ],
      benefits: [
        "Increase content production by 500%",
        "Improve SEO rankings by 60%",
        "Reduce content costs by 70%",
        "24/7 content generation",
        "Consistent brand messaging",
        "Multi-channel optimization"
      ],
      marketPrice: "$899 - $3,500/month",
      roi: "400-600% within 6 months",
      innovationLevel: "Revolutionary AI content technology"
    },
    {
      title: "AI-Powered Customer Experience",
      description: "Intelligent customer experience platform that personalizes interactions, predicts customer needs, and optimizes engagement across all touchpoints.",
      icon: Users,
      price: "$1,200",
      pricingModel: "monthly",
      features: [
        "Customer behavior prediction",
        "Personalized recommendations",
        "Sentiment analysis",
        "Automated customer support",
        "Customer journey optimization",
        "Real-time personalization"
      ],
      benefits: [
        "Increase customer satisfaction by 35%",
        "Improve conversion rates by 45%",
        "Reduce customer churn by 30%",
        "Personalized customer experiences",
        "Automated customer service",
        "Better customer insights"
      ],
      marketPrice: "$1,200 - $5,000/month",
      roi: "300-450% within 12 months",
      innovationLevel: "Advanced AI customer experience technology"
    },
    {
      title: "AI Security & Threat Detection",
      description: "Next-generation AI-powered security platform that detects, prevents, and responds to cyber threats in real-time using machine learning.",
      icon: Shield,
      price: "$3,200",
      pricingModel: "monthly",
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Automated incident response",
        "Threat intelligence",
        "Zero-day attack prevention",
        "Compliance automation"
      ],
      benefits: [
        "Reduce security incidents by 80%",
        "Improve threat detection by 90%",
        "Automated security response",
        "24/7 security monitoring",
        "Compliance automation",
        "Cost-effective security"
      ],
      marketPrice: "$3,200 - $12,000/month",
      roi: "400-700% within 18 months",
      innovationLevel: "Revolutionary AI security technology"
    },
    {
      title: "AI-Powered Process Automation",
      description: "Intelligent process automation platform that uses AI to identify, optimize, and automate complex business processes for maximum efficiency.",
      icon: Zap,
      price: "$1,500",
      pricingModel: "monthly",
      features: [
        "Process discovery and mapping",
        "Intelligent automation",
        "Process optimization",
        "Workflow automation",
        "Performance monitoring",
        "Continuous improvement"
      ],
      benefits: [
        "Reduce process costs by 50%",
        "Improve efficiency by 60%",
        "Faster process execution",
        "Reduced manual errors",
        "Scalable automation",
        "Better resource utilization"
      ],
      marketPrice: "$1,500 - $6,000/month",
      roi: "350-500% within 12 months",
      innovationLevel: "Advanced AI process automation"
    }
  ];

  const aiTechnologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition and prediction",
      icon: Brain,
      applications: ["Predictive analytics", "Recommendation systems", "Fraud detection"]
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered language understanding and generation",
      icon: MessageSquare,
      applications: ["Chatbots", "Content creation", "Sentiment analysis"]
    },
    {
      name: "Computer Vision",
      description: "AI-powered image and video analysis",
      icon: Eye,
      applications: ["Quality control", "Security monitoring", "Medical imaging"]
    },
    {
      name: "Deep Learning",
      description: "Neural networks for complex problem solving",
      icon: Network,
      applications: ["Image recognition", "Speech processing", "Autonomous systems"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient care, and medical research",
      icon: Users,
      useCases: ["Medical imaging analysis", "Drug discovery", "Patient monitoring"]
    },
    {
      name: "Finance",
      description: "AI-driven financial analysis, risk management, and trading",
      icon: TrendingUp,
      useCases: ["Fraud detection", "Algorithmic trading", "Credit scoring"]
    },
    {
      name: "Manufacturing",
      description: "AI-powered quality control, predictive maintenance, and optimization",
      icon: Cpu,
      useCases: ["Predictive maintenance", "Quality assurance", "Supply chain optimization"]
    },
    {
      name: "Retail",
      description: "AI-driven customer insights, inventory management, and personalization",
      icon: Globe,
      useCases: ["Customer segmentation", "Demand forecasting", "Personalized marketing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Advanced AI Services - Zion Tech Group" 
        description="Cutting-edge AI services including autonomous agents, business intelligence, content generation, and process automation for enterprise transformation."
        keywords="AI services, autonomous agents, business intelligence, AI content generation, process automation, machine learning"
        canonical="https://ziontechgroup.com/services/advanced-ai-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced AI Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Your Business with Cutting-Edge AI
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Leverage the power of artificial intelligence with our comprehensive suite of advanced AI services 
            designed to drive innovation, efficiency, and competitive advantage across your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore AI Solutions
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule AI Consultation
            </button>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive AI Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From autonomous agents to intelligent process automation, our AI services cover every aspect 
              of modern business transformation and digital innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {service.description}
                </p>
                
                {/* Pricing */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-blue-dark">
                      {service.price}
                    </div>
                    <div className="text-sm text-zion-slate">
                      per {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-purple rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate">Market Price:</span>
                    <span className="text-zion-blue-dark font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zion-slate">ROI:</span>
                    <span className="text-green-600 font-semibold">{service.roi}</span>
                  </div>
                </div>

                {/* Innovation Level */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zion-slate">Innovation Level:</span>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-xs text-yellow-600 font-semibold">
                        {service.innovationLevel.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Advanced AI Services - ${service.title}"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Core AI Technologies
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI services leverage cutting-edge technologies and methodologies to deliver 
              intelligent solutions that drive real business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {tech.name}
                </h3>
                <p className="text-zion-slate mb-4">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.applications.map((app, idx) => (
                    <div key={idx} className="text-sm text-zion-slate">
                      • {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored AI solutions designed for the unique challenges and opportunities 
              of different industries and business sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <div key={idx} className="text-xs text-zion-slate">
                      • {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group for AI Services?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              We combine cutting-edge AI technology with proven expertise to deliver 
              innovative solutions that drive real business transformation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Built from the ground up with AI at the core of every solution
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance for enterprise environments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support from our global team of AI experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Contact our team of AI experts to discuss how our advanced AI services can 
            drive your digital transformation and business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start AI Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule AI Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-zion-blue-dark">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-zion-blue-dark">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-zion-blue-dark">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-zion-blue-dark">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}