import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Globe, Shield, Zap, Star } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Global Talent Pool",
    description: "Access to verified tech professionals from around the world",
    category: "Network",
    features: ["150+ Countries", "24/7 Availability", "Instant Matching"]
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All services and professionals are thoroughly vetted",
    category: "Security",
    features: ["Background Checks", "Skill Verification", "Performance Reviews"]
  },
  {
    icon: Zap,
    title: "AI-Powered Matching",
    description: "Advanced algorithms connect you with the perfect solutions",
    category: "Technology",
    features: ["Smart Recommendations", "Real-time Updates", "Predictive Analytics"]
  },
  {
    icon: Globe,
    title: "Worldwide Coverage",
    description: "Professional services available in your location",
    category: "Reach",
    features: ["Local Experts", "Cultural Understanding", "Language Support"]
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Exceptional service quality and customer satisfaction",
    category: "Quality",
    features: ["5-Star Ratings", "Guaranteed Results", "Premium Support"]
  },
  {
    icon: CheckCircle,
    title: "Risk-Free Engagement",
    description: "Secure payments and satisfaction guarantees",
    category: "Trust",
    features: ["Secure Payments", "Money Back Guarantee", "Dispute Resolution"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
    }
  }
};



export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of tech services with our cutting-edge platform
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                        {benefit.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {benefit.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
