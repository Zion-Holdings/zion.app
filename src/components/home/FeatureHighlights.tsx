<<<<<<< HEAD
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Users, Briefcase, Building, Star, Shield, Zap, TrendingUp } from "lucide-react";
=======

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Users, Building, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
>>>>>>> origin/website-audit-and-enhancement-complete

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: "For Talent Seekers",
<<<<<<< HEAD
      subtitle: "Find the perfect AI & tech experts",
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30",
=======
      icon: <Users className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
>>>>>>> origin/website-audit-and-enhancement-complete
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
<<<<<<< HEAD
      subtitle: "Showcase your skills and grow your business",
      icon: <Briefcase className="h-8 w-8 text-zion-purple" />,
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30",
=======
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
>>>>>>> origin/website-audit-and-enhancement-complete
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
<<<<<<< HEAD
      subtitle: "Enterprise-grade solutions for your organization",
      icon: <Building className="h-8 w-8 text-zion-cyan-light" />,
      color: "from-zion-cyan-light to-zion-cyan",
      bgColor: "bg-zion-cyan-light/10",
      borderColor: "border-zion-cyan-light/30",
=======
      icon: <Building className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
>>>>>>> origin/website-audit-and-enhancement-complete
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

<<<<<<< HEAD
  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We're building the future of tech talent acquisition and service delivery, 
            powered by AI and designed for the modern digital economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlightsData.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`h-full border-2 ${highlight.borderColor} ${highlight.bgColor} backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${highlight.color} mb-4`}>
                      {highlight.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight.subtitle}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {highlight.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">
=======
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
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {highlightsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Card className={`h-full ${category.bgColor} border-2 ${category.borderColor} bg-zion-blue-dark/50 backdrop-blur-sm hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="w-6 h-6 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-zion-cyan/40 transition-colors">
                          <Check className="h-3 w-3 text-zion-cyan" />
                        </div>
                        <span className="text-zion-slate-light leading-relaxed group-hover/item:text-white transition-colors">
>>>>>>> origin/website-audit-and-enhancement-complete
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
=======

                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors">
                      <ArrowRight className="w-4 h-4 text-zion-purple" />
                    </div>
                    <span className="text-xs text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">
                      Learn More
                    </span>
                  </div>
>>>>>>> origin/website-audit-and-enhancement-complete
                </CardContent>
              </Card>
            </motion.div>
          ))}
<<<<<<< HEAD
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-zion-cyan">
            <Star className="h-5 w-5" />
            <span className="text-lg font-semibold">
              Trusted by leading companies worldwide
            </span>
          </div>
        </motion.div>
      </div>
=======
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 px-8 py-4 rounded-full border border-zion-purple/30">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-slate-light font-medium">
              Ready to get started? Join thousands of users already on Zion
            </span>
          </div>
        </motion.div>
      </motion.div>
>>>>>>> origin/website-audit-and-enhancement-complete
    </section>
  );
}
