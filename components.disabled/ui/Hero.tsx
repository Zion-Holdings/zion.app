import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  background?: 'gradient' | 'solid' | 'image';
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  background = 'gradient',
  className = '',
}: HeroProps) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100',
    solid: 'bg-white',
    image: 'bg-gradient-to-br from-gray-900/90 via-blue-900/90 to-indigo-900/90 text-white',
  };

  const classes = `py-20 sm:py-24 lg:py-32 ${backgroundClasses[background]} ${className}`;

  return (
    <section className={classes}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl text-blue-600 font-medium mb-4">
              {subtitle}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {/* Stats */}
          {stats && (
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-200/50 shadow-sm"
                >
                  <span className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </span>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button href={primaryCTA.href} size="lg">
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}