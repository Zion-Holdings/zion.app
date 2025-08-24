
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
    delay: 0.1,
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
    delay: 0.2,
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    delay: 0.3,
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
    delay: 0.4,
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
  },
  {
    title: "Micro SAAS Services",
    link: "/micro-saas-services"
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-zion-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 221, 210, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(140, 21, 233, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: category.delay }}
            >
              <Link 
                to={category.link} 
                className="group block"
              >
                <motion.div 
                  className="rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300">
                    {category.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={service.link}
                  className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25"
                >
                  {service.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors duration-300 hover:text-zion-cyan-light group"
          >
            <span className="group-hover:mr-2 transition-all duration-300">View All Categories</span>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300"> →</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
