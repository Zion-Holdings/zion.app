
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
    gradient: "from-zion-purple to-zion-purple-dark",
    delay: 0.1,
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-zion-cyan to-zion-blue",
    delay: 0.2,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    gradient: "from-zion-cyan-light to-zion-cyan",
    delay: 0.3,
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    gradient: "from-zion-purple-light to-zion-purple",
    delay: 0.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
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

export function BenefitsSection() {
  return (
    <section className="py-20 bg-zion-blue-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-zion-purple" />
            <GradientHeading>Why Zion?</GradientHeading>
            <Sparkles className="w-8 h-8 text-zion-cyan" />
          </div>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <FeatureCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 shadow-lg hover:shadow-xl hover:shadow-zion-purple/25"
                gradient={benefit.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-8 text-zion-slate-light opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Trusted by 10,000+ companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-zion-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm font-medium">99.9% uptime guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-zion-cyan-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-sm font-medium">ISO 27001 certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
