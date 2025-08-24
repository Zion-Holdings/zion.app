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

const cardVariants = {
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
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
    </section>
  );
}
