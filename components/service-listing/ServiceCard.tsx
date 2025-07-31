import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, DollarSign, User } from 'lucide-react';
import { Service } from '../../utils/types/service';

interface ServiceCardProps {
  service: Service;
  onRequestQuote: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onRequestQuote }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 text-yellow-400 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  const formatPrice = (price: Service['price']) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: price.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const formattedPrice = formatter.format(price.from);
    
    if (price.type === 'hourly') {
      return `From ${formattedPrice}/hr`;
    } else if (price.type === 'monthly') {
      return `From ${formattedPrice}/mo`;
    } else {
      return `From ${formattedPrice}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      {/* Card Header with Gradient */}
      <div className="relative h-48 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        {/* AI Score Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
            <span className="text-sm font-bold text-gray-800">
              AI Score: {service.aiScore}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
            <span className="text-sm font-semibold text-gray-800">
              {service.category}
            </span>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-green-500 bg-opacity-95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
            <span className="text-sm font-bold text-white flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              {formatPrice(service.price)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title and Provider */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <div className="flex items-center text-sm text-gray-600">
            <User className="w-4 h-4 mr-1" />
            <span>{service.providerName}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-2">
            {renderStars(service.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {service.rating} ({service.reviewCount} reviews)
          </span>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{service.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{service.deliveryTime}</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {service.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
              >
                {specialty}
              </span>
            ))}
            {service.specialties.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                +{service.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Request Quote Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onRequestQuote(service)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
        >
          Request Quote
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 