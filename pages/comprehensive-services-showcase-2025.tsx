import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon,
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, 
  Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  Building, MessageCircle, Sparkles as SparklesIcon, Zap as ZapIcon,
  Target as TargetIcon, Atom as AtomIcon, Brain as BrainIcon, ArrowRight
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      description: 'Advanced artificial intelligence solutions for modern businesses',
      services: [
        'AI Consciousness Evolution',
        'AI Emotional Intelligence Training',
        'AI Autonomous Business Operations',
        'AI Autonomous Research Assistant',
        'AI Content Generator',
        'AI-Powered Decision Engine'
      ],
      href: '/ai-services'
    },
    {
      name: 'Quantum Technology',
      icon: <Atom className="w-8 h-8" />,
      description: 'Next-generation quantum computing and security solutions',
      services: [
        'Quantum Neural Network Platform',
        'Quantum Financial Trading Platform',
        'Quantum Materials Discovery Platform',
        'Quantum Bio-Computing Platform',
        'Quantum Internet Security Platform',
        'Quantum Cloud Infrastructure'
      ],
      href: '/quantum-services'
    },
    {
      name: 'Space Technology',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Space exploration and resource mining technologies',
      services: [
        'Space Resource Mining Platform',
        'AI-Powered Space Technology',
        'Space Technology AI Platform',
        'Virtual Event Hologram Platform'
      ],
      href: '/space-technology'
    },
    {
      name: 'IT Solutions',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Enterprise IT infrastructure and operations',
      services: [
        'Quantum-Secure Cloud Infrastructure',
        'Autonomous IT Operations Center',
        'Edge Computing Orchestration Platform',
        'Blockchain Infrastructure Platform',
        'AI-Powered DevOps Platform',
        'Zero Trust Security Platform'
      ],
      href: '/it-services'
    },
    {
      name: 'Specialized Solutions',
      icon: <Target className="w-8 h-8" />,
      description: 'Industry-specific and specialized technology solutions',
      services: [
        'SOC 2 Compliance Automation',
        'RAG Evaluation Lab',
        'Browser Automation Cloud',
        'Secrets Rotation Automation',
        'API Performance Testing',
        'SEO Automation Suite'
      ],
      href: '/solutions'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of cutting-edge technology solutions designed to transform your business and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={category.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a 
                href="/pricing"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025;