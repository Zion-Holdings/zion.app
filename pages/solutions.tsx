import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Search, Filter, ArrowRight, Building2, Car, Heart, GraduationCap, 
  Factory, ShoppingCart, Plane, Leaf, Eye, MessageSquare
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'finance', name: 'Financial Services', icon: TrendingUp },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'automotive', name: 'Automotive', icon: Car },
    { id: 'aerospace', name: 'Aerospace & Defense', icon: Plane },
    { id: 'energy', name: 'Energy & Utilities', icon: Leaf },
    { id: 'technology', name: 'Technology', icon: Code }
  ];

  const solutions = [
    // Financial Services
    {
      title: "AI-Powered Risk Management",
      industry: "finance",
      description: "Advanced AI algorithms for real-time risk assessment and portfolio optimization",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: ["Real-time risk monitoring", "Portfolio optimization", "Fraud detection", "Regulatory compliance"],
      benefits: ["Reduce risk exposure by 40%", "Improve portfolio returns by 25%", "Automate compliance reporting"],
      link: "/solutions/ai-risk-management"
    },
    {
      title: "Quantum Financial Trading",
      industry: "finance",
      description: "Quantum computing algorithms for superior trading performance and market analysis",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      features: ["Quantum algorithms", "High-frequency trading", "Market prediction", "Risk assessment"],
      benefits: ["Increase trading accuracy by 60%", "Reduce latency by 90%", "Optimize portfolio allocation"],
      link: "/solutions/quantum-financial-trading"
    },
    {
      title: "AI Compliance Automation",
      industry: "finance",
      description: "Automated regulatory compliance and reporting for financial institutions",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      features: ["Regulatory monitoring", "Automated reporting", "Audit trails", "Risk assessment"],
      benefits: ["Reduce compliance costs by 50%", "Eliminate manual errors", "Real-time compliance status"],
      link: "/solutions/ai-compliance-automation"
    },

    // Healthcare
    {
      title: "AI Diagnostic Assistant",
      industry: "healthcare",
      description: "AI-powered diagnostic tools for improved patient care and treatment planning",
      icon: Brain,
      color: "from-blue-500 to-indigo-500",
      features: ["Medical image analysis", "Symptom assessment", "Treatment recommendations", "Patient monitoring"],
      benefits: ["Improve diagnostic accuracy by 35%", "Reduce diagnosis time by 60%", "Enhance patient outcomes"],
      link: "/solutions/ai-diagnostic-assistant"
    },
    {
      title: "Quantum Drug Discovery",
      industry: "healthcare",
      description: "Quantum computing for accelerated drug discovery and molecular modeling",
      icon: Atom,
      color: "from-green-500 to-teal-500",
      features: ["Molecular simulation", "Drug interaction modeling", "Protein folding", "Chemical synthesis"],
      benefits: ["Accelerate drug discovery by 10x", "Reduce research costs by 70%", "Improve drug efficacy"],
      link: "/solutions/quantum-drug-discovery"
    },
    {
      title: "AI Patient Care Management",
      industry: "healthcare",
      description: "Intelligent patient care coordination and resource optimization",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: ["Patient scheduling", "Resource allocation", "Care coordination", "Outcome tracking"],
      benefits: ["Improve patient satisfaction by 45%", "Reduce wait times by 50%", "Optimize resource utilization"],
      link: "/solutions/ai-patient-care-management"
    },

    // Manufacturing
    {
      title: "AI Predictive Maintenance",
      industry: "manufacturing",
      description: "Predictive maintenance systems to prevent equipment failures and optimize production",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      features: ["Equipment monitoring", "Failure prediction", "Maintenance scheduling", "Performance optimization"],
      benefits: ["Reduce downtime by 60%", "Lower maintenance costs by 40%", "Increase equipment lifespan"],
      link: "/solutions/ai-predictive-maintenance"
    },
    {
      title: "Quantum Supply Chain Optimization",
      industry: "manufacturing",
      description: "Quantum algorithms for complex supply chain optimization and logistics management",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      features: ["Route optimization", "Inventory management", "Demand forecasting", "Supplier coordination"],
      benefits: ["Reduce logistics costs by 30%", "Improve delivery times by 25%", "Optimize inventory levels"],
      link: "/solutions/quantum-supply-chain-optimization"
    },
    {
      title: "AI Quality Control",
      industry: "manufacturing",
      description: "Computer vision and AI for automated quality inspection and defect detection",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      features: ["Visual inspection", "Defect detection", "Quality scoring", "Process improvement"],
      benefits: ["Improve quality by 95%", "Reduce inspection time by 80%", "Lower defect rates"],
      link: "/solutions/ai-quality-control"
    },

    // Retail & E-commerce
    {
      title: "AI Customer Personalization",
      industry: "retail",
      description: "Personalized shopping experiences powered by AI and machine learning",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: ["Product recommendations", "Behavioral analysis", "Dynamic pricing", "Customer segmentation"],
      benefits: ["Increase conversion rates by 35%", "Improve customer retention by 40%", "Boost average order value"],
      link: "/solutions/ai-customer-personalization"
    },
    {
      title: "Smart Inventory Management",
      industry: "retail",
      description: "AI-powered inventory optimization and demand forecasting for retail operations",
      icon: ShoppingCart,
      color: "from-blue-500 to-indigo-500",
      features: ["Demand forecasting", "Stock optimization", "Supplier management", "Cost reduction"],
      benefits: ["Reduce stockouts by 70%", "Lower inventory costs by 25%", "Improve cash flow"],
      link: "/solutions/smart-inventory-management"
    },
    {
      title: "AI-Powered Customer Service",
      industry: "retail",
      description: "Intelligent customer service automation and support optimization",
      icon: MessageSquare,
      color: "from-green-500 to-teal-500",
      features: ["Chatbot automation", "Ticket routing", "Knowledge management", "Performance analytics"],
      benefits: ["Reduce response time by 80%", "Lower support costs by 50%", "Improve customer satisfaction"],
      link: "/solutions/ai-customer-service"
    },

    // Education
    {
      title: "AI Learning Assistant",
      industry: "education",
      description: "Personalized learning experiences and adaptive education platforms",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      features: ["Adaptive learning", "Progress tracking", "Content personalization", "Performance analytics"],
      benefits: ["Improve learning outcomes by 40%", "Increase engagement by 60%", "Reduce dropout rates"],
      link: "/solutions/ai-learning-assistant"
    },
    {
      title: "Virtual Reality Education",
      industry: "education",
      description: "Immersive VR experiences for enhanced learning and skill development",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      features: ["3D simulations", "Interactive learning", "Skill assessment", "Collaborative environments"],
      benefits: ["Enhance learning retention by 75%", "Improve practical skills", "Increase student engagement"],
      link: "/solutions/vr-education"
    },

    // Automotive
    {
      title: "Autonomous Vehicle Platform",
      industry: "automotive",
      description: "Advanced AI systems for autonomous vehicle operation and safety",
      icon: Car,
      color: "from-green-500 to-emerald-500",
      features: ["Computer vision", "Path planning", "Collision avoidance", "Traffic analysis"],
      benefits: ["Improve safety by 90%", "Reduce accidents by 80%", "Optimize traffic flow"],
      link: "/solutions/autonomous-vehicle-platform"
    },
    {
      title: "Connected Car Intelligence",
      industry: "automotive",
      description: "IoT and AI integration for smart vehicle management and user experience",
      icon: Network,
      color: "from-blue-500 to-indigo-500",
      features: ["Vehicle diagnostics", "Predictive maintenance", "User preferences", "Safety monitoring"],
      benefits: ["Reduce maintenance costs by 30%", "Improve user experience", "Enhance vehicle safety"],
      link: "/solutions/connected-car-intelligence"
    },

    // Aerospace & Defense
    {
      title: "AI Mission Planning",
      industry: "aerospace",
      description: "Intelligent mission planning and autonomous operation systems",
      icon: Plane,
      color: "from-purple-500 to-pink-500",
      features: ["Route optimization", "Resource allocation", "Risk assessment", "Autonomous operation"],
      benefits: ["Improve mission success by 45%", "Reduce planning time by 60%", "Optimize resource usage"],
      link: "/solutions/ai-mission-planning"
    },
    {
      title: "Quantum Communication Systems",
      industry: "aerospace",
      description: "Quantum-secured communication for military and aerospace applications",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      features: ["Quantum encryption", "Secure communication", "Interference detection", "Network security"],
      benefits: ["Unhackable communication", "Real-time security", "Global coverage"],
      link: "/solutions/quantum-communication-systems"
    },

    // Energy & Utilities
    {
      title: "AI Grid Optimization",
      industry: "energy",
      description: "Intelligent power grid management and energy distribution optimization",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      features: ["Load balancing", "Demand forecasting", "Grid monitoring", "Energy optimization"],
      benefits: ["Reduce energy waste by 25%", "Improve grid stability", "Lower operational costs"],
      link: "/solutions/ai-grid-optimization"
    },
    {
      title: "Renewable Energy Management",
      industry: "energy",
      description: "AI-powered renewable energy systems and sustainability optimization",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      features: ["Solar optimization", "Wind forecasting", "Energy storage", "Sustainability tracking"],
      benefits: ["Increase renewable output by 35%", "Reduce carbon footprint", "Optimize energy storage"],
      link: "/solutions/renewable-energy-management"
    },

    // Technology
    {
      title: "AI Development Platform",
      industry: "technology",
      description: "Comprehensive AI development and deployment platform for tech companies",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      features: ["Model development", "Training automation", "Deployment tools", "Performance monitoring"],
      benefits: ["Accelerate AI development by 3x", "Reduce infrastructure costs", "Improve model performance"],
      link: "/solutions/ai-development-platform"
    },
    {
      title: "Quantum Computing Services",
      industry: "technology",
      description: "Quantum computing infrastructure and algorithm development services",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      features: ["Quantum infrastructure", "Algorithm development", "Performance optimization", "Technical support"],
      benefits: ["Access to quantum computing", "Expert algorithm development", "Scalable infrastructure"],
      link: "/solutions/quantum-computing-services"
    }
  ];

  const filteredSolutions = solutions.filter(solution => 
    selectedIndustry === 'all' || solution.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Solutions — Zion Tech Group | Industry-Specific Technology Solutions</title>
        <meta name="description" content="Discover industry-specific technology solutions from Zion Tech Group. AI, quantum computing, and emerging tech solutions tailored for finance, healthcare, manufacturing, and more." />
        <meta property="og:title" content="Zion Tech Group Solutions" />
        <meta property="og:description" content="Industry-specific technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
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
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Tailored technology solutions designed to solve industry-specific challenges and drive transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Select Your Industry
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Find solutions specifically designed for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                  selectedIndustry === industry.id
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-800/50 border-slate-600/30 text-white/70 hover:bg-slate-700/50'
                }`}
              >
                <industry.icon className="w-5 h-5" />
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{solution.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-white mb-3">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-white/70">
                        <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={solution.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No solutions found</h3>
              <p className="text-white/60">Try selecting a different industry or contact us for custom solutions</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Don't see exactly what you need? Our team specializes in creating custom technology solutions 
              tailored to your specific business requirements and industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Discuss Custom Solution
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}