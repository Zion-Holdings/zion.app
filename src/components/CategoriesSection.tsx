
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "AI & Development",
    description: "Custom AI solutions, software development, and technical consulting",
    icon: <Zap className="w-8 h-8" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    features: ["Custom AI Models", "Full-Stack Development", "API Integration"]
  },
  {
    title: "Tech Talent",
    description: "Connect with AI experts, developers, and tech specialists worldwide",
    icon: <Users className="w-8 h-8" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-blue",
    features: ["AI Engineers", "DevOps Specialists", "Data Scientists"]
  },
  {
    title: "Hardware & Equipment",
    description: "Rent or buy specialized hardware, servers, and cutting-edge devices",
    icon: <HardDrive className="w-8 h-8" />,
    link: "/equipment",
    color: "from-zion-blue to-zion-blue-dark",
    features: ["GPU Clusters", "Quantum Computers", "Edge Devices"]
  },
  {
    title: "Innovation Hub",
    description: "Discover cutting-edge solutions and breakthrough technologies",
    icon: <Lightbulb className="w-8 h-8" />,
    link: "/category/innovation",
    color: "from-zion-cyan-light to-zion-cyan",
    features: ["R&D Projects", "Patent Services", "Tech Consulting"]
  },
];

const specialServices = [
  {
    title: "24/7 IT Onsite Services",
    link: "/it-onsite-services",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Global Tech Support",
    link: "/global-support",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Enterprise Solutions",
    link: "/enterprise",
    icon: <Shield className="w-5 h-5" />
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Explore Our Tech Ecosystem
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of cutting-edge services, world-class talent, 
              revolutionary equipment, and breakthrough innovations
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block h-full">
                <div className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/50 to-zion-blue-dark p-8 transition-all duration-500 hover:border-zion-purple/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 backdrop-blur-sm">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Premium Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 hover:from-zion-purple/30 hover:to-zion-cyan/30 border border-zion-purple/30 hover:border-zion-purple/50 rounded-2xl text-zion-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20 backdrop-blur-sm"
              >
                {service.icon}
                <span className="font-medium">{service.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-3 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors text-lg font-medium py-2"
          >
            Explore All Categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
