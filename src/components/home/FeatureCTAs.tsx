
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Code, 
  Settings, 
  Link as LinkIcon,
  Mail,
  Star,
  CheckCircle
} from "lucide-react";

const features = [
  {
    title: "AI & Machine Learning",
    description: "Transform your business with intelligent automation and data-driven insights",
    icon: <Brain className="w-8 h-8" />,
    link: "/comprehensive-services#ai-ml",
    color: "from-purple-500 to-indigo-600",
    cta: "Explore AI Services",
    benefits: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
    badge: "Popular"
  },
  {
    title: "Cybersecurity",
    description: "Protect your organization with comprehensive security solutions and monitoring",
    icon: <Shield className="w-8 h-8" />,
    link: "/comprehensive-services#cybersecurity",
    color: "from-red-500 to-pink-600",
    cta: "Secure Your Business",
    benefits: ["Threat Detection", "Incident Response", "Compliance"],
    badge: "Critical"
  },
  {
    title: "Cloud & Infrastructure",
    description: "Modernize your infrastructure with cloud solutions and DevOps automation",
    icon: <Cloud className="w-8 h-8" />,
    link: "/comprehensive-services#cloud-infrastructure",
    color: "from-blue-500 to-cyan-600",
    cta: "Cloud Solutions",
    benefits: ["AWS/Azure/GCP", "Kubernetes", "CI/CD"],
    badge: "Trending"
  },
  {
    title: "Data & Analytics",
    description: "Unlock business insights with advanced analytics and data engineering",
    icon: <Database className="w-8 h-8" />,
    link: "/comprehensive-services#data-analytics",
    color: "from-green-500 to-emerald-600",
    cta: "Data Insights",
    benefits: ["Big Data", "Business Intelligence", "Data Warehousing"],
    badge: "Hot"
  },
  {
    title: "Digital Transformation",
    description: "Accelerate your digital journey with strategic transformation services",
    icon: <Zap className="w-8 h-8" />,
    link: "/comprehensive-services#digital-transformation",
    color: "from-orange-500 to-red-600",
    cta: "Transform Now",
    benefits: ["Process Automation", "Legacy Modernization", "Change Management"],
    badge: "New"
  },
  {
    title: "Web & Mobile",
    description: "Build custom applications and digital experiences for your business",
    icon: <Code className="w-8 h-8" />,
    link: "/comprehensive-services#web-mobile",
    color: "from-indigo-500 to-purple-600",
    cta: "Build Apps",
    benefits: ["React/Next.js", "Mobile Apps", "Progressive Web Apps"],
    badge: "Featured"
  },
  {
    title: "IT Support & Management",
    description: "Ensure smooth IT operations with managed services and support",
    icon: <Settings className="w-8 h-8" />,
    link: "/comprehensive-services#it-support",
    color: "from-gray-500 to-slate-600",
    cta: "Get Support",
    benefits: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk"],
    badge: "Essential"
  },
  {
    title: "Blockchain & Web3",
    description: "Leverage decentralized technologies for innovation and transparency",
    icon: <LinkIcon className="w-8 h-8" />,
    link: "/comprehensive-services#blockchain-web3",
    color: "from-teal-500 to-blue-600",
    cta: "Explore Web3",
    benefits: ["Smart Contracts", "DeFi", "NFTs"],
    badge: "Innovation"
  }
];

export function FeatureCTAs() {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover comprehensive solutions designed to accelerate your business growth and digital transformation
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-zion-blue-light border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <Badge variant="outline" className="border-zion-purple/30 text-zion-cyan">
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={feature.link} className="block">
                  <Button 
                    className="w-full bg-zion-purple hover:bg-zion-purple-dark group-hover:bg-zion-cyan group-hover:text-white transition-all duration-300"
                    size="sm"
                  >
                    {feature.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full mb-6">
            <Star className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">All services include 24/7 support and quality guarantee</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/comprehensive-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                Get Custom Quote
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
