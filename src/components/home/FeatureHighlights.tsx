import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Users, Building, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: "For Talent Seekers",
      icon: <Users className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      features: [
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants"
      ]
    },
    {
      title: "For Talent & Service Providers",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      features: [
        "Create a professional profile showcasing your skills and experience",
        "Get matched with relevant projects that fit your expertise",
        "Secure payment processing with on-time disbursements",
        "Build your reputation through client reviews and ratings",
        "Access to enterprise clients and high-value projects",
        "Professional development resources and community support"
      ]
    },
    {
      title: "For Enterprise Clients",
      icon: <Building className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      features: [
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
        "Customizable workflow and approval processes"
      ]
    }
  ];

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
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Platform <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover how Zion Tech Group's platform serves different user types with tailored features and capabilities
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlightsData.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Card className={`h-full border-2 ${highlight.borderColor} bg-gradient-to-br from-zion-slate-dark to-zion-slate hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${highlight.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-white ${highlight.color} bg-gradient-to-r bg-clip-text`}>
                      {highlight.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    {highlight.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
