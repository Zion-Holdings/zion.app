
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight, Zap, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Define Your Needs",
    description: "Describe your project requirements, budget, and timeline using our AI-powered intelligent form that adapts to your needs.",
    icon: Send,
    color: "from-zion-purple to-zion-purple-dark",
    features: ["AI-Powered Forms", "Smart Suggestions", "Instant Validation"]
  },
  {
    title: "AI Matchmaking",
    description: "Our advanced algorithms analyze thousands of profiles and automatically match you with the perfect providers, talents, or equipment.",
    icon: Search,
    color: "from-zion-cyan to-zion-blue",
    features: ["95% Match Rate", "Real-time Analysis", "Quality Scoring"]
  },
  {
    title: "Connect & Collaborate",
    description: "Directly connect with matched providers through our secure platform. Review profiles, discuss requirements, and negotiate terms.",
    icon: Handshake,
    color: "from-zion-blue to-zion-blue-dark",
    features: ["Secure Messaging", "Video Calls", "File Sharing"]
  },
  {
    title: "Deliver & Support",
    description: "Complete your project with confidence. Our platform ensures quality delivery and provides ongoing support for all solutions.",
    icon: Check,
    color: "from-zion-cyan-light to-zion-cyan",
    features: ["Quality Assurance", "24/7 Support", "Escrow Protection"]
  },
];

const stats = [
  { number: "10K+", label: "Active Users", icon: Users },
  { number: "150+", label: "Countries", icon: Globe },
  { number: "95%", label: "Success Rate", icon: Check },
  { number: "<2hr", label: "Response Time", icon: Zap }
];

export function HowItWorksSection() {
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

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '120px 120px'
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
            How Zion Works
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Experience the future of tech procurement with our intelligent, AI-powered platform that 
            connects you with the perfect solutions in just four simple steps
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
                <stat.icon className="w-10 h-10 text-zion-cyan" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden rounded-full"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative`}
                variants={itemVariants}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div className="group">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-medium mb-4`}>
                        Step {index + 1}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Features list */}
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-zion-blue-dark to-zion-blue border-4 border-zion-purple mx-4 md:mx-0 shadow-2xl shadow-zion-purple/25 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div className="group">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-medium mb-4`}>
                        Step {index + 1}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Features list */}
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-6">
              Join the thousands of companies already using Zion to transform their tech procurement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
