
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Sparkles, Zap, Globe, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "AI & Tech Services",
    description: "Cutting-edge AI solutions, development, consulting, and IT support",
    icon: <Sparkles className="w-12 h-12" />,
    link: "/services",
    color: "from-zion-purple via-zion-purple-light to-zion-purple-dark",
    bgColor: "bg-gradient-to-br from-zion-purple/10 via-zion-purple-light/5 to-zion-purple-dark/10",
    borderColor: "border-zion-purple/30",
    hoverColor: "hover:border-zion-purple/60",
    stats: "500+ Services",
    features: ["AI Integration", "Cloud Solutions", "24/7 Support"]
  },
  {
    title: "Global Talent Network",
    description: "Connect with world-class AI experts, developers, and tech specialists",
    icon: <Users className="w-12 h-12" />,
    link: "/talent",
    color: "from-zion-cyan via-zion-cyan-light to-zion-cyan-dark",
    bgColor: "bg-gradient-to-br from-zion-cyan/10 via-zion-cyan-light/5 to-zion-cyan-dark/10",
    borderColor: "border-zion-cyan/30",
    hoverColor: "hover:border-zion-cyan/60",
    stats: "10K+ Experts",
    features: ["Vetted Professionals", "Global Reach", "Instant Matching"]
  },
  {
    title: "Advanced Equipment",
    description: "Access to cutting-edge hardware, servers, and specialized devices",
    icon: <HardDrive className="w-12 h-12" />,
    link: "/equipment",
    color: "from-amber-500 via-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10",
    borderColor: "border-amber-500/30",
    hoverColor: "hover:border-amber-500/60",
    stats: "2K+ Items",
    features: ["High-Performance", "Flexible Rental", "Expert Support"]
  },
  {
    title: "Innovation Hub",
    description: "Discover breakthrough technologies and revolutionary solutions",
    icon: <Lightbulb className="w-12 h-12" />,
    link: "/category/innovation",
    color: "from-emerald-500 via-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    hoverColor: "hover:border-emerald-500/60",
    stats: "100+ Projects",
    features: ["Latest Tech", "Research & Development", "Future Solutions"]
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    description: "Professional IT support at your location",
    link: "/it-onsite-services",
    icon: <Zap className="w-5 h-5" />,
    color: "from-zion-purple to-zion-cyan"
  },
  {
    title: "AI Consultation",
    description: "Expert guidance on AI implementation",
    link: "/ai-consultation",
    icon: <Sparkles className="w-5 h-5" />,
    color: "from-zion-cyan to-zion-purple"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance",
    link: "/support",
    icon: <Clock className="w-5 h-5" />,
    color: "from-zion-purple to-zion-cyan"
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
        staggerChildren: 0.15,
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

  const cardVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-zion-cyan/5 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "4s" }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-zion-cyan/20 rotate-45 opacity-30 animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-zion-purple/20 rounded-full opacity-25 animate-bounce" style={{ animationDelay: "3s" }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {showTitle && (
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <GradientHeading className="text-5xl md:text-6xl lg:text-7xl mb-8 font-black">
              Explore Our Ecosystem
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover our comprehensive ecosystem of cutting-edge tech services, global talent, advanced equipment, and breakthrough innovations
            </p>
            
            {/* Enhanced stats display */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-zion-cyan-light">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">500+</div>
                <div className="text-sm text-zion-slate-light">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple">10K+</div>
                <div className="text-sm text-zion-slate-light">Expert Talents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan-light">2K+</div>
                <div className="text-sm text-zion-slate-light">Equipment Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">100+</div>
                <div className="text-sm text-zion-slate-light">Innovation Projects</div>
              </div>
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Link 
                to={category.link} 
                className="block h-full"
              >
                <motion.div 
                  className={`rounded-3xl overflow-hidden h-full border-2 ${category.borderColor} ${category.bgColor} bg-zion-blue-dark/60 backdrop-blur-xl p-8 transition-all duration-500 ${category.hoverColor} hover:shadow-2xl hover:shadow-zion-purple/30 group-hover:bg-zion-blue-dark/80`}
                  variants={cardVariants}
                >
                  <motion.div 
                    className={`rounded-2xl w-24 h-24 bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-2xl`}
                    variants={iconVariants}
                  >
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed text-base">
                    {category.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="mb-6 space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-cyan-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-cyan font-semibold bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {category.stats}
                    </span>
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced special services section */}
        <motion.div 
          className="mt-20"
          variants={itemVariants}
        >
          <h3 className="text-center text-3xl font-bold text-white mb-12">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {specialServices.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to={service.link}
                  className="group block px-10 py-6 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 hover:from-zion-purple/30 hover:to-zion-cyan/30 border border-zion-purple/40 hover:border-zion-purple/60 rounded-2xl text-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/25 backdrop-blur-xl"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-zion-slate-light mb-3">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 text-zion-cyan-light group-hover:text-zion-cyan transition-colors">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced CTA section */}
        <motion.div 
          className="mt-20 flex justify-center"
          variants={itemVariants}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-3 text-zion-cyan border-2 border-zion-cyan hover:border-zion-cyan-light hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 text-xl font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transform hover:scale-105"
          >
            <Globe className="w-6 h-6" />
            Explore All Categories
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
