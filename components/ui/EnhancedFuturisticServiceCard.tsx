import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Users, Globe, Cpu, Brain, Atom, Sparkles } from 'lucide-react';
import Button from './Button';

interface EnhancedFuturisticServiceCardProps {
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
    category: string;
    technology: string[];
    roi: string;
    marketSize: string;
    growthRate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  index: number;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export default function EnhancedFuturisticServiceCard({ service, index, contactInfo }: EnhancedFuturisticServiceCardProps) {
  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Emerging')) return Sparkles;
    if (category.includes('IT')) return Cpu;
    if (category.includes('Security')) return Shield;
    if (category.includes('Cloud')) return Globe;
    return Zap;
  };

  const CategoryIcon = getCategoryIcon(service.category);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1 + 0.5 + i * 0.1
      }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full"
    >
      <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border border-gray-700/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        </div>

        {/* Service Icon */}
        <motion.div 
          variants={iconVariants}
          className="absolute top-6 right-6 text-5xl filter drop-shadow-lg"
        >
          {service.icon}
        </motion.div>
        
        {/* Popular Badge */}
        {service.popular && (
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.4, type: "spring", stiffness: 200 }}
            className="absolute top-6 left-6"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-xs font-bold text-white shadow-lg">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Popular
            </div>
          </motion.div>
        )}

        <div className="relative p-8 h-full flex flex-col">
          {/* Service Header */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 mr-3">
                <CategoryIcon className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                {service.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
              {service.name}
            </h3>
            
            <p className="text-gray-400 text-base mb-4 leading-relaxed">
              {service.tagline}
            </p>
            
            {/* Price */}
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {service.price}
              </span>
              <span className="text-gray-400 ml-2 text-lg">{service.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              Key Features:
            </h4>
            <ul className="space-y-3">
              {service.features.slice(0, 4).map((feature, idx) => (
                <motion.li 
                  key={idx}
                  custom={idx}
                  variants={featureVariants}
                  className="flex items-start text-sm text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
            {service.features.length > 4 && (
              <p className="text-xs text-gray-500 mt-3 text-center">
                +{service.features.length - 4} more features
              </p>
            )}
          </div>

          {/* Technology & Stats */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Technology:</span>
              <span className="text-blue-400 font-medium">
                {service.technology.slice(0, 2).join(', ')}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <div className="text-gray-400 mb-1">ROI</div>
                <div className="text-green-400 font-bold">{service.roi.split(' ')[0]} ROI</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <div className="text-gray-400 mb-1">Market</div>
                <div className="text-blue-400 font-bold">{service.marketSize}</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                <Users className="w-3 h-3 text-gray-400 mr-1" />
                <span className="text-gray-400">{service.customers.toLocaleString()}+ customers</span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-400 mr-1 fill-current" />
                <span className="text-white">{service.rating}</span>
                <span className="text-gray-400 ml-1">({service.reviews.toLocaleString()})</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button
              href={service.link}
              variant="primary"
              size="sm"
              className="flex-1 group-hover:bg-purple-600 transition-all duration-300 transform group-hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
              variant="secondary"
              size="sm"
              className="px-4 hover:bg-gray-700 transition-colors duration-300"
            >
              <span className="hidden sm:inline">Contact</span>
              <span className="sm:hidden">📧</span>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                Contact: {contactInfo.mobile}
              </span>
              <span className="hidden sm:inline">{contactInfo.email}</span>
            </div>
          </div>
        </div>

        {/* Hover effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-purple-500/30 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-blue-500/30 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}