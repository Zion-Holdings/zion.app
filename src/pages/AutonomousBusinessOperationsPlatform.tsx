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
  Lock,
  Settings,
  Workflow,
  Monitor
} from 'lucide-react';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Decision Making",
      description: "AI systems that make business decisions independently based on real-time data and predictive analytics",
      benefits: ["Real-time analysis", "Predictive insights", "Risk assessment", "Opportunity identification"]
    },
    {
      icon: Workflow,
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI that learns and optimizes workflows continuously",
      benefits: ["Process optimization", "Workflow automation", "Performance monitoring", "Continuous improvement"]
    },
    {
      icon: Monitor,
      title: "Real-time Operations Monitoring",
      description: "24/7 monitoring of all business operations with instant alerts and automated responses",
      benefits: ["Live monitoring", "Instant alerts", "Automated responses", "Performance tracking"]
    },
    {
      icon: Settings,
      title: "Self-Optimizing Systems",
      description: "Systems that automatically adjust and optimize themselves based on performance data and business goals",
      benefits: ["Self-tuning", "Performance optimization", "Goal alignment", "Adaptive learning"]
    }
  ];

  const capabilities = [
    {
      category: "Business Operations",
      items: [
        "Financial management",
        "Supply chain optimization",
        "Customer relationship management",
        "Human resources automation"
      ]
    },
    {
      category: "Process Management",
      items: [
        "Workflow automation",
        "Process optimization",
        "Quality control",
        "Compliance monitoring"
      ]
    },
    {
      category: "Data Analytics",
      items: [
        "Real-time analytics",
        "Predictive modeling",
        "Business intelligence",
        "Performance metrics"
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision",
        "Predictive analytics"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Operations Starter",
      price: "$2,999",
      period: "/month",
      description: "Basic autonomous operations for small businesses",
      features: [
        "Basic process automation",
        "Standard monitoring",
        "Email support",
        "Basic analytics",
        "Up to 10 workflows"
      ],
      popular: false
    },
    {
      name: "Operations Professional",
      price: "$6,999",
      period: "/month",
      description: "Advanced autonomous operations for growing businesses",
      features: [
        "Advanced process automation",
        "Real-time monitoring",
        "Priority support",
        "Advanced analytics",
        "Unlimited workflows",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Operations Enterprise",
      price: "$14,999",
      period: "/month",
      description: "Full autonomous operations platform for large enterprises",
      features: [
        "Complete autonomous operations",
        "Custom AI models",
        "Dedicated support team",
        "White-label solutions",
        "Custom development",
        "SLA guarantees",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Operations Director",
      role: "Chief Operations Officer",
      company: "Global Manufacturing Co.",
      content: "The autonomous operations platform has transformed our business. We've achieved 60% efficiency gains and 24/7 operations.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Sarah Operations",
      role: "VP of Operations",
      company: "Tech Solutions Inc.",
      content: "The platform's autonomous decision-making capabilities have revolutionized how we manage our operations.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Operations",
      role: "Operations Manager",
      company: "Innovation Corp",
      content: "We've seen unprecedented improvements in efficiency and cost reduction with this platform.",
      rating: 5,
      avatar: "👨‍💻"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/50 text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Autonomous Operations Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Business Operations Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with our revolutionary autonomous platform. 
              Let AI manage your business 24/7 with intelligent automation and decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/20 transition-all duration-300 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-gray-400">Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Operations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">Automation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-400">Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with intelligent automation to deliver 
              unprecedented business operations capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-green-500/20 border border-green-400/50">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive Operations Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From financial management to supply chain optimization, our platform handles every aspect of business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-400 mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Target className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Choose Your Autonomous Operations Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business operations and automation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-green-400/50 shadow-2xl shadow-green-500/30' 
                  : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-400 hover:to-cyan-400'
                    : 'border border-green-400/50 text-green-400 hover:bg-green-400/20'
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Trusted by Operations Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how forward-thinking companies are transforming their operations with our autonomous platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-green-400">{testimonial.role}</p>
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
          <div className="p-12 rounded-3xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-400/50">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Ready for Autonomous Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous revolution and experience unprecedented business efficiency and scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/20 transition-all duration-300 flex items-center">
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
              <h4 className="text-lg font-semibold text-green-400 mb-4">Operations Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/ai-autonomous-business-manager" className="text-gray-300 hover:text-green-400 transition-colors">AI Business Manager</Link></li>
                <li><Link to="/ai-autonomous-business-manager-2029" className="text-gray-300 hover:text-green-400 transition-colors">AI Business Manager 2029</Link></li>
                <li><Link to="/quantum-neural-network-platform" className="text-gray-300 hover:text-green-400 transition-colors">Quantum Neural Network Platform</Link></li>
                <li><Link to="/services/ai-autonomous-systems" className="text-gray-300 hover:text-green-400 transition-colors">AI Autonomous Systems</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link to="/solutions/enterprise" className="text-gray-300 hover:text-green-400 transition-colors">Enterprise</Link></li>
                <li><Link to="/solutions/healthcare" className="text-gray-300 hover:text-green-400 transition-colors">Healthcare</Link></li>
                <li><Link to="/marketplace" className="text-gray-300 hover:text-green-400 transition-colors">Marketplace</Link></li>
                <li><Link to="/emerging-tech" className="text-gray-300 hover:text-green-400 transition-colors">Emerging Tech</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-green-400 transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-green-400 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-green-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/webinars" className="text-gray-300 hover:text-green-400 transition-colors">Webinars</Link></li>
                <li><Link to="/white-papers" className="text-gray-300 hover:text-green-400 transition-colors">White Papers</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;