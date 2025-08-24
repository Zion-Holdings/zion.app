import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Shield, Brain, Globe, Code, Cloud, BarChart3, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  duration: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "ai-powered-crm",
    title: "AI-Powered CRM",
    description: "Intelligent customer relationship management with machine learning insights",
    category: "AI & Machine Learning",
    price: "$1,500/month",
    duration: "2-3 weeks",
    features: ["Predictive analytics", "Automated follow-ups", "Smart lead scoring"],
    icon: <Brain className="w-8 h-8" />,
    popular: true
  },
  {
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence",
    description: "Real-time threat detection and automated incident response platform",
    category: "Cybersecurity",
    price: "$10,000/month",
    duration: "3-5 weeks",
    features: ["Real-time monitoring", "Automated response", "Threat hunting"],
    icon: <Shield className="w-8 h-8" />
  },
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration",
    description: "Unified platform for managing workloads across multiple cloud providers",
    category: "Cloud & Infrastructure",
    price: "$8,000/month",
    duration: "3-4 weeks",
    features: ["Cost optimization", "Workload migration", "Performance monitoring"],
    icon: <Cloud className="w-8 h-8" />
  },
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline",
    description: "High-performance data streaming platform for instant insights",
    category: "Data & Analytics",
    price: "$15,000/month",
    duration: "4-6 weeks",
    features: ["Real-time processing", "Stream analytics", "Scalable architecture"],
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    id: "progressive-web-app",
    title: "Progressive Web App",
    description: "Modern PWA with offline functionality and cross-platform compatibility",
    category: "Web Development",
    price: "$12,000/project",
    duration: "4-6 weeks",
    features: ["Offline support", "Push notifications", "App-like experience"],
    icon: <Code className="w-8 h-8" />
  },
  {
    id: "defi-platform",
    title: "DeFi Platform",
    description: "Decentralized finance platform with smart contracts and yield farming",
    category: "Blockchain & Web3",
    price: "$30,000/project",
    duration: "8-12 weeks",
    features: ["Smart contracts", "Yield farming", "Security auditing"],
    icon: <Globe className="w-8 h-8" />
  }
];

const categories = ["All", "AI & Machine Learning", "Cybersecurity", "Cloud & Infrastructure", "Data & Analytics", "Web Development", "Blockchain & Web3"];

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business
          </motion.p>
        </div>

        {/* Search and Filter */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-zion-blue-dark font-semibold'
                      : 'bg-zion-blue-dark/50 border border-zion-blue-light/30 text-zion-slate-light hover:border-zion-cyan/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group ${
                  service.popular ? 'ring-2 ring-zion-cyan' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-zion-blue-dark px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-zion-cyan mb-4 flex justify-center">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">
                    <span>Price</span>
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <span>Duration</span>
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Sales
            </button>
            <button className="bg-zion-blue-dark border-2 border-zion-cyan text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-zion-purple transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}