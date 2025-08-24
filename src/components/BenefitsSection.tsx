
import { GradientHeading } from "./GradientHeading";
import { Bot, Clock, Globe, TrendingDown, Sparkles, Shield, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    stats: "95% Match Rate"
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    stats: "150+ Countries"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    stats: "< 2min Response"
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    stats: "40% Savings"
  },
];

export function BenefitsSection() {
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
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Why Choose Zion</span>
            <Sparkles className="w-6 h-6 text-zion-cyan" />
          </div>
          
          <GradientHeading className="text-4xl md:text-5xl mb-6">Why Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <div className={`h-full rounded-2xl border-2 ${benefit.borderColor} ${benefit.bgColor} bg-zion-blue/80 backdrop-blur-sm p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:border-zion-purple/50`}>
                <div className={`rounded-2xl w-16 h-16 bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-cyan font-semibold bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {benefit.stats}
                  </span>
                  <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors">
                    <Zap className="w-4 h-4 text-zion-purple" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-8 bg-zion-blue-dark/50 backdrop-blur-sm px-8 py-6 rounded-2xl border border-zion-purple/20">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">Enterprise Security</span>
            </div>
            <div className="w-px h-8 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-slate-light">10K+ Users</span>
            </div>
            <div className="w-px h-8 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">99.9% Uptime</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
