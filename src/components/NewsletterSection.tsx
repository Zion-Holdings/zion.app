
import { GradientHeading } from "@/components/GradientHeading";
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";
import { motion } from "framer-motion";
import { Mail, Bell, Zap, Globe, Users, TrendingUp } from "lucide-react";

export function NewsletterSection() {
  const features = [
    { icon: Bell, text: "Weekly Tech Updates", color: "text-zion-cyan" },
    { icon: Zap, text: "Exclusive Deals", color: "text-zion-purple-light" },
    { icon: Globe, text: "Global Opportunities", color: "text-zion-blue-light" },
    { icon: Users, text: "Community Insights", color: "text-zion-cyan-light" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark relative overflow-hidden" id="newsletter">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-zion-cyan opacity-40"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-zion-blue-light opacity-50"
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full border border-zion-purple/30 mb-6">
            <Mail className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium text-sm">Newsletter</span>
          </div>

          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Stay Ahead of the Curve
          </GradientHeading>
          
          <p className="mt-6 text-zion-slate-light text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Subscribe to our premium newsletter for exclusive access to the latest AI breakthroughs, 
            trending tech news, marketplace opportunities, and insider insights from industry leaders.
          </p>

          {/* Feature highlights */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-zion-slate-light"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter form */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <EnhancedNewsletterForm />
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <span>50,000+ Subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-zion-cyan" />
                <span>150+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-zion-cyan" />
                <span>Weekly Updates</span>
              </div>
            </div>
            
            <p className="text-zion-slate-light text-xs mt-4 opacity-70">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
