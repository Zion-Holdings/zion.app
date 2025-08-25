import React from 'react';
import { motion } from 'framer-motion';

// Base skeleton component with animation
const SkeletonBase: React.FC<{ className?: string; delay?: number }> = ({ 
  className = "", 
  delay = 0 
}) => (
  <motion.div
    className={`bg-gray-700/50 rounded animate-pulse ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
  />
);

// Hero section skeleton
export const HeroSkeleton: React.FC = () => (
  <div className="py-20 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center">
      {/* Title skeleton */}
      <div className="mb-6">
        <SkeletonBase className="h-16 w-3/4 mx-auto mb-4" />
        <SkeletonBase className="h-16 w-2/3 mx-auto" />
      </div>
      
      {/* Description skeleton */}
      <SkeletonBase className="h-8 w-4/5 mx-auto mb-8" />
      
      {/* Buttons skeleton */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <SkeletonBase className="h-14 w-48 mx-auto sm:mx-0" />
        <SkeletonBase className="h-14 w-48 mx-auto sm:mx-0" />
      </div>
      
      {/* Stats skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <SkeletonBase className="w-16 h-16 mx-auto mb-4 rounded-full" delay={i * 0.1} />
            <SkeletonBase className="h-8 w-20 mx-auto mb-2" delay={i * 0.1 + 0.1} />
            <SkeletonBase className="h-6 w-24 mx-auto" delay={i * 0.1 + 0.2} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Services section skeleton
export const ServicesSkeleton: React.FC = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-16">
        <SkeletonBase className="h-12 w-96 mx-auto mb-6" />
        <SkeletonBase className="h-6 w-2/3 mx-auto" />
      </div>
      
      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
            <SkeletonBase className="w-16 h-16 mx-auto mb-4 rounded-full" delay={i * 0.1} />
            <SkeletonBase className="h-6 w-3/4 mx-auto mb-3" delay={i * 0.1 + 0.1} />
            <SkeletonBase className="h-4 w-full" delay={i * 0.1 + 0.2} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Technologies section skeleton
export const TechnologiesSkeleton: React.FC = () => (
  <div className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
    <div className="max-w-7xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-16">
        <SkeletonBase className="h-12 w-80 mx-auto mb-6" />
        <SkeletonBase className="h-6 w-1/2 mx-auto" />
      </div>
      
      {/* Technologies grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="text-center">
            <SkeletonBase className="w-16 h-16 mx-auto mb-3 rounded-xl" delay={i * 0.05} />
            <SkeletonBase className="h-4 w-20 mx-auto" delay={i * 0.05 + 0.1} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// CTA section skeleton
export const CTASkeleton: React.FC = () => (
  <div className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
    <div className="max-w-4xl mx-auto text-center">
      <SkeletonBase className="h-12 w-96 mx-auto mb-6" />
      <SkeletonBase className="h-6 w-2/3 mx-auto mb-8" />
      <SkeletonBase className="h-14 w-64 mx-auto" />
    </div>
  </div>
);

// Footer skeleton
export const FooterSkeleton: React.FC = () => (
  <footer className="bg-black py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <SkeletonBase className="h-6 w-32 mb-4" delay={i * 0.1} />
            <div className="space-y-2">
              {[...Array(4)].map((_, j) => (
                <SkeletonBase key={j} className="h-4 w-24" delay={i * 0.1 + j * 0.05} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8">
        <SkeletonBase className="h-4 w-64 mx-auto" />
      </div>
    </div>
  </footer>
);

// Page skeleton wrapper
export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen">
    <HeroSkeleton />
    <ServicesSkeleton />
    <TechnologiesSkeleton />
    <CTASkeleton />
    <FooterSkeleton />
  </div>
);

// Card skeleton for general use
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 ${className}`}>
    <SkeletonBase className="w-16 h-16 mx-auto mb-4 rounded-full" />
    <SkeletonBase className="h-6 w-3/4 mx-auto mb-3" />
    <SkeletonBase className="h-4 w-full mb-2" />
    <SkeletonBase className="h-4 w-2/3" />
  </div>
);

// Table skeleton
export const TableSkeleton: React.FC = () => (
  <div className="overflow-hidden rounded-xl border border-gray-700/50">
    <div className="bg-gray-800/50 px-6 py-4">
      <SkeletonBase className="h-6 w-48" />
    </div>
    <div className="divide-y divide-gray-700/50">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="px-6 py-4">
          <div className="flex items-center justify-between">
            <SkeletonBase className="h-5 w-32" delay={i * 0.1} />
            <SkeletonBase className="h-5 w-24" delay={i * 0.1 + 0.1} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Form skeleton
export const FormSkeleton: React.FC = () => (
  <div className="space-y-6">
    {[...Array(4)].map((_, i) => (
      <div key={i}>
        <SkeletonBase className="h-4 w-24 mb-2" delay={i * 0.1} />
        <SkeletonBase className="h-12 w-full rounded-lg" delay={i * 0.1 + 0.1} />
      </div>
    ))}
    <SkeletonBase className="h-12 w-32 rounded-lg" />
  </div>
);