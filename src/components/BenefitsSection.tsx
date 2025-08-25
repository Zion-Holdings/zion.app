import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Users, Clock, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Get your projects delivered in record time with our efficient development process"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and applications"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "Work with certified professionals with years of industry experience"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need help or have questions"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with our comprehensive testing process"
  }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple mb-6">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}