<<<<<<< HEAD:src/backup/FeatureHighlights.tsx

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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Users, Globe, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "AI-Powered Matching",
    description: "Advanced algorithms connect you with the perfect tech talent and services.",
    category: "AI",
    rating: 4.9,
    reviews: 127
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All talent and services are thoroughly vetted and quality-assured.",
    category: "Security",
    rating: 4.8,
    reviews: 89
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Access to tech professionals and services from around the world.",
    category: "Network",
    rating: 4.7,
    reviews: 156
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your tech needs and questions.",
    category: "Support",
    rating: 4.9,
    reviews: 203
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Curated selection of top-tier tech services and professionals.",
    category: "Quality",
    rating: 4.8,
    reviews: 94
  },
  {
    icon: CheckCircle,
    title: "Instant Results",
    description: "Get matched with the right tech solutions in seconds, not days.",
    category: "Speed",
    rating: 4.6,
    reviews: 78
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
>>>>>>> premium-enhancements-2025:src/components/home/FeatureHighlights.tsx
    }
  }
};

<<<<<<< HEAD:src/backup/FeatureHighlights.tsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
=======
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
>>>>>>> premium-enhancements-2025:src/components/home/FeatureHighlights.tsx
    }
  }
};



export default function FeatureHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
<<<<<<< HEAD:src/backup/FeatureHighlights.tsx
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
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors">
                      <ArrowRight className="w-4 h-4 text-zion-purple" />
                    </div>
                    <span className="text-xs text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">
                      Learn More
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
=======
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
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
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
                        {feature.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(feature.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {feature.rating} ({feature.reviews})
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
>>>>>>> premium-enhancements-2025:src/components/home/FeatureHighlights.tsx
    </section>
  );
}
