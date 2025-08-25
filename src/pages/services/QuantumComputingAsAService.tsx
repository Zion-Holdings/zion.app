import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Atom, 
  Zap, 
  Cpu, 
  Brain, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3,
  Users,
  Database,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  CircuitBoard,
  Network,
  Target,
  Rocket
} from 'lucide-react';

export default function QuantumComputingAsAService() {
  const features = [
    {
      title: "Quantum Algorithm Library",
      description: "Access to 100+ pre-built quantum algorithms for optimization, machine learning, and cryptography",
      icon: Brain,
      benefits: ["Ready-to-use algorithms", "Custom algorithm development", "Performance optimization", "Documentation & examples"]
    },
    {
      title: "Hybrid Quantum-Classical Computing",
      description: "Seamless integration between quantum and classical computing resources for optimal performance",
      icon: CircuitBoard,
      benefits: ["Quantum-classical hybrid workflows", "Resource optimization", "Cost-effective computing", "Scalable architecture"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Advanced quantum ML models for pattern recognition, classification, and predictive analytics",
      icon: TrendingUp,
      benefits: ["Quantum neural networks", "Feature selection", "Model training", "Real-time inference"]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and post-quantum cryptography",
      icon: Shield,
      benefits: ["Quantum key distribution", "Post-quantum algorithms", "Secure communication", "Compliance ready"]
    },
    {
      title: "Real-time Quantum Simulation",
      description: "High-fidelity quantum simulations for research, development, and testing",
      icon: Cpu,
      benefits: ["High-accuracy simulations", "Real-time results", "Custom environments", "Research tools"]
    },
    {
      title: "Quantum API Gateway",
      description: "RESTful APIs and SDKs for easy integration with existing applications and workflows",
      icon: Network,
      benefits: ["REST APIs", "Python SDK", "JavaScript SDK", "Webhook support"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$5,000",
      period: "/month",
      description: "Perfect for researchers and small teams exploring quantum computing",
      features: [
        "100 quantum circuit executions/day",
        "Access to basic algorithms",
        "5 user accounts",
        "Email support",
        "Basic documentation",
        "Community forum access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$15,000",
      period: "/month",
      description: "Ideal for businesses implementing quantum solutions in production",
      features: [
        "1,000 quantum circuit executions/day",
        "Full algorithm library access",
        "25 user accounts",
        "Priority support",
        "Custom algorithm development",
        "Advanced analytics",
        "API access",
        "Training sessions"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$50,000",
      period: "/month",
      description: "Full-scale quantum computing platform for large organizations",
      features: [
        "Unlimited quantum executions",
        "Custom quantum hardware access",
        "Unlimited users",
        "24/7 dedicated support",
        "White-label solutions",
        "On-premise deployment",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      title: "Portfolio Optimization",
      description: "Quantum algorithms for optimal asset allocation and risk management",
      roi: "30% improvement in portfolio returns",
      icon: TrendingUp
    },
    {
      industry: "Pharmaceuticals",
      title: "Drug Discovery",
      description: "Quantum simulation for molecular modeling and drug development",
      roi: "50% faster drug discovery process",
      icon: Atom
    },
    {
      industry: "Logistics",
      title: "Route Optimization",
      description: "Quantum optimization for supply chain and delivery routing",
      roi: "40% reduction in logistics costs",
      icon: Globe
    },
    {
      industry: "Cybersecurity",
      title: "Post-Quantum Security",
      description: "Quantum-resistant encryption and secure communication protocols",
      roi: "Future-proof security infrastructure",
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: "1000x Faster",
      description: "Quantum speedup for complex computational problems",
      icon: Zap,
      metric: "1000x"
    },
    {
      title: "99.9% Accuracy",
      description: "High-fidelity quantum operations and measurements",
      icon: CheckCircle,
      metric: "99.9%"
    },
    {
      title: "24/7 Availability",
      description: "Always-on quantum computing resources",
      icon: Clock,
      metric: "24/7"
    },
    {
      title: "Global Access",
      description: "Access quantum computing from anywhere in the world",
      icon: Globe,
      metric: "Global"
    }
  ];

  const quantumAdvantages = [
    {
      title: "Superposition",
      description: "Quantum bits can exist in multiple states simultaneously, enabling parallel processing",
      icon: Atom
    },
    {
      title: "Entanglement",
      description: "Quantum correlation between particles enables instant information transfer",
      icon: Network
    },
    {
      title: "Interference",
      description: "Quantum interference patterns enable precise optimization algorithms",
      icon: Target
    },
    {
      title: "Tunneling",
      description: "Quantum tunneling allows exploration of solution spaces inaccessible to classical computers",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Quantum Computing as a Service - Zion Tech Group" 
        description="Access the power of quantum computing through our cloud platform. Solve complex problems 1000x faster with cutting-edge quantum algorithms and hardware."
        keywords="quantum computing, quantum as a service, quantum algorithms, quantum machine learning, quantum cryptography, quantum simulation"
        canonical="https://ziontechgroup.com/services/quantum-computing-as-a-service"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Atom className="w-12 h-12 text-zion-cyan mr-3 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Quantum Computing as a Service
            </h1>
          </div>
          <p className="text-2xl text-zion-cyan mb-4 font-semibold">
            Access the Future of Computing Today
          </p>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Experience the revolutionary power of quantum computing through our cloud platform. 
            Solve complex problems 1000x faster with cutting-edge quantum algorithms, real-time 
            simulation, and hybrid quantum-classical computing capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-sm">✓ 30-day free trial • ✓ No setup fees • ✓ Instant quantum access • ✓ Expert support</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience unprecedented computational power and solve problems that were previously 
              impossible with classical computing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-zion-cyan text-white text-sm font-bold px-3 py-1 rounded-full">
                    {benefit.metric}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Principles */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Quantum Computing Principles
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understand the fundamental principles that make quantum computing revolutionary 
              and how they enable solutions to previously intractable problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                      {advantage.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zion-slate">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced Quantum Computing Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive quantum computing capabilities designed for researchers, developers, 
              and businesses ready to leverage the power of quantum.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
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
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Quantum Computing Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the quantum computing plan that fits your research and business needs. 
              All plans include our core quantum capabilities and 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light hover:border-zion-cyan'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate text-sm">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-zion-slate mb-4">
              Need custom quantum solutions? Contact our quantum computing experts for tailored pricing.
            </p>
            <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center justify-center mx-auto">
              Contact Quantum Experts
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving previously 
              impossible problems with unprecedented speed and accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-zion-slate text-sm mb-2">
                      {useCase.industry}
                    </p>
                  </div>
                </div>
                <p className="text-zion-slate mb-4">
                  {useCase.description}
                </p>
                <div className="bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg p-4">
                  <p className="text-zion-cyan font-semibold text-center">
                    {useCase.roi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join the quantum revolution and solve complex problems that were previously impossible. 
            Start your free trial today and experience the future of computing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
          <div className="text-zion-slate-light text-sm">
            <p>✓ No setup fees • ✓ 30-day free trial • ✓ Instant quantum access • ✓ Expert quantum support</p>
          </div>
        </div>
      </section>
    </div>
  );
}