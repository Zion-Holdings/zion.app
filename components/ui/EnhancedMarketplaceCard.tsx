import React from 'react';
import Image from 'next/image';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
  image?: string;
}

export default function EnhancedMarketplaceCard({ title, description, price, image }: EnhancedMarketplaceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="relative w-full h-48">
          <Image src={image} alt={title} layout="fill" objectFit="cover" sizes="100vw" unoptimized />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {price && (
          <div className="text-xl font-bold text-blue-600">{price}</div>
        )}
      </div>
    </div>
  );
}
