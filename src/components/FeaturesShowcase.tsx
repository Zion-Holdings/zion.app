import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  Globe, 
  BarChart3, 
  Cpu,
  Sparkles,
  Target,
  Users,
  Rocket
} from 'lucide-react';
import { useState } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: "ai-powered",
    title: "AI-Powered Solutions",
    description: "Cutting-edge artificial intelligence that learns, adapts, and evolves with your business needs",
    icon: <Brain className="w-8 h-8" />,
    category: "Intelligence",
    benefits: ["Predictive Analytics", "Automated Decision Making", "Continuous Learning"]
  },
  {
    id: "cybersecurity",
    title: "Advanced Cybersecurity",
    description: "Multi-layered security protocols protecting your digital assets from evolving threats",
    icon: <Shield className="w-8 h-8" />,
    category: "Security",
    benefits: ["Threat Detection", "Real-time Monitoring", "Zero-trust Architecture"]
  },
  {
    id: "cloud-native",
    title: "Cloud-Native Architecture",
    description: "Scalable, resilient infrastructure designed for the modern digital landscape",
    icon: <Cloud className="w-8 h-8" />,
    category: "Infrastructure",
    benefits: ["Auto-scaling", "High Availability", "Cost Optimization"]
  },
  {
    id: "blockchain",
    title: "Blockchain Innovation",
    description: "Secure, transparent, and decentralized solutions for the future of digital transactions",
    icon: <Lock className="w-8 h-8" />,
    category: "Technology",
    benefits: ["Smart Contracts", "Decentralized Apps", "Cryptographic Security"]
  },
  {
    id: "data-analytics",
    title: "Real-time Analytics",
    description: "Instant insights and actionable intelligence from your data streams",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "Analytics",
    benefits: ["Live Dashboards", "Predictive Insights", "Data Visualization"]
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    description: "Next-generation computational power solving previously impossible problems",
    icon: <Cpu className="w-8 h-8" />,
    category: "Innovation",
    benefits: ["Quantum Algorithms", "Superior Performance", "Future-Proof Solutions"]
  },
  {
    id: "performance",
    title: "Lightning Performance",
    description: "Optimized systems delivering exceptional speed and responsiveness",
    icon: <Zap className="w-8 h-8" />,
    category: "Performance",
    benefits: ["Sub-millisecond Response", "High Throughput", "Efficient Resource Usage"]
  },
  {
    id: "global-reach",
    title: "Global Infrastructure",
    description: "Worldwide network ensuring your services are always accessible",
    icon: <Globe className="w-8 h-8" />,
    category: "Reach",
    benefits: ["Multi-region Deployment", "CDN Optimization", "Local Compliance"]
  },
  {
    id: "innovation",
    title: "Continuous Innovation",
    description: "Always evolving, always improving, always ahead of the curve",
    icon: <Sparkles className="w-8 h-8" />,
    category: "Innovation",
    benefits: ["R&D Investment", "Emerging Tech", "Future Vision"]
  },
  {
    id: "precision",
    title: "Precision Engineering",
    description: "Meticulously crafted solutions with attention to every detail",
    icon: <Target className="w-8 h-8" />,
    category: "Quality",
    benefits: ["Code Quality", "Performance Tuning", "User Experience"]
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    description: "Expert teams working together to deliver exceptional results",
    icon: <Users className="w-8 h-8" />,
    category: "Team",
    benefits: ["Agile Development", "Expert Consultation", "24/7 Support"]
  },
  {
    id: "acceleration",
    title: "Rapid Deployment",
    description: "Fast-track your digital transformation with our accelerated delivery",
    icon: <Rocket className="w-8 h-8" />,
    category: "Speed",
    benefits: ["Quick Setup", "Iterative Development", "Time to Market"]
  }
];

const categories = ["All", "Intelligence", "Security", "Infrastructure", "Technology", "Analytics", "Innovation", "Performance", "Reach", "Quality", "Team", "Speed"];

export default function FeaturesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFeatures = features.filter(feature => 
    selectedCategory === "All" || feature.category === selectedCategory
  );

  return (
    <section className="py-24 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
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
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group relative bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-neon"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Icon */}
              <div className="text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-zion-cyan">Key Benefits:</h4>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join the ranks of innovative companies that have transformed their digital landscape with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-neon transition-all duration-300">
              Get Started Today
            </button>
            <button className="bg-zion-blue-dark border-2 border-zion-cyan text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-zion-purple transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}