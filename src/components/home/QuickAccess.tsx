
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Users, 
  Briefcase, 
  Settings,
  MessageSquare,
  Smartphone,
  Code,
  BookOpen
} from 'lucide-react';

const quickAccessItems = [
  {
    icon: Search,
    title: "AI Talent Matching",
    description: "Find the perfect match with our AI algorithm",
    href: "/match",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    icon: Users,
    title: "Talent Directory",
    description: "Browse verified professionals worldwide",
    href: "/talent",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  },
  {
    icon: Briefcase,
    title: "Services Marketplace",
    description: "Discover professional tech services",
    href: "/services",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30"
  },
  {
    icon: Settings,
    title: "Equipment Catalog",
    description: "Access specialized hardware and tools",
    href: "/equipment",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30"
  },
  {
    icon: MessageSquare,
    title: "Community Hub",
    description: "Connect with tech professionals",
    href: "/community",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30"
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Take Zion with you on the go",
    href: "/mobile-launch",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30"
  },
  {
    icon: Code,
    title: "Developer Tools",
    description: "API docs, SDKs, and integrations",
    href: "/developers",
    color: "from-gray-500 to-slate-500",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/30"
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Tutorials, courses, and documentation",
    href: "/blog",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30"
  }
];

export function QuickAccess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Access to <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Everything</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Navigate Zion's comprehensive ecosystem with ease. From talent discovery to 
            community engagement, everything you need is just a click away.
          </p>
        </motion.div>

        {/* Quick Access Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {quickAccessItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <Link 
                to={item.href}
                className="block h-full"
              >
                <div className={`${item.bgColor} ${item.borderColor} border-2 p-6 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group-hover:border-opacity-60`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Use our powerful search to discover exactly what you need, or contact our support team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/search"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <Search className="w-4 h-4" />
                Advanced Search
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Get Help
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
