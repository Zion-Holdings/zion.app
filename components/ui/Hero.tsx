import React from 'react';
import { Button } from './Button';
import { cn } from '../../lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    color?: string;
  }>;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  stats,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-24", className)}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {subtitle && (
            <p className="text-lg text-blue-600 font-medium mb-4">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {primaryAction && (
              <Button
                asChild
                size="lg"
                variant="gradient"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <a href={primaryAction.href}>
                  {primaryAction.label}
                </a>
              </Button>
            )}
            
            {secondaryAction && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <a href={secondaryAction.href}>
                  {secondaryAction.label}
                </a>
              </Button>
            )}
          </div>
          
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={cn(
                    "text-3xl md:text-4xl font-bold mb-2",
                    stat.color || "text-gray-900"
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}