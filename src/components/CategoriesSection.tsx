
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services"

=======
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
>>>>>>> 76498b828afce1ee85e5887e395f97c6e3f5a625
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </div>
        )}
        
<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
=======
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
>>>>>>> 76498b828afce1ee85e5887e395f97c6e3f5a625
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
<<<<<<< HEAD
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>
            ))}
            <Link 
              to="/comprehensive-services"
              className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple border border-zion-purple/50 hover:border-zion-purple rounded-full text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Categories →
=======
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
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
>>>>>>> 76498b828afce1ee85e5887e395f97c6e3f5a625
          </Link>
        </div>
      </div>
    </section>
  );
}
