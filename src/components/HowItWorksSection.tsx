import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discover",
    description: "Browse our comprehensive catalog of services, talent, and solutions",
    color: "from-zion-cyan to-zion-cyan-dark"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Connect",
    description: "Get matched with the perfect team or service for your project",
    color: "from-zion-purple to-zion-purple-dark"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Plan",
    description: "Collaborate on project requirements, timeline, and deliverables",
    color: "from-zion-blue to-zion-blue-dark"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Execute",
    description: "Watch your vision come to life with our expert execution",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Deliver",
    description: "Receive your completed project with ongoing support and maintenance",
    color: "from-orange-500 to-red-600"
  }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.6
      }
    }
=======
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
  };

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Get started with Zion Tech Group in just a few simple steps
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {step.title}
              </h3>
              <p className="text-zion-slate-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-zion-slate-light text-lg mb-6">
            Ready to get started? Join thousands of businesses already using Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="inline-flex items-center justify-center px-8 py-3 bg-zion-purple hover:bg-zion-purple-dark text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Started
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}