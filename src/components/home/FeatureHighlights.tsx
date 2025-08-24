
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Users, Briefcase, Building, Star, Shield, Zap, TrendingUp } from "lucide-react";

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: "For Talent Seekers",
      subtitle: "Find the perfect AI & tech experts",
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30",
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
      subtitle: "Showcase your skills and grow your business",
      icon: <Briefcase className="h-8 w-8 text-zion-purple" />,
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30",
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
      subtitle: "Enterprise-grade solutions for your organization",
      icon: <Building className="h-8 w-8 text-zion-cyan-light" />,
      color: "from-zion-cyan-light to-zion-cyan",
      bgColor: "bg-zion-cyan-light/10",
      borderColor: "border-zion-cyan-light/30",
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0 16.569-13.431 30-30 30s-30-13.431-30-30 13.431-30 30-30 30 13.431 30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-6 h-6 text-zion-cyan" />
            <h2 className="text-4xl font-bold text-white">Tailored Solutions for Everyone</h2>
            <Shield className="w-6 h-6 text-zion-purple" />
          </div>
          <p className="text-zion-slate-light text-xl max-w-4xl mx-auto leading-relaxed">
            Whatever your role in the tech ecosystem, Zion offers specialized features and solutions designed to help you succeed and grow
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {highlightsData.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`${category.bgColor} ${category.borderColor} border-2 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                <CardContent className="p-8">
                  {/* Header with icon */}
                  <div className="text-center mb-6">
                    <div className={`bg-gradient-to-br ${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-zion-slate-light text-sm">{category.subtitle}</p>
                  </div>
                  
                  {/* Features list */}
                  <ul className="space-y-4">
                    {category.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      >
                        <Check className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Call to action */}
                  <div className="mt-8 pt-6 border-t border-zion-purple/20">
                    <div className="flex items-center justify-center gap-2 text-zion-cyan text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      <span>Get Started Today</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/20 max-w-2xl mx-auto">
            <TrendingUp className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Tech Operations?</h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of companies and professionals who trust Zion for their AI and technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
