
import { GradientHeading } from "@/components/GradientHeading";
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";
import { motion } from "framer-motion";
import { Mail, Bell, TrendingUp, Users, Globe, Zap } from "lucide-react";

export function NewsletterSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Latest Tech Trends",
      description: "Stay ahead with cutting-edge insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Updates",
      description: "Connect with fellow tech professionals"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Discover worldwide tech opportunities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Innovations",
      description: "Learn about breakthrough AI technologies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate relative overflow-hidden" id="newsletter">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-zion-purple-light rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute top-20 left-10 text-zion-purple/20"
          variants={floatingVariants}
          animate="float"
        >
          <Mail className="w-12 h-12" />
        </motion.div>
        <motion.div 
          className="absolute top-32 right-20 text-zion-cyan/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        >
          <Bell className="w-10 h-10" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-20 text-zion-purple-light/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        >
          <TrendingUp className="w-8 h-8" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">Newsletter</span>
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            </div>
            
            <GradientHeading className="mb-4">Stay Informed & Connected</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest updates on Zion's services, trending tech news, 
              marketplace opportunities, and exclusive insights from industry experts.
            </p>
          </motion.div>

          {/* Benefits grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-zion-purple/30 transition-colors">
                  <div className="text-zion-purple-light group-hover:text-zion-purple transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{benefit.title}</h4>
                <p className="text-zion-slate-light text-xs leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="max-w-md mx-auto"
            variants={itemVariants}
          >
            <EnhancedNewsletterForm />
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-xs text-zion-slate-light mb-4">
              Join 10,000+ tech professionals already subscribed
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-zion-slate-light">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No spam, ever
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Unsubscribe anytime
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Privacy protected
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
