import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Building, 
  DollarSign, 
  Heart, 
  Truck, 
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

const aiServices = [
  {
    id: 'ai-legal-research-assistant',
    title: 'AI Legal Research Assistant',
    description: 'Revolutionary AI-powered legal research platform that autonomously analyzes case law, statutes, and legal precedents',
    icon: Building,
    color: 'from-purple-500 to-pink-600',
    features: [
      'Automated case law analysis',
      'Statute interpretation assistance',
      'Legal precedent identification',
      'Research summary generation',
      'Citation verification'
    ],
    pricing: '$299/month',
    href: '/ai-autonomous-legal-research-assistant'
  },
  {
    id: 'ai-financial-risk-manager',
    title: 'AI Financial Risk Manager',
    description: 'Intelligent financial risk assessment and management system that operates autonomously to protect your investments',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    features: [
      'Real-time risk assessment',
      'Portfolio optimization',
      'Market trend analysis',
      'Automated alerts',
      'Compliance monitoring'
    ],
    pricing: '$499/month',
    href: '/ai-autonomous-financial-risk-manager'
  },
  {
    id: 'ai-healthcare-diagnostics-pro',
    title: 'AI Healthcare Diagnostics Pro',
    description: 'Advanced AI-powered healthcare diagnostics system that provides autonomous medical analysis and recommendations',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    features: [
      'Medical image analysis',
      'Symptom assessment',
      'Treatment recommendations',
      'Patient monitoring',
      'Diagnostic accuracy tracking'
    ],
    pricing: '$799/month',
    href: '/ai-autonomous-healthcare-diagnostics-pro'
  },
  {
    id: 'ai-supply-chain-optimizer',
    title: 'AI Supply Chain Optimizer',
    description: 'Intelligent supply chain management system that autonomously optimizes logistics, inventory, and distribution',
    icon: Truck,
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Cost reduction analysis'
    ],
    pricing: '$599/month',
    href: '/ai-autonomous-supply-chain-optimizer'
  },
  {
    id: 'ai-cybersecurity-sentinel',
    title: 'AI Cybersecurity Sentinel',
    description: 'Autonomous cybersecurity system that continuously monitors, detects, and responds to threats in real-time',
    icon: Shield,
    color: 'from-orange-500 to-red-600',
    features: [
      'Threat detection & response',
      'Behavioral analysis',
      'Incident automation',
      'Security monitoring',
      'Compliance reporting'
    ],
    pricing: '$699/month',
    href: '/ai-autonomous-cybersecurity-sentinel'
  }
];

const benefits = [
  {
    title: '24/7 Autonomous Operation',
    description: 'AI systems that work continuously without human intervention',
    icon: Zap
  },
  {
    title: 'Continuous Learning',
    description: 'Systems that improve performance over time through machine learning',
    icon: TrendingUp
  },
  {
    title: 'Scalable Solutions',
    description: 'AI systems that grow with your business needs',
    icon: Building
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduce operational costs through intelligent automation',
    icon: DollarSign
  }
];

const useCases = [
  {
    industry: 'Legal',
    description: 'Automate legal research and case analysis for law firms',
    icon: Building
  },
  {
    industry: 'Finance',
    description: 'Intelligent risk management and portfolio optimization',
    icon: DollarSign
  },
  {
    industry: 'Healthcare',
    description: 'Enhanced diagnostic accuracy and patient care',
    icon: Heart
  },
  {
    industry: 'Manufacturing',
    description: 'Optimize supply chains and production processes',
    icon: Truck
  },
  {
    industry: 'Technology',
    description: 'Advanced cybersecurity and threat protection',
    icon: Shield
  }
];

export default function AIAutonomousSystems() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI & Autonomous Systems - Zion Tech Group" 
        description="Revolutionary AI systems that operate independently and transform business operations across industries."
        tags={["AI autonomous systems", "artificial intelligence", "machine learning", "business automation"]}
        url="https://ziontechgroup.com/services/ai-autonomous-systems"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-black to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              AI & Autonomous Systems
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary AI systems that operate independently and transform business operations across industries. 
            Our autonomous solutions deliver unprecedented efficiency, accuracy, and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered autonomous systems designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-purple-400">{service.pricing}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Why Choose AI Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI systems deliver exceptional value through continuous learning, autonomous operation, and intelligent decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous systems are transforming industries across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Embrace the Future of AI?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge AI autonomous systems. 
            Experience the power of intelligent automation and unprecedented efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}