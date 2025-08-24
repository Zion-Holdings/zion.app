import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Search, Filter, ArrowRight
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'business', name: 'Business Solutions', icon: Target },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket }
  ];

  const services = [
    // AI & Machine Learning
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics and predictive modeling",
      category: "ai",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      price: "$499/month",
      features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights", "Custom ML models"],
      link: "/services/ai-business-intelligence"
    },
    {
      title: "AI Autonomous Agents",
      description: "Deploy intelligent autonomous agents that handle complex business operations",
      category: "ai",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      price: "$799/month",
      features: ["Task automation", "Decision making", "Process optimization", "24/7 operation"],
      link: "/services/ai-autonomous-agents"
    },
    {
      title: "AI Content Factory",
      description: "Generate high-quality content at scale with advanced AI content creation tools",
      category: "ai",
      icon: Brain,
      color: "from-green-500 to-teal-500",
      price: "$299/month",
      features: ["Content generation", "SEO optimization", "Multi-format support", "Brand consistency"],
      link: "/services/ai-content-factory"
    },
    {
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with AI-powered personalization",
      category: "ai",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      price: "$399/month",
      features: ["Customer journey mapping", "AI personalization", "Sentiment analysis", "Predictive support"],
      link: "/services/ai-customer-experience"
    },

    // Quantum Technology
    {
      title: "Quantum Neural Interface",
      description: "Revolutionary brain-computer interface powered by quantum computing",
      category: "quantum",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      price: "$2,999/month",
      features: ["Quantum processing", "Neural mapping", "Real-time interface", "Advanced algorithms"],
      link: "/services/quantum-neural-interface"
    },
    {
      title: "Quantum Financial Trading",
      description: "Quantum-powered trading algorithms for superior market performance",
      category: "quantum",
      icon: Atom,
      color: "from-green-500 to-emerald-500",
      price: "$1,999/month",
      features: ["Quantum algorithms", "Risk assessment", "Portfolio optimization", "Real-time execution"],
      link: "/services/quantum-financial-trading"
    },
    {
      title: "Quantum Internet Protocol",
      description: "Next-generation quantum internet infrastructure for ultra-secure communication",
      category: "quantum",
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      price: "$3,999/month",
      features: ["Quantum encryption", "Entanglement networks", "Zero-latency", "Unhackable security"],
      link: "/services/quantum-internet-protocol"
    },
    {
      title: "Quantum Sensors Network",
      description: "Advanced quantum sensor technology for precision measurement and detection",
      category: "quantum",
      icon: Atom,
      color: "from-orange-500 to-red-500",
      price: "$1,499/month",
      features: ["Quantum precision", "Multi-sensor fusion", "Real-time monitoring", "Advanced analytics"],
      link: "/services/quantum-sensors-network"
    },

    // Cybersecurity
    {
      title: "Quantum Cybersecurity",
      description: "Future-proof security with quantum-resistant encryption and AI threat detection",
      category: "cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      price: "$799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture", "24/7 monitoring"],
      link: "/services/quantum-cybersecurity"
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced AI algorithms for real-time threat detection and response",
      category: "cybersecurity",
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
      price: "$599/month",
      features: ["Behavioral analysis", "Threat intelligence", "Automated response", "Forensic analysis"],
      link: "/services/ai-threat-detection"
    },
    {
      title: "SOC2 Compliance Automation",
      description: "Automated compliance management for SOC2 and other security frameworks",
      category: "cybersecurity",
      icon: Shield,
      color: "from-green-500 to-teal-500",
      price: "$899/month",
      features: ["Automated audits", "Compliance monitoring", "Risk assessment", "Documentation"],
      link: "/services/soc2-compliance-automation"
    },

    // Business Solutions
    {
      title: "Smart Inventory Manager",
      description: "AI-powered inventory optimization and demand forecasting",
      category: "business",
      icon: Target,
      color: "from-blue-500 to-indigo-500",
      price: "$349/month",
      features: ["Demand forecasting", "Stock optimization", "Supplier management", "Cost reduction"],
      link: "/services/smart-inventory-manager"
    },
    {
      title: "Customer Success Automation",
      description: "Automate customer success processes with intelligent workflows",
      category: "business",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      price: "$449/month",
      features: ["Onboarding automation", "Success tracking", "Churn prevention", "Growth optimization"],
      link: "/services/customer-success-automation"
    },
    {
      title: "AI Sales Coach",
      description: "Intelligent sales coaching and performance optimization platform",
      category: "business",
      icon: Target,
      color: "from-orange-500 to-red-500",
      price: "$399/month",
      features: ["Performance analytics", "Coaching recommendations", "Skill development", "ROI tracking"],
      link: "/services/ai-sales-coach"
    },
    {
      title: "Smart HR Assistant",
      description: "AI-powered HR automation and employee experience optimization",
      category: "business",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      price: "$299/month",
      features: ["Recruitment automation", "Employee engagement", "Performance management", "Compliance"],
      link: "/services/smart-hr-assistant"
    },

    // Emerging Tech
    {
      title: "Holographic Metaverse Platform",
      description: "Next-generation holographic technology for immersive experiences",
      category: "emerging",
      icon: Rocket,
      color: "from-violet-500 to-purple-500",
      price: "$4,999/month",
      features: ["3D holography", "Spatial computing", "Immersive experiences", "Multi-user support"],
      link: "/services/holographic-metaverse-platform"
    },
    {
      title: "Neuromorphic Computing",
      description: "Brain-inspired computing architecture for advanced AI applications",
      category: "emerging",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      price: "$3,999/month",
      features: ["Brain-like processing", "Energy efficiency", "Adaptive learning", "Scalable architecture"],
      link: "/services/neuromorphic-computing"
    },
    {
      title: "Synthetic Biology Platform",
      description: "Revolutionary platform for synthetic biology research and applications",
      category: "emerging",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      price: "$5,999/month",
      features: ["DNA synthesis", "Gene editing", "Bioinformatics", "Lab automation"],
      link: "/services/synthetic-biology-platform"
    },
    {
      title: "Brain-Computer Interface",
      description: "Advanced neural interface technology for human-computer interaction",
      category: "emerging",
      icon: Rocket,
      color: "from-pink-500 to-rose-500",
      price: "$2,999/month",
      features: ["Neural signal processing", "Real-time interface", "Multi-modal input", "Safety protocols"],
      link: "/services/brain-computer-interface"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services — Zion Tech Group | AI, Quantum & Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive suite of AI, quantum computing, cybersecurity, and emerging technology services. Transform your business with cutting-edge solutions." />
        <meta property="og:title" content="Zion Tech Group Services" />
        <meta property="og:description" content="AI, quantum computing, cybersecurity, and emerging technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary technology solutions that transform businesses and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-slate-800/50 border-slate-600/30 text-white/70 hover:bg-slate-700/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                  <div className="text-sm text-white/60">Starting price</div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}