import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Matching",
    description: "Advanced algorithms connect you with the perfect talent or opportunity",
    benefits: ["Smart recommendations", "Skill-based matching", "Real-time updates"],
    color: "from-purple-500 to-indigo-600",
    badge: "Popular"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Verified & Secure",
    description: "Every talent and service provider undergoes rigorous verification",
    benefits: ["Background checks", "Identity verification", "Secure payments"],
    color: "from-green-500 to-emerald-600",
    badge: "Trusted"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Get matched with opportunities in seconds, not days",
    benefits: ["Instant matching", "Quick responses", "Fast onboarding"],
    color: "from-yellow-500 to-orange-600",
    badge: "Fast"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Global Network",
    description: "Access talent and opportunities from around the world",
    benefits: ["24/7 availability", "Multi-language support", "Global reach"],
    color: "from-blue-500 to-cyan-600",
    badge: "Global"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your needs",
    benefits: ["Live chat", "Phone support", "Email assistance"],
    color: "from-red-500 to-pink-600",
    badge: "24/7"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth Focused",
    description: "Tools and insights to accelerate your success",
    benefits: ["Analytics dashboard", "Performance tracking", "Growth insights"],
    color: "from-indigo-500 to-purple-600",
    badge: "Pro"
  }
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export function FeatureHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover the key features that make Zion the leading platform for tech talent and services
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-zion-blue-dark/50 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    {feature.badge && (
                      <Badge className="bg-zion-purple text-white border-0 text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Benefits */}
                  <div className="mb-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-xs text-zion-slate-light mb-1">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">10K+</div>
                <div className="text-zion-slate-light">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">500+</div>
                <div className="text-zion-slate-light">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
                <div className="text-zion-slate-light">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
