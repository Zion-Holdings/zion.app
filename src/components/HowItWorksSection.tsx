
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.",
    icon: Send,
    color: "from-zion-purple to-zion-purple-dark",
    delay: 0,
    features: ["AI-powered forms", "Quick setup", "Smart suggestions"]
  },
  {
    title: "Match",
    description: "Our AI automatically matches your needs with the perfect providers or opportunities.",
    icon: Search,
    color: "from-zion-cyan to-zion-blue",
    delay: 0.2,
    features: ["Smart algorithms", "Instant results", "Quality filtering"]
  },
  {
    title: "Hire/Buy",
    description: "Connect directly with matched providers and complete your transaction securely.",
    icon: Handshake,
    color: "from-zion-blue to-zion-cyan",
    delay: 0.4,
    features: ["Secure payments", "Direct contact", "Escrow protection"]
  },
  {
    title: "Done",
    description: "Enjoy hassle-free delivery and support for your technology solutions.",
    icon: Check,
    color: "from-zion-purple-light to-zion-cyan",
    delay: 0.6,
    features: ["Quality assurance", "Ongoing support", "Success tracking"]
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      className="py-20 bg-zion-blue relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-zion-purple to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-tl from-zion-cyan to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GradientHeading id="how-it-works-heading">How It Works</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A simple four-step process to connect technology providers with clients
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden">
            {/* Timeline dots */}
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-4 bg-zion-blue border-2 border-zion-purple rounded-full transform -translate-x-1/2"
                style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              />
            ))}
          </div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative`}
                variants={stepVariants}
                whileHover="hover"
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay + 0.3, duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Feature highlights */}
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm justify-center md:justify-end">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full" />
                            <span className="text-zion-slate-light/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </div>
                
                <motion.div 
                  className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-blue-light to-zion-blue border-2 border-zion-purple mx-4 md:mx-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <step.icon className="w-8 h-8 text-zion-cyan" />
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-zion-purple text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </motion.div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay + 0.3, duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Feature highlights */}
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm justify-center md:justify-start">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full" />
                            <span className="text-zion-slate-light/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-full hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="font-medium">Ready to get started?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
