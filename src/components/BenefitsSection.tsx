
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown, Shield, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced machine learning algorithms analyze your requirements and match you with the perfect service providers, products, and talent. Save hours of research and get optimal results every time.",
    icon: <Bot className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    stats: "95% accuracy rate"
  },
  {
    title: "Global Talent Network",
    description: "Access a worldwide network of verified tech professionals, AI experts, and innovative service providers. Break down geographic barriers and find the best solutions from anywhere in the world.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-cyan-dark",
    stats: "150+ countries"
  },
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols protect your data, transactions, and communications. All providers are vetted and verified, ensuring a safe and trustworthy marketplace experience.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    stats: "99.9% uptime"
  },
  {
    title: "Instant Scalability",
    description: "Scale your projects up or down instantly. Access on-demand resources, flexible contracts, and pay-as-you-go services that grow with your business needs.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-zion-purple-light to-zion-cyan",
    stats: "24/7 availability"
  },
  {
    title: "Cost Optimization",
    description: "Eliminate middlemen and reduce costs by up to 60%. Direct connections with service providers mean better pricing, transparent fees, and no hidden costs.",
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-zion-cyan-light to-zion-blue",
    stats: "60% cost savings"
  },
  {
    title: "Expert Support Team",
    description: "Our dedicated team of tech experts is available 24/7 to assist with project matching, dispute resolution, and technical guidance. Get help when you need it most.",
    icon: <Users className="w-8 h-8" />,
    color: "from-zion-purple to-zion-blue",
    stats: "24/7 support"
  },
];

export function BenefitsSection() {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-light to-zion-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, ${'#22ddd2'} 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientHeading className="text-4xl md:text-5xl mb-6">Why Choose Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of AI-powered tech marketplace with features designed to maximize efficiency, 
            security, and value for businesses and individuals alike
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                <div className="relative h-full bg-zion-blue/80 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-purple/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full">
                    <Award className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-cyan text-sm font-medium">{benefit.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full">
            <Shield className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Trusted by 10,000+ businesses worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
