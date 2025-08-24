
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
    gradient: "from-zion-purple to-zion-purple-dark",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
    gradient: "from-zion-cyan to-zion-blue",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    gradient: "from-zion-cyan-light to-zion-cyan",
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
    gradient: "from-zion-purple-light to-zion-purple",
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Professional on-site technical support"
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

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
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
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Link to={category.link} className="group block h-full">
                <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-slate-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group px-6 py-3 bg-gradient-to-r from-zion-blue-light to-zion-cyan hover:from-zion-cyan hover:to-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-slate-dark font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                <span className="flex items-center gap-2">
                  {service.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-dark transition-colors font-medium text-lg"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
