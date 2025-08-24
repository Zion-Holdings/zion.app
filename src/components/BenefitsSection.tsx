
import { GradientHeading } from "./GradientHeading";

import { Bot, Clock, Globe, TrendingDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    delay: 0,
    features: ["Smart algorithms", "Instant matching", "Quality assurance"]
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-blue",
    delay: 0.1,
    features: ["24/7 availability", "Multi-language support", "Local expertise"]
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-zion-blue to-zion-cyan",
    delay: 0.2,
    features: ["Live chat support", "Expert assistance", "Quick response"]
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-zion-purple-light to-zion-cyan",
    delay: 0.3,
    features: ["Direct pricing", "No hidden fees", "Bulk discounts"]
  },
];

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section 
      className="py-20 bg-zion-blue-light relative overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-zion-purple to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-zion-cyan to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GradientHeading id="benefits-heading">Why Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
          
          {/* Enhanced subtitle with sparkles */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Trusted by 10,000+ companies worldwide</span>
            <Sparkles className="w-5 h-5 text-zion-cyan" />
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative group">
                {/* Enhanced background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                
                <div className="relative bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300 rounded-xl border border-zion-purple/20 hover:border-zion-purple/50 p-8 h-full">
                  {/* Icon with enhanced styling */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full" />
                        <span className="text-zion-slate-light/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-full text-zion-cyan hover:bg-zion-blue hover:border-zion-purple/50 transition-all duration-300">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Ready to get started?</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
