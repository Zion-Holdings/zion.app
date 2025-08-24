
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight, Clock, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.",
    icon: Send,
    color: "from-purple-500 to-indigo-600",
    details: ["AI-powered form assistance", "Smart categorization", "Instant publishing"]
  },
  {
    title: "Match",
    description: "Our AI automatically matches your needs with the perfect providers or opportunities.",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
    details: ["Advanced algorithms", "Skill-based matching", "Real-time recommendations"]
  },
  {
    title: "Hire/Buy",
    description: "Connect directly with matched providers and complete your transaction securely.",
    icon: Handshake,
    color: "from-emerald-500 to-green-600",
    details: ["Secure payments", "Direct communication", "Contract management"]
  },
  {
    title: "Done",
    description: "Enjoy hassle-free delivery and support for your technology solutions.",
    icon: Check,
    color: "from-amber-500 to-orange-600",
    details: ["Quality assurance", "Ongoing support", "Success tracking"]
  },
];

const additionalFeatures = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Turnaround",
    description: "Get matched within minutes, not days"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Network",
    description: "Access to verified professionals worldwide"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Guaranteed",
    description: "Every provider is thoroughly vetted"
  }
];

export function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:35px_35px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientHeading>How It Works</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            A simple four-step process to connect technology providers with clients, powered by AI and designed for efficiency
          </p>
        </motion.div>

        <motion.div 
          className="relative mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden rounded-full shadow-lg"></div>
          
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
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-zion-cyan"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-zion-blue-light to-zion-blue-dark border-2 border-zion-purple mx-4 md:mx-0 shadow-xl">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center text-xs font-bold text-zion-blue-dark">
                    {index + 1}
                  </div>
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-zion-cyan"></div>
                            {detail}
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

        {/* Additional features */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-12">Why Our Process Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-zion-blue/20 rounded-2xl border border-zion-blue-light/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/30 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of users who have already streamlined their tech service needs
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
