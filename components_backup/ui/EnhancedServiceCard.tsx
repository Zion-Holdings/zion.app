import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle, 
  Zap, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  Clock,
  Shield,
  Rocket,
  Globe,
  Cpu,
  Atom,
  Target
} from 'lucide-react';

interface ServiceFeature {
  name: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ServiceBenefit {
  name: string;
  impact: string;
  icon?: React.ReactNode;
}

interface ServicePricing {
  starter: string;
  professional: string;
  enterprise: string;
  custom: string;
}

interface ServiceCardProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  type: string;
  pricing: ServicePricing;
  features: string[];
  benefits: string[];
  useCases: string[];
  marketSize: string;
  targetAudience: string;
  competitiveAdvantage: string;
  slug: string;
  featured?: boolean;
  priority?: 'high' | 'medium' | 'low';
  technology?: string[];
  compliance?: string[];
  onCardClick?: (service: any) => void;
}

const getCategoryIcon = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('ai') || categoryLower.includes('machine learning')) return Brain;
  if (categoryLower.includes('quantum')) return Atom;
  if (categoryLower.includes('security') || categoryLower.includes('cyber')) return Shield;
  if (categoryLower.includes('space')) return Rocket;
  if (categoryLower.includes('business')) return Target;
  if (categoryLower.includes('it') || categoryLower.includes('infrastructure')) return Cpu;
  if (categoryLower.includes('global') || categoryLower.includes('worldwide')) return Globe;
  return Star;
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'from-red-500 to-orange-500';
    case 'medium': return 'from-yellow-500 to-orange-500';
    case 'low': return 'from-green-500 to-teal-500';
    default: return 'from-cyan-500 to-purple-500';
  }
};

const getPriorityLabel = (priority: string) => {
  switch (priority) {
    case 'high': return 'High Priority';
    case 'medium': return 'Medium Priority';
    case 'low': return 'Low Priority';
    default: return 'Standard';
  }
};

const EnhancedServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  tagline,
  description,
  category,
  type,
  pricing,
  features,
  benefits,
  useCases,
  marketSize,
  targetAudience,
  competitiveAdvantage,
  slug,
  featured = false,
  priority = 'medium',
  technology = [],
  compliance = [],
  onCardClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const CategoryIcon = getCategoryIcon(category);
  const priorityColor = getPriorityColor(priority);
  const priorityLabel = getPriorityLabel(priority);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick({ id, name, slug, category, type });
    }
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = slug;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Priority Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`text-xs bg-gradient-to-r ${priorityColor} text-white px-3 py-1 rounded-full font-medium shadow-lg`}>
          {priorityLabel}
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full font-medium shadow-lg flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="relative z-10 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg`}>
            <CategoryIcon className="w-6 h-6 text-white" />
          </div>
          <div className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium">
            {type}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {name}
        </h3>
        
        <p className="text-sm text-cyan-400 font-medium mb-2">
          {tagline}
        </p>
        
        <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="relative z-10 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Users className="w-3 h-3 text-cyan-400" />
            <span className="truncate">{targetAudience.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <TrendingUp className="w-3 h-3 text-yellow-400" />
            <span className="truncate">{marketSize}</span>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="relative z-10 mb-6">
        <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          Key Features
        </h4>
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/70">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
          {features.length > 3 && (
            <div className="text-xs text-cyan-400">
              +{features.length - 3} more features
            </div>
          )}
        </div>
      </div>

      {/* Benefits Preview */}
      <div className="relative z-10 mb-6">
        <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          Key Benefits
        </h4>
        <div className="space-y-2">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/70">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
              <span className="truncate">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology & Compliance Tags */}
      {(technology.length > 0 || compliance.length > 0) && (
        <div className="relative z-10 mb-6">
          <div className="flex flex-wrap gap-2">
            {technology.slice(0, 3).map((tech, index) => (
              <span key={index} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
            {compliance.slice(0, 2).map((comp, index) => (
              <span key={index} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                {comp}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Pricing & CTA */}
      <div className="relative z-10 mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-cyan-400">
            {pricing.starter}
          </div>
          <div className="text-xs text-white/50">
            Starting from
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handleLearnMore}
            className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 font-medium rounded-xl transition-all duration-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              Learn More
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button
            onClick={handleLearnMore}
            className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Expandable Details */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t border-white/10"
          >
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-white/90 mb-2">Use Cases</h5>
                <div className="flex flex-wrap gap-2">
                  {useCases.slice(0, 4).map((useCase, index) => (
                    <span key={index} className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-semibold text-white/90 mb-2">Competitive Advantage</h5>
                <p className="text-sm text-white/70">{competitiveAdvantage}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand/Collapse Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowDetails(!showDetails);
        }}
        className="absolute bottom-4 right-4 text-xs text-white/50 hover:text-white transition-colors duration-200"
      >
        {showDetails ? 'Show Less' : 'Show More'}
      </button>
    </motion.div>
  );
};

export default EnhancedServiceCard;