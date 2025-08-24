
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Users, 
  Briefcase, 
  Building,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const ctaItems = [
  {
    icon: Zap,
    title: "Launch Your Project",
    description: "Get started with AI-powered project matching and expert talent",
    action: "Start Project",
    href: "/match",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/10",
    borderColor: "border-zion-purple/30"
  },
  {
    icon: Users,
    title: "Join as Talent",
    description: "Showcase your skills and connect with global opportunities",
    action: "Create Profile",
    href: "/signup",
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    borderColor: "border-zion-cyan/30"
  },
  {
    icon: Briefcase,
    title: "Hire AI Experts",
    description: "Access specialized AI talent for your next breakthrough",
    action: "Browse AI Talent",
    href: "/zion-hire-ai",
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/10",
    borderColor: "border-zion-blue/30"
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations and teams",
    action: "Learn More",
    href: "/enterprise",
    color: "from-zion-green to-zion-green-dark",
    bgColor: "bg-zion-green/10",
    borderColor: "border-zion-green/30"
  }
];

export function FeatureCTAs() {
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-zion-purple/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-zion-purple" />
            <span className="text-zion-purple text-sm font-medium">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Tech Journey</span>?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Choose your path and unlock the power of global tech collaboration. 
            Whether you're hiring, building, or growing, Zion has you covered.
          </p>
        </motion.div>

        {/* CTA Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ctaItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className={`${item.bgColor} ${item.borderColor} border-2 p-8 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{item.description}</p>
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${item.color} hover:scale-105 transition-transform duration-200`}
                >
                  <Link to={item.href} className="flex items-center justify-center gap-2">
                    {item.action}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-3xl p-12 border border-zion-purple/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help you get started and make the most of Zion's powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
              >
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg px-8 py-4"
              >
                <Link to="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
