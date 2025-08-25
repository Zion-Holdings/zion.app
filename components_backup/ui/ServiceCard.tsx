import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Button from './Button';
import EnhancedFuturisticCard from './EnhancedFuturisticCard';

interface ServiceCardProps {
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
  );
};

export default ServiceCard;