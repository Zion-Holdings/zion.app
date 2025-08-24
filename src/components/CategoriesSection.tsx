
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Star, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-8 h-8" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/10",
    borderColor: "border-zion-purple/20",
    features: ["24/7 Support", "Global Coverage", "Expert Teams"]
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-8 h-8" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    borderColor: "border-zion-cyan/20",
    features: ["Vetted Experts", "AI Matching", "Instant Connect"]
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-8 h-8" />,
    link: "/equipment",
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/10",
    borderColor: "border-zion-blue/20",
    features: ["Premium Hardware", "Flexible Rental", "Global Shipping"]
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-8 h-8" />,
    link: "/category/innovation",
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "bg-zion-purple-light/10",
    borderColor: "border-zion-purple-light/20",
    features: ["Latest Tech", "AI Solutions", "Future Ready"]
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    icon: <Globe className="w-5 h-5" />,
    description: "Global 24/7 support"
  },
  {
    title: "AI Consulting",
    link: "/services/ai-consulting",
    icon: <Zap className="w-5 h-5" />,
    description: "Expert AI guidance"
  },
  {
    title: "Tech Training",
    link: "/services/training",
    icon: <Star className="w-5 h-5" />,
    description: "Professional development"
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
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
            <GradientHeading className="mb-4">Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation. 
              Everything you need to succeed in the digital age.
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block h-full">
                <motion.div 
                  className={`rounded-xl overflow-hidden h-full border ${category.borderColor} ${category.bgColor} p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20`}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">{category.description}</p>
                  
                  {/* Feature tags */}
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
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
                className="group px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 flex items-center gap-3 hover:scale-105"
              >
                <span className="text-zion-purple-light group-hover:text-zion-purple transition-colors">
                  {service.icon}
                </span>
                <div className="text-center">
                  <div className="font-semibold">{service.title}</div>
                  <div className="text-xs text-zion-slate-light">{service.description}</div>
                </div>
              </Link>
            ))}
            <Link 
              to="/services-pricing"
              className="px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark border border-zion-purple/50 hover:border-zion-purple rounded-full text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors pb-1 hover:text-zion-cyan-light"
          >
            <span className="font-medium">View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
