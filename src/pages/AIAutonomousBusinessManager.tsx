import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Target,
  Lightbulb,
  Rocket,
  Globe,
  Cpu,
  Database,
  Network,
  Lock
} from 'lucide-react';

const AIAutonomousBusinessManager: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Advanced neural networks analyze data patterns and make strategic business decisions autonomously",
      benefits: ["Real-time market analysis", "Predictive insights", "Risk assessment", "Opportunity identification"]
    },
    {
      icon: Zap,
      title: "Automated Operations",
      description: "Streamline business processes with intelligent automation that learns and improves over time",
      benefits: ["Process optimization", "Resource allocation", "Performance monitoring", "Continuous improvement"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast market trends, customer behavior, and business performance with 99.7% accuracy",
      benefits: ["Market forecasting", "Customer insights", "Revenue prediction", "Trend analysis"]
    },
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-driven threat detection and prevention with adaptive security protocols",
      benefits: ["Threat detection", "Fraud prevention", "Compliance monitoring", "Risk management"]
    }
  ];

  const capabilities = [
    {
      category: "Business Intelligence",
      items: [
        "Real-time dashboard analytics",
        "Custom KPI tracking",
        "Performance benchmarking",
        "Competitive analysis"
      ]
    },
    {
      category: "Process Automation",
      items: [
        "Workflow optimization",
        "Task automation",
        "Resource scheduling",
        "Quality control"
      ]
    },
    {
      category: "Customer Management",
      items: [
        "Customer behavior analysis",
        "Personalized marketing",
        "Support automation",
        "Relationship scoring"
      ]
    },
    {
      category: "Financial Management",
      items: [
        "Budget optimization",
        "Expense tracking",
        "Revenue forecasting",
        "Investment analysis"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "Basic AI decision support",
        "Process automation (up to 10 workflows)",
        "Standard analytics dashboard",
        "Email support",
        "Basic security features"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Ideal for growing businesses with complex operations",
      features: [
        "Advanced AI decision making",
        "Unlimited process automation",
        "Custom analytics & reporting",
        "Priority support",
        "Advanced security & compliance",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large enterprises requiring full autonomy",
      features: [
        "Full autonomous operations",
        "Custom AI model training",
        "Dedicated support team",
        "Advanced security protocols",
        "Custom development",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "The AI Autonomous Business Manager has transformed our operations. We've seen a 40% increase in efficiency and 25% reduction in operational costs.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "Global Manufacturing Co.",
      content: "Implementing this system was seamless. The AI quickly learned our processes and now manages 80% of our daily operations autonomously.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Emily Watson",
      role: "CTO",
      company: "InnovateCorp",
      content: "The predictive analytics capabilities are game-changing. We're making data-driven decisions faster than ever before.",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 quantum-particles">
          <div className="quantum-particle"></div>
          <div className="quantum-particle"></div>
          <div className="quantum-particle"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Business Management
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Autonomous Business Manager
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with the world's most advanced AI-powered autonomous business management system. 
              Make data-driven decisions, automate complex processes, and scale your business like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/20 transition-all duration-300 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.7%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-400">Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Autonomous Operation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
                <div className="text-gray-400">Faster Decisions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI system combines cutting-edge machine learning, natural language processing, and predictive analytics 
              to deliver unprecedented business intelligence and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-400/50">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Business Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From financial planning to customer relationship management, our AI handles every aspect of your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Target className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Choose Your AI Transformation Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs and AI adoption journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/50 shadow-2xl shadow-cyan-500/30' 
                  : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                    : 'border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how forward-thinking companies are transforming their operations with our AI system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/50">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and experience unprecedented business growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/20 transition-all duration-300 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/services/ai-autonomous-systems" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Autonomous Systems</Link></li>
                <li><Link to="/services/quantum-technology" className="text-gray-300 hover:text-cyan-400 transition-colors">Quantum Technology</Link></li>
                <li><Link to="/services/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
                <li><Link to="/services/it-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Infrastructure</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link to="/solutions/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors">Enterprise</Link></li>
                <li><Link to="/solutions/healthcare" className="text-gray-300 hover:text-cyan-400 transition-colors">Healthcare</Link></li>
                <li><Link to="/emerging-tech" className="text-gray-300 hover:text-cyan-400 transition-colors">Emerging Tech</Link></li>
                <li><Link to="/marketplace" className="text-gray-300 hover:text-cyan-400 transition-colors">Marketplace</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/webinars" className="text-gray-300 hover:text-cyan-400 transition-colors">Webinars</Link></li>
                <li><Link to="/white-papers" className="text-gray-300 hover:text-cyan-400 transition-colors">White Papers</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessManager;