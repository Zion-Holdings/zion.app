import { ReactNode } from "react";

interface EnhancedMarketplaceCardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function EnhancedMarketplaceCard({ 
  children, 
  title, 
  description, 
  className = "bg-white rounded-lg shadow-md p-6" 
}: EnhancedMarketplaceCardProps) {
  return (
    <div className={className}>
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
}
