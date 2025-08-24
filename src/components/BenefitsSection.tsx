
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown, Sparkles, Shield, Zap, Users, CheckCircle, Star, Award, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-10 h-10" />,
    color: "from-zion-purple via-zion-purple-light to-zion-purple-dark",
    bgColor: "bg-gradient-to-br from-zion-purple/10 via-zion-purple-light/5 to-zion-purple-dark/10",
    borderColor: "border-zion-purple/30",
    stats: "95% Match Rate",
    features: ["Machine Learning", "Smart Recommendations", "Instant Results"]
  },
  {
    title: "Global Talent Network",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-10 h-10" />,
    color: "from-zion-cyan via-zion-cyan-light to-zion-cyan-dark",
    bgColor: "bg-gradient-to-br from-zion-cyan/10 via-zion-cyan-light/5 to-zion-cyan-dark/10",
    borderColor: "border-zion-cyan/30",
    stats: "150+ Countries",
    features: ["Worldwide Coverage", "Local Expertise", "Cultural Understanding"]
  },
  {
    title: "24/7 Premium Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-10 h-10" />,
    color: "from-emerald-500 via-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    stats: "< 2min Response",
    features: ["Instant Chat", "Expert Team", "Priority Handling"]
  },
  {
    title: "Cost Optimization",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-10 h-10" />,
    color: "from-amber-500 via-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10",
    borderColor: "border-amber-500/30",
    stats: "40% Savings",
    features: ["Direct Pricing", "No Hidden Fees", "Volume Discounts"]
  },
];

const additionalBenefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "10K+ Users",
    description: "Trusted by leading companies"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "99.9% Uptime",
    description: "Reliable service guarantee"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "ISO Certified",
    description: "International quality standards"
  }
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
    <section className="py-24 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
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
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-7 h-7 text-zion-cyan" />
            <span className="text-zion-cyan text-base font-semibold bg-zion-cyan/10 px-4 py-2 rounded-full">Why Choose Zion</span>
            <Sparkles className="w-7 h-7 text-zion-cyan" />
          </div>
          
          <GradientHeading className="text-5xl md:text-6xl lg:text-7xl mb-8 font-black">
            The Zion Advantage
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed font-medium">
            Experience the next generation of tech marketplace with cutting-edge features designed to maximize efficiency, security, and value
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div 
                className={`h-full rounded-3xl border-2 ${benefit.borderColor} ${benefit.bgColor} bg-zion-blue/80 backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/30 hover:border-zion-purple/60 group-hover:bg-zion-blue/90`}
                variants={cardVariants}
              >
                <motion.div 
                  className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-8 shadow-2xl`}
                  variants={iconVariants}
                >
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                {/* Feature highlights */}
                <div className="mb-6 space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-cyan-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-cyan font-semibold bg-zion-cyan/15 px-4 py-2 rounded-full border border-zion-cyan/30">
                    {benefit.stats}
                  </span>
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-zion-purple" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced trust indicators */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold text-white mb-12">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
                  <div className="text-zion-cyan">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success metrics */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-12 bg-gradient-to-r from-zion-blue-dark/60 to-zion-purple/20 backdrop-blur-xl px-12 py-8 rounded-3xl border border-zion-purple/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light">Customer Satisfaction</div>
            </div>
            <div className="w-px h-16 bg-zion-purple/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">10K+</div>
              <div className="text-zion-slate-light">Active Users</div>
            </div>
            <div className="w-px h-16 bg-zion-purple/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan-light mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
