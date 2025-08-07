import React from 'react';

interface MarketplaceCardProps {
  title: string;
  description: string;
  price: string;
}

const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({ title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-xl font-bold text-blue-600">{price}</div>
    </div>
  );
};

export default EnhancedMarketplaceCard;