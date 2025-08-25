
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Cpu, 
  Globe, 
  Shield, 
  Zap, 
  Database, 
  Cloud, 
  Smartphone,
  LinkIcon,
  Brain,
  Rocket,
  Palette
} from 'lucide-react';
import { GradientHeading } from './GradientHeading';

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions and ML models",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600",
    link: "/ai-services",
    features: ["AI Models", "Machine Learning", "Neural Networks", "Predictive Analytics"]
  },
  {
    title: "IT Services",
    description: "Professional IT support and consulting",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    link: "/it-onsite-services",
    features: ["24/7 Support", "Onsite Services", "Network Security", "Cloud Migration"]
  },
  {
    title: "Talent & Recruitment",
    description: "Find the best tech professionals",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/talent",
    features: ["AI Matching", "Verified Profiles", "Global Network", "Quick Hiring"]
  },
  {
    title: "Equipment & Hardware",
    description: "High-quality tech equipment",
    icon: <Database className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    link: "/equipment",
    features: ["Quality Guaranteed", "Fast Delivery", "Warranty", "Support"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    link: "/services",
    features: ["AWS", "Azure", "Google Cloud", "Hybrid Solutions"]
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    link: "/services",
    features: ["Penetration Testing", "Security Audits", "Incident Response", "Compliance"]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform apps",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-600",
    link: "/services",
    features: ["iOS", "Android", "React Native", "Flutter"]
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions and smart contracts",
    icon: <LinkIcon className="w-8 h-8" />,
    color: "from-teal-500 to-blue-600",
    link: "/services",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Micro SAAS",
    description: "Scalable software solutions",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-pink-500 to-rose-600",
    link: "/micro-saas",
    features: ["Custom Development", "API Integration", "Scalability", "Support"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and functional interfaces",
    icon: <Palette className="w-8 h-8" />,
    color: "from-violet-500 to-purple-600",
    link: "/services",
    features: ["User Research", "Wireframing", "Prototyping", "Testing"]
  },
  {
    title: "Data Analytics",
    description: "Turn data into insights",
    icon: <Zap className="w-8 h-8" />,
    color: "from-amber-500 to-yellow-600",
    link: "/services",
    features: ["Big Data", "Business Intelligence", "Data Mining", "Visualization"]
  },
  {
    title: "All Services",
    description: "Complete service catalog",
    icon: <Globe className="w-8 h-8" />,
    color: "from-slate-500 to-gray-600",
    link: "/comprehensive-services",
    features: ["Full Catalog", "Custom Solutions", "Enterprise", "Consulting"]
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block">
                <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:scale-[1.02]">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <div className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/comprehensive-services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20"
          >
            View All Services
            <Rocket className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
