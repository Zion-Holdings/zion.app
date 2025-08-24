
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NewsletterForm } from "./NewsletterForm";
import { Mail, Bell, TrendingUp, Users } from "lucide-react";

export function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Weekly Updates",
      description: "Stay informed about new features and opportunities"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Insights",
      description: "Get the latest trends in AI and tech markets"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community News",
      description: "Connect with fellow professionals and events"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-zion-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-zion-purple/20 text-zion-purple-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Stay Connected
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss an Opportunity
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who get exclusive access to the latest AI opportunities, 
            market insights, and community updates delivered straight to their inbox.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Newsletter form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe Today</h3>
                <p className="text-zion-slate-light">
                  Get started with just your email address
                </p>
              </div>
              
              <NewsletterForm />
              
              <div className="text-center mt-6">
                <p className="text-xs text-zion-slate-light/60">
                  We respect your privacy. Unsubscribe at any time.
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                  <span className="text-xs text-zion-cyan">Secure & Private</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features and benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">
                What You'll Get
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-zion-slate-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-zion-blue-light/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan mb-1">50K+</div>
                <div className="text-sm text-zion-slate-light">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple mb-1">95%</div>
                <div className="text-sm text-zion-slate-light">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan-light mb-1">Weekly</div>
                <div className="text-sm text-zion-slate-light">Updates</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
