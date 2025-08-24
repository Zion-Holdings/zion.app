
import { GradientHeading } from "@/components/GradientHeading";
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";
import { motion } from "framer-motion";
import { Mail, Bell, TrendingUp } from "lucide-react";

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Weekly tech insights"
    },
    {
      icon: <Bell className="w-5 h-5" />,
      text: "Marketplace updates"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Trending opportunities"
    }
  ];

  return (
    <section className="py-20 bg-zion-blue-dark relative overflow-hidden" id="newsletter">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <GradientHeading>Stay Informed</GradientHeading>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-zion-slate-light text-xl mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Subscribe to our newsletter for the latest updates on Zion's services, Google trending tech news, and marketplace opportunities.
          </motion.p>

          {/* Feature highlights */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-zion-cyan bg-zion-blue/20 px-4 py-2 rounded-full border border-zion-cyan/30"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 221, 210, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
                <span className="text-sm font-medium">{feature.text}</span>
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
            <p className="text-zion-slate-light text-sm mb-3">Join 10,000+ tech professionals</p>
            <div className="flex justify-center items-center gap-4 text-xs text-zion-slate-light/60">
              <span>✓ No spam</span>
              <span>✓ Unsubscribe anytime</span>
              <span>✓ Privacy protected</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
