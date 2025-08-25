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
  Atom,
  Infinity
} from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Neural Networks",
      description: "Advanced neural networks powered by quantum computing for unprecedented processing capabilities",
      benefits: ["Quantum superposition", "Entanglement processing", "Exponential speedup", "Quantum memory"]
    },
    {
      icon: Atom,
      title: "Quantum Processing Units",
      description: "State-of-the-art quantum processors designed for neural network operations",
      benefits: ["Qubit optimization", "Quantum coherence", "Error correction", "Scalable architecture"]
    },
    {
      icon: Cpu,
      title: "Hybrid Classical-Quantum",
      description: "Seamless integration of classical and quantum computing for optimal performance",
      benefits: ["Classical-quantum bridge", "Hybrid algorithms", "Optimized workflows", "Performance enhancement"]
    },
    {
      icon: Infinity,
      title: "Infinite Scalability",
      description: "Platform designed to scale from small quantum systems to enterprise-level deployments",
      benefits: ["Modular architecture", "Cloud integration", "Multi-tenant support", "Global deployment"]
    }
  ];

  const capabilities = [
    {
      category: "Quantum Computing",
      items: [
        "Qubit management",
        "Quantum error correction",
        "Quantum memory systems",
        "Quantum algorithms"
      ]
    },
    {
      category: "Neural Networks",
      items: [
        "Deep learning models",
        "Reinforcement learning",
        "Transfer learning",
        "Neural architecture search"
      ]
    },
    {
      category: "Machine Learning",
      items: [
        "Supervised learning",
        "Unsupervised learning",
        "Semi-supervised learning",
        "Active learning"
      ]
    },
    {
      category: "AI Applications",
      items: [
        "Natural language processing",
        "Computer vision",
        "Predictive analytics",
        "Autonomous systems"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$3,999",
      period: "/month",
      description: "Entry-level quantum neural network capabilities for research and development",
      features: [
        "Basic quantum processing",
        "Standard neural networks",
        "Cloud access",
        "Email support",
        "Basic quantum algorithms"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$7,999",
      period: "/month",
      description: "Advanced quantum capabilities for production environments",
      features: [
        "Advanced quantum processing",
        "Custom neural networks",
        "Hybrid algorithms",
        "Priority support",
        "API access",
        "Custom integrations",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$15,999",
      period: "/month",
      description: "Full quantum platform with dedicated resources and custom development",
      features: [
        "Full quantum platform access",
        "Custom quantum algorithms",
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
      name: "Dr. Quantum Chen",
      role: "Chief Quantum Officer",
      company: "QuantumTech Labs",
      content: "The Quantum Neural Network Platform has revolutionized our research capabilities. We're achieving results that were impossible with classical computing alone.",
      rating: 5,
      avatar: "👨‍🔬"
    },
    {
      name: "Dr. Sarah Quantum",
      role: "Research Director",
      company: "Advanced AI Institute",
      content: "The hybrid classical-quantum approach gives us the best of both worlds. We're seeing 100x improvements in certain neural network operations.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      name: "Michael Quantum",
      role: "CTO",
      company: "Quantum Solutions Inc.",
      content: "This platform has transformed how we approach AI development. The quantum capabilities are truly game-changing.",
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Quantum AI Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with our revolutionary quantum neural network platform. 
              Combine the power of quantum computing with advanced neural networks for unprecedented AI capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/20 transition-all duration-300 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100x</div>
                <div className="text-gray-400">Speed Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                <div className="text-gray-400">Possibilities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400">Quantum Processing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-400">Quantum Native</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced neural networks 
              to deliver unprecedented AI processing capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-400/50">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive AI Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum computing to neural networks, our platform handles every aspect of AI development and deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-400 mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Target className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Choose Your Quantum AI Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your quantum AI needs and research requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-400/50 shadow-2xl shadow-blue-500/30' 
                  : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400'
                    : 'border border-blue-400/50 text-blue-400 hover:bg-blue-400/20'
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Trusted by Quantum Researchers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading researchers and organizations are advancing AI with our quantum platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400">{testimonial.role}</p>
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
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/50">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready for Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and experience the future of artificial intelligence today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/20 transition-all duration-300 flex items-center">
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
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Quantum Technology</h4>
              <ul className="space-y-2">
                <li><Link to="/services/quantum-technology" className="text-gray-300 hover:text-blue-400 transition-colors">Quantum Technology</Link></li>
                <li><Link to="/services/ai-autonomous-systems" className="text-gray-300 hover:text-blue-400 transition-colors">AI Autonomous Systems</Link></li>
                <li><Link to="/ai-autonomous-business-manager" className="text-gray-300 hover:text-blue-400 transition-colors">AI Business Manager</Link></li>
                <li><Link to="/emerging-tech" className="text-gray-300 hover:text-blue-400 transition-colors">Emerging Tech</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link to="/solutions/enterprise" className="text-gray-300 hover:text-blue-400 transition-colors">Enterprise</Link></li>
                <li><Link to="/solutions/healthcare" className="text-gray-300 hover:text-blue-400 transition-colors">Healthcare</Link></li>
                <li><Link to="/marketplace" className="text-gray-300 hover:text-blue-400 transition-colors">Marketplace</Link></li>
                <li><Link to="/ai-consciousness-evolution-2029" className="text-gray-300 hover:text-blue-400 transition-colors">Consciousness Evolution</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/webinars" className="text-gray-300 hover:text-blue-400 transition-colors">Webinars</Link></li>
                <li><Link to="/white-papers" className="text-gray-300 hover:text-blue-400 transition-colors">White Papers</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetworkPlatform;