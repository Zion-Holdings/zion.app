
import GradientHeading from "@/components/GradientHeading";
// import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";
import { motion } from "framer-motion";
import { Mail, Bell, TrendingUp, Users } from "lucide-react";

export function NewsletterSection() {
  const benefits = [
    { icon: <Bell className="w-5 h-5" />, text: "Latest AI & Tech Updates", color: "text-zion-cyan" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Marketplace Opportunities", color: "text-zion-purple" },
    { icon: <Users className="w-5 h-5" />, text: "Community Insights", color: "text-zion-cyan-light" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light relative overflow-hidden" id="newsletter">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-zion-cyan" />
              <GradientHeading className="text-4xl md:text-5xl">Stay Informed & Connected</GradientHeading>
              <Mail className="w-8 h-8 text-zion-cyan" />
            </div>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest updates on Zion's services, trending tech news, and exclusive marketplace opportunities.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 bg-zion-blue-dark/30 backdrop-blur-sm px-4 py-2 rounded-full border border-zion-purple/20"
              >
                <div className={benefit.color}>{benefit.icon}</div>
                <span className="text-zion-slate-light text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter form */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* <EnhancedNewsletterForm /> */}
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 pt-8 border-t border-zion-purple/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-zion-slate-light text-sm mb-4">
              Join 50,000+ professionals who trust Zion for their tech insights
            </p>
            <div className="flex justify-center items-center gap-6 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <span className="text-zion-cyan text-xs">Unsubscribe anytime</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
