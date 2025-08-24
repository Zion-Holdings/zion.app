import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Zap, Shield, Clock, CheckCircle } from 'lucide-react';

interface RevolutionaryServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
    textColor: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  index: number;
}

const RevolutionaryServiceCard: React.FC<RevolutionaryServiceCardProps> = ({ service, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: { 
      opacity: [0.5, 0.8, 0.5], 
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className="relative group"
    >
      {/* Glow effect */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}
      />

      {/* Main card */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
        </div>

        {/* Popular badge */}
        {service.popular && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
          >
            <Star className="w-3 h-3 fill-current" />
            POPULAR
          </motion.div>
        )}

        {/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-4xl mb-2">{service.icon}</div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{service.price}</div>
              <div className="text-gray-400 text-sm">{service.period}</div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{service.tagline}</p>
        </div>

        {/* Description */}
        <div className="relative z-10 mb-6">
          <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Market position and ROI */}
        <div className="relative z-10 mb-6 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-gray-300">{service.marketSize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300">{service.roi}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">{service.customers} customers</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300">{service.rating}/5 ({service.reviews} reviews)</span>
          </div>
        </div>

        {/* Features */}
        <div className="relative z-10 mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, 5).map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology stack */}
        <div className="relative z-10 mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technology.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Trial and setup info */}
        <div className="relative z-10 mb-6 flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{service.trialDays} day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Setup: {service.setupTime}</span>
          </div>
        </div>

        {/* Contact info */}
        <div className="relative z-10 mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <h4 className="text-white font-semibold mb-2 text-sm">Contact Information</h4>
          <div className="space-y-1 text-xs text-gray-300">
            <div>📱 {service.contactInfo.mobile}</div>
            <div>✉️ {service.contactInfo.email}</div>
            <div>📍 {service.contactInfo.address}</div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href={service.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
        >
          Explore Service
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryServiceCard;