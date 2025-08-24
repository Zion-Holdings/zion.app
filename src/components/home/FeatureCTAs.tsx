
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
  Phone,
  Mail,
  Globe,
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
    color: "from-yellow-500 to-amber-600",
    cta: "Web3 Solutions",
    benefits: ["Smart Contracts", "DeFi", "NFTs"],
    badge: "Innovative"
  }
];

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
      duration: 0.6,
              ease: "easeOut" as const
    }
  }
};

export function FeatureCTAs() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Technology Services</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our comprehensive suite of professional technology services designed to accelerate your business growth, 
            enhance security, and drive innovation across all aspects of your organization.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group">
                                            <Link href={feature.link} className="block">
                  <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/25">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      {feature.badge && (
                        <Badge className="bg-zion-purple text-white border-0 text-xs">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">{feature.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{feature.description}</p>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-xs text-zion-slate-light mb-1">
                          <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan group-hover:text-zion-cyan-light transition-all duration-300"
                    >
                      {feature.cta}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
                                <Link href="/comprehensive-services">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6 shadow-lg hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Enhanced Contact Information */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-zion-purple/20 rounded-full px-4 py-2 border border-zion-purple/30 mb-4">
                <Star className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm text-zion-cyan font-medium">Ready to Transform Your Business?</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-zion-slate-light mb-6">
                Our expert team is ready to help you implement the perfect technology solutions. 
                Get in touch today for a personalized consultation and quote.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white shadow-lg hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105">
                <Phone className="h-4 w-4 mr-2" />
                Call +1 302 464 0950
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 transition-all duration-300">
                <Mail className="h-4 w-4 mr-2" />
                Email kleber@ziontechgroup.com
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 transition-all duration-300">
                <Globe className="h-4 w-4 mr-2" />
                Visit ziontechgroup.com
              </Button>
            </div>
            
            <div className="bg-zion-blue/50 rounded-lg p-4 border border-zion-blue-light/30">
              <div className="text-zion-slate-light text-sm">
                <p className="font-medium mb-2">📍 Main Office:</p>
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p className="mt-1 text-zion-cyan">🌍 Global Services Available • 24/7 Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
