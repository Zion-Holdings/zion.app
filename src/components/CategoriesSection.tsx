
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Settings, 
  Code, 
  Globe, 
  Zap, 
  Shield,
  LinkIcon,
  Brain,
  Rocket,
  Target,
  Star
} from 'lucide-react';
import { GradientHeading } from './GradientHeading';

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    icon: <Brain className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    link: "/ai-services",
    features: ["Neural Networks", "Computer Vision", "NLP", "Predictive Analytics"]
  },
  {
    title: "Web Development",
    description: "Modern web applications and platforms",
    icon: <Code className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-cyan-dark",
    link: "/expanded-services?category=web-development",
    features: ["React", "Node.js", "Full-Stack", "Progressive Web Apps"]
  },
  {
    title: "Mobile Development",
    description: "iOS and Android applications",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    link: "/expanded-services?category=mobile-development",
    features: ["Native Apps", "Cross-Platform", "UI/UX", "App Store Optimization"]
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment solutions",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/expanded-services?category=cloud-devops",
    features: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Cybersecurity",
    description: "Protection and security services",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    link: "/expanded-services?category=cybersecurity",
    features: ["Penetration Testing", "Security Audits", "Incident Response", "Compliance"]
  },
  {
    title: "Data Science",
    description: "Analytics and insights solutions",
    icon: <Target className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    link: "/expanded-services?category=data-science",
    features: ["Big Data", "Business Intelligence", "Data Visualization", "Statistical Analysis"]
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions and smart contracts",
    icon: <LinkIcon className="w-8 h-8" />,
    color: "from-teal-500 to-blue-600",
    link: "/expanded-services?category=blockchain-web3",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Enterprise Solutions",
    description: "Large-scale business applications",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    link: "/expanded-services?category=enterprise",
    features: ["ERP Systems", "CRM", "Workflow Automation", "Integration"]
=======
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-500/50",
    stats: "500+ Services"
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    hoverColor: "hover:border-cyan-500/50",
    stats: "10K+ Experts"
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    hoverColor: "hover:border-amber-500/50",
    stats: "2K+ Items"
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    hoverColor: "hover:border-emerald-500/50",
    stats: "100+ Projects"
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    icon: <Sparkles className="w-4 h-4" />
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77
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

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <GradientHeading className="text-4xl md:text-5xl mb-6">Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover="hover"
            >
              <Link 
                to={category.link} 
                className="group block h-full"
              >
                <div className={`rounded-2xl overflow-hidden h-full border-2 ${category.borderColor} ${category.bgColor} bg-zion-blue-dark/50 backdrop-blur-sm p-6 transition-all duration-300 ${category.hoverColor} hover:shadow-2xl hover:shadow-zion-purple/20`}>
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {category.description}
                  </p>
<<<<<<< HEAD
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                        <Star className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan text-sm font-medium">Explore</span>
                    <div className="w-8 h-8 rounded-full bg-zion-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-4 h-4 text-zion-cyan" />
                    </div>
=======

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zion-cyan font-medium">
                      {category.stats}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
<<<<<<< HEAD
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/comprehensive-services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <Rocket className="w-5 h-5" />
=======
          className="mt-12"
          variants={itemVariants}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group px-8 py-4 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 hover:from-zion-purple/30 hover:to-zion-cyan/30 border border-zion-purple/30 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  {service.icon}
                  {service.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          variants={itemVariants}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors text-lg font-medium hover:text-zion-cyan-light"
          >
            Explore All Categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
