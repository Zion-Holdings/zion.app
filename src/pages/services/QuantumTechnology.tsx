import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Lock,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Network
} from 'lucide-react';

const QuantumTechnology = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum mechanics to solve complex computational problems that are impossible for classical computers.",
      benefits: ["Exponential speedup", "Quantum advantage", "Future-proof technology"]
    },
    {
      icon: Shield,
      title: "Quantum-Safe Cryptography",
      description: "Next-generation security protocols that protect against quantum attacks and ensure data remains secure in the quantum era.",
      benefits: ["Post-quantum security", "Advanced encryption", "Threat resistance"]
    },
    {
      icon: Brain,
      title: "Quantum Machine Learning",
      description: "Revolutionary AI algorithms that leverage quantum computing to process and analyze data with unprecedented efficiency.",
      benefits: ["Faster training", "Better accuracy", "Quantum insights"]
    },
    {
      icon: Network,
      title: "Quantum Networks",
      description: "Secure quantum communication networks that enable unhackable data transmission and quantum internet infrastructure.",
      benefits: ["Unhackable communication", "Quantum entanglement", "Global connectivity"]
    }
  ];

  const applications = [
    {
      title: "Financial Services",
      description: "Quantum algorithms for portfolio optimization, risk assessment, and high-frequency trading.",
      icon: BarChart3
    },
    {
      title: "Drug Discovery",
      description: "Molecular simulation and chemical analysis for pharmaceutical research and development.",
      icon: Brain
    },
    {
      title: "Logistics & Supply Chain",
      description: "Complex optimization problems for route planning, inventory management, and resource allocation.",
      icon: Database
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and advanced threat detection systems.",
      icon: Lock
    }
  ];

  const technologies = [
    "Quantum Gates & Circuits",
    "Quantum Error Correction",
    "Quantum Annealing",
    "Quantum Machine Learning",
    "Post-Quantum Cryptography",
    "Quantum Key Distribution",
    "Quantum Sensors",
    "Quantum Materials"
  ];

  const benefits = [
    {
      title: "Exponential Performance",
      description: "Solve problems in minutes that would take classical computers centuries to complete.",
      icon: Zap
    },
    {
      title: "Unprecedented Security",
      description: "Quantum-safe encryption that protects against all known and future attack vectors.",
      icon: Shield
    },
    {
      title: "Scientific Breakthroughs",
      description: "Enable discoveries in physics, chemistry, and materials science that were previously impossible.",
      icon: Rocket
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the curve with early adoption of quantum technologies.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Quantum Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Unlock the future with cutting-edge quantum computing, quantum-safe security, 
              and revolutionary quantum applications that transform industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Explore Quantum
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Quantum Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum technology solutions leverage the fundamental principles of quantum mechanics 
              to deliver unprecedented computational power and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-purple-400">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
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

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum technology is revolutionizing industries by solving previously intractable problems 
              and opening new possibilities for innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <app.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{app.title}</h3>
                </div>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Quantum?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum technology offers advantages that are impossible to achieve with classical computing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on the latest advancements in quantum physics and computational science.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum future and discover how our quantum technology solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Quantum Journey
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumTechnology;