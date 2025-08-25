import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Atom, 
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
  Lightbulb,
  Lock,
  Database,
  Network,
  Microscope,
  Beaker,
  Cloud
} from 'lucide-react';

export default function QuantumComputingSolutions() {
  const services = [
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms for ultimate security.",
      icon: Lock,
      features: ["Quantum key distribution", "Post-quantum cryptography", "Quantum-resistant algorithms", "Secure communication"],
      price: "$5,000/month",
      marketPrice: "$8,500/month",
      savings: "41% savings"
    },
    {
      title: "Quantum Machine Learning",
      description: "Accelerated AI training and inference using quantum algorithms for complex pattern recognition.",
      icon: Brain,
      features: ["Quantum neural networks", "Pattern recognition", "Optimization algorithms", "Quantum feature mapping"],
      price: "$4,200/month",
      marketPrice: "$7,200/month",
      savings: "42% savings"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems in logistics, finance, and manufacturing with quantum algorithms.",
      icon: Target,
      features: ["Route optimization", "Portfolio optimization", "Supply chain optimization", "Resource allocation"],
      price: "$3,800/month",
      marketPrice: "$6,500/month",
      savings: "42% savings"
    },
    {
      title: "Quantum Simulation",
      description: "Accurate molecular and material simulations for drug discovery, materials science, and chemical engineering.",
      icon: Beaker,
      features: ["Molecular modeling", "Material properties", "Chemical reactions", "Drug discovery"],
      price: "$4,500/month",
      marketPrice: "$7,800/month",
      savings: "42% savings"
    },
    {
      title: "Quantum Financial Modeling",
      description: "Advanced financial modeling and risk assessment using quantum computing algorithms.",
      icon: BarChart3,
      features: ["Risk assessment", "Portfolio optimization", "Option pricing", "Market simulation"],
      price: "$4,800/month",
      marketPrice: "$8,200/month",
      savings: "41% savings"
    },
    {
      title: "Quantum Cloud Access",
      description: "Access to quantum computing resources through our cloud platform with expert support.",
      icon: Cloud,
      features: ["Quantum hardware access", "Expert consultation", "API integration", "Scalable resources"],
      price: "$2,500/month",
      marketPrice: "$4,500/month",
      savings: "44% savings"
    }
  ];

  const benefits = [
    {
      title: "1000x Faster",
      description: "Exponential speedup for complex computational problems",
      icon: Zap,
      metric: "1000x"
    },
    {
      title: "Unbreakable Security",
      description: "Quantum-resistant encryption for future-proof security",
      icon: Shield,
      metric: "100%"
    },
    {
      title: "24/7 Access",
      description: "Continuous access to quantum computing resources",
      icon: Clock,
      metric: "24/7"
    },
    {
      title: "Future-Proof",
      description: "Built for the quantum computing era",
      icon: Rocket,
      metric: "∞"
    }
  ];

  const industries = [
    {
      name: "Pharmaceuticals",
      description: "Drug discovery, molecular modeling, and clinical trials optimization",
      icon: Building,
      useCases: ["Drug discovery", "Molecular modeling", "Clinical trials", "Protein folding"]
    },
    {
      name: "Finance",
      description: "Risk assessment, portfolio optimization, and algorithmic trading",
      icon: Building,
      useCases: ["Risk assessment", "Portfolio optimization", "Algorithmic trading", "Fraud detection"]
    },
    {
      name: "Manufacturing",
      description: "Supply chain optimization, quality control, and predictive maintenance",
      icon: Building,
      useCases: ["Supply chain optimization", "Quality control", "Predictive maintenance", "Resource allocation"]
    },
    {
      name: "Energy",
      description: "Grid optimization, renewable energy forecasting, and carbon capture",
      icon: Building,
      useCases: ["Grid optimization", "Energy forecasting", "Carbon capture", "Nuclear fusion"]
    }
  ];

  const features = [
    {
      title: "Quantum Hardware Access",
      description: "Direct access to leading quantum computing hardware including IBM, Google, and Microsoft",
      icon: Cpu
    },
    {
      title: "Hybrid Quantum-Classical",
      description: "Seamless integration between quantum and classical computing resources",
      icon: Network
    },
    {
      title: "Expert Consultation",
      description: "Quantum computing experts to guide your implementation and optimization",
      icon: Users
    },
    {
      title: "API Integration",
      description: "Easy integration with existing systems through RESTful APIs and SDKs",
      icon: Database
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular simulations",
      icon: Microscope,
      impact: "10x faster drug discovery"
    },
    {
      title: "Financial Modeling",
      description: "Revolutionary financial modeling with quantum algorithms",
      icon: BarChart3,
      impact: "1000x faster optimization"
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate simulations for environmental research",
      icon: Globe,
      impact: "100x more accurate predictions"
    },
    {
      title: "AI Training",
      description: "Quantum-enhanced machine learning for complex AI models",
      icon: Brain,
      impact: "Exponential speedup"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      </div>

      <SEO 
        title="Quantum Computing Solutions - Zion Tech Group" 
        description="Revolutionary quantum computing solutions for drug discovery, financial modeling, and AI acceleration. Access quantum hardware with 1000x speedup and unbreakable security."
        keywords="quantum computing, quantum cryptography, quantum machine learning, quantum optimization, quantum simulation, quantum cloud"
        canonical="https://ziontechgroup.com/services/quantum-computing-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium backdrop-blur-sm">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Computing
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Harness the power of quantum mechanics to solve previously impossible computational problems. 
            Achieve <span className="text-purple-400 font-semibold">1000x speedup</span> and 
            <span className="text-cyan-400 font-semibold"> unbreakable security</span> with our quantum computing platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">Start Quantum Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
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
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum cryptography to machine learning, we provide comprehensive quantum computing solutions 
              that revolutionize how you solve complex problems and secure your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving previously impossible problems 
              with unprecedented speed and accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{app.description}</p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                  {app.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing platform comes with enterprise-grade features designed to provide 
              seamless access to quantum resources and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored quantum computing solutions designed for the unique requirements and challenges 
              of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-6 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{industry.name}</h3>
                <p className="text-sm text-gray-300 mb-4 text-center">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-purple-400 flex items-center">
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
      <section className="py-20 bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-cyan-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the quantum revolution and solve previously impossible problems with unprecedented speed and accuracy. 
            Start your quantum computing journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">Start Quantum Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}