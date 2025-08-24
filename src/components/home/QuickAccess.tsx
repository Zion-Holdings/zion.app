import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone,
  Brain,
  Globe,
  Zap
} from "lucide-react";

const quickLinks = [
  {
    title: "AI Talent Matcher",
    description: "Find perfect matches using AI",
    icon: <Brain className="h-6 w-6" />,
    link: "/match",
    color: "from-purple-500 to-indigo-600",
    gradient: "from-zion-purple to-zion-purple-dark"
  },
  {
    title: "Talent Directory",
    description: "Browse verified professionals",
    icon: <Users className="h-6 w-6" />,
    link: "/talent",
    color: "from-blue-500 to-cyan-600",
    gradient: "from-zion-cyan to-zion-cyan-dark"
  },
  {
    title: "Services Marketplace",
    description: "Discover tech services",
    icon: <Briefcase className="h-6 w-6" />,
    link: "/services",
    color: "from-green-500 to-emerald-600",
    gradient: "from-zion-cyan to-zion-purple"
  },
  {
    title: "Equipment Catalog",
    description: "Find tech hardware",
    icon: <Settings className="h-6 w-6" />,
    link: "/equipment",
    color: "from-orange-500 to-red-600",
    gradient: "from-zion-purple to-zion-cyan"
  },
  {
    title: "Community Hub",
    description: "Connect with professionals",
    icon: <MessageSquare className="h-6 w-6" />,
    link: "/community",
    color: "from-pink-500 to-rose-600",
    gradient: "from-zion-cyan to-zion-purple-light"
  },
  {
    title: "Mobile App",
    description: "Zion on the go",
    icon: <Smartphone className="h-6 w-6" />,
    link: "/mobile-launch",
    color: "from-indigo-500 to-purple-600",
    gradient: "from-zion-purple to-zion-cyan"
  },
  {
    title: "Global Services",
    description: "24/7 worldwide support",
    icon: <Globe className="h-6 w-6" />,
    link: "/it-onsite-services",
    color: "from-teal-500 to-cyan-600",
    gradient: "from-zion-cyan to-zion-blue"
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI services",
    icon: <Zap className="h-6 w-6" />,
    link: "/zion-hire-ai",
    color: "from-yellow-500 to-orange-600",
    gradient: "from-zion-purple to-zion-cyan-light"
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

export function QuickAccess() {
  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access to Everything
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Jump directly to our most popular features and start exploring the future of tech talent matching
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {quickLinks.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                href={link.link} 
                className="group block"
              >
                <div className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/25 hover:scale-105 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${link.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {link.icon}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm leading-tight">{link.title}</h3>
                    <p className="text-zion-slate-light text-xs mb-3 leading-tight flex-grow">{link.description}</p>
                    <div className="flex items-center text-zion-cyan text-xs mt-auto group-hover:text-zion-cyan-light transition-colors duration-300">
                      <span>Explore</span>
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
                                <Link href="/marketplace">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25">
              <span>Explore Full Marketplace</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}