
import { GradientHeading } from "@/components/GradientHeading";
import { motion } from "framer-motion";
import { Star, Shield, Award, Users, Globe, Zap } from "lucide-react";

const companies = [
  { name: "Microsoft", logo: "MS", tier: "Platinum" },
  { name: "Google", logo: "G", tier: "Platinum" },
  { name: "Amazon", logo: "A", tier: "Gold" },
  { name: "Meta", logo: "M", tier: "Gold" },
  { name: "Apple", logo: "🍎", tier: "Silver" },
  { name: "Netflix", logo: "N", tier: "Silver" },
  { name: "Tesla", logo: "T", tier: "Silver" },
  { name: "OpenAI", logo: "AI", tier: "Partner" }
];

const trustMetrics = [
  { number: "500+", label: "Enterprise Clients", icon: Users, color: "from-zion-purple to-zion-purple-dark" },
  { number: "99.9%", label: "Uptime SLA", icon: Shield, color: "from-zion-cyan to-zion-blue" },
  { number: "ISO 27001", label: "Security Certified", icon: Award, color: "from-zion-blue to-zion-blue-dark" },
  { number: "150+", label: "Countries Served", icon: Globe, color: "from-zion-cyan-light to-zion-cyan" }
];

const testimonials = [
  {
    quote: "Zion has transformed how we source AI talent and services. The quality and speed are unmatched.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    rating: 5
  },
  {
    quote: "The marketplace connects us with world-class developers and cutting-edge solutions in real-time.",
    author: "Marcus Rodriguez",
    role: "VP Engineering, InnovateLab",
    rating: 5
  },
  {
    quote: "Zion's AI matchmaking has reduced our hiring time by 70% while improving quality significantly.",
    author: "Dr. Emily Watson",
    role: "Head of AI, FutureTech",
    rating: 5
  }
];

export function TrustedBySection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Trusted by Industry Leaders
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Join thousands of companies worldwide who trust Zion for their AI, technology, and talent needs. 
            From startups to Fortune 500 companies, we're the platform of choice for innovation.
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30 shadow-lg`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-zion-slate-light text-sm md:text-base">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-12">Our Enterprise Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {companies.map((company, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={logoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-blue-dark/50 to-zion-purple-dark/50 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-zion-purple/30 group-hover:border-zion-cyan/50 transition-colors backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                    {company.logo}
                  </div>
                </div>
                <div className="text-white font-semibold text-sm mb-1">{company.name}</div>
                <div className="text-zion-slate-light text-xs">{company.tier}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-zion-blue-dark/30 to-zion-purple-dark/30 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                  ))}
                </div>
                <blockquote className="text-zion-slate-light text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the Elite?</h3>
            <p className="text-zion-slate-light text-xl mb-8">
              Experience the same level of service and quality that industry leaders trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25">
                Start Free Trial
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Schedule Enterprise Demo
              </button>
            </div>
            <p className="text-zion-slate-light text-sm mt-4">
              No credit card required • 14-day free trial • Enterprise support included
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
