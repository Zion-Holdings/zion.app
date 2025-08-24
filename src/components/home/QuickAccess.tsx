import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone,
  Zap,
  TrendingUp
} from "lucide-react";

export function QuickAccess() {
  const quickLinks = [
    {
      title: "AI Talent Matcher",
      description: "Find the perfect match for your project",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match",
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30"
    },
    {
      title: "Talent Directory",
      description: "Browse verified professionals",
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent",
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30"
    },
    {
      title: "Services Marketplace",
      description: "Discover tech services",
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
      link: "/services",
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30"
    },
    {
      title: "Equipment & Tools",
      description: "Rent or buy tech equipment",
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment",
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30"
    },
    {
      title: "Community Forum",
      description: "Connect with tech professionals",
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,
      link: "/community",
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch",
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access to Everything You Need
          </h2>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            Jump directly to the tools and services that will help you succeed in the tech world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={link.link}
                className={`block p-6 rounded-xl border-2 ${link.borderColor} ${link.bgColor} hover:border-opacity-60 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} p-2`}>
                    {link.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 text-zion-slate-light group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {link.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-zion-cyan">
            <Zap className="h-5 w-5" />
            <span className="text-lg font-semibold">
              Everything you need, all in one place
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
