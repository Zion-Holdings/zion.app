
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    gradient: "from-zion-purple/20 to-zion-purple-dark/20",
    features: ["24/7 Support", "Expert Team", "Custom Solutions"],
    stats: "500+ Services"
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-blue",
    gradient: "from-zion-cyan/20 to-zion-blue/20",
    features: ["AI Experts", "Global Network", "Verified Profiles"],
    stats: "10K+ Experts"
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-zion-cyan-light to-zion-cyan",
    gradient: "from-zion-cyan-light/20 to-zion-cyan/20",
    features: ["High-Performance", "Flexible Rental", "24/7 Monitoring"],
    stats: "1000+ Devices"
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-zion-purple-light to-zion-purple",
    gradient: "from-zion-purple-light/20 to-zion-purple/20",
    features: ["Latest Tech", "AI Solutions", "Future-Ready"],
    stats: "100+ Innovations"
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    icon: <Shield className="w-5 h-5" />,
    description: "Professional on-site technical support"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services",
    icon: <Rocket className="w-5 h-5" />,
    description: "End-to-end technology solutions"
  },
  {
    title: "AI Integration",
    link: "/ai-integration",
    icon: <Sparkles className="w-5 h-5" />,
    description: "Seamless AI implementation"
  },
  {
    title: "Cloud Solutions",
    link: "/cloud-solutions",
    icon: <Zap className="w-5 h-5" />,
    description: "Scalable cloud infrastructure"
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
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
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
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation. 
              Everything you need to accelerate your digital transformation in one place.
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={category.link} className="group block h-full">
                <motion.div 
                  className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Icon with enhanced background */}
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="text-zion-cyan font-semibold text-sm mb-4">
                    {category.stats}
                  </div>

                  {/* CTA arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced featured services section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link to={service.link} className="group block">
                  <div className="px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-xl text-zion-cyan transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-zion-purple/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-zion-purple-light group-hover:text-zion-purple transition-colors">
                        {service.icon}
                      </div>
                      <span className="font-semibold text-sm">{service.title}</span>
                    </div>
                    <p className="text-zion-slate-light/80 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* View all services button */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              to="/comprehensive-services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple border border-zion-purple/50 hover:border-zion-purple rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-zion-purple/25 font-semibold group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
