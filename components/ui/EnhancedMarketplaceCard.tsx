import React from 'react';
import EnhancedCard from './EnhancedCard';

export type MarketplaceCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  footer?: React.ReactNode;
};

export default function EnhancedMarketplaceCard({ title, subtitle, description, footer }: MarketplaceCardProps) {
  return (
    <EnhancedCard className="p-5">
      <div className="space-y-2">
        <div>
          <h3 className="text-base font-semibold leading-tight">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
        </div>
        {description && <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>}
        {footer && <div className="pt-2">{footer}</div>}
      </div>
    </EnhancedCard>
  );
}