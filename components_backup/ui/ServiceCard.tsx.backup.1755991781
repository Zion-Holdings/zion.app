import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Clock, DollarSign } from 'lucide-react';
=======
import { Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Button from './Button';
import EnhancedFuturisticCard from './EnhancedFuturisticCard';
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
<<<<<<< HEAD
    description: string;
    price: string;
    period: string;
    features: string[];
    category: string;
    priority: string;
    delivery: string;
    successRate: string;
    popular?: boolean;
    new?: boolean;
  };
  variant?: 'default' | 'featured' | 'compact';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  variant = 'default' 
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'premium': return 'text-purple-400';
      default: return 'text-green-400';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <Star className="w-4 h-4" />;
      case 'high': return <Star className="w-4 h-4" />;
      case 'premium': return <Star className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-400/50 shadow-2xl shadow-cyan-500/20';
      case 'compact':
        return 'bg-white/5 border-white/10 p-4';
      default:
        return 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20';
    }
  };

  const getVariantPadding = () => {
    switch (variant) {
      case 'compact': return 'p-4';
      default: return 'p-8';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative ${getVariantStyles()} backdrop-blur-sm border rounded-2xl transition-all duration-500 group ${getVariantPadding()}`}
    >
      {/* Priority Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className={`${getPriorityColor(service.priority)} flex items-center gap-1 text-sm font-medium`}>
          {getPriorityIcon(service.priority)}
          {service.priority.charAt(0).toUpperCase() + service.priority.slice(1)}
        </span>
      </div>

      {/* Popular/New Badge */}
      {(service.popular || service.new) && (
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            service.popular 
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' 
              : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
          }`}>
            {service.popular ? <Star className="w-3 h-3 mr-1" /> : null}
            {service.popular ? 'Popular' : 'New'}
          </span>
        </div>
      )}

      {/* Service Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">${service.price}</span>
          <span className="text-gray-400">{service.period}</span>
        </div>
      </div>

      {/* Service Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400">{service.delivery}</div>
          <div className="text-sm text-gray-400">Delivery</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{service.successRate}</div>
          <div className="text-sm text-gray-400">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">24/7</div>
          <div className="text-sm text-gray-400">Support</div>
        </div>
      </div>

      {/* Features - Show fewer for compact variant */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
        <ul className="space-y-3">
          {(variant === 'compact' ? service.features.slice(0, 3) : service.features).map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
          {variant === 'compact' && service.features.length > 3 && (
            <li className="text-cyan-400 text-sm">
              +{service.features.length - 3} more features
            </li>
          )}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <Link href={`/services/${service.id}`} passHref>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            aria-label={`Learn more about ${service.name}`}
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
        
        <Link href="/contact" passHref>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            aria-label="Get started with this service"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </motion.div>
=======
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
    trialDays: number;
    setupTime: string;
    rating: number;
    reviews: number;
    variant: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'space';
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
  };
  showContactInfo?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, showContactInfo = false }) => {
  return (
    <EnhancedFuturisticCard
      variant={service.variant}
      intensity="high"
      className="h-full"
    >
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
          
          {/* Price */}
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
            <span className="text-gray-400 ml-1">{service.period}</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
          </div>
          
          {/* Category and Setup */}
          <div className="text-sm text-gray-400 mb-4">
            <div>{service.category}</div>
            <div>{service.setupTime} setup • {service.trialDays} day trial</div>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 mb-6">
          <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Features Preview */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-400">
                <span className="text-cyan-400 mr-2">•</span>
                {feature}
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-sm text-gray-500 italic">
                +{service.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Contact Info (if enabled) */}
        {showContactInfo && (
          <div className="mb-6 p-4 bg-black/20 rounded-lg border border-gray-700">
            <h4 className="text-white font-semibold mb-3 text-center">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                {service.contactInfo.mobile}
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                {service.contactInfo.email}
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                {service.contactInfo.address}
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-auto">
          <Button
            href={service.link}
            variant="secondary"
            size="sm"
            className="w-full"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full">
              Popular
            </span>
          </div>
        )}
      </div>
    </EnhancedFuturisticCard>
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
  );
};

export default ServiceCard;