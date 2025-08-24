
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
    features: ["24/7 Support", "Global Coverage", "Certified Experts"],
    stats: "500+ Services"
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
    features: ["AI Matching", "Verified Profiles", "Skill Validation"],
    stats: "10,000+ Talents"
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    features: ["Flexible Rental", "Buy Options", "Maintenance Included"],
    stats: "1,000+ Items"
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
    features: ["Latest Tech", "Research Labs", "Startup Solutions"],
    stats: "100+ Innovations"
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    icon: <Zap className="w-5 h-5" />,
    description: "24/7 global technical support"
  },
  {
    title: "AI Consulting",
    link: "/ai-consulting",
    icon: <Lightbulb className="w-5 h-5" />,
    description: "Expert AI strategy & implementation"
  },
  {
    title: "Cloud Solutions",
    link: "/cloud-solutions",
    icon: <Globe className="w-5 h-5" />,
    description: "Scalable cloud infrastructure"
  },
  {
    title: "Security Services",
    link: "/security-services",
    icon: <Shield className="w-5 h-5" />,
    description: "Cybersecurity & compliance"
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link 
                to={category.link} 
                className="group block h-full"
              >
                <div className="rounded-2xl overflow-hidden h-full border border-zion-blue-light bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-zion-cyan"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="text-zion-cyan text-sm font-semibold mb-4">
                    {category.stats}
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm group-hover:text-zion-cyan transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Link 
                  to={service.link}
                  className="block p-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-xl text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-zion-purple group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="font-semibold text-sm">{service.title}</span>
                  </div>
                  <p className="text-xs text-zion-slate-light leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            to="/categories" 
            className="inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-dark transition-colors text-lg font-semibold group"
          >
            Explore All Categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
