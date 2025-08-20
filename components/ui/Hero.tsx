import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  stats,
  className = ''
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-8">
            <span className="mr-2">🚀</span>
            {subtitle}
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          {/* Description */}
          {description && (
            <p className="mx-auto max-w-3xl text-lg text-gray-600 mb-12 leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Stats */}
          {stats && (
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-200/50">
                  <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && (
              <Button href={primaryAction.href} size="lg">
                {primaryAction.text}
              </Button>
            )}
            {secondaryAction && (
              <Button href={secondaryAction.href} variant="outline" size="lg">
                {secondaryAction.text}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
        </div>
      </div>
    </section>
  );
}