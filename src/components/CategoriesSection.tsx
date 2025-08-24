
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "AI Services",
    description: "Cutting-edge AI solutions, machine learning models, and intelligent automation",
    icon: <Zap className="w-10 h-10" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    gradient: "bg-gradient-to-br from-zion-purple/20 to-zion-purple-dark/20",
  },
  {
    title: "Tech Talent",
    description: "Connect with AI experts, developers, and tech specialists worldwide",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-cyan-dark",
    gradient: "bg-gradient-to-br from-zion-cyan/20 to-zion-cyan-dark/20",
  },
  {
    title: "Hardware & Equipment",
    description: "Rent or buy specialized hardware, servers, and cutting-edge devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-zion-blue to-zion-blue-dark",
    gradient: "bg-gradient-to-br from-zion-blue/20 to-zion-blue-dark/20",
  },
  {
    title: "Innovation Hub",
    description: "Discover breakthrough solutions and emerging technologies",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-zion-purple-light to-zion-cyan",
    gradient: "bg-gradient-to-br from-zion-purple-light/20 to-zion-cyan/20",
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    description: "Professional IT support at your location",
    icon: <Shield className="w-5 h-5" />,
    link: "/it-onsite-services"
  },
  {
    title: "AI Consulting",
    description: "Strategic AI implementation guidance",
    icon: <Lightbulb className="w-5 h-5" />,
    link: "/ai-consulting"
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions",
    icon: <Briefcase className="w-5 h-5" />,
    link: "/custom-development"
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
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${'#8c15e9'} 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientHeading className="text-4xl md:text-5xl mb-6">Explore Our Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of AI services, tech talent, cutting-edge equipment, and breakthrough innovations
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block h-full">
                <motion.div 
                  className={`rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 ${category.gradient}`}
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed group-hover:text-zion-slate-light/80 transition-colors duration-300">
                    {category.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-zion-cyan ml-auto" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group flex items-center gap-3 px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/40 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="text-zion-purple group-hover:text-zion-cyan transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="text-center">
                  <div className="font-semibold">{service.title}</div>
                  <div className="text-sm text-zion-slate-light opacity-80">{service.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors duration-300 text-lg font-semibold hover:text-zion-cyan-light"
          >
            Explore All Categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
