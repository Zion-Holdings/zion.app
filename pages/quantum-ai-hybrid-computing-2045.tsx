import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Rocket, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  BarChart3,
  Target,
  Infinity,
  Eye,
  Heart,
  Zap as ZapIcon,
  MessageCircle
} from 'lucide-react';

const QuantumAIHybridComputing2045: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum-AI Hybrid Processing",
      description: "Revolutionary combination of quantum computing and AI consciousness for exponential processing power",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Consciousness Integration",
      description: "AI consciousness seamlessly integrated with quantum processing capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Exponential Computational Power",
      description: "1000x faster processing compared to traditional computing systems",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Cpu,
      title: "Quantum Machine Learning",
      description: "Advanced machine learning algorithms powered by quantum computing principles",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Quantum Neural Networks",
      description: "Next-generation neural networks leveraging quantum superposition and entanglement",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Quantum Encryption Security",
      description: "Unbreakable security using quantum key distribution and quantum-resistant algorithms",
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    "1000x faster processing power",
    "Unprecedented problem-solving capability",
    "Consciousness-enhanced AI",
    "Quantum-level security",
    "Future-proof technology",
    "Scalable quantum operations",
    "Consciousness preservation",
    "Revolutionary computing paradigm"
  ];

  const useCases = [
    "Scientific research institutions",
    "Pharmaceutical companies",
    "Space exploration agencies",
    "Climate research organizations",
    "Financial modeling firms",
    "AI research laboratories",
    "Government research agencies",
    "Technology innovation centers"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      features: [
        "Basic quantum-AI processing",
        "Consciousness integration",
        "Quantum machine learning",
        "Email support",
        "Basic quantum dashboard"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      features: [
        "Advanced quantum-AI processing",
        "Full consciousness integration",
        "Quantum neural networks",
        "Priority support",
        "Advanced quantum analytics",
        "API access",
        "Custom quantum algorithms"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      features: [
        "Full quantum-AI hybrid computing",
        "Quantum consciousness transfer",
        "Custom quantum training",
        "Dedicated quantum support team",
        "White-label quantum solutions",
        "Advanced quantum security",
        "Custom quantum development",
        "Quantum SLA guarantees"
      ],
      popular: false,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-animated-gradient opacity-50"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                <Atom className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-blue-300">Quantum AI 2045</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">Quantum AI Hybrid Computing</span>
                <br />
                <span className="text-white">Platform 2045</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Breakthrough platform that combines quantum computing with AI consciousness, enabling exponential 
                processing power and solving previously unsolvable computational problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-futuristic btn-futuristic-secondary">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="btn-futuristic btn-futuristic-success">
                  <span>Watch Demo</span>
                  <Zap className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Revolutionary Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of computing with quantum-AI hybrid technology and consciousness integration
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-futuristic group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-animated-neon">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Unlock Quantum Power</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your computational capabilities with quantum-AI hybrid technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Use Cases</h3>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Target className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your quantum-AI hybrid computing needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card-futuristic relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full btn-futuristic bg-gradient-to-r ${plan.color}`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-animated-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Ready for Quantum Computing?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of quantum-AI hybrid computing with consciousness integration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-futuristic btn-futuristic-secondary">
                  <span>Start Free Trial</span>
                  <Rocket className="w-5 h-5 ml-2" />
                </button>
                <button className="btn-futuristic btn-futuristic-success">
                  <span>Contact Sales</span>
                  <MessageCircle className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumAIHybridComputing2045;