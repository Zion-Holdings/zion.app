import React from 'react';

interface PriceObject {
  monthly?: number;
  yearly?: number;
  currency?: string;
  trialDays?: number;
  setupTime?: string;
}

interface SafePriceRendererProps {
  price: string | PriceObject;
  period?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SafePriceRenderer: React.FC<SafePriceRendererProps> = ({ 
  price, 
  period, 
  className = "text-3xl font-bold text-white",
  size = 'lg'
}) => {
  const renderPrice = () => {
    if (typeof price === 'string') {
      return price;
    }
    
    if (price && typeof price === 'object') {
      if (price.monthly !== undefined) {
        return `$${price.monthly}/month`;
      }
      if (price.yearly !== undefined) {
        return `$${price.yearly}/year`;
      }
      if (price.currency && price.monthly) {
        return `${price.currency}${price.monthly}/month`;
      }
      return 'Contact for pricing';
    }
    
    return 'Contact for pricing';
  };

  const renderPeriod = () => {
    if (period) return period;
    if (typeof price === 'object' && price.monthly !== undefined) return '/month';
    if (typeof price === 'object' && price.yearly !== undefined) return '/year';
    return '/month';
  };

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`${sizeClasses[size]} font-bold text-white ${className}`}>
      {renderPrice()}
      <span className="text-slate-400 text-base ml-1">{renderPeriod()}</span>
    </div>
  );
};

export default SafePriceRenderer;