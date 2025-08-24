
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight, Sparkles, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.",
    icon: Send,
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/20",
    features: ["AI-Powered Forms", "Instant Publishing", "Smart Templates"]
  },
  {
    title: "Match",
    description: "Our AI automatically matches your needs with the perfect providers or opportunities.",
    icon: Search,
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/20",
    features: ["Smart Algorithms", "Perfect Matches", "Instant Results"]
  },
  {
    title: "Hire/Buy",
    description: "Connect directly with matched providers and complete your transaction securely.",
    icon: Handshake,
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/20",
    features: ["Secure Payments", "Direct Connect", "Trusted Partners"]
  },
  {
    title: "Done",
    description: "Enjoy hassle-free delivery and support for your technology solutions.",
    icon: Check,
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "bg-zion-purple-light/20",
    features: ["24/7 Support", "Quality Assurance", "Ongoing Help"]
  },
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

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-zion-purple-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GradientHeading className="mb-4">How It Works</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            A simple four-step process to connect technology providers with clients. 
            Get started in minutes and see results immediately.
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan via-zion-blue to-zion-purple-light transform -translate-x-1/2 md:block hidden rounded-full"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } relative`}
                variants={itemVariants}
              >
                {/* Content side */}
                <div className="lg:w-1/2 mb-8 lg:mb-0 lg:px-12 text-center lg:text-left">
                  <motion.div 
                    className="bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20"
                    variants={stepVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* Feature highlights */}
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          <span className="text-zion-slate-light font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Step indicator */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-blue-light to-zion-blue border-4 border-zion-purple mx-4 lg:mx-0 shadow-2xl hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white">{index + 1}</div>
                  
                  {/* Decorative elements around step */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-zion-cyan rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-zion-purple-light rounded-full opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-zion-purple to-zion-cyan"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-6">
              Join the future of tech marketplace today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 transform hover:scale-105 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
