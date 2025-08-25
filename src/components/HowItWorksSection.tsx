
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Create & Post",
    description: "Publish your service, job, or equipment in minutes with our AI-powered smart forms that guide you through the process.",
    icon: Send,
    color: "from-zion-purple to-zion-purple-dark",
    step: "01"
  },
  {
    title: "AI Matchmaking",
    description: "Our advanced AI algorithms analyze requirements and automatically match you with the perfect providers, talent, or opportunities.",
    icon: Search,
    color: "from-zion-cyan to-zion-cyan-dark",
    step: "02"
  },
  {
    title: "Connect & Collaborate",
    description: "Connect directly with matched providers through our secure platform. Negotiate terms, share files, and collaborate seamlessly.",
    icon: Handshake,
    color: "from-zion-blue to-zion-blue-dark",
    step: "03"
  },
  {
    title: "Deliver & Succeed",
    description: "Complete your project with confidence. Our platform ensures quality delivery and provides ongoing support for success.",
    icon: Check,
    color: "from-zion-purple-light to-zion-cyan",
    step: "04"
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const stepVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${'#8c15e9'} 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientHeading className="text-4xl md:text-5xl mb-6">How Zion Works</GradientHeading>
          <p className="text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            A streamlined four-step process that leverages AI to connect technology providers with clients seamlessly
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan via-zion-blue to-zion-purple-light transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative`}
                variants={itemVariants}
              >
                {/* Content */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-16 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-cyan text-sm font-medium">Step {step.step}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed text-lg">{step.description}</p>
                    </motion.div>
                  ) : null}
                </div>
                
                {/* Step indicator */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-zion-blue-dark border-4 border-zion-purple mx-4 md:mx-0 shadow-2xl">
                  <motion.div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                    variants={stepVariants}
                  />
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple">
                    <step.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center text-zion-blue-dark text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Content for odd steps */}
                <div className="md:w-1/2 md:px-16 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-cyan text-sm font-medium">Step {step.step}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed text-lg">{step.description}</p>
                    </motion.div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
                      <div className="inline-flex items-center gap-3 px-8 py-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full">
            <TrendingUp className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-semibold text-lg">Ready to get started?</span>
            <ArrowRight className="w-5 h-5 text-zion-cyan" />
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
