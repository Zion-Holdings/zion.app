import React from 'react';
import Button from './Button';

interface CTAProps {
  title: string;
  description?: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = ''
}: CTAProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href={primaryAction.href} 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              {primaryAction.text}
            </Button>
            {secondaryAction && (
              <Button 
                href={secondaryAction.href} 
                variant="ghost" 
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-20 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
        </div>
      </div>
    </section>
  );
}