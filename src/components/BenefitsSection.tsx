
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown, Zap, Shield, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    features: ["Smart Recommendations", "Skill-Based Matching", "Real-time Updates"]
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-600",
    features: ["150+ Countries", "24/7 Coverage", "Local Expertise"]
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-emerald-500 to-green-600",
    features: ["Instant Chat", "Phone Support", "Email Response"]
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    features: ["No Hidden Fees", "Transparent Pricing", "Bulk Discounts"]
  },
  {
    title: "Quality Assurance",
    description: "Every service provider and product is thoroughly vetted and quality-tested to ensure you receive only the best solutions.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    features: ["Background Checks", "Portfolio Reviews", "Client Feedback"]
  },
  {
    title: "Community Network",
    description: "Join a thriving community of tech professionals, share knowledge, and collaborate on innovative projects.",
    icon: <Users className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    features: ["Expert Forums", "Networking Events", "Knowledge Sharing"]
  }
];

const stats = [
  { number: "50K+", label: "Happy Clients" },
  { number: "100K+", label: "Projects Completed" },
  { number: "150+", label: "Countries Served" },
  { number: "99.9%", label: "Uptime" }
];

export function BenefitsSection() {
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
    <section className="py-20 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:25px_25px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientHeading>Why Choose Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </motion.div>
        
        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-zion-blue/20 rounded-2xl border border-zion-blue-light/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-zion-slate-light text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="h-full bg-gradient-to-br from-zion-blue/80 to-zion-blue-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Features list */}
                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-zion-cyan"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future of Tech Services?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of companies already benefiting from Zion's innovative platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
